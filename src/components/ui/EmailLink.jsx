import { CONTACT_EMAIL } from '../../data/site'
import { trackLead } from '../../lib/analytics'

export default function EmailLink({ ctaLocation, className, style, children, ...rest }) {
  return (
    <a
      href={`mailto:${CONTACT_EMAIL}`}
      className={className}
      style={style}
      onClick={() => trackLead(ctaLocation, 'email')}
      {...rest}
    >
      {children ?? CONTACT_EMAIL}
    </a>
  )
}
