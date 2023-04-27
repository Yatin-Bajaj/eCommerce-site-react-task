import React, { useReducer, useState } from "react";
import classes from "./shippingForm.module.css";
import Button from "../UI/Button";
import InputElement from "./InputElement";
import { initialShippingAddress } from "./cartConstData";
import {
    ReducerActionType,
    FormStateType,
    FormActionsType,
} from "./shippingAddressFormTypes";
import { formInputElements } from "./cartConstData";

const reducer: React.Reducer<FormStateType, FormActionsType> = (
    currState: FormStateType,
    action: FormActionsType
) => {
    return { ...currState, [action.type]: action.paylod };
};

const initialState: FormStateType = JSON.parse(
    localStorage.getItem("shippingAddress") ||
    `${JSON.stringify(initialShippingAddress)}`
);

export const ShippingAddressForm = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [isFormEditable, setisFormEditable] = useState<Boolean>(false);

    const onEditHandler = () => {
        setisFormEditable((prevState) => !prevState);
    };

    const onChangeHandler = (type: ReducerActionType) => {
        return (event: React.ChangeEvent<HTMLInputElement>) => {
            dispatch({
                type: type,
                paylod: event.target.value,
            });
        };
    };
    
    const onSubmitHandler: React.FormEventHandler<HTMLFormElement> = (
        event: React.FormEvent<HTMLFormElement>
    ) => {
        event.preventDefault();
        localStorage.setItem("shippingAddress", JSON.stringify(state));
    };

    return (
        <div className={classes.form_container}>
            <form onSubmit={onSubmitHandler} className={classes.form}>
                {formInputElements.map((inputElement) => (
                    <InputElement
                        type={inputElement.type}
                        name={inputElement.name}
                        label={inputElement.label}
                        value={`${state[inputElement.valueType]}`}
                        readOnly={!isFormEditable ? true : false}
                        onChange={onChangeHandler(inputElement.ActionType)}
                    />
                ))}

                <Button className={classes.control} onClick={onEditHandler}>
                    {isFormEditable ? "Save Address" : "Edit Address"}
                </Button>
            </form>
        </div>
    );
};
