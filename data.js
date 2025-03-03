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
    "infant": [
        {
            "procedure": "Hepatobiliary and Pancreatic System",
            "percentage": 0.40883,
            "mortality_rate": 40.0,
            "avg_operation_time_seconds": 6.56,
            "avg_hospital_stay_days": 54.0
        },
        {
            "procedure": "Other",
            "percentage": 0.50251,
            "mortality_rate": 50.0,
            "avg_operation_time_seconds": 1.73,
            "avg_hospital_stay_days": 66.25
        },
        {
            "procedure": "Cardiovascular System",
            "percentage": 0.40984,
            "mortality_rate": 100.0,
            "avg_operation_time_seconds": 2.5,
            "avg_hospital_stay_days": 31.0
        }
    ],
    "toddler": [
        {
            "procedure": "Other",
            "percentage": 0.12563,
            "mortality_rate": 0.0,
            "avg_operation_time_seconds": 0.33,
            "avg_hospital_stay_days": 28.0
        },
        {
            "procedure": "Genitourinary System",
            "percentage": 0.6006,
            "mortality_rate": 0.0,
            "avg_operation_time_seconds": 2.5,
            "avg_hospital_stay_days": 40.0
        }
    ],
    "child": [
        {
            "procedure": "Hepatobiliary and Pancreatic System",
            "percentage": 0.40883,
            "mortality_rate": 0.0,
            "avg_operation_time_seconds": 7.32,
            "avg_hospital_stay_days": 98.2
        },
        {
            "procedure": "Other",
            "percentage": 0.75377,
            "mortality_rate": 0.0,
            "avg_operation_time_seconds": 1.12,
            "avg_hospital_stay_days": 109.33
        },
        {
            "procedure": "Reproductive System",
            "percentage": 0.33167,
            "mortality_rate": 0.0,
            "avg_operation_time_seconds": 1.17,
            "avg_hospital_stay_days": 4.0
        },
        {
            "procedure": "Genitourinary System",
            "percentage": 2.7027,
            "mortality_rate": 0.0,
            "avg_operation_time_seconds": 4.0,
            "avg_hospital_stay_days": 17.56
        },
        {
            "procedure": "Cardiovascular System",
            "percentage": 1.22951,
            "mortality_rate": 0.0,
            "avg_operation_time_seconds": 1.97,
            "avg_hospital_stay_days": 21.0
        }
    ],
    "teen": [
        {
            "procedure": "Gastrointestinal (GI) System",
            "percentage": 0.1503,
            "mortality_rate": 0.0,
            "avg_operation_time_seconds": 0.86,
            "avg_hospital_stay_days": 4.67
        },
        {
            "procedure": "Hepatobiliary and Pancreatic System",
            "percentage": 0.08177,
            "mortality_rate": 0.0,
            "avg_operation_time_seconds": 7.17,
            "avg_hospital_stay_days": 9.0
        },
        {
            "procedure": "Other",
            "percentage": 0.50251,
            "mortality_rate": 0.0,
            "avg_operation_time_seconds": 0.69,
            "avg_hospital_stay_days": 3.75
        },
        {
            "procedure": "Respiratory System",
            "percentage": 0.27894,
            "mortality_rate": 0.0,
            "avg_operation_time_seconds": 0.52,
            "avg_hospital_stay_days": 5.5
        },
        {
            "procedure": "Genitourinary System",
            "percentage": 0.9009,
            "mortality_rate": 0.0,
            "avg_operation_time_seconds": 4.11,
            "avg_hospital_stay_days": 18.67
        },
        {
            "procedure": "Endocrine System",
            "percentage": 0.30769,
            "mortality_rate": 0.0,
            "avg_operation_time_seconds": 5.0,
            "avg_hospital_stay_days": 9.0
        },
        {
            "procedure": "Cardiovascular System",
            "percentage": 1.22951,
            "mortality_rate": 0.0,
            "avg_operation_time_seconds": 1.86,
            "avg_hospital_stay_days": 12.33
        },
        {
            "procedure": "Neurological System",
            "percentage": 22.22222,
            "mortality_rate": 0.0,
            "avg_operation_time_seconds": 0.5,
            "avg_hospital_stay_days": 1.0
        }
    ],
    "young-adult": [
        {
            "procedure": "Gastrointestinal (GI) System",
            "percentage": 3.90782,
            "mortality_rate": 1.28,
            "avg_operation_time_seconds": 1.65,
            "avg_hospital_stay_days": 7.94
        },
        {
            "procedure": "Hepatobiliary and Pancreatic System",
            "percentage": 8.25838,
            "mortality_rate": 0.99,
            "avg_operation_time_seconds": 3.04,
            "avg_hospital_stay_days": 9.4
        },
        {
            "procedure": "Other",
            "percentage": 13.31658,
            "mortality_rate": 0.94,
            "avg_operation_time_seconds": 1.52,
            "avg_hospital_stay_days": 9.13
        },
        {
            "procedure": "Respiratory System",
            "percentage": 4.60251,
            "mortality_rate": 0.0,
            "avg_operation_time_seconds": 1.65,
            "avg_hospital_stay_days": 5.45
        },
        {
            "procedure": "Reproductive System",
            "percentage": 12.60365,
            "mortality_rate": 1.32,
            "avg_operation_time_seconds": 1.53,
            "avg_hospital_stay_days": 8.64
        },
        {
            "procedure": "Genitourinary System",
            "percentage": 12.01201,
            "mortality_rate": 2.5,
            "avg_operation_time_seconds": 3.32,
            "avg_hospital_stay_days": 13.5
        },
        {
            "procedure": "Endocrine System",
            "percentage": 16.92308,
            "mortality_rate": 0.0,
            "avg_operation_time_seconds": 2.37,
            "avg_hospital_stay_days": 4.96
        },
        {
            "procedure": "Cardiovascular System",
            "percentage": 4.09836,
            "mortality_rate": 0.0,
            "avg_operation_time_seconds": 1.94,
            "avg_hospital_stay_days": 8.7
        },
        {
            "procedure": "Lymphatic System",
            "percentage": 14.70588,
            "mortality_rate": 0.0,
            "avg_operation_time_seconds": 1.3,
            "avg_hospital_stay_days": 5.7
        },
        {
            "procedure": "Integumentary System",
            "percentage": 3.125,
            "mortality_rate": 0.0,
            "avg_operation_time_seconds": 0.97,
            "avg_hospital_stay_days": 4.0
        },
        {
            "procedure": "Musculoskeletal System",
            "percentage": 10.0,
            "mortality_rate": 0.0,
            "avg_operation_time_seconds": 0.5,
            "avg_hospital_stay_days": 3.0
        },
        {
            "procedure": "Neurological System",
            "percentage": 66.66667,
            "mortality_rate": 0.0,
            "avg_operation_time_seconds": 0.52,
            "avg_hospital_stay_days": 3.17
        }
    ],
    "adult": [
        {
            "procedure": "Gastrointestinal (GI) System",
            "percentage": 22.24449,
            "mortality_rate": 0.9,
            "avg_operation_time_seconds": 2.31,
            "avg_hospital_stay_days": 9.92
        },
        {
            "procedure": "Hepatobiliary and Pancreatic System",
            "percentage": 33.03352,
            "mortality_rate": 0.5,
            "avg_operation_time_seconds": 2.55,
            "avg_hospital_stay_days": 9.05
        },
        {
            "procedure": "Other",
            "percentage": 33.9196,
            "mortality_rate": 0.37,
            "avg_operation_time_seconds": 1.55,
            "avg_hospital_stay_days": 12.21
        },
        {
            "procedure": "Respiratory System",
            "percentage": 19.24686,
            "mortality_rate": 0.0,
            "avg_operation_time_seconds": 2.22,
            "avg_hospital_stay_days": 7.69
        },
        {
            "procedure": "Reproductive System",
            "percentage": 51.57546,
            "mortality_rate": 0.64,
            "avg_operation_time_seconds": 1.55,
            "avg_hospital_stay_days": 6.44
        },
        {
            "procedure": "Genitourinary System",
            "percentage": 36.33634,
            "mortality_rate": 0.0,
            "avg_operation_time_seconds": 3.2,
            "avg_hospital_stay_days": 11.51
        },
        {
            "procedure": "Endocrine System",
            "percentage": 45.23077,
            "mortality_rate": 0.0,
            "avg_operation_time_seconds": 2.13,
            "avg_hospital_stay_days": 4.39
        },
        {
            "procedure": "Cardiovascular System",
            "percentage": 28.27869,
            "mortality_rate": 2.9,
            "avg_operation_time_seconds": 2.01,
            "avg_hospital_stay_days": 9.65
        },
        {
            "procedure": "Lymphatic System",
            "percentage": 35.29412,
            "mortality_rate": 0.0,
            "avg_operation_time_seconds": 1.69,
            "avg_hospital_stay_days": 13.25
        },
        {
            "procedure": "Integumentary System",
            "percentage": 42.1875,
            "mortality_rate": 0.0,
            "avg_operation_time_seconds": 0.69,
            "avg_hospital_stay_days": 63.04
        },
        {
            "procedure": "Musculoskeletal System",
            "percentage": 40.0,
            "mortality_rate": 0.0,
            "avg_operation_time_seconds": 2.0,
            "avg_hospital_stay_days": 56.75
        },
        {
            "procedure": "Neurological System",
            "percentage": 11.11111,
            "mortality_rate": 0.0,
            "avg_operation_time_seconds": 0.42,
            "avg_hospital_stay_days": 1.0
        }
    ],
    "senior": [
        {
            "procedure": "Gastrointestinal (GI) System",
            "percentage": 59.36874,
            "mortality_rate": 0.68,
            "avg_operation_time_seconds": 2.38,
            "avg_hospital_stay_days": 10.36
        },
        {
            "procedure": "Hepatobiliary and Pancreatic System",
            "percentage": 49.63205,
            "mortality_rate": 0.16,
            "avg_operation_time_seconds": 2.91,
            "avg_hospital_stay_days": 11.08
        },
        {
            "procedure": "Other",
            "percentage": 42.33668,
            "mortality_rate": 3.26,
            "avg_operation_time_seconds": 1.92,
            "avg_hospital_stay_days": 12.62
        },
        {
            "procedure": "Respiratory System",
            "percentage": 62.62204,
            "mortality_rate": 0.89,
            "avg_operation_time_seconds": 2.46,
            "avg_hospital_stay_days": 9.86
        },
        {
            "procedure": "Reproductive System",
            "percentage": 33.83085,
            "mortality_rate": 0.0,
            "avg_operation_time_seconds": 1.41,
            "avg_hospital_stay_days": 6.87
        },
        {
            "procedure": "Genitourinary System",
            "percentage": 43.24324,
            "mortality_rate": 0.69,
            "avg_operation_time_seconds": 2.98,
            "avg_hospital_stay_days": 10.21
        },
        {
            "procedure": "Endocrine System",
            "percentage": 34.76923,
            "mortality_rate": 0.0,
            "avg_operation_time_seconds": 1.83,
            "avg_hospital_stay_days": 4.69
        },
        {
            "procedure": "Cardiovascular System",
            "percentage": 50.40984,
            "mortality_rate": 0.0,
            "avg_operation_time_seconds": 2.31,
            "avg_hospital_stay_days": 6.41
        },
        {
            "procedure": "Lymphatic System",
            "percentage": 42.64706,
            "mortality_rate": 0.0,
            "avg_operation_time_seconds": 1.73,
            "avg_hospital_stay_days": 6.59
        },
        {
            "procedure": "Integumentary System",
            "percentage": 23.4375,
            "mortality_rate": 6.67,
            "avg_operation_time_seconds": 1.34,
            "avg_hospital_stay_days": 61.4
        },
        {
            "procedure": "Musculoskeletal System",
            "percentage": 40.0,
            "mortality_rate": 0.0,
            "avg_operation_time_seconds": 1.91,
            "avg_hospital_stay_days": 8.5
        }
    ],
    "elderly": [
        {
            "procedure": "Gastrointestinal (GI) System",
            "percentage": 14.32866,
            "mortality_rate": 0.35,
            "avg_operation_time_seconds": 2.19,
            "avg_hospital_stay_days": 10.58
        },
        {
            "procedure": "Hepatobiliary and Pancreatic System",
            "percentage": 8.17661,
            "mortality_rate": 2.0,
            "avg_operation_time_seconds": 2.7,
            "avg_hospital_stay_days": 13.24
        },
        {
            "procedure": "Other",
            "percentage": 8.54271,
            "mortality_rate": 5.88,
            "avg_operation_time_seconds": 2.05,
            "avg_hospital_stay_days": 19.25
        },
        {
            "procedure": "Respiratory System",
            "percentage": 13.24965,
            "mortality_rate": 1.05,
            "avg_operation_time_seconds": 2.57,
            "avg_hospital_stay_days": 8.67
        },
        {
            "procedure": "Reproductive System",
            "percentage": 1.65837,
            "mortality_rate": 0.0,
            "avg_operation_time_seconds": 1.45,
            "avg_hospital_stay_days": 6.9
        },
        {
            "procedure": "Genitourinary System",
            "percentage": 4.2042,
            "mortality_rate": 0.0,
            "avg_operation_time_seconds": 1.58,
            "avg_hospital_stay_days": 4.64
        },
        {
            "procedure": "Endocrine System",
            "percentage": 2.76923,
            "mortality_rate": 0.0,
            "avg_operation_time_seconds": 1.61,
            "avg_hospital_stay_days": 5.22
        },
        {
            "procedure": "Cardiovascular System",
            "percentage": 14.34426,
            "mortality_rate": 2.86,
            "avg_operation_time_seconds": 2.52,
            "avg_hospital_stay_days": 9.06
        },
        {
            "procedure": "Lymphatic System",
            "percentage": 7.35294,
            "mortality_rate": 0.0,
            "avg_operation_time_seconds": 1.32,
            "avg_hospital_stay_days": 5.0
        },
        {
            "procedure": "Integumentary System",
            "percentage": 31.25,
            "mortality_rate": 5.0,
            "avg_operation_time_seconds": 0.67,
            "avg_hospital_stay_days": 46.6
        },
        {
            "procedure": "Musculoskeletal System",
            "percentage": 10.0,
            "mortality_rate": 0.0,
            "avg_operation_time_seconds": 0.42,
            "avg_hospital_stay_days": 5.0
        }
    ]
};

// Health considerations by age group
const healthConsiderations = [
    "Focus on developmental issues and congenital conditions. Minimal surgical interventions unless medically necessary.",
    "Common procedures address childhood development issues and infections. Emphasis on minimally invasive approaches.",
    "Procedures often related to common childhood illnesses and injuries. Recovery times tend to be shorter than adults.",
    "Sports injuries and developmental corrections become more common. Orthodontic and dental surgeries peak during these years.",
    "Reproductive health and trauma-related procedures increase. First appearance of lifestyle-related surgeries.",
    "Lifestyle-related conditions begin to drive surgical needs. Increasing prevalence of minimally invasive diagnostic procedures.",
    "Degenerative conditions and chronic disease management predominate. Joint replacements and cardiac procedures become common.",
    "Focus shifts to quality of life maintenance and managing complex conditions. Higher surgical risks due to comorbidities."
];