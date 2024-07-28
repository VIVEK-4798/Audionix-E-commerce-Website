// PaymentForm.jsx
import React from 'react';
import { Typography, Button, Divider } from '@mui/material';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import Review from './Review';

const PaymentForm = ({ checkoutToken, shippingData, backStep, onCaptureCheckout, nextStep }) => {
  const elements = useElements();
  const stripe = useStripe();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return; // Stripe.js has not yet loaded.
    }

    const orderData = {
      line_items: checkoutToken.line_items,
      customer: {
        firstname: shippingData.firstName,
        lastname: shippingData.lastName,
        email: shippingData.email,
      },
      shipping: {
        name: 'Primary',
        street: shippingData.address1,
        town_city: shippingData.city,
        county_state: shippingData.shippingSubdivision,
        postal_zip_code: shippingData.zip,
        country: shippingData.shippingCountry,
      },
      fulfillment: { shipping_method: shippingData.shippingOption },
      payment: {
        gateway: 'manual',
        manual: { payment_method_id: 'manual_payment_id' },
      },
    };

    onCaptureCheckout(checkoutToken.id, orderData);
    nextStep();
  };

  return (
    <>
      <Review checkoutToken={checkoutToken} />
      <Typography variant="h6" gutterBottom style={{ margin: '20px 0' }}>
        Payment Method
      </Typography>
      <form onSubmit={handleSubmit}>
        <CardElement />
        <br /><br />
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Button variant="outlined" onClick={backStep}>Back</Button>
          <Button type="submit" variant="contained" color="primary">
            Pay {checkoutToken.subtotal.formatted_with_symbol}
          </Button>
        </div>
      </form>
    </>
  );
};

export default PaymentForm;
