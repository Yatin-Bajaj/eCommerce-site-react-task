import classes from "./shippingForm.module.css";

type InputElementProps = {
    type: string;
    name: string;
    value: string;
    readOnly: boolean;
    label: string;
    onChange: React.ChangeEventHandler;
};

const InputElement = ({
    type,
    name,
    value,
    readOnly,
    label,
    onChange,
}: InputElementProps) => {
    return (
        <div className={classes.form_group}>
            <label htmlFor="username">{label}</label>
            <input
                type={type}
                name={name}
                className={classes.form_control}
                value={value}
                readOnly={readOnly}
                onChange={onChange}
                autoComplete="off"
                autoCorrect="off"
            />
        </div>
    );
};

export default InputElement;
