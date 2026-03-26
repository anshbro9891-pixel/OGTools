import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <section className="section-shell pt-8 pb-8">
      <div className="panel glass-outline rounded-[36px] px-6 py-14 text-center sm:px-10">
        <span className="pill-chip">404</span>
        <h1 className="mt-6 text-5xl font-semibold tracking-tight text-white">
          This page drifted off the growth path
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-400">
          The route does not exist in this OGTools build. Head back to the home page or jump into the tool directories.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link to="/" className="btn-secondary">
            Go Home
          </Link>
          <Link to="/instagram-tools" className="btn-primary">
            Explore Tools
          </Link>
        </div>
      </div>
    </section>
  );
}
