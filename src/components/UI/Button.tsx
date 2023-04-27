import React from "react";
import classes from "./Button.module.css";
type Props = {
    children?: React.ReactNode;
    onClick: React.ReactEventHandler<HTMLButtonElement>;
    className?: string;
};

const Button = ({ children, onClick, className }: Props) => {
    return (
        <button
            onClick={onClick}
            className={`${classes.btn} ${className ? className : ""}`}
        >
            {children}
        </button>
    );
};

export default Button;
