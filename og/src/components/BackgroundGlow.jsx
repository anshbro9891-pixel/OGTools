export default function BackgroundGlow() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 overflow-hidden">
      <div className="absolute left-[-8rem] top-20 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(0,255,178,0.38),transparent_68%)] blur-3xl animate-float-slow" />
      <div className="absolute right-[-5rem] top-44 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(0,200,150,0.28),transparent_70%)] blur-3xl animate-float-delay" />
      <div className="absolute bottom-[-6rem] left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(71,135,255,0.18),transparent_72%)] blur-3xl animate-pulse-soft" />
      <div className="absolute inset-x-0 top-0 h-[32rem] subtle-grid opacity-40" />
    </div>
  );
}
