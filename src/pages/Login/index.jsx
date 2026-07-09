import { Link } from "react-router-dom";
import { Formik, Form } from "formik";
import styles from "./Login.module.sass";
import FormInput from "../../components/FormInput";
import { SIGN_IN_VALIDATION_SCHEMA } from "../../schemas/authSchemas";

function Login() {
  const initialValues = { email: "", password: "" };

  const handleSubmit = (values, formikBag) => {
    console.log("Sign in with:", values);
    formikBag.resetForm();
  };

  const classes = {
    error: styles.error,
    input: styles.input,
    valid: styles.valid,
    invalid: styles.invalid,
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.formWrapper}>
        <h1 className={styles.title}>Sign in</h1>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={SIGN_IN_VALIDATION_SCHEMA}
        >
          <Form className={styles.form}>
            <FormInput
              classes={classes}
              label="Email"
              type="email"
              name="email"
              placeholder="Enter your email"
              autoFocus
            />
            <FormInput
              classes={classes}
              label="Password"
              type="password"
              name="password"
              placeholder="Enter your password"
            />
            <button type="submit" className={styles.submitBtn}>
              Sign In
            </button>
          </Form>
        </Formik>
        <p className={styles.toggleText}>
          Don't have an account?{" "}
          <Link to="/signup" className={styles.toggleLink}>
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
