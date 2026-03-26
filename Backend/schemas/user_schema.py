from pydantic import BaseModel ,EmailStr

class User(BaseModel):
    Email:EmailStr
    passward:str
    