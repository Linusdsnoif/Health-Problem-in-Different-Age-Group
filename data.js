// Age groups data
const ageGroups = [
    { id: 'infant', label: 'Infant', ageRange: '0-2 years', color: '#FFB6C1', start: 0, end: 2 },
    { id: 'toddler', label: 'Toddler', ageRange: '3-5 years', color: '#FFDAB9', start: 3, end: 5 },
    { id: 'child', label: 'Child', ageRange: '6-12 years', color: '#B0E0E6', start: 6, end: 12 },
    { id: 'teen', label: 'Teen', ageRange: '13-17 years', color: '#98FB98', start: 13, end: 17 },
    { id: 'young-adult', label: 'Young Adult', ageRange: '18-35 years', color: '#DDA0DD', start: 18, end: 35 },
    { id: 'adult', label: 'Adult', ageRange: '36-55 years', color: '#87CEFA', start: 36, end: 55 },
    { id: 'senior', label: 'Senior', ageRange: '56-75 years', color: '#E6E6FA', start: 56, end: 75 },
    { id: 'elderly', label: 'Elderly', ageRange: '76+ years', color: '#D3D3D3', start: 76, end: 100 },
];

// Surgical procedures data by age group

const surgicalData = {
    "infant": {
        "f": [
            {
                "procedure": "Hepatobiliary and Pancreatic System",
                "count": 4,
                "percentage": 0.32706,
                "mortality_rate": 50.0,
                "avg_operation_time_seconds": 6.56,
                "avg_hospital_stay_days": 60.5
            },
            {
                "procedure": "Other",
                "count": 4,
                "percentage": 0.50251,
                "mortality_rate": 50.0,
                "avg_operation_time_seconds": 1.73,
                "avg_hospital_stay_days": 66.25
            },
            {
                "procedure": "Cardiovascular System",
                "count": 1,
                "percentage": 0.40984,
                "mortality_rate": 100.0,
                "avg_operation_time_seconds": 2.5,
                "avg_hospital_stay_days": 31.0
            }
        ],
        "m": [
            {
                "procedure": "Hepatobiliary and Pancreatic System",
                "count": 1,
                "percentage": 0.08177,
                "mortality_rate": 0.0,
                "avg_operation_time_seconds": 6.56,
                "avg_hospital_stay_days": 28.0
            }
        ]
    },
    "toddler": {
        "m": [
            {
                "procedure": "Other",
                "count": 1,
                "percentage": 0.12563,
                "mortality_rate": 0.0,
                "avg_operation_time_seconds": 0.33,
                "avg_hospital_stay_days": 28.0
            },
            {
                "procedure": "Genitourinary System",
                "count": 2,
                "percentage": 0.6006,
                "mortality_rate": 0.0,
                "avg_operation_time_seconds": 2.5,
                "avg_hospital_stay_days": 40.0
            }
        ]
    },
    "child": {
        "f": [
            {
                "procedure": "Hepatobiliary and Pancreatic System",
                "count": 3,
                "percentage": 0.2453,
                "mortality_rate": 0.0,
                "avg_operation_time_seconds": 8.5,
                "avg_hospital_stay_days": 141.0
            },
            {
                "procedure": "Other",
                "count": 5,
                "percentage": 0.62814,
                "mortality_rate": 0.0,
                "avg_operation_time_seconds": 1.2,
                "avg_hospital_stay_days": 128.2
            },
            {
                "procedure": "Reproductive System",
                "count": 2,
                "percentage": 0.33167,
                "mortality_rate": 0.0,
                "avg_operation_time_seconds": 1.17,
                "avg_hospital_stay_days": 4.0
            },
            {
                "procedure": "Genitourinary System",
                "count": 4,
                "percentage": 1.2012,
                "mortality_rate": 0.0,
                "avg_operation_time_seconds": 3.64,
                "avg_hospital_stay_days": 19.0
            },
            {
                "procedure": "Cardiovascular System",
                "count": 3,
                "percentage": 1.22951,
                "mortality_rate": 0.0,
                "avg_operation_time_seconds": 1.97,
                "avg_hospital_stay_days": 21.0
            }
        ],
        "m": [
            {
                "procedure": "Hepatobiliary and Pancreatic System",
                "count": 2,
                "percentage": 0.16353,
                "mortality_rate": 0.0,
                "avg_operation_time_seconds": 5.54,
                "avg_hospital_stay_days": 34.0
            },
            {
                "procedure": "Other",
                "count": 1,
                "percentage": 0.12563,
                "mortality_rate": 0.0,
                "avg_operation_time_seconds": 0.75,
                "avg_hospital_stay_days": 15.0
            },
            {
                "procedure": "Genitourinary System",
                "count": 5,
                "percentage": 1.5015,
                "mortality_rate": 0.0,
                "avg_operation_time_seconds": 4.29,
                "avg_hospital_stay_days": 16.4
            }
        ]
    },
    "teen": {
        "f": [
            {
                "procedure": "Other",
                "count": 1,
                "percentage": 0.12563,
                "mortality_rate": 0.0,
                "avg_operation_time_seconds": 0.33,
                "avg_hospital_stay_days": 5.0
            },
            {
                "procedure": "Respiratory System",
                "count": 1,
                "percentage": 0.13947,
                "mortality_rate": 0.0,
                "avg_operation_time_seconds": 0.58,
                "avg_hospital_stay_days": 5.0
            },
            {
                "procedure": "Genitourinary System",
                "count": 2,
                "percentage": 0.6006,
                "mortality_rate": 0.0,
                "avg_operation_time_seconds": 4.04,
                "avg_hospital_stay_days": 20.5
            },
            {
                "procedure": "Cardiovascular System",
                "count": 1,
                "percentage": 0.40984,
                "mortality_rate": 0.0,
                "avg_operation_time_seconds": 0.75,
                "avg_hospital_stay_days": 21.0
            },
            {
                "procedure": "Neurological System",
                "count": 2,
                "percentage": 22.22222,
                "mortality_rate": 0.0,
                "avg_operation_time_seconds": 0.5,
                "avg_hospital_stay_days": 1.0
            }
        ],
        "m": [
            {
                "procedure": "Gastrointestinal (GI) System",
                "count": 3,
                "percentage": 0.1503,
                "mortality_rate": 0.0,
                "avg_operation_time_seconds": 0.86,
                "avg_hospital_stay_days": 4.67
            },
            {
                "procedure": "Hepatobiliary and Pancreatic System",
                "count": 1,
                "percentage": 0.08177,
                "mortality_rate": 0.0,
                "avg_operation_time_seconds": 7.17,
                "avg_hospital_stay_days": 9.0
            },
            {
                "procedure": "Other",
                "count": 3,
                "percentage": 0.37688,
                "mortality_rate": 0.0,
                "avg_operation_time_seconds": 0.81,
                "avg_hospital_stay_days": 3.33
            },
            {
                "procedure": "Respiratory System",
                "count": 1,
                "percentage": 0.13947,
                "mortality_rate": 0.0,
                "avg_operation_time_seconds": 0.47,
                "avg_hospital_stay_days": 6.0
            },
            {
                "procedure": "Genitourinary System",
                "count": 1,
                "percentage": 0.3003,
                "mortality_rate": 0.0,
                "avg_operation_time_seconds": 4.25,
                "avg_hospital_stay_days": 15.0
            },
            {
                "procedure": "Endocrine System",
                "count": 1,
                "percentage": 0.30769,
                "mortality_rate": 0.0,
                "avg_operation_time_seconds": 5.0,
                "avg_hospital_stay_days": 9.0
            },
            {
                "procedure": "Cardiovascular System",
                "count": 2,
                "percentage": 0.81967,
                "mortality_rate": 0.0,
                "avg_operation_time_seconds": 2.42,
                "avg_hospital_stay_days": 8.0
            }
        ]
    },
    "young-adult": {
        "f": [
            {
                "procedure": "Gastrointestinal (GI) System",
                "count": 28,
                "percentage": 1.40281,
                "mortality_rate": 0.0,
                "avg_operation_time_seconds": 1.72,
                "avg_hospital_stay_days": 8.32
            },
            {
                "procedure": "Hepatobiliary and Pancreatic System",
                "count": 43,
                "percentage": 3.51594,
                "mortality_rate": 2.33,
                "avg_operation_time_seconds": 2.6,
                "avg_hospital_stay_days": 7.7
            },
            {
                "procedure": "Other",
                "count": 57,
                "percentage": 7.1608,
                "mortality_rate": 1.75,
                "avg_operation_time_seconds": 1.67,
                "avg_hospital_stay_days": 7.37
            },
            {
                "procedure": "Respiratory System",
                "count": 13,
                "percentage": 1.81311,
                "mortality_rate": 0.0,
                "avg_operation_time_seconds": 1.72,
                "avg_hospital_stay_days": 5.31
            },
            {
                "procedure": "Reproductive System",
                "count": 74,
                "percentage": 12.27197,
                "mortality_rate": 1.35,
                "avg_operation_time_seconds": 1.56,
                "avg_hospital_stay_days": 8.81
            },
            {
                "procedure": "Genitourinary System",
                "count": 13,
                "percentage": 3.9039,
                "mortality_rate": 0.0,
                "avg_operation_time_seconds": 3.66,
                "avg_hospital_stay_days": 13.23
            },
            {
                "procedure": "Endocrine System",
                "count": 38,
                "percentage": 11.69231,
                "mortality_rate": 0.0,
                "avg_operation_time_seconds": 2.38,
                "avg_hospital_stay_days": 4.53
            },
            {
                "procedure": "Cardiovascular System",
                "count": 2,
                "percentage": 0.81967,
                "mortality_rate": 0.0,
                "avg_operation_time_seconds": 1.08,
                "avg_hospital_stay_days": 2.0
            },
            {
                "procedure": "Lymphatic System",
                "count": 5,
                "percentage": 7.35294,
                "mortality_rate": 0.0,
                "avg_operation_time_seconds": 1.65,
                "avg_hospital_stay_days": 6.0
            },
            {
                "procedure": "Musculoskeletal System",
                "count": 1,
                "percentage": 10.0,
                "mortality_rate": 0.0,
                "avg_operation_time_seconds": 0.5,
                "avg_hospital_stay_days": 3.0
            },
            {
                "procedure": "Neurological System",
                "count": 1,
                "percentage": 11.11111,
                "mortality_rate": 0.0,
                "avg_operation_time_seconds": 0.5,
                "avg_hospital_stay_days": 15.0
            }
        ],
        "m": [
            {
                "procedure": "Gastrointestinal (GI) System",
                "count": 50,
                "percentage": 2.50501,
                "mortality_rate": 2.0,
                "avg_operation_time_seconds": 1.6,
                "avg_hospital_stay_days": 7.72
            },
            {
                "procedure": "Hepatobiliary and Pancreatic System",
                "count": 58,
                "percentage": 4.74244,
                "mortality_rate": 0.0,
                "avg_operation_time_seconds": 3.37,
                "avg_hospital_stay_days": 10.66
            },
            {
                "procedure": "Other",
                "count": 49,
                "percentage": 6.15578,
                "mortality_rate": 0.0,
                "avg_operation_time_seconds": 1.34,
                "avg_hospital_stay_days": 11.18
            },
            {
                "procedure": "Respiratory System",
                "count": 20,
                "percentage": 2.7894,
                "mortality_rate": 0.0,
                "avg_operation_time_seconds": 1.61,
                "avg_hospital_stay_days": 5.55
            },
            {
                "procedure": "Reproductive System",
                "count": 2,
                "percentage": 0.33167,
                "mortality_rate": 0.0,
                "avg_operation_time_seconds": 0.56,
                "avg_hospital_stay_days": 2.5
            },
            {
                "procedure": "Genitourinary System",
                "count": 27,
                "percentage": 8.10811,
                "mortality_rate": 3.7,
                "avg_operation_time_seconds": 3.16,
                "avg_hospital_stay_days": 13.63
            },
            {
                "procedure": "Endocrine System",
                "count": 17,
                "percentage": 5.23077,
                "mortality_rate": 0.0,
                "avg_operation_time_seconds": 2.34,
                "avg_hospital_stay_days": 5.94
            },
            {
                "procedure": "Cardiovascular System",
                "count": 8,
                "percentage": 3.27869,
                "mortality_rate": 0.0,
                "avg_operation_time_seconds": 2.15,
                "avg_hospital_stay_days": 10.38
            },
            {
                "procedure": "Lymphatic System",
                "count": 5,
                "percentage": 7.35294,
                "mortality_rate": 0.0,
                "avg_operation_time_seconds": 0.95,
                "avg_hospital_stay_days": 5.4
            },
            {
                "procedure": "Integumentary System",
                "count": 2,
                "percentage": 3.125,
                "mortality_rate": 0.0,
                "avg_operation_time_seconds": 0.97,
                "avg_hospital_stay_days": 4.0
            },
            {
                "procedure": "Neurological System",
                "count": 5,
                "percentage": 55.55556,
                "mortality_rate": 0.0,
                "avg_operation_time_seconds": 0.52,
                "avg_hospital_stay_days": 0.8
            }
        ]
    },
    "adult": {
        "f": [
            {
                "procedure": "Gastrointestinal (GI) System",
                "count": 219,
                "percentage": 10.97194,
                "mortality_rate": 0.46,
                "avg_operation_time_seconds": 2.28,
                "avg_hospital_stay_days": 9.07
            },
            {
                "procedure": "Hepatobiliary and Pancreatic System",
                "count": 200,
                "percentage": 16.35323,
                "mortality_rate": 0.5,
                "avg_operation_time_seconds": 2.19,
                "avg_hospital_stay_days": 7.48
            },
            {
                "procedure": "Other",
                "count": 157,
                "percentage": 19.72362,
                "mortality_rate": 0.0,
                "avg_operation_time_seconds": 1.53,
                "avg_hospital_stay_days": 9.83
            },
            {
                "procedure": "Respiratory System",
                "count": 77,
                "percentage": 10.73919,
                "mortality_rate": 0.0,
                "avg_operation_time_seconds": 1.99,
                "avg_hospital_stay_days": 6.06
            },
            {
                "procedure": "Reproductive System",
                "count": 311,
                "percentage": 51.57546,
                "mortality_rate": 0.64,
                "avg_operation_time_seconds": 1.55,
                "avg_hospital_stay_days": 6.44
            },
            {
                "procedure": "Genitourinary System",
                "count": 59,
                "percentage": 17.71772,
                "mortality_rate": 0.0,
                "avg_operation_time_seconds": 3.12,
                "avg_hospital_stay_days": 11.95
            },
            {
                "procedure": "Endocrine System",
                "count": 99,
                "percentage": 30.46154,
                "mortality_rate": 0.0,
                "avg_operation_time_seconds": 2.06,
                "avg_hospital_stay_days": 4.16
            },
            {
                "procedure": "Cardiovascular System",
                "count": 36,
                "percentage": 14.7541,
                "mortality_rate": 0.0,
                "avg_operation_time_seconds": 1.71,
                "avg_hospital_stay_days": 5.17
            },
            {
                "procedure": "Lymphatic System",
                "count": 13,
                "percentage": 19.11765,
                "mortality_rate": 0.0,
                "avg_operation_time_seconds": 1.25,
                "avg_hospital_stay_days": 8.54
            },
            {
                "procedure": "Integumentary System",
                "count": 11,
                "percentage": 17.1875,
                "mortality_rate": 0.0,
                "avg_operation_time_seconds": 0.59,
                "avg_hospital_stay_days": 55.55
            },
            {
                "procedure": "Musculoskeletal System",
                "count": 3,
                "percentage": 30.0,
                "mortality_rate": 0.0,
                "avg_operation_time_seconds": 2.28,
                "avg_hospital_stay_days": 48.0
            }
        ],
        "m": [
            {
                "procedure": "Gastrointestinal (GI) System",
                "count": 225,
                "percentage": 11.27255,
                "mortality_rate": 1.33,
                "avg_operation_time_seconds": 2.34,
                "avg_hospital_stay_days": 10.75
            },
            {
                "procedure": "Hepatobiliary and Pancreatic System",
                "count": 204,
                "percentage": 16.68029,
                "mortality_rate": 0.49,
                "avg_operation_time_seconds": 2.92,
                "avg_hospital_stay_days": 10.58
            },
            {
                "procedure": "Other",
                "count": 113,
                "percentage": 14.19598,
                "mortality_rate": 0.88,
                "avg_operation_time_seconds": 1.59,
                "avg_hospital_stay_days": 15.52
            },
            {
                "procedure": "Respiratory System",
                "count": 61,
                "percentage": 8.50767,
                "mortality_rate": 0.0,
                "avg_operation_time_seconds": 2.52,
                "avg_hospital_stay_days": 9.74
            },
            {
                "procedure": "Genitourinary System",
                "count": 62,
                "percentage": 18.61862,
                "mortality_rate": 0.0,
                "avg_operation_time_seconds": 3.28,
                "avg_hospital_stay_days": 11.1
            },
            {
                "procedure": "Endocrine System",
                "count": 48,
                "percentage": 14.76923,
                "mortality_rate": 0.0,
                "avg_operation_time_seconds": 2.26,
                "avg_hospital_stay_days": 4.85
            },
            {
                "procedure": "Cardiovascular System",
                "count": 33,
                "percentage": 13.52459,
                "mortality_rate": 6.06,
                "avg_operation_time_seconds": 2.34,
                "avg_hospital_stay_days": 14.55
            },
            {
                "procedure": "Lymphatic System",
                "count": 11,
                "percentage": 16.17647,
                "mortality_rate": 0.0,
                "avg_operation_time_seconds": 2.22,
                "avg_hospital_stay_days": 18.82
            },
            {
                "procedure": "Integumentary System",
                "count": 16,
                "percentage": 25.0,
                "mortality_rate": 0.0,
                "avg_operation_time_seconds": 0.76,
                "avg_hospital_stay_days": 68.19
            },
            {
                "procedure": "Musculoskeletal System",
                "count": 1,
                "percentage": 10.0,
                "mortality_rate": 0.0,
                "avg_operation_time_seconds": 1.15,
                "avg_hospital_stay_days": 83.0
            },
            {
                "procedure": "Neurological System",
                "count": 1,
                "percentage": 11.11111,
                "mortality_rate": 0.0,
                "avg_operation_time_seconds": 0.42,
                "avg_hospital_stay_days": 1.0
            }
        ]
    },
    "senior": {
        "f": [
            {
                "procedure": "Gastrointestinal (GI) System",
                "count": 397,
                "percentage": 19.88978,
                "mortality_rate": 0.25,
                "avg_operation_time_seconds": 2.2,
                "avg_hospital_stay_days": 10.16
            },
            {
                "procedure": "Hepatobiliary and Pancreatic System",
                "count": 244,
                "percentage": 19.95094,
                "mortality_rate": 0.0,
                "avg_operation_time_seconds": 2.65,
                "avg_hospital_stay_days": 9.38
            },
            {
                "procedure": "Other",
                "count": 150,
                "percentage": 18.84422,
                "mortality_rate": 2.0,
                "avg_operation_time_seconds": 1.7,
                "avg_hospital_stay_days": 10.74
            },
            {
                "procedure": "Respiratory System",
                "count": 197,
                "percentage": 27.47559,
                "mortality_rate": 0.0,
                "avg_operation_time_seconds": 2.18,
                "avg_hospital_stay_days": 6.86
            },
            {
                "procedure": "Reproductive System",
                "count": 203,
                "percentage": 33.66501,
                "mortality_rate": 0.0,
                "avg_operation_time_seconds": 1.42,
                "avg_hospital_stay_days": 6.88
            },
            {
                "procedure": "Genitourinary System",
                "count": 38,
                "percentage": 11.41141,
                "mortality_rate": 0.0,
                "avg_operation_time_seconds": 2.87,
                "avg_hospital_stay_days": 11.92
            },
            {
                "procedure": "Endocrine System",
                "count": 76,
                "percentage": 23.38462,
                "mortality_rate": 0.0,
                "avg_operation_time_seconds": 1.76,
                "avg_hospital_stay_days": 4.49
            },
            {
                "procedure": "Cardiovascular System",
                "count": 53,
                "percentage": 21.72131,
                "mortality_rate": 0.0,
                "avg_operation_time_seconds": 1.63,
                "avg_hospital_stay_days": 3.34
            },
            {
                "procedure": "Lymphatic System",
                "count": 17,
                "percentage": 25.0,
                "mortality_rate": 0.0,
                "avg_operation_time_seconds": 1.45,
                "avg_hospital_stay_days": 7.47
            },
            {
                "procedure": "Integumentary System",
                "count": 2,
                "percentage": 3.125,
                "mortality_rate": 0.0,
                "avg_operation_time_seconds": 0.63,
                "avg_hospital_stay_days": 15.5
            },
            {
                "procedure": "Musculoskeletal System",
                "count": 1,
                "percentage": 10.0,
                "mortality_rate": 0.0,
                "avg_operation_time_seconds": 2.17,
                "avg_hospital_stay_days": 8.0
            }
        ],
        "m": [
            {
                "procedure": "Gastrointestinal (GI) System",
                "count": 788,
                "percentage": 39.47896,
                "mortality_rate": 0.89,
                "avg_operation_time_seconds": 2.47,
                "avg_hospital_stay_days": 10.46
            },
            {
                "procedure": "Hepatobiliary and Pancreatic System",
                "count": 363,
                "percentage": 29.68111,
                "mortality_rate": 0.28,
                "avg_operation_time_seconds": 3.08,
                "avg_hospital_stay_days": 12.23
            },
            {
                "procedure": "Other",
                "count": 187,
                "percentage": 23.49246,
                "mortality_rate": 4.28,
                "avg_operation_time_seconds": 2.09,
                "avg_hospital_stay_days": 14.12
            },
            {
                "procedure": "Respiratory System",
                "count": 252,
                "percentage": 35.14644,
                "mortality_rate": 1.59,
                "avg_operation_time_seconds": 2.68,
                "avg_hospital_stay_days": 12.21
            },
            {
                "procedure": "Reproductive System",
                "count": 1,
                "percentage": 0.16584,
                "mortality_rate": 0.0,
                "avg_operation_time_seconds": 0.75,
                "avg_hospital_stay_days": 5.0
            },
            {
                "procedure": "Genitourinary System",
                "count": 106,
                "percentage": 31.83183,
                "mortality_rate": 0.94,
                "avg_operation_time_seconds": 3.03,
                "avg_hospital_stay_days": 9.59
            },
            {
                "procedure": "Endocrine System",
                "count": 37,
                "percentage": 11.38462,
                "mortality_rate": 0.0,
                "avg_operation_time_seconds": 1.95,
                "avg_hospital_stay_days": 5.11
            },
            {
                "procedure": "Cardiovascular System",
                "count": 70,
                "percentage": 28.68852,
                "mortality_rate": 0.0,
                "avg_operation_time_seconds": 2.82,
                "avg_hospital_stay_days": 8.73
            },
            {
                "procedure": "Lymphatic System",
                "count": 12,
                "percentage": 17.64706,
                "mortality_rate": 0.0,
                "avg_operation_time_seconds": 2.13,
                "avg_hospital_stay_days": 5.33
            },
            {
                "procedure": "Integumentary System",
                "count": 13,
                "percentage": 20.3125,
                "mortality_rate": 7.69,
                "avg_operation_time_seconds": 1.45,
                "avg_hospital_stay_days": 68.46
            },
            {
                "procedure": "Musculoskeletal System",
                "count": 3,
                "percentage": 30.0,
                "mortality_rate": 0.0,
                "avg_operation_time_seconds": 1.83,
                "avg_hospital_stay_days": 8.67
            }
        ]
    },
    "elderly": {
        "f": [
            {
                "procedure": "Gastrointestinal (GI) System",
                "count": 124,
                "percentage": 6.21242,
                "mortality_rate": 0.0,
                "avg_operation_time_seconds": 2.2,
                "avg_hospital_stay_days": 11.15
            },
            {
                "procedure": "Hepatobiliary and Pancreatic System",
                "count": 50,
                "percentage": 4.08831,
                "mortality_rate": 2.0,
                "avg_operation_time_seconds": 2.61,
                "avg_hospital_stay_days": 12.9
            },
            {
                "procedure": "Other",
                "count": 24,
                "percentage": 3.01508,
                "mortality_rate": 8.33,
                "avg_operation_time_seconds": 1.98,
                "avg_hospital_stay_days": 14.92
            },
            {
                "procedure": "Respiratory System",
                "count": 32,
                "percentage": 4.46304,
                "mortality_rate": 0.0,
                "avg_operation_time_seconds": 2.12,
                "avg_hospital_stay_days": 6.06
            },
            {
                "procedure": "Reproductive System",
                "count": 10,
                "percentage": 1.65837,
                "mortality_rate": 0.0,
                "avg_operation_time_seconds": 1.45,
                "avg_hospital_stay_days": 6.9
            },
            {
                "procedure": "Genitourinary System",
                "count": 3,
                "percentage": 0.9009,
                "mortality_rate": 0.0,
                "avg_operation_time_seconds": 0.19,
                "avg_hospital_stay_days": 2.0
            },
            {
                "procedure": "Endocrine System",
                "count": 4,
                "percentage": 1.23077,
                "mortality_rate": 0.0,
                "avg_operation_time_seconds": 1.77,
                "avg_hospital_stay_days": 5.5
            },
            {
                "procedure": "Cardiovascular System",
                "count": 13,
                "percentage": 5.32787,
                "mortality_rate": 0.0,
                "avg_operation_time_seconds": 1.97,
                "avg_hospital_stay_days": 8.15
            },
            {
                "procedure": "Lymphatic System",
                "count": 2,
                "percentage": 2.94118,
                "mortality_rate": 0.0,
                "avg_operation_time_seconds": 1.13,
                "avg_hospital_stay_days": 4.5
            },
            {
                "procedure": "Integumentary System",
                "count": 12,
                "percentage": 18.75,
                "mortality_rate": 8.33,
                "avg_operation_time_seconds": 0.42,
                "avg_hospital_stay_days": 55.0
            }
        ],
        "m": [
            {
                "procedure": "Gastrointestinal (GI) System",
                "count": 162,
                "percentage": 8.11623,
                "mortality_rate": 0.62,
                "avg_operation_time_seconds": 2.18,
                "avg_hospital_stay_days": 10.14
            },
            {
                "procedure": "Hepatobiliary and Pancreatic System",
                "count": 50,
                "percentage": 4.08831,
                "mortality_rate": 2.0,
                "avg_operation_time_seconds": 2.79,
                "avg_hospital_stay_days": 13.58
            },
            {
                "procedure": "Other",
                "count": 44,
                "percentage": 5.52764,
                "mortality_rate": 4.55,
                "avg_operation_time_seconds": 2.09,
                "avg_hospital_stay_days": 21.61
            },
            {
                "procedure": "Respiratory System",
                "count": 63,
                "percentage": 8.78661,
                "mortality_rate": 1.59,
                "avg_operation_time_seconds": 2.8,
                "avg_hospital_stay_days": 10.0
            },
            {
                "procedure": "Genitourinary System",
                "count": 11,
                "percentage": 3.3033,
                "mortality_rate": 0.0,
                "avg_operation_time_seconds": 1.95,
                "avg_hospital_stay_days": 5.36
            },
            {
                "procedure": "Endocrine System",
                "count": 5,
                "percentage": 1.53846,
                "mortality_rate": 0.0,
                "avg_operation_time_seconds": 1.48,
                "avg_hospital_stay_days": 5.0
            },
            {
                "procedure": "Cardiovascular System",
                "count": 22,
                "percentage": 9.01639,
                "mortality_rate": 4.55,
                "avg_operation_time_seconds": 2.85,
                "avg_hospital_stay_days": 9.59
            },
            {
                "procedure": "Lymphatic System",
                "count": 3,
                "percentage": 4.41176,
                "mortality_rate": 0.0,
                "avg_operation_time_seconds": 1.44,
                "avg_hospital_stay_days": 5.33
            },
            {
                "procedure": "Integumentary System",
                "count": 8,
                "percentage": 12.5,
                "mortality_rate": 0.0,
                "avg_operation_time_seconds": 1.04,
                "avg_hospital_stay_days": 34.0
            },
            {
                "procedure": "Musculoskeletal System",
                "count": 1,
                "percentage": 10.0,
                "mortality_rate": 0.0,
                "avg_operation_time_seconds": 0.42,
                "avg_hospital_stay_days": 5.0
            }
        ]
    }
};

// Health considerations by age group
const healthConsiderations = [
    "Key Consideration: Female infants face dramatically higher surgical mortality risks with 100% mortality for cardiovascular procedures. Note: This age group contained a low number of data points.", 
    "Key Consideration: Male infants show 0% mortality for hepatobiliary procedures despite similar operation times. Note: This age group contained a low number of data points.",
    "Key Consideration: Female toddler, due to the limited data, there are no information about their surgeries",
    "Key Consideration: Male toddlers undergoing surgical procedures with zero mortality, primarily for genitourinary issues requiring 40-day hospital stays. Note: This age group contained a low number of data points.",
    "Key Consideration: Female children undergo very long hospitalizations (up to 141 days for hepatobiliary procedures) Note: This age group contained a low number of data points.",
    "Key Consideration: Males children undergo relatively short hospitalizations(up to 34 days) compared to female children, despite both sexes experiencing no mortality. Note: This age group contained a low number of data points.",
    "Key Consideration: Female teens account for all neurological system procedures (22% of total) with remarkably short hospital stays (1 day). Note: This age group contained a low number of data points.", 
    "Key Consideration: Male teens undergo a more diverse range of procedures with longer operation times but still zero mortality across all surgery types. Note: This age group contained a low number of data points.",
    "Key Consideration: Female young adults undergo more reproductive procedures with higher mortality rates (1.35%) and moderate hopital stay (8.81 days).",
    "Key Consideration: Male young adults dominate neurological procedures (55.6% of all cases) with very brief hospital stays (0.8 days) and males young adults show elevated mortality (3.7%) for genitourinary procedures.",
    "Key Consideration: Female adults undergo over half of all reproductive system surgeries with relatively low mortality (0.64%).", 
    "Key Consideration: Male adults face significantly higher mortality for cardiovascular procedures (6.06% vs. 0% in females) and require much longer hospital stays for musculoskeletal procedures (83 days vs. 48 days).",
    "Key Consideration: Females show lower mortality but still undergo significant percentages of endocrine and lymphatic procedures.",
    "Key Consideration: Male seniors account for the majority of respiratory (35%) and gastrointestinal (39.5%) procedures with concerning mortality for 'other' procedures (4.28%) and integumentary procedures (7.69%, requiring 68.5-day hospitalizations)",
    "Key Consideration: Elderly females face the highest mortality for 'other' procedures (8.33%) and integumentary system surgeries (8.33% with 55-day hospitalizations).",
    "Key Consideration: Elderly males show more distributed mortality risks across cardiovascular (4.55%), 'other' (4.55%), and hepatobiliary (2.0%) procedures with longer hospital stays."
];