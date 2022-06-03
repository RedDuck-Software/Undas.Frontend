import * as yup from "yup";

export const validationSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  externalLink: yup.string().required("External Link is required"),
  description: yup.string().required("Description is required"),
});
