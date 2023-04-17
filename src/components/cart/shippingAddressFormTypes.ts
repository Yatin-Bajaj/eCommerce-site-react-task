export enum ReducerActionType {
    USER_NAME = "userName",
    EMAIL = "email",
    PHONE_NUMBER = "phone",
    ADDRESS = "address",
    STATE = "state",
    CITY = "city",
    PINCODE = "pincode",
}
export type FormStateType = {
    userName: string;
    email: string;
    address: string;
    state: string;
    city: string;
    pincode: string;
    phone: string;
};

export type FormActionsType = {
    type: ReducerActionType;
    paylod: string;
};
