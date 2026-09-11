import type { ReactNode } from 'react'

type SectionProps = {
  id: string
  label: string
  children: ReactNode
  className?: string
}

export default function Section({ id, label, children, className = '' }: SectionProps) {
  return (
    <section id={id} className={`py-12 md:py-16 ${className}`}>
      <p className="section-label mb-6">// {label}</p>
      {children}
    </section>
  )
}