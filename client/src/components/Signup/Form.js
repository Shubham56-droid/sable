import React, { useState, useCallback } from "react";
import "./style.css";
import FormSignup from "./FormSignup";
import FormSuccess from "./FormSuccess";

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const submitForm = useCallback(() => {
    setIsSubmitted(true);
  }, [setIsSubmitted]);

  
  return (
    <>
      <div className="form-container">
        <span className="close-btn">×</span>
        <div className="form-content-left">
        </div>
        {!isSubmitted ? (
          <FormSignup submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
      </div>
    </>
  );
};

export default Form;
