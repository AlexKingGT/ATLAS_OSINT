"""ATLAS_OSINT Backend Entry Point"""

import logging
from contextlib import asynccontextmanager
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.middleware.trustedhost import TrustedHostMiddleware
from slowapi import Limiter
from slowapi.util import get_remote_address
import uvicorn

from app.api import (
    collectors_router,
    search_router,
    analyzer_router,
    health_router
)
from app.api.test import router as test_router
from app.database.connection import init_db
from app.config import settings

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

# Rate limiter
limiter = Limiter(key_func=get_remote_address)

@asynccontextmanager
async def lifespan(app: FastAPI):
    # Startup
    logger.info("🚀 ATLAS_OSINT Backend starting...")
    init_db()
    logger.info("✅ Database initialized")
    yield
    # Shutdown
    logger.info("🛑 ATLAS_OSINT Backend shutting down...")

app = FastAPI(
    title="ATLAS_OSINT API",
    description="Open Source Intelligence Platform",
    version="1.0.0",
    docs_url="/api/docs",
    openapi_url="/api/openapi.json",
    lifespan=lifespan
)

# Middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.add_middleware(
    TrustedHostMiddleware,
    allowed_hosts=["localhost", "127.0.0.1"]
)

app.state.limiter = limiter

# Routes
app.include_router(health_router, prefix="/api", tags=["Health"])
app.include_router(collectors_router, prefix="/api/collectors", tags=["Collectors"])
app.include_router(search_router, prefix="/api/search", tags=["Search"])
app.include_router(analyzer_router, prefix="/api/analyzer", tags=["Analyzer"])
app.include_router(test_router, prefix="/api/test", tags=["Test Data (Demo)"])

@app.get("/")
async def root():
    return {
        "status": "ATLAS_OSINT Backend Running",
        "version": "1.0.0",
        "docs": "/api/docs",
        "test_endpoint": "/api/test/info"
    }

if __name__ == "__main__":
    uvicorn.run(
        "app.main:app",
        host="0.0.0.0",
        port=8000,
        reload=settings.DEBUG,
        log_level="info"
    )
