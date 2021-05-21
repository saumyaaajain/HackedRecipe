import React from "react";
import CreditCardInput from 'react-credit-card-input';

export const PaymentPage = () => {
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
