import buttonStyles from "./Button.module.css";
import classNames from "classnames";

export const Button = ({variant, disabled, testId, children}) => {
    return (
        <button data-testid={testId} className={classNames(buttonStyles.button, buttonStyles[variant])} disabled={disabled}>{children}</button>
    );
}