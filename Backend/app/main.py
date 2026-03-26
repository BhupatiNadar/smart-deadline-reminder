from fastapi import FastAPI
from database import Base,engine

app=FastAPI()

@app.get("/")
def home():
    return {"message":"Hello World"}