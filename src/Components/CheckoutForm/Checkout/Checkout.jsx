import React, { useState, useEffect } from 'react';
import { Typography, Stepper, Step, StepLabel, Divider, Button, CircularProgress, CssBaseline } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import { CustomContainer as Container, CustomPaper as Paper } from './styles';
import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';
import { commerce } from '../../lib/commerce';

const steps = ['Shipping address', 'Payment details'];

const useStyles = makeStyles((theme) => ({
  divider: {
    margin: '20px 0',
  },
  spinner: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
}));

const Checkout = ({ cart, order, onCaptureCheckout, error }) => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [checkoutToken, setCheckoutToken] = useState(null);
  const [shippingData, setShippingData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const generateToken = async () => {
      try {
        const token = await commerce.checkout.generateToken(cart.id, { type: 'cart' });
        setCheckoutToken(token);
      } catch (error) {
        navigate('/');
      }
    };
    generateToken();
  }, [cart, navigate]);

  const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
  const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

  const next = (data) => {
    setShippingData(data);
    nextStep();
  };

  let Confirmation = () => order.customer ? (
    <>
      <div>
        <Typography variant='h5'>Thank You for your purchase, {order.customer.firstname} {order.customer.lastname}</Typography>
        <Divider className={classes.divider} />
        <Typography variant='subtitle2'>Order ref: {order.customer_reference}</Typography>
      </div>
      <br />
      <Button component={Link} to="/" variant="outlined" type="button">Back to Home</Button>
    </>
  ) : (
    <div className={classes.spinner}>
      <CircularProgress />
    </div>
  );

  if (error) {
    Confirmation = () => (
      <>
        <Typography variant='h5'><br /><br />Thank You for your purchase. </Typography>
        <br />
        <br />
        <Button component={Link} to="/" variant="outlined" type="button">Back to Home</Button>
      </>
    );
  }

  const Form = () => (activeStep === 0 ? 
    <AddressForm checkoutToken={checkoutToken} next={next} />
     : <PaymentForm shippingData={shippingData} 
                    checkoutToken={checkoutToken} 
                    nextStep={nextStep}
                    backStep={backStep}
                    onCaptureCheckout={onCaptureCheckout}/>                
  );

  return (
    <>
      <CssBaseline />
      <Container>
        <Paper>
          <Typography variant='h4' align='center'>Checkout</Typography>
          <Stepper activeStep={activeStep}>
            {steps.map((step) => (
              <Step key={step}>
                <StepLabel>{step}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <div>
            {activeStep === steps.length ? (
              <Confirmation />
            ) : checkoutToken && (
              <Form />
            )}
          </div>
        </Paper>
      </Container>
    </>
  );
}

export default Checkout;
