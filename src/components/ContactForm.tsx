import { useState, FormEvent } from 'react'
import { CheckCircle2, Loader2 } from 'lucide-react'

interface FormState {
  name: string
  company: string
  email: string
  phone: string
  projectType: string
  location: string
  budget: string
  description: string
}

const initialState: FormState = {
  name: '',
  company: '',
  email: '',
  phone: '',
  projectType: '',
  location: '',
  budget: '',
  description: '',
}

const projectTypes = ['Residential', 'Commercial', 'Industrial', 'Infrastructure', 'Hospitality', 'Renovation', 'Other']
const budgetRanges = ['Under $500K', '$500K – $2M', '$2M – $10M', '$10M – $50M', '$50M+']

type Errors = Partial<Record<keyof FormState, string>>

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState)
  const [errors, setErrors] = useState<Errors>({})
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle')

  const update = (field: keyof FormState, value: string) => {
    setForm((f) => ({ ...f, [field]: value }))
    if (errors[field]) setErrors((e) => ({ ...e, [field]: undefined }))
  }

  const validate = (): boolean => {
    const next: Errors = {}
    if (!form.name.trim()) next.name = 'Please enter your name.'
    if (!form.email.trim()) next.email = 'Please enter your email.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'Enter a valid email address.'
    if (!form.projectType) next.projectType = 'Select a project type.'
    if (!form.description.trim()) next.description = 'Tell us a little about the project.'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    setStatus('submitting')
    // No backend is wired up for this demo — simulate a network round trip.
    setTimeout(() => {
      setStatus('success')
    }, 1100)
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col items-start gap-4 border border-charcoal/15 bg-paper px-8 py-14 text-left animate-fade-in">
        <CheckCircle2 className="h-10 w-10 text-oxide" strokeWidth={1.25} />
        <h3 className="font-display text-2xl text-charcoal sm:text-3xl">Inquiry received.</h3>
        <p className="max-w-sm text-sm leading-relaxed text-concrete">
          Thank you, {form.name.split(' ')[0] || 'there'}. A member of our team will review your project
          and respond within one business day.
        </p>
        <button
          onClick={() => {
            setForm(initialState)
            setStatus('idle')
          }}
          className="btn-outline mt-2"
        >
          Submit Another Inquiry
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <Field label="Full Name" error={errors.name} required>
          <input
            type="text"
            value={form.name}
            onChange={(e) => update('name', e.target.value)}
            className={inputClass(!!errors.name)}
            autoComplete="name"
          />
        </Field>
        <Field label="Company">
          <input
            type="text"
            value={form.company}
            onChange={(e) => update('company', e.target.value)}
            className={inputClass(false)}
            autoComplete="organization"
          />
        </Field>
        <Field label="Email" error={errors.email} required>
          <input
            type="email"
            value={form.email}
            onChange={(e) => update('email', e.target.value)}
            className={inputClass(!!errors.email)}
            autoComplete="email"
          />
        </Field>
        <Field label="Phone">
          <input
            type="tel"
            value={form.phone}
            onChange={(e) => update('phone', e.target.value)}
            className={inputClass(false)}
            autoComplete="tel"
          />
        </Field>
        <Field label="Project Type" error={errors.projectType} required>
          <select
            value={form.projectType}
            onChange={(e) => update('projectType', e.target.value)}
            className={inputClass(!!errors.projectType)}
          >
            <option value="">Select type</option>
            {projectTypes.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </Field>
        <Field label="Project Location">
          <input
            type="text"
            value={form.location}
            onChange={(e) => update('location', e.target.value)}
            className={inputClass(false)}
          />
        </Field>
        <Field label="Estimated Budget" className="sm:col-span-2">
          <select
            value={form.budget}
            onChange={(e) => update('budget', e.target.value)}
            className={inputClass(false)}
          >
            <option value="">Select range</option>
            {budgetRanges.map((b) => (
              <option key={b} value={b}>{b}</option>
            ))}
          </select>
        </Field>
        <Field label="Project Description" error={errors.description} required className="sm:col-span-2">
          <textarea
            value={form.description}
            onChange={(e) => update('description', e.target.value)}
            rows={5}
            className={inputClass(!!errors.description)}
            placeholder="Tell us what you're building — scope, timeline, and any specific requirements."
          />
        </Field>
      </div>

      <button type="submit" disabled={status === 'submitting'} className="btn-primary mt-2 w-fit disabled:opacity-60">
        {status === 'submitting' ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" strokeWidth={2} />
            Submitting…
          </>
        ) : (
          'Submit Project Inquiry'
        )}
      </button>
    </form>
  )
}

function inputClass(hasError: boolean) {
  return `w-full border-b bg-transparent py-2.5 text-sm text-charcoal placeholder:text-concrete/70 focus:outline-none ${
    hasError ? 'border-oxide' : 'border-charcoal/20 focus:border-charcoal'
  }`
}

function Field({
  label,
  error,
  required,
  className = '',
  children,
}: {
  label: string
  error?: string
  required?: boolean
  className?: string
  children: React.ReactNode
}) {
  return (
    <label className={`flex flex-col gap-2 ${className}`}>
      <span className="font-mono text-[11px] uppercase tracking-widest2 text-concrete">
        {label}
        {required && <span className="text-oxide"> *</span>}
      </span>
      {children}
      {error && <span className="text-xs text-oxide">{error}</span>}
    </label>
  )
}
