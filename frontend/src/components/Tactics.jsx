import { useEffect, useState } from 'react';

const API = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';

export default function Tactics() {
  const [tactics, setTactics] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTactics() {
      try {
        const res = await fetch(`${API}/tactics`);
        const data = await res.json();
        setTactics(data);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    }
    fetchTactics();
  }, []);

  return (
    <section id="tactics" className="py-16 bg-sky-900 text-sky-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold">Tactics</h2>
        <p className="text-sky-200/80 mt-2">Learn tactical patterns with clear explanations.</p>

        {loading ? (
          <p className="mt-8 text-sky-200">Loading...</p>
        ) : (
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {tactics.map((t) => (
              <article key={t._id} className="rounded-xl bg-sky-800/50 border border-white/10 p-5 hover:bg-sky-800/70 transition">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold">{t.title}</h3>
                  {t.theme && <span className="text-xs px-2 py-1 rounded bg-sky-700/70 border border-white/10">{t.theme}</span>}
                </div>
                <p className="mt-2 text-sky-200/90">{t.explanation}</p>
                {t.solution_moves?.length > 0 && (
                  <div className="mt-3 text-sky-100/90 text-sm">
                    <span className="font-semibold">Solution:</span> {t.solution_moves.join(' ')}
                  </div>
                )}
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
