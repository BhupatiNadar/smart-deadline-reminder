from fastapi import FastAPI,Depends
from .database import Base,engine,SessionLocal
from sqlalchemy.orm import Session
from .crud.user_crud import Create_User ,Search_user
from .schemas.user_schema import User
from fastapi.middleware.cors import CORSMiddleware

Base.metadata.create_all(bind=engine)

app=FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],        
    allow_credentials=True,
    allow_methods=["*"],          
    allow_headers=["*"],          
)

def get_db():
    db=SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.get("/")
def home():
    return {"message":"Hello World"}

@app.post("/signup")
def New_User(user: User, db: Session = Depends(get_db)):
    return Create_User(db, user)

@app.post("/login")
def Search_our_user(user:User,db:Session=Depends(get_db)):
    return Search_user(db,user)