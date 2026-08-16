import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const variants = {
  primary:
    'gradient-gold text-brand-navy-dark border border-brand-gold-dark/30 hover:brightness-110 shadow-gold',
  outline:
    'bg-transparent text-brand-navy border-2 border-brand-navy hover:bg-brand-navy hover:text-brand-white',
  white:
    'bg-brand-white text-brand-navy border border-brand-white hover:bg-brand-cream shadow-card',
  ghost:
    'bg-brand-navy/20 text-brand-white border border-brand-gold/40 hover:bg-brand-gold/20 hover:border-brand-gold',
  navy:
    'bg-brand-navy text-brand-white border border-brand-navy hover:bg-brand-navy-light shadow-card',
}

export default function Button({
  children,
  to,
  href,
  variant = 'primary',
  className = '',
  external = false,
  showArrow = true,
  ...props
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-sm px-7 py-3.5 text-sm font-semibold tracking-wide uppercase transition-all duration-300 ${variants[variant]} ${className}`

  const arrow = showArrow ? <ArrowRight className="h-4 w-4" /> : null

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
        {arrow}
      </Link>
    )
  }

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        {...props}
      >
        {children}
        {arrow}
      </a>
    )
  }

  return (
    <button type={props.type || 'button'} className={classes} {...props}>
      {children}
      {arrow}
    </button>
  )
}
