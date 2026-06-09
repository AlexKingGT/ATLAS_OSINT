"""Database Models"""

from sqlalchemy import Column, Integer, String, Text, DateTime, JSON, Boolean, Float
from sqlalchemy.ext.declarative import declarative_base
from datetime import datetime

Base = declarative_base()

class Entity(Base):
    """Base entity model"""
    __tablename__ = "entities"
    
    id = Column(Integer, primary_key=True, index=True)
    uuid = Column(String(36), unique=True, index=True)
    entity_type = Column(String(50), index=True)  # person, domain, company, ip, etc.
    name = Column(String(255), index=True)
    value = Column(String(500), index=True)
    description = Column(Text)
    data = Column(JSON)  # Additional metadata
    confidence = Column(Float, default=1.0)  # Confidence level 0-1
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

class DataSource(Base):
    """Data source tracking"""
    __tablename__ = "data_sources"
    
    id = Column(Integer, primary_key=True, index=True)
    entity_id = Column(Integer, index=True)
    source = Column(String(100), index=True)  # twitter, linkedin, whois, etc.
    source_url = Column(Text)
    source_id = Column(String(255))  # ID in source system
    raw_data = Column(JSON)
    collected_at = Column(DateTime, default=datetime.utcnow)

class Relationship(Base):
    """Entity relationships"""
    __tablename__ = "relationships"
    
    id = Column(Integer, primary_key=True, index=True)
    entity_id_1 = Column(Integer, index=True)
    entity_id_2 = Column(Integer, index=True)
    relationship_type = Column(String(100))  # associated_with, mentioned_in, linked_to, etc.
    strength = Column(Float, default=1.0)  # 0-1 confidence
    evidence = Column(JSON)  # Supporting evidence
    created_at = Column(DateTime, default=datetime.utcnow)

class Event(Base):
    """Timeline events"""
    __tablename__ = "events"
    
    id = Column(Integer, primary_key=True, index=True)
    entity_id = Column(Integer, index=True)
    event_type = Column(String(100))
    title = Column(String(255))
    description = Column(Text)
    event_date = Column(DateTime)
    source = Column(String(100))
    data = Column(JSON)
    created_at = Column(DateTime, default=datetime.utcnow)

class SearchIndex(Base):
    """Search index for quick lookup"""
    __tablename__ = "search_index"
    
    id = Column(Integer, primary_key=True, index=True)
    entity_id = Column(Integer, index=True)
    search_text = Column(Text, index=True)
    keywords = Column(JSON)
    last_indexed = Column(DateTime, default=datetime.utcnow)