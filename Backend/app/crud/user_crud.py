from sqlalchemy.orm import Session
from fastapi import HTTPException
from app.models.user import User as UserModel
from app.schemas.user_schema import User

def Create_User(db: Session, user: User):

    existing_user = db.query(UserModel).filter(
        UserModel.User_email == user.email
    ).first()

    if existing_user:
        raise HTTPException(
            status_code=400,
            detail="Email already registered"
        )

    db_user = UserModel(
        User_email=user.email,
        User_password=user.password
    )

    db.add(db_user)
    db.commit()
    db.refresh(db_user)

    return {
        "Signup":True
    }
    
def Search_user(db: Session, user: User):

    existing_user = db.query(UserModel).filter(
        UserModel.User_email == user.email
    ).first()

    if not existing_user:
        return {"User_found": False}

    if existing_user.User_password == user.password:
        return {"User_found": True}

    return {"User_found": False}