import { useHealth } from '../hooks/useHealth'

export default function HomePage() {
  const { data, isLoading, error } = useHealth()

  return (
    <main className="flex min-h-screen items-center justify-center bg-base-100 px-6 text-base-content">
      <section className="w-full max-w-3xl rounded-3xl border border-base-300 bg-base-100 p-8 shadow-xl shadow-base-300/30 sm:p-12">
        <div className="mb-6 flex items-center justify-center gap-2 text-xs uppercase tracking-[0.28em] text-neutral">
          <span className="badge badge-neutral badge-sm">live</span>
          Temporal Event Orchestration
        </div>

        <h1 className="text-5xl font-black tracking-tight text-neutral-content sm:text-7xl">
          Chronos
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-base-content/80 sm:text-xl">
          Stateful workflows that understand events, decide what happens next, and
          act over time.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <button className="btn btn-neutral">Explore flows</button>
          <button className="btn btn-outline btn-neutral">View timeline</button>
        </div>

        <div className="mt-8 rounded-2xl border border-base-300 bg-base-200/80 p-4 text-sm text-base-content/80">
          {isLoading && 'Checking API health...'}
          {error && 'API unavailable'}
          {data && <span>API status: {data.status}</span>}
        </div>
      </section>
    </main>
  )
}
