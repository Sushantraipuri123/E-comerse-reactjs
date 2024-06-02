import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Form from 'react-bootstrap/Form';
import { useForm } from "react-hook-form"

const steps = ['Address', 'Payment', 'Place Order'];

export default function Address() {

    // ====react hook form for getting address from user====

   const {
    register,
    handleSubmit,
    watch,
    formState : {errors , isSubmitted},
   } = useForm()
   const onSubmit = (data) => {
    console.log(data);
    handleNext();
  };

//    =====stepper const ==
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
         <div className="container mt-lg-5 mt-md-3">
            <h4>Shipp to  </h4>
       
      <Form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-row mt-4">
          <div className="form-group">
            <Form.Group controlId="formFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Enter first name" 
                {...register("firstName", { required: true })} 
                className="no-focus-outline"
              />
              {errors.firstName && <span className="text-danger">First name is required</span>}
            </Form.Group>
          </div>
          <div className="form-group">
            <Form.Group controlId="formLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Enter last name" 
                {...register("lastName", { required: true })} 
                className="no-focus-outline"
              />
              {errors.lastName && <span className="text-danger">Last name is required</span>}
            </Form.Group>
          </div>
        </div>

        <Form.Group controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control 
            type="email" 
            placeholder="Enter email" 
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })} 
            className="no-focus-outline"
          />
          {errors.email && <span className="text-danger">Valid email is required</span>}
        </Form.Group>

        <Form.Group controlId="formPhone">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Enter phone number" 
            {...register("phone", { required: true, pattern: /^[0-9]{10}$/ })} 
            className="no-focus-outline"
          />
          {errors.phone && <span className="text-danger">Valid phone number is required</span>}
        </Form.Group>

        <div className="form-row">
          <div className="form-group">
            <Form.Group controlId="formAddress">
              <Form.Label>Delivery Address</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Enter delivery address" 
                {...register("address", { required: true })} 
                className="no-focus-outline"
              />
              {errors.address && <span className="text-danger">Delivery address is required</span>}
            </Form.Group>
          </div>
          <div className="form-group">
            <Form.Group controlId="formLandmark">
              <Form.Label>Nearby Landmark</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Enter nearby landmark" 
                {...register("landmark")} 
                className="no-focus-outline"
              />
            </Form.Group>
          </div>
        </div>

        <Form.Group controlId="formPincode">
          <Form.Label>Pincode</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Enter pincode" 
            {...register("pincode", { required: true, pattern: /^[0-9]{6}$/ })} 
            className="no-focus-outline"
          />
          {errors.pincode && <span className="text-danger">Valid pincode is required</span>}
        </Form.Group>

        <div className=" d-flex justify-content-center">
        <Button variant="outlined" className=' mt-4 ' type="submit" isSubmitted ={handleNext}>
          Submit
        </Button>
        </div>
      </Form>

      <style jsx>{`
        .no-focus-outline:focus {
          outline: none;
          box-shadow: none;
        }
        .form-row {
          display: flex;
          justify-content: space-between;
        }
        .form-group {
          flex: 1;
          margin-right: 15px;
        }
        .form-group:last-child {
          margin-right: 0;
        }
       
      `}</style>
      <style jsx>{`
        .no-focus-outline:focus {
          outline: none;
          box-shadow: none;
        }
      `}</style>
    
         </div>
        );
      case 1:
        return (
            <Form>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
            </Form>
          );
        
      case 2:
        return 'Content for step 3: Create an ad.';
      default:
        return 'Unknown step';
    }
  };

  return (
    <div className="container mt-4">
      <Box sx={{ width: '100%' }}>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};
          
            if (isStepSkipped(index)) {
              stepProps.completed = false;
            }
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === steps.length ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>{getStepContent(activeStep)}</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: '1 1 auto' }} />
            

              <Button onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </Box>
          </React.Fragment>
        )}
      </Box>
    </div>
  );
}
