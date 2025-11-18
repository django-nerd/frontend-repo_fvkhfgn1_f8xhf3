import { useEffect, useState } from 'react';

const API = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';

export default function Openings() {
  const [openings, setOpenings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchOpenings() {
      try {
        const res = await fetch(`${API}/openings`);
        const data = await res.json();
        setOpenings(data);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    }
    fetchOpenings();
  }, []);

  return (
    <section id="openings" className="py-16 bg-sky-950 text-sky-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold">Openings</h2>
        <p className="text-sky-200/80 mt-2">Understand the ideas and move orders behind classic openings.</p>

        {loading ? (
          <p className="mt-8 text-sky-200">Loading...</p>
        ) : (
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {openings.map((o) => (
              <article key={o._id} className="rounded-xl bg-sky-900/60 border border-white/10 p-5 hover:bg-sky-900/80 transition">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold">{o.name}</h3>
                  {o.eco && <span className="text-xs px-2 py-1 rounded bg-sky-700/70 border border-white/10">{o.eco}</span>}
                </div>
                <p className="mt-2 text-sky-200/90">{o.description}</p>
                {o.moves?.length > 0 && (
                  <div className="mt-3 text-sky-100/90 text-sm">
                    <span className="font-semibold">Moves:</span> {o.moves.join(' ')}
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
