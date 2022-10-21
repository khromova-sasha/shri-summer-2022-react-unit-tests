import labelWithIconStyles from "./LabelWithIcon.module.css";

export const LabelWithIcon = ({label, iconName, testId}) => {
    return (
        <div data-testid={testId} className={labelWithIconStyles.container}>
            <div className={labelWithIconStyles[iconName]}/>
            <div>{label}</div>
        </div>
    );
};