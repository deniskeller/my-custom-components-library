import _ from "lodash";
import { othersIcons, OthersIcons } from "./others";
import { socialIcons, SocialIcons } from "./social";
import { landingIcons, LandingIcons } from "./landing";
import { paymentsIcons, PaymentsIcons } from "./payments";
import { appIcons, AppIcons } from "./app";

export const ALL_ICONS = _.assign(
  {},
  SocialIcons,
  PaymentsIcons,
  OthersIcons,
  LandingIcons,
  AppIcons
);
export default _.assign(
  {},
  paymentsIcons,
  socialIcons,
  othersIcons,
  landingIcons,
  appIcons
);
