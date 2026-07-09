import { Link } from "react-router-dom";
import { Formik, Form } from "formik";
import styles from "./Signup.module.sass";
import FormInput from "../../components/FormInput";
import { SIGN_UP_VALIDATION_SCHEMA } from "../../schemas/authSchemas";

function Signup() {
  const today = new Date().toISOString().split("T")[0];
  const minDate = "1900-01-01";

  const initialValues = {
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  };

  const handleSubmit = (values, formikBag) => {
    console.log("Sign up with:", values);
    formikBag.resetForm();
  };

  const classes = {
    error: styles.error,
    input: styles.input,
    valid: styles.valid,
    invalid: styles.invalid,
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Sign Up</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={SIGN_UP_VALIDATION_SCHEMA}
      >
        <Form className={styles.form}>
          <div className={styles.formRow}>
            <FormInput
              classes={classes}
              label="First Name *"
              type="text"
              name="firstName"
              placeholder="Enter your first name"
              autoFocus
            />
            <FormInput
              classes={classes}
              label="Last Name *"
              type="text"
              name="lastName"
              placeholder="Enter your last name"
            />
          </div>
          <div className={styles.formRow}>
            <FormInput
              classes={classes}
              label="Date of Birth *"
              type="date"
              name="dateOfBirth"
              min={minDate}
              max={today}
            />
            <FormInput
              classes={classes}
              label="Email *"
              type="email"
              name="email"
              placeholder="Enter your email"
            />
          </div>
          <div className={styles.formRow}>
            <FormInput
              classes={classes}
              label="Password *"
              type="password"
              name="password"
              placeholder="Enter your password"
            />
            <FormInput
              classes={classes}
              label="Confirm Password *"
              type="password"
              name="confirmPassword"
              placeholder="Confirm your password"
            />
          </div>
          <FormInput
            classes={classes}
            label={
              <>
                I agree to the{" "}
                <Link to="/terms-and-conditions">Terms and Conditions</Link>
              </>
            }
            type="checkbox"
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
    </div>
  );
}

export default Signup;
