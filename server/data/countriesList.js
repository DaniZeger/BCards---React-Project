const COUNTRIES = [
    {
        "cID": 1,
        "name": "Afghanistan",
        "currency": "AFN",
        "phone": 93,
        "capital": "Kabul",
        "code": "AF",
        "code3": "AFG",
        "number": 4
    },
    {
        "cID": 2,
        "name": "South Africa",
        "currency": "ZAR",
        "phone": 27,
        "capital": "Pretoria",
        "code": "ZA",
        "code3": "ZAF",
        "number": 710
    },
    {
        "cID": 3,
        "name": "Albania",
        "currency": "ALL",
        "phone": 355,
        "capital": "Tirana",
        "code": "AL",
        "code3": "ALB",
        "number": 8
    },
    {
        "cID": 4,
        "name": "Germany",
        "currency": "EUR",
        "phone": 49,
        "capital": "Berlin",
        "code": "DE",
        "code3": "DEU",
        "number": 276
    },
    {
        "cID": 5,
        "name": "Andorra",
        "currency": "EUR",
        "phone": 376,
        "capital": "Andorra la Vella",
        "code": "AD",
        "code3": "AND",
        "number": 20
    },
    {
        "cID": 6,
        "name": "Angola",
        "currency": "AOA",
        "phone": 244,
        "capital": "Luanda",
        "code": "AO",
        "code3": "AGO",
        "number": 24
    },
    {
        "cID": 7,
        "name": "Anguilla",
        "currency": "XCD",
        "phone": 1264,
        "capital": "The Valley",
        "code": "AI",
        "code3": "AIA",
        "number": 660
    },
    {
        "cID": 8,
        "name": "Antarctica",
        "currency": "AAD",
        "phone": 672,
        "capital": "Antártida",
        "code": "AQ",
        "code3": "ATA",
        "number": 10
    },
    {
        "cID": 9,
        "name": "Antigua and Barbuda",
        "currency": "XCD",
        "phone": 1268,
        "capital": "St. John's",
        "code": "AG",
        "code3": "ATG",
        "number": 28
    },
    {
        "cID": 11,
        "name": "Saudi Arabia",
        "currency": "SAR",
        "phone": 966,
        "capital": "Riyadh",
        "code": "SA",
        "code3": "SAU",
        "number": 682
    },
    {
        "cID": 12,
        "name": "Algeria",
        "currency": "DZD",
        "phone": 213,
        "capital": "Algiers",
        "code": "DZ",
        "code3": "DZA",
        "number": 12
    },
    {
        "cID": 13,
        "name": "Argentina",
        "currency": "ARS",
        "phone": 54,
        "capital": "Buenos Aires",
        "code": "AR",
        "code3": "ARG",
        "number": 32
    },
    {
        "cID": 14,
        "name": "Armenia",
        "currency": "AMD",
        "phone": 374,
        "capital": "Yerevan",
        "code": "AM",
        "code3": "ARM",
        "number": 51
    },
    {
        "cID": 15,
        "name": "Aruba",
        "currency": "AWG",
        "phone": 297,
        "capital": "Oranjestad",
        "code": "AW",
        "code3": "ABW",
        "number": 533
    },
    {
        "cID": 16,
        "name": "Australia",
        "currency": "AUD",
        "phone": 61,
        "capital": "Canberra",
        "code": "AU",
        "code3": "AUS",
        "number": 36
    },
    {
        "cID": 17,
        "name": "Austria",
        "currency": "EUR",
        "phone": 43,
        "capital": "Vienna",
        "code": "AT",
        "code3": "AUT",
        "number": 40
    },
    {
        "cID": 18,
        "name": "Azerbaijan",
        "currency": "AZN",
        "phone": 994,
        "capital": "Baku",
        "code": "AZ",
        "code3": "AZE",
        "number": 31
    },
    {
        "cID": 19,
        "name": "Bahamas, The",
        "currency": "BSD",
        "phone": 1242,
        "capital": "Nassau",
        "code": "BS",
        "code3": "BHS",
        "number": 44
    },
    {
        "cID": 20,
        "name": "Bahrain",
        "currency": "BHD",
        "phone": 973,
        "capital": "Manama",
        "code": "BH",
        "code3": "BHR",
        "number": 48
    },
    {
        "cID": 21,
        "name": "Bangladesh",
        "currency": "BDT",
        "phone": 880,
        "capital": "Dhaka",
        "code": "BD",
        "code3": "BGD",
        "number": 50
    },
    {
        "cID": 22,
        "name": "Barbados",
        "currency": "BBD",
        "phone": 1246,
        "capital": "Bridgetown",
        "code": "BB",
        "code3": "BRB",
        "number": 52
    },
    {
        "cID": 23,
        "name": "Belgium",
        "currency": "EUR",
        "phone": 32,
        "capital": "Brussels",
        "code": "BE",
        "code3": "BEL",
        "number": 56
    },
    {
        "cID": 24,
        "name": "Belize",
        "currency": "BZD",
        "phone": 501,
        "capital": "Belmopan",
        "code": "BZ",
        "code3": "BLZ",
        "number": 84
    },
    {
        "cID": 25,
        "name": "Benin",
        "currency": "XOF",
        "phone": 229,
        "capital": "Porto-Novo",
        "code": "BJ",
        "code3": "BEN",
        "number": 204
    },
    {
        "cID": 26,
        "name": "Bermuda",
        "currency": "BMD",
        "phone": 1441,
        "capital": "Hamilton",
        "code": "BM",
        "code3": "BMU",
        "number": 60
    },
    {
        "cID": 27,
        "name": "Belarus",
        "currency": "BYN",
        "phone": 375,
        "capital": "Minsk",
        "code": "BY",
        "code3": "BLR",
        "number": 112
    },
    {
        "cID": 28,
        "name": "Bolivia",
        "currency": "BOB",
        "phone": 591,
        "capital": "Sucre",
        "code": "BO",
        "code3": "BOL",
        "number": 68
    },
    {
        "cID": 29,
        "name": "Bosnia and Herzegovina",
        "currency": "BAM",
        "phone": 387,
        "capital": "Sarajevo",
        "code": "BA",
        "code3": "BIH",
        "number": 70
    },
    {
        "cID": 30,
        "name": "Botswana",
        "currency": "BWP",
        "phone": 267,
        "capital": "Gaborone",
        "code": "BW",
        "code3": "BWA",
        "number": 72
    },
    {
        "cID": 31,
        "name": "Brazil",
        "currency": "BRL",
        "phone": 55,
        "capital": "Brasilia",
        "code": "BR",
        "code3": "BRA",
        "number": 76
    },
    {
        "cID": 32,
        "name": "Brunei",
        "currency": "BND",
        "phone": 673,
        "capital": "Bandar Seri Begawan",
        "code": "BN",
        "code3": "BRN",
        "number": 96
    },
    {
        "cID": 33,
        "name": "Bulgaria",
        "currency": "BGN",
        "phone": 359,
        "capital": "Sofia",
        "code": "BG",
        "code3": "BGR",
        "number": 100
    },
    {
        "cID": 34,
        "name": "Burkina Faso",
        "currency": "XOF",
        "phone": 226,
        "capital": "Ouagadougou",
        "code": "BF",
        "code3": "BFA",
        "number": 854
    },
    {
        "cID": 35,
        "name": "Burundi",
        "currency": "BIF",
        "phone": 257,
        "capital": "Bujumbura",
        "code": "BI",
        "code3": "BDI",
        "number": 108
    },
    {
        "cID": 36,
        "name": "Bhutan",
        "currency": "BTN",
        "phone": 975,
        "capital": "Thimphu",
        "code": "BT",
        "code3": "BTN",
        "number": 64
    },
    {
        "cID": 37,
        "name": "Cabo Verde",
        "currency": "CVE",
        "phone": 238,
        "capital": "Praia",
        "code": "CV",
        "code3": "CPV",
        "number": 132
    },
    {
        "cID": 38,
        "name": "Cameroon",
        "currency": "XAF",
        "phone": 237,
        "capital": "Yaounde",
        "code": "CM",
        "code3": "CMR",
        "number": 120
    },
    {
        "cID": 39,
        "name": "Cambodia",
        "currency": "KHR",
        "phone": 855,
        "capital": "Phnom Penh",
        "code": "KH",
        "code3": "KHM",
        "number": 116
    },
    {
        "cID": 40,
        "name": "Canada",
        "currency": "CAD",
        "phone": 1,
        "capital": "Ottawa",
        "code": "CA",
        "code3": "CAN",
        "number": 124
    },
    {
        "cID": 41,
        "name": "Qatar",
        "currency": "QAR",
        "phone": 974,
        "capital": "Doha",
        "code": "QA",
        "code3": "QAT",
        "number": 634
    },
    {
        "cID": 42,
        "name": "Kazakhstan",
        "currency": "KZT",
        "phone": 7,
        "capital": "Astana",
        "code": "KZ",
        "code3": "KAZ",
        "number": 398
    },
    {
        "cID": 43,
        "name": "Chad",
        "currency": "XAF",
        "phone": 235,
        "capital": "N'Djamena",
        "code": "TD",
        "code3": "TCD",
        "number": 148
    },
    {
        "cID": 44,
        "name": "Chile",
        "currency": "CLP",
        "phone": 56,
        "capital": "Santiago",
        "code": "CL",
        "code3": "CHL",
        "number": 152
    },
    {
        "cID": 45,
        "name": "China",
        "currency": "CNY",
        "phone": 86,
        "capital": "Beijing",
        "code": "CN",
        "code3": "CHN",
        "number": 156
    },
    {
        "cID": 46,
        "name": "Cyprus",
        "currency": "EUR",
        "phone": 357,
        "capital": "Nicosia",
        "code": "CY",
        "code3": "CYP",
        "number": 196
    },
    {
        "cID": 47,
        "name": "Singapore",
        "currency": "SGD",
        "phone": 65,
        "capital": "Singapur",
        "code": "SG",
        "code3": "SGP",
        "number": 702
    },
    {
        "cID": 48,
        "name": "Colombia",
        "currency": "COP",
        "phone": 57,
        "capital": "Bogota",
        "code": "CO",
        "code3": "COL",
        "number": 170
    },
    {
        "cID": 49,
        "name": "Comoros",
        "currency": "KMF",
        "phone": 269,
        "capital": "Moroni",
        "code": "KM",
        "code3": "COM",
        "number": 174
    },
    {
        "cID": 50,
        "name": "Congo",
        "currency": "XAF",
        "phone": 242,
        "capital": "Brazzaville",
        "code": "CG",
        "code3": "COG",
        "number": 178
    },
    {
        "cID": 51,
        "name": "North Korea",
        "currency": "KPW",
        "phone": 850,
        "capital": "Pyongyang",
        "code": "KP",
        "code3": "PRK",
        "number": 408
    },
    {
        "cID": 52,
        "name": "Korea",
        "currency": "KRW",
        "phone": 82,
        "capital": "Seoul",
        "code": "KR",
        "code3": "KOR",
        "number": 410
    },
    {
        "cID": 53,
        "name": "Côte d'Ivoire",
        "currency": "XOF",
        "phone": 225,
        "capital": "Yamoussoukro",
        "code": "CI",
        "code3": "CIV",
        "number": 384
    },
    {
        "cID": 54,
        "name": "Costa Rica",
        "currency": "CRC",
        "phone": 506,
        "capital": "San Jose",
        "code": "CR",
        "code3": "CRI",
        "number": 188
    },
    {
        "cID": 55,
        "name": "Croatia",
        "currency": "HRK",
        "phone": 385,
        "capital": "Zagreb",
        "code": "HR",
        "code3": "HRV",
        "number": 191
    },
    {
        "cID": 56,
        "name": "Cuba",
        "currency": "CUP",
        "phone": 53,
        "capital": "Havana",
        "code": "CU",
        "code3": "CUB",
        "number": 192
    },
    {
        "cID": 57,
        "name": "Curaçao",
        "currency": "ANG",
        "phone": 599,
        "capital": "Willemstad",
        "code": "CW",
        "code3": "CUW",
        "number": 531
    },
    {
        "cID": 58,
        "name": "Denmark",
        "currency": "DKK",
        "phone": 45,
        "capital": "Copenhagen",
        "code": "DK",
        "code3": "DNK",
        "number": 208
    },
    {
        "cID": 59,
        "name": "Djibouti",
        "currency": "DJF",
        "phone": 253,
        "capital": "Djibouti",
        "code": "DJ",
        "code3": "DJI",
        "number": 262
    },
    {
        "cID": 60,
        "name": "Dominica",
        "currency": "XCD",
        "phone": 1767,
        "capital": "Roseau",
        "code": "DM",
        "code3": "DMA",
        "number": 212
    },
    {
        "cID": 61,
        "name": "Egypt",
        "currency": "EGP",
        "phone": 20,
        "capital": "Cairo",
        "code": "EG",
        "code3": "EGY",
        "number": 818
    },
    {
        "cID": 62,
        "name": "El Salvador",
        "currency": "USD",
        "phone": 503,
        "capital": "San Salvador",
        "code": "SV",
        "code3": "SLV",
        "number": 222
    },
    {
        "cID": 63,
        "name": "United Arab Emirates",
        "currency": "AED",
        "phone": 971,
        "capital": "Abu Dhabi",
        "code": "AE",
        "code3": "ARE",
        "number": 784
    },
    {
        "cID": 64,
        "name": "Ecuador",
        "currency": "USD",
        "phone": 593,
        "capital": "Quito",
        "code": "EC",
        "code3": "ECU",
        "number": 218
    },
    {
        "cID": 65,
        "name": "Eritrea",
        "currency": "ERN",
        "phone": 291,
        "capital": "Asmara",
        "code": "ER",
        "code3": "ERI",
        "number": 232
    },
    {
        "cID": 66,
        "name": "Slovakia",
        "currency": "EUR",
        "phone": 421,
        "capital": "Bratislava",
        "code": "SK",
        "code3": "SVK",
        "number": 703
    },
    {
        "cID": 67,
        "name": "Slovenia",
        "currency": "EUR",
        "phone": 386,
        "capital": "Ljubljana",
        "code": "SI",
        "code3": "SVN",
        "number": 705
    },
    {
        "cID": 68,
        "name": "Spain",
        "currency": "EUR",
        "phone": 34,
        "capital": "Madrid",
        "code": "ES",
        "code3": "ESP",
        "number": 724
    },
    {
        "cID": 69,
        "name": "United States",
        "currency": "USD",
        "phone": 1,
        "capital": "Washington",
        "code": "US",
        "code3": "USA",
        "number": 840
    },
    {
        "cID": 70,
        "name": "Estonia",
        "currency": "EUR",
        "phone": 372,
        "capital": "Tallinn",
        "code": "EE",
        "code3": "EST",
        "number": 233
    },
    {
        "cID": 71,
        "name": "Ethiopia",
        "currency": "ETB",
        "phone": 251,
        "capital": "Addis Ababa",
        "code": "ET",
        "code3": "ETH",
        "number": 231
    },
    {
        "cID": 72,
        "name": "Fiji Islands",
        "currency": "FJD",
        "phone": 679,
        "capital": "Suva",
        "code": "FJ",
        "code3": "FJI",
        "number": 242
    },
    {
        "cID": 73,
        "name": "Philippines",
        "currency": "PHP",
        "phone": 63,
        "capital": "Manila",
        "code": "PH",
        "code3": "PHL",
        "number": 608
    },
    {
        "cID": 74,
        "name": "Finland",
        "currency": "EUR",
        "phone": 358,
        "capital": "Helsinki",
        "code": "FI",
        "code3": "FIN",
        "number": 246
    },
    {
        "cID": 75,
        "name": "France",
        "currency": "EUR",
        "phone": 33,
        "capital": "Paris",
        "code": "FR",
        "code3": "FRA",
        "number": 250
    },
    {
        "cID": 76,
        "name": "Gabon",
        "currency": "XAF",
        "phone": 241,
        "capital": "Libreville",
        "code": "GA",
        "code3": "GAB",
        "number": 266
    },
    {
        "cID": 77,
        "name": "Gambia, The",
        "currency": "GMD",
        "phone": 220,
        "capital": "Banjul",
        "code": "GM",
        "code3": "GMB",
        "number": 270
    },
    {
        "cID": 78,
        "name": "Ghana",
        "currency": "GHS",
        "phone": 233,
        "capital": "Accra",
        "code": "GH",
        "code3": "GHA",
        "number": 288
    },
    {
        "cID": 79,
        "name": "Georgia",
        "currency": "GEL",
        "phone": 995,
        "capital": "Tbilisi",
        "code": "GE",
        "code3": "GEO",
        "number": 268
    },
    {
        "cID": 80,
        "name": "Gibraltar",
        "currency": "GIP",
        "phone": 350,
        "capital": "Gibraltar",
        "code": "GI",
        "code3": "GIB",
        "number": 292
    },
    {
        "cID": 81,
        "name": "Grenada",
        "currency": "XCD",
        "phone": 1473,
        "capital": "St. George's",
        "code": "GD",
        "code3": "GRD",
        "number": 308
    },
    {
        "cID": 82,
        "name": "Greece",
        "currency": "EUR",
        "phone": 30,
        "capital": "Athens",
        "code": "GR",
        "code3": "GRC",
        "number": 300
    },
    {
        "cID": 83,
        "name": "Greenland",
        "currency": "DKK",
        "phone": 299,
        "capital": "Nuuk",
        "code": "GL",
        "code3": "GRL",
        "number": 304
    },
    {
        "cID": 84,
        "name": "Guadeloupe",
        "currency": "EUR",
        "phone": 590,
        "capital": "Basse-Terre",
        "code": "GP",
        "code3": "GLP",
        "number": 312
    },
    {
        "cID": 85,
        "name": "Guam",
        "currency": "USD",
        "phone": 1671,
        "capital": "Hagatna",
        "code": "GU",
        "code3": "GUM",
        "number": 316
    },
    {
        "cID": 86,
        "name": "Guatemala",
        "currency": "GTQ",
        "phone": 502,
        "capital": "Guatemala City",
        "code": "GT",
        "code3": "GTM",
        "number": 320
    },
    {
        "cID": 87,
        "name": "Guernsey",
        "currency": "GBP",
        "phone": 44,
        "capital": "St Peter Port",
        "code": "GG",
        "code3": "GGY",
        "number": 831
    },
    {
        "cID": 88,
        "name": "Guyana",
        "currency": "GYD",
        "phone": 592,
        "capital": "Georgetown",
        "code": "GY",
        "code3": "GUY",
        "number": 328
    },
    {
        "cID": 89,
        "name": "French Guiana",
        "currency": "EUR",
        "phone": 594,
        "capital": "Cayenne",
        "code": "GF",
        "code3": "GUF",
        "number": 254
    },
    {
        "cID": 90,
        "name": "Guinea",
        "currency": "GNF",
        "phone": 224,
        "capital": "Conakry",
        "code": "GN",
        "code3": "GIN",
        "number": 324
    },
    {
        "cID": 91,
        "name": "Equatorial Guinea",
        "currency": "XAF",
        "phone": 240,
        "capital": "Malabo",
        "code": "GQ",
        "code3": "GNQ",
        "number": 226
    },
    {
        "cID": 92,
        "name": "Guinea-Bissau",
        "currency": "XOF",
        "phone": 245,
        "capital": "Bissau",
        "code": "GW",
        "code3": "GNB",
        "number": 624
    },
    {
        "cID": 93,
        "name": "Haiti",
        "currency": "HTG",
        "phone": 509,
        "capital": "Port-au-Prince",
        "code": "HT",
        "code3": "HTI",
        "number": 332
    },
    {
        "cID": 94,
        "name": "Netherlands",
        "currency": "EUR",
        "phone": 31,
        "capital": "Amsterdam",
        "code": "NL",
        "code3": "NLD",
        "number": 528
    },
    {
        "cID": 95,
        "name": "Honduras",
        "currency": "HNL",
        "phone": 504,
        "capital": "Tegucigalpa",
        "code": "HN",
        "code3": "HND",
        "number": 340
    },
    {
        "cID": 96,
        "name": "Hong Kong SAR",
        "currency": "HKD",
        "phone": 852,
        "capital": "Hong Kong",
        "code": "HK",
        "code3": "HKG",
        "number": 344
    },
    {
        "cID": 97,
        "name": "Hungary",
        "currency": "HUF",
        "phone": 36,
        "capital": "Budapest",
        "code": "HU",
        "code3": "HUN",
        "number": 348
    },
    {
        "cID": 98,
        "name": "Yemen",
        "currency": "YER",
        "phone": 967,
        "capital": "Sanaa",
        "code": "YE",
        "code3": "YEM",
        "number": 887
    },
    {
        "cID": 99,
        "name": "Bouvet Island",
        "currency": "NOK",
        "phone": 55,
        "capital": null,
        "code": "BV",
        "code3": "BVT",
        "number": 74
    },
    {
        "cID": 100,
        "name": "Reunion",
        "currency": "EUR",
        "phone": 262,
        "capital": "Saint-Denis",
        "code": "RE",
        "code3": "REU",
        "number": 638
    },
    {
        "cID": 101,
        "name": "Man, Isle of",
        "currency": "GBP",
        "phone": 44,
        "capital": "Douglas, Isle of Man",
        "code": "IM",
        "code3": "IMN",
        "number": 833
    },
    {
        "cID": 102,
        "name": "Saint Martin (French part)",
        "currency": "EUR",
        "phone": 590,
        "capital": "Marigot",
        "code": "MF",
        "code3": "MAF",
        "number": 663
    },
    {
        "cID": 103,
        "name": "Heard Island and McDonald Islands",
        "currency": "AUD",
        "phone": 0,
        "capital": null,
        "code": "HM",
        "code3": "HMD",
        "number": 334
    },
    {
        "cID": 104,
        "name": "Christmas Island",
        "currency": "AUD",
        "phone": 61,
        "capital": "Flying Fish Cove",
        "code": "CX",
        "code3": "CXR",
        "number": 162
    },
    {
        "cID": 105,
        "name": "Norfolk Island",
        "currency": "AUD",
        "phone": 672,
        "capital": "Kingston",
        "code": "NF",
        "code3": "NFK",
        "number": 574
    },
    {
        "cID": 106,
        "name": "Åland Islands",
        "currency": "EUR",
        "phone": 358,
        "capital": "Mariehamn",
        "code": "AX",
        "code3": "ALA",
        "number": 248
    },
    {
        "cID": 107,
        "name": "Cayman Islands",
        "currency": "KYD",
        "phone": 1345,
        "capital": "George Town",
        "code": "KY",
        "code3": "CYM",
        "number": 136
    },
    {
        "cID": 108,
        "name": "Cocos (Keeling) Islands",
        "currency": "AUD",
        "phone": 672,
        "capital": "West Island",
        "code": "CC",
        "code3": "CCK",
        "number": 166
    },
    {
        "cID": 109,
        "name": "Cook Islands",
        "currency": "NZD",
        "phone": 682,
        "capital": "Avarua",
        "code": "CK",
        "code3": "COK",
        "number": 184
    },
    {
        "cID": 110,
        "name": "Falkland Islands (Islas Malvinas)",
        "currency": "FKP",
        "phone": 500,
        "capital": "Stanley",
        "code": "FK",
        "code3": "FLK",
        "number": 238
    },
    {
        "cID": 111,
        "name": "Faroe Islands",
        "currency": "DKK",
        "phone": 298,
        "capital": "Torshavn",
        "code": "FO",
        "code3": "FRO",
        "number": 234
    },
    {
        "cID": 112,
        "name": "South Georgia and the South Sandwich Islands",
        "currency": "GBP",
        "phone": 500,
        "capital": "Grytviken",
        "code": "GS",
        "code3": "SGS",
        "number": 239
    },
    {
        "cID": 113,
        "name": "Northern Mariana Islands",
        "currency": "USD",
        "phone": 1670,
        "capital": "Saipan",
        "code": "MP",
        "code3": "MNP",
        "number": 580
    },
    {
        "cID": 114,
        "name": "Marshall Islands",
        "currency": "USD",
        "phone": 692,
        "capital": "Majuro",
        "code": "MH",
        "code3": "MHL",
        "number": 584
    },
    {
        "cID": 115,
        "name": "U.S. Minor Outlying Islands",
        "currency": "USD",
        "phone": 246,
        "capital": null,
        "code": "UM",
        "code3": "UMI",
        "number": 581
    },
    {
        "cID": 116,
        "name": "Pitcairn Islands",
        "currency": "NZD",
        "phone": 64,
        "capital": "Adamstown",
        "code": "PN",
        "code3": "PCN",
        "number": 612
    },
    {
        "cID": 117,
        "name": "Solomon Islands",
        "currency": "SBD",
        "phone": 677,
        "capital": "Honiara",
        "code": "SB",
        "code3": "SLB",
        "number": 90
    },
    {
        "cID": 118,
        "name": "Turks and Caicos Islands",
        "currency": "USD",
        "phone": 1649,
        "capital": "Cockburn Town",
        "code": "TC",
        "code3": "TCA",
        "number": 796
    },
    {
        "cID": 119,
        "name": "Virgin Islands, U.S.",
        "currency": "USD",
        "phone": 1340,
        "capital": "Charlotte Amalie",
        "code": "VI",
        "code3": "VIR",
        "number": 850
    },
    {
        "cID": 120,
        "name": "Virgin Islands, British",
        "currency": "USD",
        "phone": 1284,
        "capital": "Road Town",
        "code": "VG",
        "code3": "VGB",
        "number": 92
    },
    {
        "cID": 121,
        "name": "India",
        "currency": "INR",
        "phone": 91,
        "capital": "New Delhi",
        "code": "IN",
        "code3": "IND",
        "number": 356
    },
    {
        "cID": 122,
        "name": "Indonesia",
        "currency": "IDR",
        "phone": 62,
        "capital": "Jakarta",
        "code": "cID",
        "code3": "IDN",
        "number": 360
    },
    {
        "cID": 123,
        "name": "Iran",
        "currency": "IRR",
        "phone": 98,
        "capital": "Tehran",
        "code": "IR",
        "code3": "IRN",
        "number": 364
    },
    {
        "cID": 124,
        "name": "Iraq",
        "currency": "IQD",
        "phone": 964,
        "capital": "Baghdad",
        "code": "IQ",
        "code3": "IRQ",
        "number": 368
    },
    {
        "cID": 125,
        "name": "Ireland",
        "currency": "EUR",
        "phone": 353,
        "capital": "Dublin",
        "code": "IE",
        "code3": "IRL",
        "number": 372
    },
    {
        "cID": 126,
        "name": "Iceland",
        "currency": "ISK",
        "phone": 354,
        "capital": "Reykjavik",
        "code": "IS",
        "code3": "ISL",
        "number": 352
    },
    {
        "cID": 127,
        "name": "Israel",
        "currency": "ILS",
        "phone": 972,
        "capital": "Jerusalem",
        "code": "IL",
        "code3": "ISR",
        "number": 376
    },
    {
        "cID": 128,
        "name": "Italy",
        "currency": "EUR",
        "phone": 39,
        "capital": "Rome",
        "code": "IT",
        "code3": "ITA",
        "number": 380
    },
    {
        "cID": 129,
        "name": "Jamaica",
        "currency": "JMD",
        "phone": 1876,
        "capital": "Kingston",
        "code": "JM",
        "code3": "JAM",
        "number": 388
    },
    {
        "cID": 130,
        "name": "Japan",
        "currency": "JPY",
        "phone": 81,
        "capital": "Tokyo",
        "code": "JP",
        "code3": "JPN",
        "number": 392
    },
    {
        "cID": 131,
        "name": "Jersey",
        "currency": "GBP",
        "phone": 44,
        "capital": "Saint Helier",
        "code": "JE",
        "code3": "JEY",
        "number": 832
    },
    {
        "cID": 132,
        "name": "Jordan",
        "currency": "JOD",
        "phone": 962,
        "capital": "Amman",
        "code": "JO",
        "code3": "JOR",
        "number": 400
    },
    {
        "cID": 133,
        "name": "Kiribati",
        "currency": "AUD",
        "phone": 686,
        "capital": "Tarawa",
        "code": "KI",
        "code3": "KIR",
        "number": 296
    },
    {
        "cID": 134,
        "name": "Kosovo",
        "currency": "EUR",
        "phone": 383,
        "capital": "Pristina",
        "code": "XK",
        "code3": "XKX",
        "number": 926
    },
    {
        "cID": 135,
        "name": "Kuwait",
        "currency": "KWD",
        "phone": 965,
        "capital": "Kuwait City",
        "code": "KW",
        "code3": "KWT",
        "number": 414
    },
    {
        "cID": 136,
        "name": "Laos",
        "currency": "LAK",
        "phone": 856,
        "capital": "Vientiane",
        "code": "LA",
        "code3": "LAO",
        "number": 418
    },
    {
        "cID": 137,
        "name": "Lesotho",
        "currency": "LSL",
        "phone": 266,
        "capital": "Maseru",
        "code": "LS",
        "code3": "LSO",
        "number": 426
    },
    {
        "cID": 138,
        "name": "Latvia",
        "currency": "EUR",
        "phone": 371,
        "capital": "Riga",
        "code": "LV",
        "code3": "LVA",
        "number": 428
    },
    {
        "cID": 139,
        "name": "Lebanon",
        "currency": "LBP",
        "phone": 961,
        "capital": "Beirut",
        "code": "LB",
        "code3": "LBN",
        "number": 422
    },
    {
        "cID": 140,
        "name": "Liberia",
        "currency": "LRD",
        "phone": 231,
        "capital": "Monrovia",
        "code": "LR",
        "code3": "LBR",
        "number": 430
    },
    {
        "cID": 141,
        "name": "Libya",
        "currency": "LYD",
        "phone": 218,
        "capital": "Tripolis",
        "code": "LY",
        "code3": "LBY",
        "number": 434
    },
    {
        "cID": 142,
        "name": "Liechtenstein",
        "currency": "CHF",
        "phone": 423,
        "capital": "Vaduz",
        "code": "LI",
        "code3": "LIE",
        "number": 438
    },
    {
        "cID": 143,
        "name": "Lithuania",
        "currency": "EUR",
        "phone": 370,
        "capital": "Vilnius",
        "code": "LT",
        "code3": "LTU",
        "number": 440
    },
    {
        "cID": 144,
        "name": "Luxembourg",
        "currency": "EUR",
        "phone": 352,
        "capital": "Luxembourg",
        "code": "LU",
        "code3": "LUX",
        "number": 442
    },
    {
        "cID": 145,
        "name": "Macao SAR",
        "currency": "MOP",
        "phone": 853,
        "capital": "Macao",
        "code": "MO",
        "code3": "MAC",
        "number": 446
    },
    {
        "cID": 146,
        "name": "Macedonia, Former Yugoslav Republic of",
        "currency": "MKD",
        "phone": 389,
        "capital": "Skopje",
        "code": "MK",
        "code3": "MKD",
        "number": 807
    },
    {
        "cID": 147,
        "name": "Madagascar",
        "currency": "MGA",
        "phone": 261,
        "capital": "Antananarivo",
        "code": "MG",
        "code3": "MDG",
        "number": 450
    },
    {
        "cID": 148,
        "name": "Malaysia",
        "currency": "MYR",
        "phone": 60,
        "capital": "Kuala Lumpur",
        "code": "MY",
        "code3": "MYS",
        "number": 458
    },
    {
        "cID": 149,
        "name": "Malawi",
        "currency": "MWK",
        "phone": 265,
        "capital": "Lilongwe",
        "code": "MW",
        "code3": "MWI",
        "number": 454
    },
    {
        "cID": 150,
        "name": "Maldives",
        "currency": "MVR",
        "phone": 960,
        "capital": "Male",
        "code": "MV",
        "code3": "MDV",
        "number": 462
    },
    {
        "cID": 151,
        "name": "Mali",
        "currency": "XOF",
        "phone": 223,
        "capital": "Bamako",
        "code": "ML",
        "code3": "MLI",
        "number": 466
    },
    {
        "cID": 152,
        "name": "Malta",
        "currency": "EUR",
        "phone": 356,
        "capital": "Valletta",
        "code": "MT",
        "code3": "MLT",
        "number": 470
    },
    {
        "cID": 153,
        "name": "Morocco",
        "currency": "MAD",
        "phone": 212,
        "capital": "Rabat",
        "code": "MA",
        "code3": "MAR",
        "number": 504
    },
    {
        "cID": 154,
        "name": "Martinique",
        "currency": "EUR",
        "phone": 596,
        "capital": "Fort-de-France",
        "code": "MQ",
        "code3": "MTQ",
        "number": 474
    },
    {
        "cID": 155,
        "name": "Mauritius",
        "currency": "MUR",
        "phone": 230,
        "capital": "Port Louis",
        "code": "MU",
        "code3": "MUS",
        "number": 480
    },
    {
        "cID": 156,
        "name": "Mauritania",
        "currency": "MRO",
        "phone": 222,
        "capital": "Nouakchott",
        "code": "MR",
        "code3": "MRT",
        "number": 478
    },
    {
        "cID": 157,
        "name": "Mayotte",
        "currency": "EUR",
        "phone": 269,
        "capital": "Mamoudzou",
        "code": "YT",
        "code3": "MYT",
        "number": 175
    },
    {
        "cID": 158,
        "name": "Mexico",
        "currency": "MXN",
        "phone": 52,
        "capital": "Mexico City",
        "code": "MX",
        "code3": "MEX",
        "number": 484
    },
    {
        "cID": 159,
        "name": "Micronesia",
        "currency": "USD",
        "phone": 691,
        "capital": "Palikir",
        "code": "FM",
        "code3": "FSM",
        "number": 583
    },
    {
        "cID": 160,
        "name": "Mozambique",
        "currency": "MZN",
        "phone": 258,
        "capital": "Maputo",
        "code": "MZ",
        "code3": "MOZ",
        "number": 508
    },
    {
        "cID": 161,
        "name": "Moldova",
        "currency": "MDL",
        "phone": 373,
        "capital": "Chisinau",
        "code": "MD",
        "code3": "MDA",
        "number": 498
    },
    {
        "cID": 162,
        "name": "Monaco",
        "currency": "EUR",
        "phone": 377,
        "capital": "Monaco",
        "code": "MC",
        "code3": "MCO",
        "number": 492
    },
    {
        "cID": 163,
        "name": "Mongolia",
        "currency": "MNT",
        "phone": 976,
        "capital": "Ulan Bator",
        "code": "MN",
        "code3": "MNG",
        "number": 496
    },
    {
        "cID": 164,
        "name": "Montenegro",
        "currency": "EUR",
        "phone": 382,
        "capital": "Podgorica",
        "code": "ME",
        "code3": "MNE",
        "number": 499
    },
    {
        "cID": 165,
        "name": "Montserrat",
        "currency": "XCD",
        "phone": 1664,
        "capital": "Plymouth",
        "code": "MS",
        "code3": "MSR",
        "number": 500
    },
    {
        "cID": 166,
        "name": "Myanmar",
        "currency": "MMK",
        "phone": 95,
        "capital": "Nay Pyi Taw",
        "code": "MM",
        "code3": "MMR",
        "number": 104
    },
    {
        "cID": 167,
        "name": "Namibia",
        "currency": "NAD",
        "phone": 264,
        "capital": "Windhoek",
        "code": "NA",
        "code3": "NAM",
        "number": 516
    },
    {
        "cID": 168,
        "name": "Nauru",
        "currency": "AUD",
        "phone": 674,
        "capital": "Yaren",
        "code": "NR",
        "code3": "NRU",
        "number": 520
    },
    {
        "cID": 169,
        "name": "Nepal",
        "currency": "NPR",
        "phone": 977,
        "capital": "Kathmandu",
        "code": "NP",
        "code3": "NPL",
        "number": 524
    },
    {
        "cID": 170,
        "name": "Nicaragua",
        "currency": "NIO",
        "phone": 505,
        "capital": "Managua",
        "code": "NI",
        "code3": "NIC",
        "number": 558
    },
    {
        "cID": 171,
        "name": "Niger",
        "currency": "XOF",
        "phone": 227,
        "capital": "Niamey",
        "code": "NE",
        "code3": "NER",
        "number": 562
    },
    {
        "cID": 172,
        "name": "Nigeria",
        "currency": "NGN",
        "phone": 234,
        "capital": "Abuja",
        "code": "NG",
        "code3": "NGA",
        "number": 566
    },
    {
        "cID": 173,
        "name": "Niue",
        "currency": "NZD",
        "phone": 683,
        "capital": "Alofi",
        "code": "NU",
        "code3": "NIU",
        "number": 570
    },
    {
        "cID": 174,
        "name": "Norway",
        "currency": "NOK",
        "phone": 47,
        "capital": "Oslo",
        "code": "NO",
        "code3": "NOR",
        "number": 578
    },
    {
        "cID": 175,
        "name": "New Caledonia",
        "currency": "XPF",
        "phone": 687,
        "capital": "Noumea",
        "code": "NC",
        "code3": "NCL",
        "number": 540
    },
    {
        "cID": 176,
        "name": "New Zealand",
        "currency": "NZD",
        "phone": 64,
        "capital": "Wellington",
        "code": "NZ",
        "code3": "NZL",
        "number": 554
    },
    {
        "cID": 177,
        "name": "Oman",
        "currency": "OMR",
        "phone": 968,
        "capital": "Muscat",
        "code": "OM",
        "code3": "OMN",
        "number": 512
    },
    {
        "cID": 178,
        "name": "Palau",
        "currency": "USD",
        "phone": 680,
        "capital": "Melekeok",
        "code": "PW",
        "code3": "PLW",
        "number": 585
    },
    {
        "cID": 179,
        "name": "Panama",
        "currency": "PAB",
        "phone": 507,
        "capital": "Panama City",
        "code": "PA",
        "code3": "PAN",
        "number": 591
    },
    {
        "cID": 180,
        "name": "Papua New Guinea",
        "currency": "PGK",
        "phone": 675,
        "capital": "Port Moresby",
        "code": "PG",
        "code3": "PNG",
        "number": 598
    },
    {
        "cID": 181,
        "name": "Pakistan",
        "currency": "PKR",
        "phone": 92,
        "capital": "Islamabad",
        "code": "PK",
        "code3": "PAK",
        "number": 586
    },
    {
        "cID": 182,
        "name": "Paraguay",
        "currency": "PYG",
        "phone": 595,
        "capital": "Asuncion",
        "code": "PY",
        "code3": "PRY",
        "number": 600
    },
    {
        "cID": 183,
        "name": "Peru",
        "currency": "PEN",
        "phone": 51,
        "capital": "Lima",
        "code": "PE",
        "code3": "PER",
        "number": 604
    },
    {
        "cID": 184,
        "name": "French Polynesia",
        "currency": "XPF",
        "phone": 689,
        "capital": "Papeete",
        "code": "PF",
        "code3": "PYF",
        "number": 258
    },
    {
        "cID": 185,
        "name": "Poland",
        "currency": "PLN",
        "phone": 48,
        "capital": "Warsaw",
        "code": "PL",
        "code3": "POL",
        "number": 616
    },
    {
        "cID": 186,
        "name": "Puerto Rico",
        "currency": "USD",
        "phone": 1787,
        "capital": "San Juan",
        "code": "PR",
        "code3": "PRI",
        "number": 630
    },
    {
        "cID": 187,
        "name": "Portugal",
        "currency": "EUR",
        "phone": 351,
        "capital": "Lisbon",
        "code": "PT",
        "code3": "PRT",
        "number": 620
    },
    {
        "cID": 188,
        "name": "Kenya",
        "currency": "KES",
        "phone": 254,
        "capital": "Nairobi",
        "code": "KE",
        "code3": "KEN",
        "number": 404
    },
    {
        "cID": 189,
        "name": "Kyrgyzstan",
        "currency": "KGS",
        "phone": 996,
        "capital": "Bishkek",
        "code": "KG",
        "code3": "KGZ",
        "number": 417
    },
    {
        "cID": 190,
        "name": "United Kingdom",
        "currency": "GBP",
        "phone": 44,
        "capital": "London",
        "code": "GB",
        "code3": "GBR",
        "number": 826
    },
    {
        "cID": 191,
        "name": "Central African Republic",
        "currency": "XAF",
        "phone": 236,
        "capital": "Bangui",
        "code": "CF",
        "code3": "CAF",
        "number": 140
    },
    {
        "cID": 192,
        "name": "Congo (DRC)",
        "currency": "CDF",
        "phone": 242,
        "capital": "Kinshasa",
        "code": "CD",
        "code3": "COD",
        "number": 180
    },
    {
        "cID": 193,
        "name": "Dominican Republic",
        "currency": "DOP",
        "phone": 1809,
        "capital": "Santo Domingo",
        "code": "DO",
        "code3": "DOM",
        "number": 214
    },
    {
        "cID": 194,
        "name": "Czech Republic",
        "currency": "CZK",
        "phone": 420,
        "capital": "Prague",
        "code": "CZ",
        "code3": "CZE",
        "number": 203
    },
    {
        "cID": 195,
        "name": "Romania",
        "currency": "RON",
        "phone": 40,
        "capital": "Bucharest",
        "code": "RO",
        "code3": "ROM",
        "number": 642
    },
    {
        "cID": 196,
        "name": "Rwanda",
        "currency": "RWF",
        "phone": 250,
        "capital": "Kigali",
        "code": "RW",
        "code3": "RWA",
        "number": 646
    },
    {
        "cID": 197,
        "name": "Russia",
        "currency": "RUB",
        "phone": 70,
        "capital": "Moscow",
        "code": "RU",
        "code3": "RUS",
        "number": 643
    },
    {
        "cID": 198,
        "currency": "MAD",
        "phone": 212,
        "capital": "El-Aaiun",
        "code": "EH",
        "code3": "ESH",
        "number": 732
    },
    {
        "cID": 199,
        "name": "Bonaire, Sint Eustatius and Saba",
        "currency": "USD",
        "phone": 599,
        "capital": "Kralendijk",
        "code": "BQ",
        "code3": "BES",
        "number": 535
    },
    {
        "cID": 200,
        "name": "Samoa",
        "currency": "WST",
        "phone": 684,
        "capital": "Apia",
        "code": "WS",
        "code3": "WSM",
        "number": 882
    },
    {
        "cID": 201,
        "name": "American Samoa",
        "currency": "USD",
        "phone": 1684,
        "capital": "Pago Pago",
        "code": "AS",
        "code3": "ASM",
        "number": 16
    },
    {
        "cID": 202,
        "name": "San Marino",
        "currency": "EUR",
        "phone": 378,
        "capital": "San Marino",
        "code": "SM",
        "code3": "SMR",
        "number": 674
    },
    {
        "cID": 203,
        "name": "Saint Helena, Ascension and Tristan da Cunha",
        "currency": "SHP",
        "phone": 290,
        "capital": "Jamestown",
        "code": "SH",
        "code3": "SHN",
        "number": 654
    },
    {
        "cID": 204,
        "name": "Saint Lucia",
        "currency": "XCD",
        "phone": 1758,
        "capital": "Castries",
        "code": "LC",
        "code3": "LCA",
        "number": 662
    },
    {
        "cID": 205,
        "name": "Saint Barthélemy",
        "currency": "EUR",
        "phone": 590,
        "capital": "Gustavia",
        "code": "BL",
        "code3": "BLM",
        "number": 652
    },
    {
        "cID": 206,
        "name": "Saint Kitts and Nevis",
        "currency": "XCD",
        "phone": 1869,
        "capital": "Basseterre",
        "code": "KN",
        "code3": "KNA",
        "number": 659
    },
    {
        "cID": 207,
        "name": "Sint Maarten (Dutch part)",
        "currency": "ANG",
        "phone": 1,
        "capital": "Philipsburg",
        "code": "SX",
        "code3": "SXM",
        "number": 534
    },
    {
        "cID": 208,
        "name": "Saint Pierre and Miquelon",
        "currency": "EUR",
        "phone": 508,
        "capital": "Saint-Pierre",
        "code": "PM",
        "code3": "SPM",
        "number": 666
    },
    {
        "cID": 209,
        "name": "São Tomé and Príncipe",
        "currency": "STD",
        "phone": 239,
        "capital": "Sao Tome",
        "code": "ST",
        "code3": "STP",
        "number": 678
    },
    {
        "cID": 210,
        "name": "Saint Vincent and the Grenadines",
        "currency": "XCD",
        "phone": 1784,
        "capital": "Kingstown",
        "code": "VC",
        "code3": "VCT",
        "number": 670
    },
    {
        "cID": 211,
        "name": "Senegal",
        "currency": "XOF",
        "phone": 221,
        "capital": "Dakar",
        "code": "SN",
        "code3": "SEN",
        "number": 686
    },
    {
        "cID": 212,
        "name": "Sierra Leone",
        "currency": "SLL",
        "phone": 232,
        "capital": "Freetown",
        "code": "SL",
        "code3": "SLE",
        "number": 694
    },
    {
        "cID": 213,
        "name": "Serbia",
        "currency": "RSD",
        "phone": 381,
        "capital": "Belgrade",
        "code": "RS",
        "code3": "SRB",
        "number": 688
    },
    {
        "cID": 215,
        "name": "Seychelles",
        "currency": "SCR",
        "phone": 248,
        "capital": "Victoria",
        "code": "SC",
        "code3": "SYC",
        "number": 690
    },
    {
        "cID": 216,
        "name": "Syria",
        "currency": "SYP",
        "phone": 963,
        "capital": "Damascus",
        "code": "SY",
        "code3": "SYR",
        "number": 760
    },
    {
        "cID": 217,
        "name": "Somalia",
        "currency": "SOS",
        "phone": 252,
        "capital": "Mogadishu",
        "code": "SO",
        "code3": "SOM",
        "number": 706
    },
    {
        "cID": 218,
        "name": "Sri Lanka",
        "currency": "LKR",
        "phone": 94,
        "capital": "Colombo",
        "code": "LK",
        "code3": "LKA",
        "number": 144
    },
    {
        "cID": 219,
        "name": "Swaziland",
        "currency": "SZL",
        "phone": 268,
        "capital": "Mbabane",
        "code": "SZ",
        "code3": "SWZ",
        "number": 748
    },
    {
        "cID": 220,
        "name": "Sudan",
        "currency": "SDG",
        "phone": 249,
        "capital": "Khartoum",
        "code": "SD",
        "code3": "SDN",
        "number": 736
    },
    {
        "cID": 221,
        "name": "South Sudan",
        "currency": "SSP",
        "phone": 211,
        "capital": "Juba",
        "code": "SS",
        "code3": "SSD",
        "number": 728
    },
    {
        "cID": 222,
        "name": "Sweden",
        "currency": "SEK",
        "phone": 46,
        "capital": "Stockholm",
        "code": "SE",
        "code3": "SWE",
        "number": 752
    },
    {
        "cID": 223,
        "name": "Switzerland",
        "currency": "CHF",
        "phone": 41,
        "capital": "Berne",
        "code": "CH",
        "code3": "CHE",
        "number": 756
    },
    {
        "cID": 224,
        "name": "Suriname",
        "currency": "SRD",
        "phone": 597,
        "capital": "Paramaribo",
        "code": "SR",
        "code3": "SUR",
        "number": 740
    },
    {
        "cID": 225,
        "name": "Jan Mayen",
        "currency": "NOK",
        "phone": 47,
        "capital": "Longyearbyen",
        "code": "SJ",
        "code3": "SJM",
        "number": 744
    },
    {
        "cID": 226,
        "name": "Thailand",
        "currency": "THB",
        "phone": 66,
        "capital": "Bangkok",
        "code": "TH",
        "code3": "THA",
        "number": 764
    },
    {
        "cID": 227,
        "name": "Taiwan",
        "currency": "TWD",
        "phone": 886,
        "capital": "Taipei",
        "code": "TW",
        "code3": "TWN",
        "number": 158
    },
    {
        "cID": 228,
        "name": "Tajikistan",
        "currency": "TJS",
        "phone": 992,
        "capital": "Dushanbe",
        "code": "TJ",
        "code3": "TJK",
        "number": 762
    },
    {
        "cID": 229,
        "name": "Tanzania",
        "currency": "TZS",
        "phone": 255,
        "capital": "Dodoma",
        "code": "TZ",
        "code3": "TZA",
        "number": 834
    },
    {
        "cID": 230,
        "name": "French Southern and Antarctic Lands",
        "currency": "EUR",
        "phone": 262,
        "capital": "Port-aux-Francais",
        "code": "TF",
        "code3": "ATF",
        "number": 260
    },
    {
        "cID": 231,
        "name": "British Indian Ocean Territory",
        "currency": "USD",
        "phone": 246,
        "capital": "Diego Garcia",
        "code": "IO",
        "code3": "IOT",
        "number": 86
    },
    {
        "cID": 232,
        "name": "Palestinian Authority",
        "currency": "ILS",
        "phone": 970,
        "capital": "East Jerusalem",
        "code": "PS",
        "code3": "PSE",
        "number": 275
    },
    {
        "cID": 233,
        "name": "Democratic Republic of Timor-Leste",
        "currency": "USD",
        "phone": 670,
        "capital": "Dili",
        "code": "TL",
        "code3": "TLS",
        "number": 626
    },
    {
        "cID": 234,
        "name": "Togo",
        "currency": "XOF",
        "phone": 228,
        "capital": "Lome",
        "code": "TG",
        "code3": "TGO",
        "number": 768
    },
    {
        "cID": 235,
        "name": "Tonga",
        "currency": "TOP",
        "phone": 676,
        "capital": "Nuku'alofa",
        "code": "TO",
        "code3": "TON",
        "number": 776
    },
    {
        "cID": 236,
        "name": "Tokelau",
        "currency": "NZD",
        "phone": 690,
        "capital": "Nukunonu",
        "code": "TK",
        "code3": "TKL",
        "number": 772
    },
    {
        "cID": 237,
        "name": "Trinidad and Tobago",
        "currency": "TTD",
        "phone": 1868,
        "capital": "Port of Spain",
        "code": "TT",
        "code3": "TTO",
        "number": 780
    },
    {
        "cID": 238,
        "name": "Tunisia",
        "currency": "TND",
        "phone": 216,
        "capital": "Tunis",
        "code": "TN",
        "code3": "TUN",
        "number": 788
    },
    {
        "cID": 239,
        "name": "Turkmenistan",
        "currency": "TMT",
        "phone": 7370,
        "capital": "Ashgabat",
        "code": "TM",
        "code3": "TKM",
        "number": 795
    },
    {
        "cID": 240,
        "name": "Turkey",
        "currency": "TRY",
        "phone": 90,
        "capital": "Ankara",
        "code": "TR",
        "code3": "TUR",
        "number": 792
    },
    {
        "cID": 241,
        "name": "Tuvalu",
        "currency": "AUD",
        "phone": 688,
        "capital": "Funafuti",
        "code": "TV",
        "code3": "TUV",
        "number": 798
    },
    {
        "cID": 242,
        "name": "Ukraine",
        "currency": "UAH",
        "phone": 380,
        "capital": "Kiev",
        "code": "UA",
        "code3": "UKR",
        "number": 804
    },
    {
        "cID": 243,
        "name": "Uganda",
        "currency": "UGX",
        "phone": 256,
        "capital": "Kampala",
        "code": "UG",
        "code3": "UGA",
        "number": 800
    },
    {
        "cID": 244,
        "name": "Uruguay",
        "currency": "UYU",
        "phone": 598,
        "capital": "Montevideo",
        "code": "UY",
        "code3": "URY",
        "number": 858
    },
    {
        "cID": 245,
        "name": "Uzbekistan",
        "currency": "UZS",
        "phone": 998,
        "capital": "Tashkent",
        "code": "UZ",
        "code3": "UZB",
        "number": 860
    },
    {
        "cID": 246,
        "name": "Vanuatu",
        "currency": "VUV",
        "phone": 678,
        "capital": "Port Vila",
        "code": "VU",
        "code3": "VUT",
        "number": 548
    },
    {
        "cID": 247,
        "name": "Vatican City",
        "currency": "EUR",
        "phone": 39,
        "capital": "Vaticano",
        "code": "VA",
        "code3": "VAT",
        "number": 336
    },
    {
        "cID": 248,
        "name": "Bolivarian Republic of Venezuela",
        "currency": "VEF",
        "phone": 58,
        "capital": "Caracas",
        "code": "VE",
        "code3": "VEN",
        "number": 862
    },
    {
        "cID": 249,
        "name": "Vietnam",
        "currency": "VND",
        "phone": 84,
        "capital": "Hanoi",
        "code": "VN",
        "code3": "VNM",
        "number": 704
    },
    {
        "cID": 250,
        "name": "Wallis and Futuna",
        "currency": "XPF",
        "phone": 681,
        "capital": "Mata Utu",
        "code": "WF",
        "code3": "WLF",
        "number": 876
    },
    {
        "cID": 251,
        "name": "Zambia",
        "currency": "ZMW",
        "phone": 260,
        "capital": "Lusaka",
        "code": "ZM",
        "code3": "ZMB",
        "number": 894
    },
    {
        "cID": 252,
        "name": "Zimbabwe",
        "currency": "ZWL",
        "phone": 263,
        "capital": "Harare",
        "code": "ZW",
        "code3": "ZWE",
        "number": 716
    }
]
module.exports = COUNTRIES