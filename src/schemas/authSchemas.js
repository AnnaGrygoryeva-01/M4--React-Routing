import * as yup from "yup";

export const SIGN_IN_VALIDATION_SCHEMA = yup.object({
  email: yup
    .string()
    .trim()
    .email("Please enter a valid email address")
    .required("Email is required"),
  password: yup
    .string()
    .trim()
    .min(6, "Password must be at least 6 characters")
    .max(64, "Password cannot be longer than 64 characters")
    .required("Password is required"),
});

export const SIGN_UP_VALIDATION_SCHEMA = yup.object({
  firstName: yup
    .string()
    .trim()
    .min(2, "First name must be at least 2 characters")
    .max(50, "First name must not exceed 50 characters")
    .required("First name is required"),
  lastName: yup
    .string()
    .trim()
    .min(2, "Last name must be at least 2 characters")
    .max(50, "Last name must not exceed 50 characters")
    .required("Last name is required"),
  dateOfBirth: yup
    .date()
    .max(new Date(), "Date of birth cannot be in the future"),
  email: yup
    .string()
    .trim()
    .email("Please enter a valid email address")
    .required("Email is required"),
  password: yup
    .string()
    .trim()
    .min(6, "Password must be at least 6 characters")
    .max(64, "Password cannot be longer than 64 characters")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[0-9]/, "Password must contain at least one number")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .trim()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Please confirm your password"),
  agreeToTerms: yup
    .boolean()
    .oneOf([true], "You must agree to the terms and conditions")
    .required("You must agree to the terms and conditions"),
});
