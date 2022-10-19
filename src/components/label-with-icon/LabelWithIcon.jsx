import labelWithIconStyles from "./LabelWithIcon.module.css";

export const LabelWithIcon = ({label, iconName}) => {
    return (
        <div className={labelWithIconStyles.container}>
            <div className={labelWithIconStyles[iconName]}></div>
            <div>{label}</div>
        </div>
    );
};