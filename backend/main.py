from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/available_words/{user_id}")
def available_words(user_id: str):
    user = users_db.get(user_id)
    if not user:
        raise HTTPException(status_code=404, detail="User not found")

    words = []
    for tier in range(1, user.word_tiers_unlocked + 1):
        words += word_packs[tier]

    response = [
        {
            "word": word,
            "taught": word in user.taught_words
        } for word in words
    ]
    return response
