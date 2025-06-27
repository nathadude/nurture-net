import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

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

  useEffect(() => { createUser(); }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Vocabulary Gating Test</h1>
      <p><strong>User ID:</strong> {userId}</p>

      <div style={{ marginBottom: '20px' }}>
        <input
          value={word}
          onChange={e => setWord(e.target.value)}
          placeholder="Teach a new word"
        />
        <button onClick={teachWord}>Teach Word</button>
        <p>{message}</p>
      </div>

      <div>
        <h2>Learned Words</h2>
        <ul>
          {vocab.map((w, i) => <li key={i}>{w}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default App
