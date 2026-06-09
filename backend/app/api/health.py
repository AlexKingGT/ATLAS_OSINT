"""Health Check Endpoints"""

from fastapi import APIRouter
from datetime import datetime

router = APIRouter()

@router.get("/health")
async def health_check():
    """Check API health status"""
    return {
        "status": "healthy",
        "timestamp": datetime.utcnow().isoformat(),
        "service": "ATLAS_OSINT Backend"
    }

@router.get("/status")
async def status():
    """Get detailed status"""
    return {
        "status": "operational",
        "version": "1.0.0",
        "timestamp": datetime.utcnow().isoformat(),
        "services": {
            "collectors": "active",
            "search_engine": "active",
            "analyzer": "active",
            "database": "connected"
        }
    }