export default function BlogCard({ post }) {
  return (
    <article
      id={post.slug}
      className="panel panel-hover glass-outline h-full overflow-hidden rounded-[28px] p-6"
    >
      <div className="flex items-center justify-between gap-3">
        <span
          className={`rounded-full px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] ${
            post.category === 'Instagram'
              ? 'bg-pink-500/10 text-pink-200'
              : 'bg-cyan-500/10 text-cyan-200'
          }`}
        >
          {post.category}
        </span>
        <span className="text-xs uppercase tracking-[0.18em] text-slate-500">{post.readingTime}</span>
      </div>

      <h3 className="mt-5 text-2xl font-semibold tracking-tight text-white">{post.title}</h3>
      <p className="mt-4 text-sm leading-7 text-slate-400">{post.excerpt}</p>

      <div className="mt-6 flex items-center justify-between text-sm text-slate-500">
        <span>{post.publishedAt}</span>
        <span>SEO Brief</span>
      </div>
    </article>
  );
}
