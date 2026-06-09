# ATLAS_OSINT Architecture

## System Overview

ATLAS_OSINT is a distributed OSINT platform designed for comprehensive data collection, search, and analysis from multiple sources.

## Architecture Layers

### 1. Presentation Layer (Frontend)
- **Technology**: Electron + React + TypeScript
- **Components**:
  - Dashboard
  - Collector Manager UI
  - Search Interface
  - Analysis & Visualization Panel

### 2. API Layer (Backend)
- **Technology**: Python + FastAPI
- **Endpoints**:
  - `/api/collectors` - Data collection management
  - `/api/search` - Query engine
  - `/api/analyzer` - Analysis and visualization
  - `/api/health` - Health checks

### 3. Data Collection Layer
- **17+ Collectors**:
  - Social Media (Twitter, Instagram, TikTok, Reddit, YouTube, Telegram)
  - People Search (LinkedIn, GitHub, Email lookup)
  - Domain Intelligence (WHOIS, DNS, SSL)
  - Security (HaveIBeenPwned, Exposed databases)
  - Infrastructure (Shodan, Censys, VirusTotal)
  - Geography & Business (Google Maps, Companies)
  - News & Monitoring (RSS, News aggregation)

### 4. Search Engine Layer
- Full-text indexing
- Advanced filtering
- Entity search
- Relationship discovery

### 5. Analysis Layer
- Statistical analysis
- Relationship mapping
- Timeline construction
- Graph visualization
- Data export (JSON, CSV, PDF)

### 6. Database Layer
- **Primary**: SQLite (for desktop deployment)
- **Optional**: PostgreSQL (for server deployment)
- **Schema**:
  - Entities
  - Data Sources
  - Relationships
  - Events
  - Search Index

## Data Flow

```
┌────────────────────────────────┐
│  User Interface     │
│   (Electron App)    │
└────────────────────┬────────────┘
           │
           ▼
┌────────────────────────────────┐
│   API Gateway       │
│   (FastAPI)         │
└────────────────────┬────────────┘
           │
     ┌─────┼─────┐
     ▼     ▼     ▼
┌────────────────────────────────────────────────────────────┐
│ Collectors │ Search │ Analyzer    │
└────────────────────┬────────────────────────────────────────┘
             │         │
             ▼         ▼
      ┌──────────────────────────────┐
      │  Database        │
      │  (SQLite)        │
      └──────────────────────────────┘
```

## Deployment Modes

### Desktop (Default)
- Electron app with bundled Python backend
- SQLite database
- Self-contained executable

### Server
- Docker containers
- PostgreSQL database
- Web interface
- API-only mode

## Security Considerations

1. **API Keys**: Store in `config/secrets.env` (not in git)
2. **Data Privacy**: Local storage only (desktop mode)
3. **Rate Limiting**: Built-in API throttling
4. **CORS**: Restricted to localhost in development
5. **SSL/TLS**: Recommended for server deployments

## Performance Optimization

1. **Caching**: Redis integration for frequently accessed data
2. **Indexing**: Full-text search optimization
3. **Batch Processing**: Background task queue for large collections
4. **Connection Pooling**: Database connection reuse
