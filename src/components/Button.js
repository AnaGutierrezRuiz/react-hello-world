
function Button({ text, mode, icon, className }) {
  return (
    <a href="#" className={`btn btn-${mode} ${className}`} >
      {icon && (<i className={`fa fa-${icon} me-1`} />)}
      {text}
    </a>
  );
}

Button.defaultProps = {
  mode: 'primary',
  className: ''
}

export default Button;
