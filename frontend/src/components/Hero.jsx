import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-sky-900 via-sky-900 to-sky-950">
      <div className="absolute inset-0 opacity-60">
        <Spline scene="https://prod.spline.design/UGnf9D1Hp3OG8vSG/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center text-sky-50">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight drop-shadow-sm">Master Chess Openings and Tactics</h1>
        <p className="mt-4 text-lg sm:text-xl text-sky-100/90">A welcoming place to learn the ideas behind openings and sharpen your tactical vision — in a soft, calming blue theme.</p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <a href="#openings" className="px-5 py-3 rounded-lg bg-sky-400/90 hover:bg-sky-300 text-sky-950 font-semibold shadow">Explore Openings</a>
          <a href="#tactics" className="px-5 py-3 rounded-lg bg-sky-800/60 hover:bg-sky-700/70 text-sky-100 font-semibold border border-white/10">Try Tactics</a>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-sky-900/50 via-transparent to-sky-950" />
    </section>
  );
}
