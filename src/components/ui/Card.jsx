// Shared bordered surface used by expertise, skills, timeline, and achievement items.
function Card({ as: Tag = 'article', interactive = false, className = '', children, ...rest }) {
  const classes = `card${interactive ? ' card-interactive' : ''}${className ? ` ${className}` : ''}`
  return <Tag className={classes} {...rest}>{children}</Tag>
}

export default Card
