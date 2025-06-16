const btnType = {
    primary: 'btn--primary',
    secondary: 'btn--secondary',
    outline: 'btn--outline',
    danger: 'btn--danger',
}
function Button({
    children,
    onClick,
    variant = 'primary',
    className,
    ... rest
}) {
    return (
        <button
            className={`btn ${btnType[variant]} ${className}`}
            onClick={onClick}
            {...rest}
        >
            {children}
        </button>
    );
}
export default Button;