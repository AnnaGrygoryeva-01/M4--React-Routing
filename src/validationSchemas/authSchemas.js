import * as yup from "yup";

const createNameValidator = (fieldName) =>
  yup
    .string()
    .trim()
    .min(2, `${fieldName} must be at least 2 characters`)
    .max(50, `${fieldName} must not exceed 50 characters`)
    .required(`${fieldName} is required`);

const emailValidator = yup
  .string()
  .trim()
  .email("Please enter a valid email address")
  .required("Email is required");

const passwordValidator = yup
  .string()
  .trim()
  .min(6, "Password must be at least 6 characters")
  .max(64, "Password cannot be longer than 64 characters")
  .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
  .matches(/[0-9]/, "Password must contain at least one number")
  .required("Password is required");

export const SIGN_IN_VALIDATION_SCHEMA = yup.object({
  email: emailValidator,
  password: passwordValidator,
});

export const SIGN_UP_VALIDATION_SCHEMA = yup.object({
  firstName: createNameValidator("First name"),
  lastName: createNameValidator("Last name"),
  dateOfBirth: yup
    .date()
    .max(() => new Date(), "Date of birth cannot be in the future")
    .required("Date of birth is required"),
  email: emailValidator,
  password: passwordValidator,
  confirmPassword: yup
    .string()
    .trim()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Please confirm your password"),
  agreeToTerms: yup
    .boolean()
    .oneOf([true], "Please agree to the terms and conditions")
    .required("You must agree to the terms and conditions"),
});
