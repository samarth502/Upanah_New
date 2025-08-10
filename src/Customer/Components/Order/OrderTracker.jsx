import { Step, StepLabel, Stepper } from "@mui/material";

const OrderTraker = ({ activeStep }) => {
  const steps = ['Placed', 'Order Confirmed', 'Shipped' , 'Out of Delivery','Delivered']; // Example steps array
  
  return (
    <div className='w-full'>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step>
            <StepLabel sx={{ color: '#9155FD', fontSize: "44px" }}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  );
};

export default OrderTraker;