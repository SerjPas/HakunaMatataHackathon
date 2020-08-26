import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";
import styles from "../css/Registration.module.css";

function CheckboxGroup(props) {
  const { label, name, options, ...rest } = props;

  return (
    <div>
      <label className={styles.Container}>{label}</label>
      <Field name={name}>
        {({ field }) => {
          return options.map((option) => {
            return (
              <React.Fragment key={option.key}>
                <div className={styles.wrapper}>
                  <input
                    className="mr-2"
                    type="checkbox"
                    id={option.value}
                    {...field}
                    {...rest}
                    value={option.value}
                    checked={field.value.includes(option.value)}
                  />
                  <label htmlFor={option.value}>{option.key}</label>
                </div>
              </React.Fragment>
            );
          });
        }}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
}

export default CheckboxGroup;
