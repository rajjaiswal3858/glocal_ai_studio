import { useState } from 'react'
import { Check, Link2, MessageCircle, Share2 } from 'lucide-react'
import { trackShare } from '../../lib/analytics'

/** WhatsApp / LinkedIn / copy-link row used on articles and case studies. */
export default function ShareButtons({ title, url, contentType, itemId, tone = 'dark' }) {
  const [copied, setCopied] = useState(false)
  const whatsapp = `https://wa.me/?text=${encodeURIComponent(`${title} — ${url}`)}`
  const linkedin = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`

  async function copy() {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      trackShare('copy_link', contentType, itemId)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      /* clipboard unavailable */
    }
  }

  const item =
    'inline-flex items-center gap-2 py-2 -my-2 font-body text-xs uppercase tracking-[0.16em] transition-colors duration-300 ' +
    (tone === 'light' ? 'text-[#3B2A12]/40 hover:text-[#3B2A12]' : 'text-white/30 hover:text-white')

  return (
    <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
      <span className={`font-body text-[10px] uppercase tracking-[0.25em] ${tone === 'light' ? 'text-[#3B2A12]/25' : 'text-white/20'}`}>
        Share
      </span>
      <a href={whatsapp} target="_blank" rel="noopener noreferrer" className={item} onClick={() => trackShare('whatsapp', contentType, itemId)}>
        <MessageCircle size={15} strokeWidth={1.5} />
        WhatsApp
      </a>
      <a href={linkedin} target="_blank" rel="noopener noreferrer" className={item} onClick={() => trackShare('linkedin', contentType, itemId)}>
        <Share2 size={15} strokeWidth={1.5} />
        LinkedIn
      </a>
      <button type="button" onClick={copy} className={item}>
        {copied ? <Check size={15} strokeWidth={1.5} /> : <Link2 size={15} strokeWidth={1.5} />}
        {copied ? 'Copied' : 'Copy link'}
      </button>
    </div>
  )
}
