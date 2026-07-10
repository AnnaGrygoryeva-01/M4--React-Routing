import { Field } from "formik";
import classNames from "classnames";
import styles from "./FormInput.module.sass";

export default function TextInput(props) {
  const { name, label, type = "text", ...restProps } = props;

  return (
    <Field name={name}>
      {({ field, meta }) => {
        const inputClassNames = classNames(
          styles.input,
          {
            [styles.valid]: !meta.error && meta.touched,
            [styles.invalid]: meta.error && meta.touched,
          }
        );

        const errorNode = meta.error && meta.touched && (
          <span className={styles.error}>{meta.error}</span>
        );

        return (
          <div className={styles.label}>
            <label className={styles.labelContainer}>
              <span className={styles.labelText}>{label}</span>
              <input type={type} className={inputClassNames} {...restProps} {...field} />
            </label>
            {errorNode}
          </div>
        );
      }}
    </Field>
  );
}
