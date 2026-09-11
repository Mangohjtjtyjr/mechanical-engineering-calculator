/* ============================================
   UTILITY FUNCTIONS
   MechCalc Pro - Helper and Math Functions
   ============================================ */

const Utils = {
    /* ============================================
       MATHEMATICAL FUNCTIONS
       ============================================ */

    /**
     * Calculate Von Mises Stress
     * σ_vm = √(σ_x² + σ_y² + σ_z² - σ_x*σ_y - σ_y*σ_z - σ_z*σ_x)
     */
    calculateVonMisesStress: (sx, sy, sz) => {
        return Math.sqrt(sx**2 + sy**2 + sz**2 - sx*sy - sy*sz - sz*sx);
    },

    /**
     * Calculate Principal Stresses
     */
    calculatePrincipalStress: (sx, sy, txy) => {
        const avg = (sx + sy) / 2;
        const diff = (sx - sy) / 2;
        const R = Math.sqrt(diff**2 + txy**2);
        return {
            s1: avg + R,
            s2: avg - R,
            s3: 0
        };
    },

    /**
     * Calculate Maximum Shear Stress
     */
    calculateMaxShearStress: (s1, s2, s3 = 0) => {
        const stresses = [s1, s2, s3].sort((a, b) => b - a);
        return (stresses[0] - stresses[2]) / 2;
    },

    /**
     * Calculate Tensile Stress: σ = F / A
     */
    calculateTensileStress: (force, area) => {
        if (area <= 0) throw new Error('Area must be positive');
        return force / area;
    },

    /**
     * Calculate Compressive Stress: σ = F / A
     */
    calculateCompressiveStress: (force, area) => {
        if (area <= 0) throw new Error('Area must be positive');
        return force / area;
    },

    /**
     * Calculate Shear Stress: τ = F / A
     */
    calculateShearStress: (force, area) => {
        if (area <= 0) throw new Error('Area must be positive');
        return force / area;
    },

    /**
     * Calculate Bending Stress: σ = M * c / I
     */
    calculateBendingStress: (moment, distance, momentOfInertia) => {
        if (momentOfInertia <= 0) throw new Error('Moment of inertia must be positive');
        return (moment * distance) / momentOfInertia;
    },

    /**
     * Calculate Linear Strain: ε = ΔL / L
     */
    calculateLinearStrain: (deltaLength, originalLength) => {
        if (originalLength <= 0) throw new Error('Original length must be positive');
        return deltaLength / originalLength;
    },

    /**
     * Calculate Young's Modulus: E = σ / ε
     */
    calculateYoungsModulus: (stress, strain) => {
        if (strain === 0) throw new Error('Strain cannot be zero');
        return stress / strain;
    },

    /**
     * Calculate Elongation: ΔL = ε * L
     */
    calculateElongation: (strain, originalLength) => {
        return strain * originalLength;
    },

    /**
     * Calculate Beam Deflection (Simply Supported, Point Load at Center)
     * δ = (P * L³) / (48 * E * I)
     */
    calculateBeamDeflection: (load, length, elasticModulus, momentOfInertia) => {
        if (elasticModulus <= 0 || momentOfInertia <= 0) {
            throw new Error('E and I must be positive');
        }
        return (load * Math.pow(length, 3)) / (48 * elasticModulus * momentOfInertia);
    },

    /**
     * Calculate Cantilever Beam Deflection
     * δ = (P * L³) / (3 * E * I)
     */
    calculateCantileverDeflection: (load, length, elasticModulus, momentOfInertia) => {
        if (elasticModulus <= 0 || momentOfInertia <= 0) {
            throw new Error('E and I must be positive');
        }
        return (load * Math.pow(length, 3)) / (3 * elasticModulus * momentOfInertia);
    },

    /**
     * Calculate Moment of Inertia for Circular Section
     * I = π * d⁴ / 64
     */
    calculateCircularMomentOfInertia: (diameter) => {
        return (Math.PI * Math.pow(diameter, 4)) / 64;
    },

    /**
     * Calculate Moment of Inertia for Rectangular Section
     * I = (b * h³) / 12
     */
    calculateRectangularMomentOfInertia: (width, height) => {
        return (width * Math.pow(height, 3)) / 12;
    },

    /**
     * Calculate Reaction Forces (Simply Supported Beam)
     */
    calculateReactionForces: (loadPosition, load, spanLength) => {
        const Ra = (load * (spanLength - loadPosition)) / spanLength;
        const Rb = (load * loadPosition) / spanLength;
        return { Ra, Rb };
    },

    /**
     * Calculate Bending Moment at Position
     */
    calculateBendingMoment: (load, position, support) => {
        return load * position * (1 - position / support);
    },

    /**
     * Calculate Shaft Diameter (ASME)
     * d = (16 / π * σ_allow)^(1/3) * √(K_b*M)² + (K_t*T)²)
     */
    calculateShaftDiameter: (momentBending, torque, stressAllow, kbFactor = 1, ktFactor = 1) => {
        const combined = Math.sqrt((kbFactor * momentBending)**2 + (ktFactor * torque)**2);
        return Math.cbrt((16 / (Math.PI * stressAllow)) * combined);
    },

    /**
     * Calculate Critical Speed of Shaft
     * Nc = 60 / (2π) * √(k / m)
     */
    calculateCriticalSpeed: (stiffness, mass) => {
        if (stiffness <= 0 || mass <= 0) {
            throw new Error('Stiffness and mass must be positive');
        }
        return (60 / (2 * Math.PI)) * Math.sqrt(stiffness / mass);
    },

    /**
     * Calculate Natural Frequency
     * f = 1/(2π) * √(k/m)
     */
    calculateNaturalFrequency: (stiffness, mass) => {
        if (stiffness <= 0 || mass <= 0) {
            throw new Error('Stiffness and mass must be positive');
        }
        return (1 / (2 * Math.PI)) * Math.sqrt(stiffness / mass);
    },

    /**
     * Calculate Euler Buckling Load
     * P_cr = π² * E * I / L²
     */
    calculateEulerBucklingLoad: (elasticModulus, momentOfInertia, length) => {
        if (elasticModulus <= 0 || momentOfInertia <= 0 || length <= 0) {
            throw new Error('All parameters must be positive');
        }
        return (Math.PI**2 * elasticModulus * momentOfInertia) / (length**2);
    },

    /**
     * Calculate Safety Factor
     */
    calculateSafetyFactor: (allowableValue, workingValue) => {
        if (workingValue === 0) throw new Error('Working value cannot be zero');
        return allowableValue / workingValue;
    },

    /**
     * Calculate Utilization Ratio
     */
    calculateUtilizationRatio: (workingValue, allowableValue) => {
        if (allowableValue === 0) throw new Error('Allowable value cannot be zero');
        return (workingValue / allowableValue) * 100;
    },

    /**
     * Calculate Contact Stress (Hertzian)
     */
    calculateContactStress: (load, radius1, radius2, elasticModulus) => {
        const effectiveRadius = (radius1 * radius2) / (radius1 + radius2);
        return Math.sqrt((load * elasticModulus) / (Math.PI * effectiveRadius));
    },

    /**
     * Calculate Power Transmission
     * P = T * ω
     */
    calculatePower: (torque, angularVelocity) => {
        return torque * angularVelocity;
    },

    /**
     * Calculate Torque from Power and Speed
     * T = P / ω
     */
    calculateTorque: (power, angularVelocity) => {
        if (angularVelocity === 0) throw new Error('Angular velocity cannot be zero');
        return power / angularVelocity;
    },

    /**
     * Calculate Belt Length
     */
    calculateBeltLength: (centerDistance, radius1, radius2) => {
        return 2 * centerDistance + Math.PI * (radius1 + radius2) + 
               Math.pow(radius1 - radius2, 2) / (4 * centerDistance);
    },

    /**
     * Calculate Wrap Angle
     */
    calculateWrapAngle: (centerDistance, r1, r2) => {
        const angle = Math.asin((r2 - r1) / centerDistance);
        return (Math.PI - 2 * angle) * 180 / Math.PI;
    },

    /**
     * Calculate Thermal Expansion
     * ΔL = α * L * ΔT
     */
    calculateThermalExpansion: (thermalCoefficient, originalLength, temperatureChange) => {
        return thermalCoefficient * originalLength * temperatureChange;
    },

    /**
     * Calculate Thermal Stress
     * σ = α * E * ΔT
     */
    calculateThermalStress: (thermalCoefficient, elasticModulus, temperatureChange) => {
        return thermalCoefficient * elasticModulus * temperatureChange;
    },

    /* ============================================
       UNIT CONVERSION FUNCTIONS
       ============================================ */

    /**
     * Convert Units
     */
    convertUnits: (value, fromUnit, toUnit) => {
        const conversions = Config.conversions;
        const key = `${fromUnit}_to_${toUnit}`;
        if (conversions[key]) {
            return value * conversions[key];
        }
        throw new Error(`Conversion from ${fromUnit} to ${toUnit} not supported`);
    },

    /**
     * Convert Temperature
     */
    convertTemperature: (value, fromUnit, toUnit) => {
        if (fromUnit === 'C' && toUnit === 'F') {
            return (value * 9/5) + 32;
        } else if (fromUnit === 'F' && toUnit === 'C') {
            return (value - 32) * 5/9;
        }
        return value;
    },

    /* ============================================
       STRING & FORMAT FUNCTIONS
       ============================================ */

    /**
     * Format Number with Decimal Places
     */
    formatNumber: (value, decimalPlaces = Config.decimalPlaces) => {
        return Number(value.toFixed(decimalPlaces));
    },

    /**
     * Format Number as Currency
     */
    formatCurrency: (value, currency = 'USD') => {
        const formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: currency
        });
        return formatter.format(value);
    },

    /**
     * Format Number with Comma Separator
     */
    formatNumberWithComma: (value, decimalPlaces = Config.decimalPlaces) => {
        return Utils.formatNumber(value, decimalPlaces).toLocaleString();
    },

    /**
     * Get Unit Symbol
     */
    getUnitSymbol: (unitType, unitSystem = 'SI') => {
        const system = Config.unitSystems[unitSystem];
        return system[unitType] || 'N/A';
    },

    /**
     * Format Result with Unit
     */
    formatResult: (value, unit, decimalPlaces = Config.decimalPlaces) => {
        const formatted = Utils.formatNumber(value, decimalPlaces);
        return `${formatted} ${unit}`;
    },

    /**
     * Capitalize String
     */
    capitalize: (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    },

    /* ============================================
       ARRAY & OBJECT FUNCTIONS
       ============================================ */

    /**
     * Deep Clone Object
     */
    deepClone: (obj) => {
        return JSON.parse(JSON.stringify(obj));
    },

    /**
     * Merge Objects
     */
    mergeObjects: (obj1, obj2) => {
        return { ...obj1, ...obj2 };
    },

    /**
     * Get Array Average
     */
    getArrayAverage: (arr) => {
        return arr.reduce((a, b) => a + b, 0) / arr.length;
    },

    /**
     * Get Array Min
     */
    getArrayMin: (arr) => {
        return Math.min(...arr);
    },

    /**
     * Get Array Max
     */
    getArrayMax: (arr) => {
        return Math.max(...arr);
    },

    /**
     * Sort Array of Objects
     */
    sortByProperty: (arr, property, ascending = true) => {
        return [...arr].sort((a, b) => {
            if (ascending) {
                return a[property] > b[property] ? 1 : -1;
            } else {
                return a[property] < b[property] ? 1 : -1;
            }
        });
    },

    /* ============================================
       DOM FUNCTIONS
       ============================================ */

    /**
     * Get Element by ID
     */
    getElement: (id) => {
        return document.getElementById(id);
    },

    /**
     * Create Element with Attributes
     */
    createElement: (tag, attributes = {}, content = '') => {
        const element = document.createElement(tag);
        Object.keys(attributes).forEach(key => {
            element.setAttribute(key, attributes[key]);
        });
        if (content) element.innerHTML = content;
        return element;
    },

    /**
     * Show Element
     */
    showElement: (element) => {
        if (element) element.classList.remove('hidden');
    },

    /**
     * Hide Element
     */
    hideElement: (element) => {
        if (element) element.classList.add('hidden');
    },

    /**
     * Toggle Element Visibility
     */
    toggleElement: (element) => {
        if (element) element.classList.toggle('hidden');
    },

    /**
     * Add Class to Element
     */
    addClass: (element, className) => {
        if (element) element.classList.add(className);
    },

    /**
     * Remove Class from Element
     */
    removeClass: (element, className) => {
        if (element) element.classList.remove(className);
    },

    /**
     * Toggle Class on Element
     */
    toggleClass: (element, className) => {
        if (element) element.classList.toggle(className);
    },

    /**
     * Set Element HTML
     */
    setHTML: (element, html) => {
        if (element) element.innerHTML = html;
    },

    /**
     * Get Element Value
     */
    getValue: (id) => {
        const element = Utils.getElement(id);
        return element ? element.value : null;
    },

    /**
     * Set Element Value
     */
    setValue: (id, value) => {
        const element = Utils.getElement(id);
        if (element) element.value = value;
    },

    /* ============================================
       STORAGE FUNCTIONS
       ============================================ */

    /**
     * Save to Local Storage
     */
    saveToStorage: (key, value) => {
        try {
            localStorage.setItem(key, JSON.stringify(value));
            return true;
        } catch (e) {
            console.error('Storage error:', e);
            return false;
        }
    },

    /**
     * Get from Local Storage
     */
    getFromStorage: (key) => {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : null;
        } catch (e) {
            console.error('Storage error:', e);
            return null;
        }
    },

    /**
     * Remove from Local Storage
     */
    removeFromStorage: (key) => {
        try {
            localStorage.removeItem(key);
            return true;
        } catch (e) {
            console.error('Storage error:', e);
            return false;
        }
    },

    /**
     * Clear All Storage
     */
    clearStorage: () => {
        try {
            localStorage.clear();
            return true;
        } catch (e) {
            console.error('Storage error:', e);
            return false;
        }
    },

    /* ============================================
       VALIDATION FUNCTIONS
       ============================================ */

    /**
     * Validate Number
     */
    isValidNumber: (value) => {
        return !isNaN(value) && isFinite(value);
    },

    /**
     * Validate Positive Number
     */
    isPositiveNumber: (value) => {
        return Utils.isValidNumber(value) && value > 0;
    },

    /**
     * Validate Number Range
     */
    isInRange: (value, min, max) => {
        return Utils.isValidNumber(value) && value >= min && value <= max;
    },

    /**
     * Validate Email
     */
    isValidEmail: (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    },

    /* ============================================
       DATE & TIME FUNCTIONS
       ============================================ */

    /**
     * Get Current Date and Time
     */
    getCurrentDateTime: () => {
        return new Date().toLocaleString();
    },

    /**
     * Format Date
     */
    formatDate: (date, format = 'YYYY-MM-DD') => {
        const d = new Date(date);
        const year = d.getFullYear();
        const month = String(d.getMonth() + 1).padStart(2, '0');
        const day = String(d.getDate()).padStart(2, '0');
        return format.replace('YYYY', year).replace('MM', month).replace('DD', day);
    },

    /**
     * Calculate Time Difference
     */
    getTimeDifference: (date1, date2) => {
        const diff = Math.abs(date2 - date1);
        return {
            days: Math.floor(diff / (1000 * 60 * 60 * 24)),
            hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
            minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
        };
    },

    /* ============================================
       LOGGING FUNCTIONS
       ============================================ */

    /**
     * Log Message
     */
    log: (message, type = 'info') => {
        const timestamp = new Date().toLocaleTimeString();
        console.log(`[${timestamp}] [${type.toUpperCase()}] ${message}`);
    },

    /**
     * Log Error
     */
    logError: (message) => {
        Utils.log(message, 'error');
    },

    /**
     * Log Success
     */
    logSuccess: (message) => {
        Utils.log(message, 'success');
    }
};

// Export for use in modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Utils;
}
