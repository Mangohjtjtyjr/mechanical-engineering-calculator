/* ============================================
   CONFIGURATION FILE
   MechCalc Pro - Global Settings & Constants
   ============================================ */

const Config = {
    // Application Settings
    appName: 'MechCalc Pro',
    appVersion: '1.0.0',
    appDescription: 'Professional Mechanical Engineering Design Calculator',
    releaseDate: '2026-09-11',

    // UI Configuration
    decimalPlaces: 4,
    defaultTheme: 'light', // 'light' or 'dark'
    defaultUnitSystem: 'SI', // 'SI', 'Imperial', 'Mixed'
    animationDuration: 300, // milliseconds

    // Storage Keys
    storageKeys: {
        theme: 'mechcalc_theme',
        unitSystem: 'mechcalc_units',
        decimalPlaces: 'mechcalc_decimal_places',
        defaultMaterial: 'mechcalc_default_material',
        history: 'mechcalc_calculation_history',
        projects: 'mechcalc_projects',
        settings: 'mechcalc_settings',
        cache: 'mechcalc_cache'
    },

    // Unit System Definitions
    units: {
        SI: {
            name: 'SI (Metric)',
            length: 'mm',
            force: 'N',
            stress: 'MPa',
            pressure: 'MPa',
            density: 'kg/m³',
            mass: 'kg',
            temperature: '°C',
            power: 'W',
            torque: 'N·m',
            velocity: 'm/s',
            acceleration: 'm/s²',
            angle: 'rad',
            energy: 'J',
            moment: 'N·m',
            inertia: 'mm⁴'
        },
        Imperial: {
            name: 'Imperial (US)',
            length: 'in',
            force: 'lbf',
            stress: 'psi',
            pressure: 'psi',
            density: 'lb/in³',
            mass: 'lb',
            temperature: '°F',
            power: 'hp',
            torque: 'lbf·in',
            velocity: 'ft/s',
            acceleration: 'ft/s²',
            angle: 'deg',
            energy: 'ft·lbf',
            moment: 'lbf·in',
            inertia: 'in⁴'
        },
        Mixed: {
            name: 'Mixed Units',
            length: 'mm',
            force: 'kgf',
            stress: 'kg/mm²',
            pressure: 'kg/cm²',
            density: 'g/cm³',
            mass: 'kg',
            temperature: '°C',
            power: 'W',
            torque: 'kg·m',
            velocity: 'm/s',
            acceleration: 'm/s²',
            angle: 'rad',
            energy: 'kg·m',
            moment: 'kg·m',
            inertia: 'cm⁴'
        }
    },

    // Unit Conversion Factors
    conversions: {
        // Length Conversions
        mm_to_in: 0.03937,
        in_to_mm: 25.4,
        mm_to_m: 0.001,
        m_to_mm: 1000,
        in_to_ft: 1/12,
        ft_to_in: 12,
        m_to_ft: 3.28084,
        ft_to_m: 0.3048,

        // Force/Mass Conversions
        N_to_lbf: 0.224809,
        lbf_to_N: 4.44822,
        kgf_to_N: 9.80665,
        N_to_kgf: 0.101972,
        kgf_to_lbf: 2.20462,
        lbf_to_kgf: 0.453592,

        // Stress/Pressure Conversions
        MPa_to_psi: 145.038,
        psi_to_MPa: 0.00689476,
        MPa_to_kgf_mm2: 0.101972,
        kgf_mm2_to_MPa: 9.80665,
        MPa_to_bar: 10,
        bar_to_MPa: 0.1,

        // Density Conversions
        kg_m3_to_lb_in3: 0.0000361,
        lb_in3_to_kg_m3: 27680,
        g_cm3_to_kg_m3: 1000,
        kg_m3_to_g_cm3: 0.001,

        // Temperature Conversions (use as functions in utilities)
        celsiusToFahrenheit: (c) => (c * 9/5) + 32,
        fahrenheitToCelsius: (f) => (f - 32) * 5/9,

        // Power Conversions
        W_to_hp: 0.00134102,
        hp_to_W: 745.7,
        W_to_kW: 0.001,
        kW_to_W: 1000,

        // Torque Conversions
        Nm_to_lbfin: 8.85075,
        lbfin_to_Nm: 0.112985,
        kg_m_to_Nm: 9.80665,
        Nm_to_kg_m: 0.101972
    },

    // Safety Factors
    safetyFactors: {
        default: 2.0,
        minimum: 1.5,
        maximum: 5.0,
        yielding: 2.0,
        fatigue: 3.0,
        ultimate: 3.0,
        buckling: 2.5,
        bolt: 2.0,
        weld: 1.5,
        shaft: 2.5
    },

    // Material Categories
    materialCategories: [
        'Mild Steel',
        'Medium Carbon Steel',
        'High Carbon Steel',
        'Structural Steel',
        'Stainless Steel',
        'Aluminum',
        'Copper & Brass',
        'Titanium',
        'Cast Iron',
        'Engineering Plastics',
        'Composites',
        'Other'
    ],

    // Standard Compliance
    standards: {
        ASME: {
            name: 'American Society of Mechanical Engineers',
            sections: ['VIII', 'IX', 'B16.5', 'B16.11', 'B29.1'],
            url: 'https://www.asme.org'
        },
        ANSI: {
            name: 'American National Standards Institute',
            sections: ['B4.4', 'B4.19', 'B29.1', 'B29.3'],
            url: 'https://www.ansi.org'
        },
        ISO: {
            name: 'International Organization for Standardization',
            sections: ['286', '898', '1101', '6336'],
            url: 'https://www.iso.org'
        },
        DIN: {
            name: 'Deutsches Institut für Normung',
            sections: ['13', '65', '6892', '6898'],
            url: 'https://www.din.de'
        },
        CEMA: {
            name: 'Conveyor Equipment Manufacturers Association',
            url: 'https://www.cemanet.org'
        },
        AGMA: {
            name: 'American Gear Manufacturers Association',
            url: 'https://www.agma.org'
        },
        AWS: {
            name: 'American Welding Society',
            sections: ['D1.1', 'D1.5', 'D1.6'],
            url: 'https://www.aws.org'
        },
        AISC: {
            name: 'American Institute of Steel Construction',
            sections: ['360', '341'],
            url: 'https://www.aisc.org'
        },
        API: {
            name: 'American Petroleum Institute',
            sections: ['579', '650', '579'],
            url: 'https://www.api.org'
        },
        EN: {
            name: 'European Standards',
            sections: ['10025', '10204', '10210', '13001'],
            url: 'https://www.en.wikipedia.org'
        }
    },

    // Calculation Methods
    calculationMethods: {
        fatigue: ['Goodman', 'Gerber', 'Soderberg'],
        buckling: ['Euler', 'Johnson'],
        stressConcentration: ['Peterson', 'Neuber'],
        beamDeflection: ['Direct Integration', 'Virtual Work', 'Superposition']
    },

    // Color Coding for Safety Factors
    safetyColors: {
        safe: '#28a745',        // Green - SF > 2.5
        warning: '#ffc107',     // Yellow - SF 1.5-2.5
        danger: '#dc3545',      // Red - SF < 1.5
        critical: '#a00000'     // Dark Red - SF < 1.0
    },

    // Mathematical Constants
    constants: {
        pi: Math.PI,
        e: Math.E,
        phi: 1.618033988749895, // Golden Ratio
        g: 9.80665,             // Gravity (m/s²)
        g_imperial: 32.174,     // Gravity (ft/s²)
        stefan_boltzmann: 5.670374419e-8, // W/m²·K⁴
        boltzmann: 1.380649e-23 // J/K
    },

    // Calculation Limits
    limits: {
        minForce: 0.001,        // N
        maxForce: 1e10,         // N
        minArea: 0.001,         // mm²
        maxArea: 1e6,           // mm²
        minLength: 0.1,         // mm
        maxLength: 1e6,         // mm
        minStress: 0.001,       // MPa
        maxStress: 1e4,         // MPa
        minDeflection: -1e4,    // mm
        maxDeflection: 1e4,     // mm
        minTemperature: -273.15, // °C
        maxTemperature: 5000,   // °C
        minDensity: 0.001,      // kg/m³
        maxDensity: 22600       // kg/m³ (Osmium)
    },

    // Beam Support Types
    beamSupports: [
        { id: 1, name: 'Simply Supported', code: 'SS', reactions: 2 },
        { id: 2, name: 'Cantilever', code: 'C', reactions: 2 },
        { id: 3, name: 'Fixed-Fixed', code: 'FF', reactions: 3 },
        { id: 4, name: 'Overhanging', code: 'OH', reactions: 2 }
    ],

    // Load Types
    loadTypes: [
        { id: 1, name: 'Point Load', code: 'PL' },
        { id: 2, name: 'Distributed Load', code: 'DL' },
        { id: 3, name: 'Triangular Load', code: 'TL' },
        { id: 4, name: 'Moment', code: 'M' }
    ],

    // Shaft Design Standards
    shaftStandards: {
        ASME: {
            name: 'ASME Design Standard',
            code: 'ASME',
            safetyFactor: 2.5
        },
        DIN: {
            name: 'DIN Design Standard',
            code: 'DIN',
            safetyFactor: 3.0
        }
    },

    // Weld Types
    weldTypes: [
        { id: 1, name: 'Fillet Weld', code: 'FW' },
        { id: 2, name: 'Butt Weld', code: 'BW' },
        { id: 3, name: 'Plug Weld', code: 'PW' },
        { id: 4, name: 'Slot Weld', code: 'SW' },
        { id: 5, name: 'Spot Weld', code: 'SPOT' }
    ],

    // Bolt Standards
    boltStandards: [
        { grade: '4.6', yieldStrength: 240, ultimateStrength: 400 },
        { grade: '5.6', yieldStrength: 300, ultimateStrength: 500 },
        { grade: '5.8', yieldStrength: 400, ultimateStrength: 500 },
        { grade: '6.8', yieldStrength: 480, ultimateStrength: 600 },
        { grade: '8.8', yieldStrength: 640, ultimateStrength: 800 },
        { grade: '10.9', yieldStrength: 900, ultimateStrength: 1000 }
    ],

    // Bearing Standards
    bearingStandards: {
        ISO281: {
            name: 'ISO 281 - Rolling Bearings Rating',
            reliabilities: [0.90, 0.95, 0.96, 0.97, 0.98, 0.99],
            method: 'L10 Life'
        }
    },

    // Gear Types
    gearTypes: [
        { id: 1, name: 'Spur Gear', code: 'SPUR' },
        { id: 2, name: 'Helical Gear', code: 'HELICAL' },
        { id: 3, name: 'Bevel Gear', code: 'BEVEL' },
        { id: 4, name: 'Worm Gear', code: 'WORM' },
        { id: 5, name: 'Rack Pinion', code: 'RACK' }
    ],

    // Stress Concentration Factors (Kt)
    stressConcentrationFactors: {
        filletInTension: 1.5,
        filletInBending: 1.3,
        grooveInTension: 2.0,
        grooveInBending: 1.8,
        holeInTension: 2.0,
        holeInBending: 1.8,
        keyway: 1.6,
        threadedSection: 3.0
    },

    // Visibility Settings
    visibility: {
        showCalculationSteps: true,
        showFormulas: true,
        showUnits: true,
        showHistoryPanel: true,
        showProjectsPanel: true,
        showResultsGraph: true,
        enableAnimations: true,
        showSafetyFactors: true,
        showWarnings: true
    },

    // Notification Settings
    notifications: {
        showNotifications: true,
        displayDuration: 3000, // milliseconds
        position: 'top-right' // 'top-left', 'top-right', 'bottom-left', 'bottom-right'
    },

    // Logging Configuration
    logging: {
        enabled: true,
        level: 'info', // 'debug', 'info', 'warn', 'error'
        maxLogSize: 100, // Maximum number of log entries
        showInConsole: true
    },

    // Performance Settings
    performance: {
        enableCaching: true,
        cacheExpiry: 3600000, // milliseconds (1 hour)
        enableCompression: true,
        debounceDelay: 300 // milliseconds for input events
    },

    // Default Calculation Parameters
    defaults: {
        decimalPlaces: 4,
        displayFormat: 'standard', // 'standard', 'scientific', 'engineering'
        numberFormat: 'comma', // 'comma', 'point' (for thousands separator)
        temperatureUnit: 'C', // 'C' or 'F'
        angleUnit: 'rad', // 'rad' or 'deg'
        safetyFactorType: 'absolute' // 'absolute' or 'percentage'
    },

    // Export Settings
    export: {
        formats: ['PDF', 'Excel', 'CSV', 'JSON', 'Text'],
        defaultFormat: 'PDF',
        includeFormulas: true,
        includeTimestamp: true,
        includeComments: true,
        pageOrientation: 'portrait', // 'portrait' or 'landscape'
        pageSize: 'A4' // 'A4', 'Letter', 'A3'
    },

    // Calculation History Settings
    history: {
        maxEntries: 100,
        autoClear: false,
        clearAfterDays: 30
    },

    // Project Settings
    projects: {
        maxProjects: 50,
        autoSave: true,
        autoSaveInterval: 30000 // milliseconds
    },

    // Validation Rules
    validation: {
        requireUnitSelection: true,
        requireMaterialSelection: false,
        allowNegativeValues: false,
        allowZeroValues: false,
        roundResults: true,
        validateInputs: true
    },

    // Feature Flags
    features: {
        enableFEA: false,
        enableOptimization: false,
        enableAI: false,
        enableCloud: false,
        enableCollaboration: false,
        enableMobileApp: false,
        enableCADIntegration: false,
        enableDarkMode: true,
        enableMultiLanguage: false
    },

    /**
     * Get configuration value by path
     * @param {string} path - Configuration path (e.g., 'units.SI.length')
     * @returns {any} Configuration value
     */
    get: function(path) {
        return path.split('.').reduce((obj, key) => obj?.[key], this);
    },

    /**
     * Set configuration value
     * @param {string} path - Configuration path
     * @param {any} value - New value
     */
    set: function(path, value) {
        const keys = path.split('.');
        const lastKey = keys.pop();
        const target = keys.reduce((obj, key) => obj[key], this);
        if (target) target[lastKey] = value;
    },

    /**
     * Reset to default configuration
     */
    reset: function() {
        this.decimalPlaces = 4;
        this.defaultTheme = 'light';
        this.defaultUnitSystem = 'SI';
    }
};

// Export for use in modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Config;
}
