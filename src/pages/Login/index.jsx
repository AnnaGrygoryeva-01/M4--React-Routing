import { Link } from "react-router-dom";
import { Formik, Form } from "formik";
import styles from "./Login.module.sass";
import { TextInput } from "../../components/FormInput";
import { SIGN_IN_VALIDATION_SCHEMA } from "../../validationSchemas/authSchemas";

function Login() {
  const initialValues = { email: "", password: "" };

  const handleSubmit = (_values, formikBag) => {
    formikBag.resetForm();
  };

  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Sign in</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={SIGN_IN_VALIDATION_SCHEMA}
      >
        <Form className={styles.form}>
          <TextInput
            label="Email"
            type="email"
            name="email"
            placeholder="Enter your email"
            autoFocus
          />
          <TextInput
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
    </section>
  );
}

export default Login;
