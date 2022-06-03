import * as yup from "yup";

import {
  customUrlName,
  urlRegex,
  twitterRegex,
  discordRegex,
  instagramRegex,
} from "../../constants/validation";

export const validationSchema = yup.object().shape(
  {
    logoURI: yup.string().required("Logo is required"),
    featureURI: yup.string(),
    bannerURI: yup.string(),
    name: yup
      .string()
      .required("Name is required.")
      .min(3, "Name must be longer than 2 symbols."),
    customURL: yup
      .string()
      .nullable()
      .notRequired()
      .when("customURL", {
        is: (value: string) => value?.length,
        then: (rule) => rule.matches(customUrlName, "Enter correct url!"),
      }),
    information: yup.string().nullable().notRequired(),
    category: yup.string(),
    twitter: yup
      .string()
      .nullable()
      .notRequired()
      .when("twitter", {
        is: (value: string) => value?.length,
        then: (rule) => rule.matches(twitterRegex, "Enter correct url!"),
      }),
    discord: yup
      .string()
      .nullable()
      .notRequired()
      .when("discord", {
        is: (value: string) => value?.length,
        then: (rule) => rule.matches(discordRegex, "Enter correct url!"),
      }),
    instagram: yup
      .string()
      .nullable()
      .notRequired()
      .when("instagram", {
        is: (value: string) => value?.length,
        then: (rule) => rule.matches(instagramRegex, "Enter correct url!"),
      }),
    yourSite: yup
      .string()
      .nullable()
      .notRequired()
      .when("yourSite", {
        is: (value: string) => value?.length,
        then: (rule) => rule.matches(urlRegex, "Enter correct url!"),
      }),
    creatorEarnings: yup.string().required("Creator Earnings is required"),
    blockchain: yup.string(),
    sensetiveStatus: yup.boolean(),
  },
  [
    ["logoURI", "logoURI"],
    ["featuredURI", "featuredURI"],
    ["bannerURI", "bannerURI"],
    ["name", "name"],
    ["customURL", "customURL"],
    ["twitter", "twitter"],
    ["discord", "discord"],
    ["instagram", "instagram"],
    ["yourSite", "yourSite"],
  ],
);
