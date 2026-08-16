import { useEffect } from 'react'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import SectionHeading from '@/components/SectionHeading'
import ContactForm from '@/components/ContactForm'

const contactDetails = [
  { icon: Mail, label: 'Email', value: 'projects@novastructures.com' },
  { icon: Phone, label: 'Phone', value: '+1 (800) 555-0142' },
  { icon: MapPin, label: 'Office', value: '14 Ironworks Way, Lagos, Nigeria' },
  { icon: Clock, label: 'Business Hours', value: 'Mon – Fri, 8:00 – 18:00 WAT' },
]

export default function Contact() {
  useEffect(() => {
    document.title = 'Contact — NOVA STRUCTURES'
  }, [])

  return (
    <div className="pb-28 pt-36 sm:pt-40">
      <div className="container-nova">
        <SectionHeading
          eyebrow="Contact"
          title="Have a project in mind?"
          description="Tell us what you're building. We'll help you determine what's possible."
        />

        <div className="mt-16 grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

          <div className="lg:col-span-4 lg:col-start-9">
            <div className="flex flex-col gap-8">
              {contactDetails.map((item) => (
                <div key={item.label} className="flex gap-4">
                  <item.icon className="mt-0.5 h-5 w-5 shrink-0 text-oxide" strokeWidth={1.25} />
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-widest2 text-concrete">{item.label}</p>
                    <p className="mt-1 text-sm text-charcoal">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
