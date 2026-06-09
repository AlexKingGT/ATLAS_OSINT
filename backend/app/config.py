"""Application Configuration"""

import os
from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    # App
    APP_NAME: str = "ATLAS_OSINT"
    DEBUG: bool = os.getenv("DEBUG", "True") == "True"
    SECRET_KEY: str = os.getenv("SECRET_KEY", "your-secret-key-change-in-production")
    
    # Database
    DATABASE_URL: str = os.getenv("DATABASE_URL", "sqlite:///./atlas_osint.db")
    
    # API Keys (load from config/secrets.env)
    TWITTER_API_KEY: str = os.getenv("TWITTER_API_KEY", "")
    TWITTER_API_SECRET: str = os.getenv("TWITTER_API_SECRET", "")
    TWITTER_BEARER_TOKEN: str = os.getenv("TWITTER_BEARER_TOKEN", "")
    
    INSTAGRAM_ACCESS_TOKEN: str = os.getenv("INSTAGRAM_ACCESS_TOKEN", "")
    
    SHODAN_API_KEY: str = os.getenv("SHODAN_API_KEY", "")
    VIRUSTOTAL_API_KEY: str = os.getenv("VIRUSTOTAL_API_KEY", "")
    CENSYS_API_ID: str = os.getenv("CENSYS_API_ID", "")
    CENSYS_API_SECRET: str = os.getenv("CENSYS_API_SECRET", "")
    
    HUNTER_API_KEY: str = os.getenv("HUNTER_API_KEY", "")
    CLEARBIT_API_KEY: str = os.getenv("CLEARBIT_API_KEY", "")
    
    GOOGLE_MAPS_API_KEY: str = os.getenv("GOOGLE_MAPS_API_KEY", "")
    
    REDDIT_CLIENT_ID: str = os.getenv("REDDIT_CLIENT_ID", "")
    REDDIT_CLIENT_SECRET: str = os.getenv("REDDIT_CLIENT_SECRET", "")
    
    # Server
    HOST: str = "0.0.0.0"
    PORT: int = 8000
    
    # Rate Limiting
    RATE_LIMIT: str = "100/minute"
    
    class Config:
        env_file = "config/secrets.env"
        case_sensitive = True

settings = Settings()