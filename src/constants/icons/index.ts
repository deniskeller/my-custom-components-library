import _ from "lodash";
import { othersIcons, OthersIcons } from "./others";
import { socialIcons, SocialIcons } from "./social";
import { landingIcons, LandingIcons } from "./components";

export const ALL_ICONS = _.assign(
  {},
  SocialIcons,
  OthersIcons,
  LandingIcons,
);
export default _.assign(
  {},
  socialIcons,
  othersIcons,
  landingIcons,
);
