"""API Routes"""

from fastapi import APIRouter

# Import routers
from app.api.health import router as health_router
from app.api.collectors import router as collectors_router
from app.api.search import router as search_router
from app.api.analyzer import router as analyzer_router

__all__ = [
    "health_router",
    "collectors_router",
    "search_router",
    "analyzer_router"
]