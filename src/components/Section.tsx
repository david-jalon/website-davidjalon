import type { ReactNode } from 'react'

type SectionProps = {
  id: string
  label: string
  children: ReactNode
  className?: string
}

export default function Section({ id, label, children, className = '' }: SectionProps) {
  return (
    <section id={id} className={`py-6 ${className}`}>
      <h2 className="section-label mb-3">// {label}</h2>
      {children}
    </section>
  )
}