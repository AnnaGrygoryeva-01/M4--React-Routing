import { useMemo } from "react";
import { Link } from "react-router-dom";
import { Formik, Form } from "formik";
import styles from "./Signup.module.sass";
import { TextInput, CheckboxInput } from "../../components/FormInput";
import { SIGN_UP_VALIDATION_SCHEMA } from "../../validationSchemas/authSchemas";

const MIN_DATE = "1900-01-01";

function Signup() {
  const today = useMemo(() => new Date().toISOString().split("T")[0], []);

  const initialValues = {
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  };

  const handleSubmit = (_values, formikBag) => {
    formikBag.resetForm();
  };

  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Sign Up</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={SIGN_UP_VALIDATION_SCHEMA}
      >
        <Form className={styles.form}>
          <div className={styles.formRow}>
            <TextInput
              label="First Name *"
              type="text"
              name="firstName"
              placeholder="Enter your first name"
              autoFocus
            />
            <TextInput
              label="Last Name *"
              type="text"
              name="lastName"
              placeholder="Enter your last name"
            />
          </div>
          <div className={styles.formRow}>
            <TextInput
              label="Date of Birth *"
              type="date"
              name="dateOfBirth"
              min={MIN_DATE}
              max={today}
            />
            <TextInput
              label="Email *"
              type="email"
              name="email"
              placeholder="Enter your email"
            />
          </div>
          <div className={styles.formRow}>
            <TextInput
              label="Password *"
              type="password"
              name="password"
              placeholder="Enter your password"
            />
            <TextInput
              label="Confirm Password *"
              type="password"
              name="confirmPassword"
              placeholder="Confirm your password"
            />
          </div>
          <CheckboxInput
            label={
              <>
                I agree to the{" "}
                <Link to="/terms-and-conditions">Terms and Conditions</Link>
              </>
            }
            name="agreeToTerms"
          />
          <button type="submit" className={styles.submitBtn}>
            Sign Up
          </button>
        </Form>
      </Formik>
      <p className={styles.toggleText}>
        Already have an account?{" "}
        <Link to="/login" className={styles.toggleLink}>
          Sign in
        </Link>
      </p>
    </section>
  );
}

export default Signup;
