import { ReducerActionType } from "./shippingAddressFormTypes";
export const initialShippingAddress = {
    userName: "Customer241",
    email: "test@email.com",
    phone: "9999999999",
    address: "342-R",
    city: "Delhi",
    state: "Delhi",
    pincode: "132305",
};

export const formInputElements = [
    {
        type: "text",
        label: "User name",
        name: "username",
        valueType: ReducerActionType.USER_NAME,
        ActionType: ReducerActionType.USER_NAME,
    },
    {
        type: "email",
        name: "email",
        label: "Email",
        valueType: ReducerActionType.EMAIL,
        ActionType: ReducerActionType.EMAIL,
    },
    {
        type: "text",
        name: "address",
        label: "Address",
        valueType: ReducerActionType.ADDRESS,
        ActionType: ReducerActionType.ADDRESS,
    },
    {
        type: "text",
        name: "city",
        label: "city",
        valueType: ReducerActionType.CITY,
        ActionType: ReducerActionType.CITY,
    },
    {
        type: "text",
        name: "state",
        label: "State",
        valueType: ReducerActionType.STATE,
        ActionType: ReducerActionType.STATE,
    },
    {
        type: "text",
        name: "pincode",
        label: "Pincode",
        valueType: ReducerActionType.PINCODE,
        ActionType: ReducerActionType.PINCODE,
    },
    {
        type: "text",
        name: "phone",
        label: "Phone",
        valueType: ReducerActionType.PHONE_NUMBER,
        ActionType: ReducerActionType.PHONE_NUMBER,
    },
];
