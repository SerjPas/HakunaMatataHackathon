import React from "react";
import { Formik, Form } from "formik";
// import * as Yup from "yup";
import FormikControl from "../components/FormikControl";
import { addUser } from "../lib/api";
function Registration() {
  const notificationOptions = [
    { key: "Email", value: "email" },
    { key: "SMS", value: "sms" },
  ];
  const dataOptions = [
    { key: "Temp", value: "temp" },
    { key: "Temp Change", value: "changeTemp" },
    { key: "Min Temp", value: "minTemp" },
  ];

  const initialValues = {
    fullName: "",
    email: "",
    notificationOptions: [],
    dataOptions: [],
  };

  // const validationSchema = Yup.object({
  //   fullName: Yup.string().required("Required"),
  //   email: Yup.string().email("Invalid email format").required("Required"),
  //   notificationOptions: Yup.string().required("Required"),
  //   dataOptions: Yup.string().required("Required"),
  // });

  const onSubmit = (values) => {
    console.log("Form data", values);
    addUser(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      // validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        return (
          <Form>
            <FormikControl
              control="input"
              type="text"
              label="Full Name"
              name="fullName"
            />
            <FormikControl
              control="input"
              type="email"
              label="Email"
              name="email"
            />
            <FormikControl
              control="checkbox"
              label="Notification Type: "
              name="notificationOptions"
              options={notificationOptions}
            />
            <FormikControl
              control="checkbox"
              label="Data Type: "
              name="dataOptions"
              options={dataOptions}
            />
            <button type="submit">Submit</button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default Registration;
