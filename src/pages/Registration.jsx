import React, {useContext, useState} from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "../components/FormikControl";
import { addFarmer } from "../lib/api";
import Container from "react-bootstrap/Container";
import styles from "../css/Registration.module.css";
import UserTableContext from "../context/UserTableContext";

function Registration() {
  const userTableContext = useContext(UserTableContext)
  const [error, setError] = useState("");
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
    user_name: "",
    user_phone: "",
    user_email: "",
    notificationOptions: [],
    dataOptions: [],
  };

  const validationSchema = Yup.object({
    user_name: Yup.string().required("Required"),
    user_phone: Yup.string()
        .required("Required")
        .min(10, "The phone number needs at least 10 digits"),
    user_email: Yup.string().email("Invalid email format").required("Required"),
    notificationOptions: Yup.string().required("Required"),
    dataOptions: Yup.string().required("Required"),
  });

  const onSubmit = (values) => {

    console.log("Form data", values);
    addFarmer(values).then((response) =>
        userTableContext.handleUserTable([...userTableContext.userTable, response.data]))
        .catch(error => {
          setError(error.message);
        });
  };

  return (
      <Container className={styles.Container}>
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
          {(formik) => {
            return (
                <Form>
                  <FormikControl
                      control="input"
                      type="text"
                      label="Full Name"
                      name="user_name"
                  />
                  <FormikControl
                      control="input"
                      type="text"
                      label="Phone Number"
                      name="user_phone"
                  />
                  <FormikControl
                      control="input"
                      type="email"
                      label="Email"
                      name="user_email"
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
      </Container>
  );
}

export default Registration;
