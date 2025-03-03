// Age groups data
const ageGroups = [
    { id: 'infant', label: 'Infant', ageRange: '0-2 years', color: '#FFB6C1', start: 0, end: 2 },
    { id: 'toddler', label: 'Toddler', ageRange: '3-5 years', color: '#FFDAB9', start: 3, end: 5 },
    { id: 'child', label: 'Child', ageRange: '6-12 years', color: '#B0E0E6', start: 6, end: 12 },
    { id: 'teen', label: 'Teen', ageRange: '13-17 years', color: '#98FB98', start: 13, end: 17 },
    { id: 'young-adult', label: 'Young Adult', ageRange: '18-35 years', color: '#DDA0DD', start: 18, end: 35 },
    { id: 'adult', label: 'Adult', ageRange: '36-55 years', color: '#87CEFA', start: 36, end: 55 },
    { id: 'senior', label: 'Senior', ageRange: '56-75 years', color: '#D3D3D3', start: 56, end: 75 },
    { id: 'elderly', label: 'Elderly', ageRange: '76+ years', color: '#E6E6FA', start: 76, end: 100 },
];

// Surgical procedures data by age group
const surgicalData = {
    infant: [
        { procedure: 'Circumcision', percentage: 12, risks: 'Minimal', recovery: '1-2 days' },
        { procedure: 'Inguinal Hernia Repair', percentage: 9, risks: 'Low', recovery: '1-2 weeks' },
        { procedure: 'Ear Tube Insertion', percentage: 23, risks: 'Very low', recovery: '1 day' },
        { procedure: 'Cleft Lip/Palate Repair', percentage: 5, risks: 'Moderate', recovery: '2-3 weeks' }
    ],
    toddler: [
        { procedure: 'Tonsillectomy', percentage: 30, risks: 'Low', recovery: '1-2 weeks' },
        { procedure: 'Ear Tube Insertion', percentage: 18, risks: 'Very low', recovery: '1 day' },
        { procedure: 'Dental Procedures', percentage: 15, risks: 'Minimal', recovery: '1-2 days' }
    ],
    child: [
        { procedure: 'Tonsillectomy', percentage: 28, risks: 'Low', recovery: '1-2 weeks' },
        { procedure: 'Appendectomy', percentage: 10, risks: 'Low', recovery: '1-2 weeks' },
        { procedure: 'Fracture Repair', percentage: 25, risks: 'Low', recovery: '4-8 weeks' }
    ],
    teen: [
        { procedure: 'Wisdom Teeth Extraction', percentage: 35, risks: 'Low', recovery: '1 week' },
        { procedure: 'Appendectomy', percentage: 12, risks: 'Low', recovery: '1-2 weeks' },
        { procedure: 'Sports Injury Repairs', percentage: 20, risks: 'Moderate', recovery: '2-12 weeks' },
        { procedure: 'Scoliosis Surgery', percentage: 5, risks: 'Moderate', recovery: '3-6 months' }
    ],
    'young-adult': [
        { procedure: 'Wisdom Teeth Extraction', percentage: 20, risks: 'Low', recovery: '1 week' },
        { procedure: 'ACL Reconstruction', percentage: 12, risks: 'Moderate', recovery: '6-9 months' },
        { procedure: 'Rhinoplasty', percentage: 8, risks: 'Low', recovery: '2-3 weeks' },
        { procedure: 'Cesarean Section', percentage: 30, risks: 'Moderate', recovery: '4-6 weeks' }
    ],
    adult: [
        { procedure: 'Cholecystectomy', percentage: 18, risks: 'Low', recovery: '1-2 weeks' },
        { procedure: 'Hysterectomy', percentage: 15, risks: 'Moderate', recovery: '4-6 weeks' },
        { procedure: 'Lumbar Disc Surgery', percentage: 12, risks: 'Moderate', recovery: '4-6 weeks' },
        { procedure: 'Colonoscopy', percentage: 30, risks: 'Very low', recovery: '1 day' }
    ],
    senior: [
        { procedure: 'Cataract Surgery', percentage: 40, risks: 'Low', recovery: '1-2 weeks' },
        { procedure: 'Knee Replacement', percentage: 18, risks: 'Moderate', recovery: '6-12 weeks' },
        { procedure: 'Hip Replacement', percentage: 15, risks: 'Moderate to high', recovery: '3-6 months' },
        { procedure: 'Coronary Artery Bypass', percentage: 12, risks: 'High', recovery: '6-12 weeks' }
    ],
    elderly: [
        { procedure: 'Cataract Surgery', percentage: 35, risks: 'Moderate', recovery: '2-4 weeks' },
        { procedure: 'Hip Fracture Repair', percentage: 22, risks: 'High', recovery: '3-6 months' },
        { procedure: 'Pacemaker Insertion', percentage: 15, risks: 'Moderate', recovery: '1-2 weeks' },
        { procedure: 'Transurethral Prostate Resection', percentage: 13, risks: 'Moderate', recovery: '2-4 weeks' }
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