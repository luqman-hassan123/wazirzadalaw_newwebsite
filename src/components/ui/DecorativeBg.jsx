export default function DecorativeBg({ variant = 'hero' }) {
  if (variant === 'hero') {
    return (
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-32 top-0 h-[500px] w-[500px] rounded-full bg-brand-gold/10 blur-3xl" />
        <div className="absolute -left-32 bottom-0 h-[400px] w-[400px] rounded-full bg-brand-navy-light/60 blur-3xl" />
      </div>
    )
  }

  if (variant === 'light') {
    return (
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-brand-gold/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-48 w-48 rounded-full bg-brand-navy/5 blur-3xl" />
      </div>
    )
  }

  return null
}
