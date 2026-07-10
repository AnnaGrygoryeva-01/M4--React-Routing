import { Field } from "formik";
import classNames from "classnames";
import styles from "./FormInput.module.sass";

export default function TextInput(props) {
  const { name, label, type = "text", classes, ...restProps } = props;

  return (
    <Field name={name}>
      {({ field, meta }) => {
        const inputClassNames = classNames(
          classes?.input || styles.input,
          {
            [classes?.valid || styles.valid]: !meta.error && meta.touched,
            [classes?.invalid || styles.invalid]: meta.error && meta.touched,
          }
        );

        const errorNode = meta.error && meta.touched && (
          <span className={classes?.error || styles.error}>{meta.error}</span>
        );

        return (
          <label className={styles.label}>
            <span className={styles.labelText}>{label}</span>
            <input type={type} className={inputClassNames} {...restProps} {...field} />
            {errorNode}
          </label>
        );
      }}
    </Field>
  );
}
