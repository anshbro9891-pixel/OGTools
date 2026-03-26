import { useState } from 'react';

const initialForm = {
  name: '',
  email: '',
  company: '',
  message: '',
};

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
    setForm(initialForm);
  }

  return (
    <form onSubmit={handleSubmit} className="panel glass-outline rounded-[32px] p-6 sm:p-8">
      <div className="mb-6">
        <span className="pill-chip">Contact Sales</span>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white">Let's launch something premium</h2>
        <p className="mt-3 text-sm leading-7 text-slate-400">
          Use this form for listings, sponsorships, creator partnerships, or editorial requests.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-sm text-slate-300">Name</span>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-brand-neon/50 focus:bg-white/10"
            placeholder="Your name"
            required
          />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm text-slate-300">Email</span>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-brand-neon/50 focus:bg-white/10"
            placeholder="you@company.com"
            required
          />
        </label>
      </div>

      <label className="mt-4 block">
        <span className="mb-2 block text-sm text-slate-300">Company</span>
        <input
          type="text"
          name="company"
          value={form.company}
          onChange={handleChange}
          className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-brand-neon/50 focus:bg-white/10"
          placeholder="OGTools Partner"
        />
      </label>

      <label className="mt-4 block">
        <span className="mb-2 block text-sm text-slate-300">Message</span>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows="6"
          className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-brand-neon/50 focus:bg-white/10"
          placeholder="Tell us what you want to launch, sponsor, or improve."
          required
        />
      </label>

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button type="submit" className="btn-primary">
          Send Message
        </button>
        <p className="text-sm text-slate-500">UI demo only. Connect your backend or form service next.</p>
      </div>

      {submitted ? (
        <div className="mt-6 rounded-2xl border border-brand-neon/20 bg-brand-neon/10 px-4 py-3 text-sm text-brand-neon">
          Thanks. Your inquiry has been staged in the UI and is ready for a real form integration.
        </div>
      ) : null}
    </form>
  );
}
