// Renders a link when `href` is given, otherwise a native button.
function Button({ href, variant = 'primary', icon: Icon, className = '', type = 'button', children, ...rest }) {
  const classes = `btn btn-${variant}${className ? ` ${className}` : ''}`
  const content = <>{children}{Icon && <Icon size={17} aria-hidden="true" />}</>

  if (href) return <a className={classes} href={href} {...rest}>{content}</a>
  return <button type={type} className={classes} {...rest}>{content}</button>
}

export default Button
