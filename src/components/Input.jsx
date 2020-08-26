import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";
import styles from "../css/Registration.module.css";

const Input = (props) => {
  const { label, name, ...rest } = props;
  return (
    <div className={styles.textInput}>
      <label htmlFor={name} className="mr-3">
        {label}:
      </label>
      <Field className={styles.textField} id={name} name={name} {...rest} />
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default Input;
