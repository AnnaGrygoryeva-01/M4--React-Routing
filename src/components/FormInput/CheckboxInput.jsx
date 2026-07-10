import { Field } from "formik";
import classNames from "classnames";
import styles from "./FormInput.module.sass";

export default function CheckboxInput(props) {
  const { name, label, ...restProps } = props;

  return (
    <Field name={name}>
      {({ field, meta }) => {
        const inputClassNames = classNames(styles.input, {
          [styles.invalid]: meta.error && meta.touched,
        });

        const errorNode = meta.error && meta.touched && (
          <span className={styles.error}>{meta.error}</span>
        );

        return (
          <div className={styles.checkboxField}>
            <label className={styles.checkboxLabel}>
              <input type="checkbox" className={inputClassNames} {...restProps} {...field} />
              <span className={styles.labelText}>{label}</span>
            </label>
            {errorNode}
          </div>
        );
      }}
    </Field>
  );
}
