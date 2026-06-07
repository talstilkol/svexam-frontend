import { useEffect, useState } from 'react';
import axios from 'axios';

// בדיקת חיבור פרונט↔בק בלבד (מותר בהכנה). אין כאן לוגיקת מבחן.
export default function App() {
  const [health, setHealth] = useState('checking…');

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/api/health`)
      .then((res) => setHealth(res.data?.ok ? 'connected ✅' : 'unexpected response'))
      .catch(() => setHealth('not reachable ❌'));
  }, []);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-950 grid place-items-center p-6">
      <div className="text-center">
        <h1 className="text-4xl font-black">svExam</h1>
        <p className="mt-3 text-sm text-slate-500">Backend: {health}</p>
      </div>
    </main>
  );
}
