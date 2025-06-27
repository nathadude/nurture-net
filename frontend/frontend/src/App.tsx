import { useState, useEffect } from "react";

function App() {
  const [userId, setUserId] = useState("");
  const [word, setWord] = useState("");
  const [message, setMessage] = useState("");
  const [vocab, setVocab] = useState<string[]>([]);

  const createUser = async () => {
    const res = await fetch("http://localhost:8000/create_user", { method: "POST" });
    const data = await res.json();
    setUserId(data.user_id);
    fetchWords(data.user_id);
  };

  const teachWord = async () => {
    const res = await fetch("http://localhost:8000/teach_word", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user_id: userId, word }),
    });

    const data = await res.json();
    setMessage(data.message || data.detail);
    fetchWords(userId);
  };

  const fetchWords = async (uid: string) => {
    const res = await fetch(`http://localhost:8000/allowed_words/${uid}`);
    const data = await res.json();
    setVocab(data.allowed_words);
  };

  useEffect(() => {
    createUser();
  }, []);

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>👶 AI Language Baby</h1>
      <p><strong>User ID:</strong> {userId}</p>

      <div style={{ marginTop: '1rem' }}>
        <input
          value={word}
          onChange={e => setWord(e.target.value)}
          placeholder="Teach it a word..."
        />
        <button onClick={teachWord}>Teach Word</button>
        <p>{message}</p>
      </div>

      <div style={{ marginTop: '2rem' }}>
        <h2>🧠 Vocabulary Learned:</h2>
        <ul>
          {vocab.map((w, i) => <li key={i}>{w}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default App;
