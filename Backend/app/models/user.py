from sqlalchemy import Column,Integer,String
from ..database import Base

class User(Base):
    __tablename__="User"
    User_id=Column(Integer,primary_key=True,index=True)
    User_email=Column(String,unique=True)
    User_password=Column(String)