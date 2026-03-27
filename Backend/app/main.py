from fastapi import FastAPI,Depends
from .database import Base,engine,SessionLocal
from sqlalchemy.orm import Session
from .crud.user_crud import Create_User 
from .schemas.user_schema import User

Base.metadata.create_all(bind=engine)

app=FastAPI()

def get_db():
    db=SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.get("/")
def home():
    return {"message":"Hello World"}

@app.post("/signup",response_model=User)
def New_User(user: User, db: Session = Depends(get_db)):
    return Create_User(db, user)