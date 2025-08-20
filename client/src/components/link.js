import React from "react";

function Link(props) {
  const handleClick = (e) => {
    if (props.disabled) {
      e.preventDefault();
      return;
    }

    if (props.onClick) {
      e.preventDefault();
      props.onClick(e);
    }
  };

  // Generate className based on props
  const className = [
    props.className,
    props.variant && `link--${props.variant}`,
    props.size && `link--${props.size}`,
    props.underline && "link--underline",
    props.disabled && "link--disabled",
    props.icon && `link--icon-${props.iconPosition || "left"}`,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <>
      <a
        href={props.disabled ? undefined : props.href}
        className={className}
        onClick={handleClick}
        target={props.target}
        rel={
          props.target === "_blank"
            ? props.rel || "noopener noreferrer"
            : undefined
        }
        aria-disabled={props.disabled}
      >
        {props.icon &&
          (props.iconPosition === "left" || !props.iconPosition) && (
            <span className="link__icon">{props.icon}</span>
          )}
        {props.children && <span className="link__text">{props.children}</span>}
        {props.icon && props.iconPosition === "right" && (
          <span className="link__icon">{props.icon}</span>
        )}
      </a>
    </>
  );
}

export default React.memo(Link);
