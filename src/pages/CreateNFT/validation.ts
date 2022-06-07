import * as yup from "yup";
import { customUrlName, ipfsInfuraRegex } from "../../constants/validation";

export const validationSchema = yup.object().shape(
  {
    name: yup
      .string()
      .required("Name is required.")
      .min(3, "Name must be longer than 2 symbols."),
    externalLink: yup
      .string()
      .nullable()
      .notRequired()
      .when("externalLink", {
        is: (value: string) => value?.length,
        then: (rule) => rule.matches(customUrlName, "Enter correct url!"),
      }),
    description: yup.string().max(500, "You reached the limit!").notRequired(),
    supply: yup.number().notRequired(),
    freezeMetadata: yup
      .string()
      .nullable()
      .notRequired()
      .when("freezeMetadata", {
        is: (value: string) => value?.length,
        then: (rule) => rule.matches(ipfsInfuraRegex, "Enter correct url!"),
      }),
  },
  [
    ["name", "name"],
    ["externalLink", "externalLink"],
    ["description", "description"],
    ["supply", "supply"],
    ["freezeMetadata", "freezeMetadata"],
  ],
);
