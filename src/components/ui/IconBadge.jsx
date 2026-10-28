// Decorative icon tile. Tones: soft (tinted), solid (brand gradient), glass (on dark surfaces).
function IconBadge({ icon: Icon, tone = 'soft', shape = 'square', size = 20 }) {
  return (
    <span className={`icon-badge icon-badge-${tone} icon-badge-${shape}`} aria-hidden="true">
      <Icon size={size} strokeWidth={1.75} />
    </span>
  )
}

export default IconBadge
