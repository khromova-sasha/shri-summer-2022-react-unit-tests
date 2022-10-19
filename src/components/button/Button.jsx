import buttonStyles from "./Button.module.css";
import classNames from "classnames";

export const Button = ({variant, children}) => {
    return (
        <button className={classNames(buttonStyles.button, buttonStyles[variant])}>{children}</button>
    );
}