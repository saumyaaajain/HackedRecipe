import React from "react";
import './PaymentPage.css';
import {script} from "../utils/PaymentPage";
import CreditCardInput from 'react-credit-card-input';

export const PaymentPage = () => {
    // setTimeout(() => script(), 1000);
    // script();
    const [cursor, setCursor] = React.useState("pointer");
    const [cardNumber, setCardNumber] = React.useState();
    const [expiry, setExpiry] = React.useState();
    const [cvc, setCVC] = React.useState();
    return (
        <CreditCardInput
            cardNumberInputProps={{ value: cardNumber }}
            cardExpiryInputProps={{ value: expiry}}
            cardCVCInputProps={{ value: cvc}}
            fieldClassName="input"
        />
    );
}
