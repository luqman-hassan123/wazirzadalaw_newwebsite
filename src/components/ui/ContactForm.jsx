import { useState } from 'react'
import { serviceOptions } from '../../data/navigation'
import Button from './Button'
import AnimatedSection from './AnimatedSection'

const initialForm = {
  name: '',
  phone: '',
  email: '',
  service: '',
  message: '',
}

export default function ContactForm() {
  const [form, setForm] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <AnimatedSection className="rounded-2xl border border-brand-gold/30 bg-brand-white p-10 text-center shadow-card">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full gradient-gold">
          <span className="text-2xl text-brand-navy-dark">✓</span>
        </div>
        <h3 className="font-serif text-2xl text-brand-navy">Thank you</h3>
        <p className="mt-4 text-brand-slate">
          Your enquiry has been received. We will contact you shortly.
        </p>
        <button
          type="button"
          onClick={() => {
            setSubmitted(false)
            setForm(initialForm)
          }}
          className="mt-6 text-sm font-bold uppercase tracking-wider text-brand-gold-dark underline transition-colors hover:text-brand-navy"
        >
          Send another enquiry
        </button>
      </AnimatedSection>
    )
  }

  const inputClass =
    'w-full rounded-lg border border-brand-cream-dark bg-brand-cream/50 px-4 py-3.5 text-sm text-brand-navy outline-none transition-all focus:border-brand-gold focus:bg-brand-white focus:ring-2 focus:ring-brand-gold/20'

  return (
    <AnimatedSection>
      <form
        onSubmit={handleSubmit}
        className="space-y-5 rounded-2xl border border-brand-cream-dark bg-brand-white p-8 shadow-card"
      >
        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-xs font-bold uppercase tracking-wider text-brand-slate"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={form.name}
              onChange={handleChange}
              className={inputClass}
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="mb-2 block text-xs font-bold uppercase tracking-wider text-brand-slate"
            >
              Phone / WhatsApp
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              value={form.phone}
              onChange={handleChange}
              className={inputClass}
            />
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-xs font-bold uppercase tracking-wider text-brand-slate"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              className={inputClass}
            />
          </div>
          <div>
            <label
              htmlFor="service"
              className="mb-2 block text-xs font-bold uppercase tracking-wider text-brand-slate"
            >
              Service
            </label>
            <select
              id="service"
              name="service"
              required
              value={form.service}
              onChange={handleChange}
              className={inputClass}
            >
              <option value="">Select a service</option>
              {serviceOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label
            htmlFor="message"
            className="mb-2 block text-xs font-bold uppercase tracking-wider text-brand-slate"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            required
            value={form.message}
            onChange={handleChange}
            className={`${inputClass} resize-y`}
          />
        </div>

        <Button type="submit" className="cursor-pointer">
          Send Enquiry
        </Button>
      </form>
    </AnimatedSection>
  )
}
