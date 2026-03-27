from pydantic import BaseModel,EmailStr

class User(BaseModel):
    email: EmailStr
    password: str

    class Config:
        from_attributes = True
    