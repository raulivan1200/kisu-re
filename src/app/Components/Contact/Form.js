"use client"

import React from 'react'
import axios from "axios";
import { useForm } from "react-hook-form";
import { useState,useRef } from "react";
import styles from "../../styles/Form.module.css"
export default function Form() {
    const successMessageRef = useRef();

  const {
    register,
    handleSubmit,
    formState: { isSubmitting,errors },
  } = useForm();
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  function onSubmit(data) {
    axios
      .post("https://eoxmsrv4pmr4g9p.m.pipedream.net", data)
      .then((response) => {
        setSuccessMessage(
          `Thanks, wait for a reply under 30 mins`
        );
        setErrorMessage(""); // Clear any previous error message
        successMessageRef.current.scrollIntoView({ behavior: 'smooth' });

      })
      .catch((e) => console.error(e));
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.formcon}>
      <div className={styles.formh}>
        <h1 className={styles.cush}>CONTACT US</h1>
        <p className='ta'>
          Use the form below to contact us. We look forward to learning more about you, your organization, and how we can help you achieve even greater success.
        </p>
      </div>
        <div className='space hod'></div>
      <div className={styles.ef}>
        <h5>Email:</h5>
        <input
          className={styles.c}
          {...register("email", {
            required: <span style={{ color: 'red' }}>Email is required - use client</span>,
            validate: {
              maxLength: (v) =>
                v.length <= 50 || "The email should have at most 50 characters",
              matchPattern: (v) =>
                /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
                "Email address must be a valid address",
            }
          })}
          placeholder="Email address"
        ></input>

        {errors.email && (
          <p className={styles.error} style={{ color: 'red' }}>{errors.email.message}</p>
        )}
        {errorMessage && <p className={styles.error} style={{ color: 'red' }}>{errorMessage}</p>}
      <hr className={styles.whr} style={{color:"#757575",height:"1px",backgroundColor:"#757575"}}/>
      </div>

      <div>
        <h5>Project details:</h5>
        <textarea className={styles.inputbody} {...register("body")} placeholder="Project Details">
          
        </textarea>
        
      </div>

      <div className={styles.butonform}>
        <button role="submit" style={{backgroundColor:"black"}} className="button" href="#">
            <span className="button__icon-wrapper">
           
            <img src="/arrow.svg"  className="button__icon-svg" style={{filter:"invert(1)"}} alt=""/>
            <img src="/arrow.svg"  className="button__icon-svg  button__icon-svg--copy" style={{filter:"invert(1)" }} alt=""/>
            </span>
            <h6 style={{color:"var(--white)"}}>Contact us</h6>
        </button>

      </div>

      <div ref={successMessageRef}> <h3>      {successMessage}</h3>       </div> {/* Use the ref */}
    </form>
  );
}