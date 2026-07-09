import { Field } from "formik";
import classNames from "classnames";
import styles from "./FormInput.module.sass";

export default function FormInput(props) {
  const { name, label, classes, ...restProps } = props;
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

        return (
          <label className={styles.label}>
            <span className={styles.labelText}>{label}</span>
            <input className={inputClassNames} {...restProps} {...field} />
            {meta.error && meta.touched && (
              <span className={classes?.error || styles.error}>
                {meta.error}
              </span>
            )}
          </label>
        );
      }}
    </Field>
  );
}
