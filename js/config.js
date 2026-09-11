/* ============================================
   CONFIGURATION FILE
   MechCalc Pro - Settings and Constants
   ============================================ */

const Config = {
    // Application Settings
    appName: 'MechCalc Pro',
    version: '1.0.0',
    author: 'Engineering Design Suite',
    supportedStandards: ['ASME', 'ANSI', 'ISO', 'DIN', 'CEMA', 'AGMA', 'AWS', 'AISC', 'API', 'EN'],

    // Units Configuration
    unitSystems: {
        SI: {
            name: 'SI (Metric)',
            length: 'mm',
            force: 'N',
            stress: 'MPa',
            pressure: 'MPa',
            density: 'kg/m³',
            temperature: '°C',
            power: 'W',
            torque: 'N·m',
            velocity: 'm/s',
            acceleration: 'm/s²'
        },
        Imperial: {
            name: 'Imperial (US)',
            length: 'in',
            force: 'lbf',
            stress: 'psi',
            pressure: 'psi',
            density: 'lb/in³',
            temperature: '°F',
            power: 'hp',
            torque: 'lbf·in',
            velocity: 'ft/s',
            acceleration: 'ft/s²'
        },
        Mixed: {
            name: 'Mixed Units',
            length: 'mm',
            force: 'kgf',
            stress: 'kg/mm²',
            pressure: 'kg/cm²',
            density: 'g/cm³',
            temperature: '°C',
            power: 'W',
            torque: 'kg·m',
            velocity: 'm/s',
            acceleration: 'm/s²'
        }
    },

    // Conversion Factors
    conversions: {
        // Length
        mm_to_in: 0.03937008,
        in_to_mm: 25.4,
        m_to_ft: 3.280839895,
        ft_to_m: 0.3048,

        // Force
        N_to_lbf: 0.224809,
        lbf_to_N: 4.44822,
        kgf_to_N: 9.80665,
        N_to_kgf: 0.101972,

        // Stress/Pressure
        MPa_to_psi: 145.038,
        psi_to_MPa: 0.00689476,
        MPa_to_ksi: 0.145038,

        // Density
        kg_m3_to_lb_in3: 0.0000361273,
        lb_in3_to_kg_m3: 27679.9,

        // Power
        W_to_hp: 0.00134102,
        hp_to_W: 745.7,

        // Temperature
        celsius_to_fahrenheit: (c) => (c * 9/5) + 32,
        fahrenheit_to_celsius: (f) => (f - 32) * 5/9
    },

    // Safety Factors (Standard Values)
    safetyFactors: {
        static: 1.5,
        dynamic: 2.0,
        fatigue: 2.5,
        buckling: 2.0,
        thermal: 1.2,
        brittle: 3.0,
        ductile: 1.5
    },

    // Material Categories
    materialCategories: [
        'Mild Steel',
        'Medium Carbon Steel',
        'High Carbon Steel',
        'Stainless Steel',
        'Aluminum',
        'Copper & Brass',
        'Titanium',
        'Cast Iron',
        'Engineering Plastics',
        'Composites'
    ],

    // Load Types
    loadTypes: {
        static: 'Static Load',
        cyclic: 'Cyclic Load',
        impact: 'Impact Load',
        fatigue: 'Fatigue Load',
        thermal: 'Thermal Load'
    },

    // Beam Support Types
    beamSupportTypes: {
        cantilever: 'Cantilever',
        simply_supported: 'Simply Supported',
        fixed_fixed: 'Fixed - Fixed',
        fixed_free: 'Fixed - Free',
        overhanging: 'Overhanging'
    },

    // Gear Types
    gearTypes: {
        spur: 'Spur Gear',
        helical: 'Helical Gear',
        bevel: 'Bevel Gear',
        worm: 'Worm Gear',
        rack_pinion: 'Rack & Pinion'
    },

    // Weld Types
    weldTypes: {
        fillet: 'Fillet Weld',
        butt: 'Butt Weld',
        plug: 'Plug Weld',
        slot: 'Slot Weld',
        spot: 'Spot Weld'
    },

    // Bearing Types
    bearingTypes: {
        deep_groove: 'Deep Groove Ball',
        angular_contact: 'Angular Contact',
        tapered_roller: 'Tapered Roller',
        cylindrical_roller: 'Cylindrical Roller',
        spherical_roller: 'Spherical Roller',
        needle: 'Needle Roller'
    },

    // Color Codes
    colors: {
        safe: '#10b981',
        warning: '#f97316',
        critical: '#ef4444',
        info: '#06b6d4',
        primary: '#2563eb',
        secondary: '#1e40af'
    },

    // Chart Configuration
    chartConfig: {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
            legend: {
                position: 'top'
            },
            title: {
                display: true
            }
        },
        scales: {
            y: {
                beginAtZero: true
            }
        }
    },

    // Decimal Places
    decimalPlaces: 4,

    // Storage Keys
    storageKeys: {
        theme: 'mechcalc_theme',
        units: 'mechcalc_units',
        decimalPlaces: 'mechcalc_decimal_places',
        defaultMaterial: 'mechcalc_default_material',
        projects: 'mechcalc_projects',
        history: 'mechcalc_history'
    },

    // API Endpoints (for future integration)
    api: {
        baseURL: '/api',
        endpoints: {
            materials: '/materials',
            calculations: '/calculations',
            projects: '/projects',
            reports: '/reports',
            fea: '/fea'
        }
    },

    // Fatigue Analysis Methods
    fatigueAnalysisMethods: {
        goodman: 'Goodman Method',
        gerber: 'Gerber Method',
        soderberg: 'Soderberg Method'
    },

    // Buckling Types
    bucklingTypes: {
        euler: 'Euler Buckling',
        johnson: 'Johnson Buckling',
        secant: 'Secant Formula'
    },

    // Manufacturing Processes
    manufacturingProcesses: [
        'Machining',
        'Casting',
        'Forging',
        'Welding',
        'Sheet Metal',
        'Injection Molding',
        'CNC',
        'Grinding',
        'Stamping'
    ],

    // Validation Rules
    validation: {
        minStress: 0,
        maxStress: 10000,
        minDiameter: 0.1,
        maxDiameter: 500,
        minThickness: 0.1,
        maxThickness: 100,
        minLoad: 0,
        maxLoad: 1000000,
        minTemperature: -100,
        maxTemperature: 500
    },

    // Report Templates
    reportTemplates: {
        calculation: 'Calculation Report',
        design: 'Design Report',
        analysis: 'Analysis Report',
        verification: 'Verification Report'
    },

    // Export Formats
    exportFormats: [
        { name: 'PDF', ext: 'pdf' },
        { name: 'Excel', ext: 'xlsx' },
        { name: 'CSV', ext: 'csv' },
        { name: 'JSON', ext: 'json' }
    ]
};

// Export for use in modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Config;
}
