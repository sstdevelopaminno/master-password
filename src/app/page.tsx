export default function Home() {
  const githubRepoUrl = "https://github.com/sstdevelopaminno/master-password";
  const vercelUrl =
    process.env.NEXT_PUBLIC_SITE_URL ??
    "https://master-password-git-main-sstdevelopaminnos-projects.vercel.app";
  const supabaseDashboardUrl =
    "https://supabase.com/dashboard/project/nchfzhfpprnfbjjyiqpc";
  const supabaseUrl =
    process.env.NEXT_PUBLIC_SUPABASE_URL ??
    "https://nchfzhfpprnfbjjyiqpc.supabase.co";
  const hasSupabaseAnonKey = Boolean(
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  );

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_#fef3c7,_#fff7ed_42%,_#ffffff_75%)] px-6 py-16 text-slate-900">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-8">
        <section className="rounded-[2rem] border border-amber-200/80 bg-white/85 p-8 shadow-[0_30px_80px_-40px_rgba(180,83,9,0.45)] backdrop-blur">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">
            Master Password
          </p>
          <h1 className="mt-4 max-w-2xl text-4xl font-semibold tracking-tight text-balance sm:text-6xl">
            Integration base for GitHub, Vercel, and Supabase.
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg">
            This workspace is prepared as a Next.js app for Vercel deployment
            and wired to the new repository and Supabase project reference you
            provided.
          </p>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          <article className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              GitHub
            </p>
            <p className="mt-3 text-xl font-semibold">Connected remote target</p>
            <a
              className="mt-4 block break-all text-sm text-sky-700 underline-offset-4 hover:underline"
              href={githubRepoUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {githubRepoUrl}
            </a>
          </article>

          <article className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Vercel
            </p>
            <p className="mt-3 text-xl font-semibold">Deployment target</p>
            <a
              className="mt-4 block break-all text-sm text-sky-700 underline-offset-4 hover:underline"
              href={vercelUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {vercelUrl}
            </a>
          </article>

          <article className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Supabase
            </p>
            <p className="mt-3 text-xl font-semibold">Project reference ready</p>
            <a
              className="mt-4 block break-all text-sm text-sky-700 underline-offset-4 hover:underline"
              href={supabaseDashboardUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {supabaseDashboardUrl}
            </a>
          </article>
        </section>

        <section className="grid gap-4 rounded-[2rem] border border-slate-200 bg-slate-950 p-8 text-white md:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">
              Current status
            </p>
            <div className="mt-5 space-y-4 text-sm leading-7 text-slate-300">
              <p>Repository path is ready to sync with the new GitHub remote.</p>
              <p>Vercel project can be linked with the slug <strong>master-password</strong>.</p>
              <p>
                Supabase URL is configured as <strong>{supabaseUrl}</strong>.
              </p>
              <p>
                Supabase anon key status:{" "}
                <strong>{hasSupabaseAnonKey ? "configured" : "missing"}</strong>
              </p>
            </div>
          </div>

          <div className="rounded-[1.5rem] bg-white/8 p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-200">
              Required secret
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              To complete the Supabase runtime connection, set
              <code className="mx-1 rounded bg-white/10 px-2 py-1 text-xs text-white">
                NEXT_PUBLIC_SUPABASE_ANON_KEY
              </code>
              in local env and in Vercel project env variables.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
