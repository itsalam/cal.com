import { IS_PRODUCTION } from "@calcom/lib/constants";

export const IS_LIVE = IS_PRODUCTION && process.env.ADYEN_LIVE_ENVIRONMENT;

export const paymentOptions = [
  {
    label: "on_booking_option",
    value: "ON_BOOKING",
  },
  {
    label: "hold_option",
    value: "HOLD",
  },
];

export enum CountryCode {
  AU = "au",
  AT = "at",
  BE = "be",
  BG = "bg",
  CA = "ca",
  HR = "hr",
  CY = "cy",
  CZ = "cz",
  DK = "dk",
  EE = "ee",
  FI = "fi",
  FR = "fr",
  DE = "de",
  GI = "gi",
  GR = "gr",
  GG = "gg",
  HK = "hk",
  HU = "hu",
  IE = "ie",
  IM = "im",
  IT = "it",
  JE = "je",
  LV = "lv",
  LI = "li",
  LT = "lt",
  LU = "lu",
  MT = "mt",
  NL = "nl",
  NO = "no",
  PL = "pl",
  PT = "pt",
  PR = "pr",
  RO = "ro",
  SG = "sg",
  SK = "sk",
  SI = "si",
  ES = "es",
  SE = "se",
  CH = "ch",
  GB = "gb",
  US = "us",
}

export const supportedCountries = [
  { value: CountryCode.AU, label: "Australia" },
  { value: CountryCode.AT, label: "Austria" },
  { value: CountryCode.BE, label: "Belgium" },
  { value: CountryCode.BG, label: "Bulgaria" },
  { value: CountryCode.CA, label: "Canada" },
  { value: CountryCode.HR, label: "Croatia" },
  { value: CountryCode.CY, label: "Cyprus" },
  { value: CountryCode.CZ, label: "Czech Republic" },
  { value: CountryCode.DK, label: "Denmark" },
  { value: CountryCode.EE, label: "Estonia" },
  { value: CountryCode.FI, label: "Finland" },
  { value: CountryCode.FR, label: "France" },
  { value: CountryCode.DE, label: "Germany" },
  { value: CountryCode.GI, label: "Gibraltar" },
  { value: CountryCode.GR, label: "Greece" },
  { value: CountryCode.GG, label: "Guernsey" },
  { value: CountryCode.HK, label: "Hong Kong" },
  { value: CountryCode.HU, label: "Hungary" },
  { value: CountryCode.IE, label: "Ireland" },
  { value: CountryCode.IM, label: "Isle of Man" },
  { value: CountryCode.IT, label: "Italy" },
  { value: CountryCode.JE, label: "Jersey" },
  { value: CountryCode.LV, label: "Latvia" },
  { value: CountryCode.LI, label: "Liechtenstein" },
  { value: CountryCode.LT, label: "Lithuania" },
  { value: CountryCode.LU, label: "Luxembourg" },
  { value: CountryCode.MT, label: "Malta" },
  { value: CountryCode.NL, label: "Netherlands" },
  { value: CountryCode.NO, label: "Norway" },
  { value: CountryCode.PL, label: "Poland" },
  { value: CountryCode.PT, label: "Portugal" },
  { value: CountryCode.PR, label: "Puerto Rico" },
  { value: CountryCode.RO, label: "Romania" },
  { value: CountryCode.SG, label: "Singapore" },
  { value: CountryCode.SK, label: "Slovakia" },
  { value: CountryCode.SI, label: "Slovenia" },
  { value: CountryCode.ES, label: "Spain" },
  { value: CountryCode.SE, label: "Sweden" },
  { value: CountryCode.CH, label: "Switzerland" },
  { value: CountryCode.GB, label: "United Kingdom" },
  { value: CountryCode.US, label: "United States" },
];
