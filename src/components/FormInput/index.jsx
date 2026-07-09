import { Field } from "formik";
import classNames from "classnames";
import styles from "./FormInput.module.sass";

export default function FormInput(props) {
  const { name, label, type = "text", classes, ...restProps } = props;
  const isCheckbox = type === "checkbox";

  return (
    <Field name={name}>
      {({ field, meta }) => {
        const inputClassNames = classNames(
          classes?.input || styles.input,
          {
            [classes?.valid || styles.valid]: !meta.error && meta.touched && !isCheckbox,
            [classes?.invalid || styles.invalid]: meta.error && meta.touched,
          }
        );

        const labelClassName = isCheckbox ? styles.checkboxLabel : styles.label;

        return (
          <label className={labelClassName}>
            {!isCheckbox && <span className={styles.labelText}>{label}</span>}
            <input type={type} className={inputClassNames} {...restProps} {...field} />
            {isCheckbox && <span className={styles.labelText}>{typeof label === "string" ? label : label}</span>}
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
