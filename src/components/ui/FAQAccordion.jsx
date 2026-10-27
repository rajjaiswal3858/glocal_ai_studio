import { useId, useState } from 'react'
import { Minus, Plus } from 'lucide-react'

/**
 * Single-open accordion. Answers animate via CSS grid rows (0fr → 1fr).
 * `headingTag` wraps each trigger in a heading element when provided.
 */
export default function FAQAccordion({ items, headingTag: Heading }) {
  const [open, setOpen] = useState(null)
  const id = useId()

  return (
    <div className="divide-y divide-white/[0.06]">
      {items.map(({ q, a }, i) => {
        const isOpen = open === i
        const qId = `${id}-q-${i}`
        const aId = `${id}-a-${i}`
        const trigger = (
          <button
            id={qId}
            aria-expanded={isOpen}
            aria-controls={aId}
            className="w-full flex items-start justify-between gap-6 py-6 text-left group"
            onClick={() => setOpen(isOpen ? null : i)}
          >
            <span
              className={`font-display text-lg md:text-xl leading-snug transition-colors duration-300 ${
                isOpen ? 'text-white' : 'text-white/60 group-hover:text-white'
              }`}
            >
              {q}
            </span>
            <span className="shrink-0 mt-1 text-white/30 group-hover:text-white transition-colors duration-300">
              {isOpen ? <Minus size={16} strokeWidth={1.5} /> : <Plus size={16} strokeWidth={1.5} />}
            </span>
          </button>
        )
        return (
          <div key={i}>
            {Heading ? <Heading className="m-0">{trigger}</Heading> : trigger}
            <div
              id={aId}
              role="region"
              aria-labelledby={qId}
              inert={!isOpen}
              className="grid transition-all duration-500"
              style={{
                gridTemplateRows: isOpen ? '1fr' : '0fr',
                opacity: isOpen ? 1 : 0,
                transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              <div className="overflow-hidden">
                {(Array.isArray(a) ? a : [a]).map((text, j) => (
                  <p key={j} className="font-body text-white/45 text-base leading-relaxed pb-6 max-w-2xl">
                    {text}
                  </p>
                ))}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
