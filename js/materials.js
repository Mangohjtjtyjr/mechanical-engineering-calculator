/* ============================================
   MATERIALS DATABASE
   MechCalc Pro - Comprehensive Material Properties
   ============================================ */

const MaterialsDatabase = {
    materials: [
        // MILD STEEL
        {
            id: 1,
            name: 'Mild Steel',
            grade: 'MS',
            category: 'Mild Steel',
            density: 7850,
            youngsModulus: 210000,
            poissonRatio: 0.28,
            yieldStrength: 250,
            ultimateStrength: 410,
            shearStrength: 235,
            hardness: 95,
            fatigueLimit: 140,
            thermalConductivity: 50,
            thermalExpansion: 0.000012,
            specificHeat: 480,
            standard: 'ASTM A36'
        },

        // EN8 STEEL
        {
            id: 2,
            name: 'EN8 Steel',
            grade: 'EN8',
            category: 'Medium Carbon Steel',
            density: 7850,
            youngsModulus: 210000,
            poissonRatio: 0.28,
            yieldStrength: 440,
            ultimateStrength: 690,
            shearStrength: 450,
            hardness: 217,
            fatigueLimit: 280,
            thermalConductivity: 50,
            thermalExpansion: 0.000012,
            specificHeat: 480,
            standard: 'BS 970'
        },

        // EN19 STEEL
        {
            id: 3,
            name: 'EN19 Steel',
            grade: 'EN19',
            category: 'High Carbon Steel',
            density: 7850,
            youngsModulus: 210000,
            poissonRatio: 0.28,
            yieldStrength: 620,
            ultimateStrength: 830,
            shearStrength: 620,
            hardness: 280,
            fatigueLimit: 380,
            thermalConductivity: 50,
            thermalExpansion: 0.000012,
            specificHeat: 480,
            standard: 'BS 970'
        },

        // EN24 STEEL
        {
            id: 4,
            name: 'EN24 Steel',
            grade: 'EN24',
            category: 'High Carbon Steel',
            density: 7850,
            youngsModulus: 210000,
            poissonRatio: 0.28,
            yieldStrength: 800,
            ultimateStrength: 1100,
            shearStrength: 800,
            hardness: 350,
            fatigueLimit: 450,
            thermalConductivity: 50,
            thermalExpansion: 0.000012,
            specificHeat: 480,
            standard: 'BS 970'
        },

        // A36 STEEL
        {
            id: 5,
            name: 'A36 Steel',
            grade: 'A36',
            category: 'Mild Steel',
            density: 7850,
            youngsModulus: 200000,
            poissonRatio: 0.26,
            yieldStrength: 250,
            ultimateStrength: 400,
            shearStrength: 210,
            hardness: 92,
            fatigueLimit: 130,
            thermalConductivity: 50,
            thermalExpansion: 0.0000117,
            specificHeat: 490,
            standard: 'ASTM A36'
        },

        // S275 STRUCTURAL STEEL
        {
            id: 6,
            name: 'S275 Steel',
            grade: 'S275',
            category: 'Structural Steel',
            density: 7850,
            youngsModulus: 210000,
            poissonRatio: 0.27,
            yieldStrength: 275,
            ultimateStrength: 430,
            shearStrength: 230,
            hardness: 115,
            fatigueLimit: 150,
            thermalConductivity: 50,
            thermalExpansion: 0.000012,
            specificHeat: 480,
            standard: 'EN 10025'
        },

        // S355 STRUCTURAL STEEL
        {
            id: 7,
            name: 'S355 Steel',
            grade: 'S355',
            category: 'Structural Steel',
            density: 7850,
            youngsModulus: 210000,
            poissonRatio: 0.27,
            yieldStrength: 355,
            ultimateStrength: 510,
            shearStrength: 295,
            hardness: 155,
            fatigueLimit: 200,
            thermalConductivity: 50,
            thermalExpansion: 0.000012,
            specificHeat: 480,
            standard: 'EN 10025'
        },

        // STAINLESS STEEL 304
        {
            id: 8,
            name: 'SS304',
            grade: '304',
            category: 'Stainless Steel',
            density: 8000,
            youngsModulus: 193000,
            poissonRatio: 0.30,
            yieldStrength: 215,
            ultimateStrength: 505,
            shearStrength: 185,
            hardness: 217,
            fatigueLimit: 200,
            thermalConductivity: 16.3,
            thermalExpansion: 0.000016,
            specificHeat: 500,
            standard: 'ASTM A240'
        },

        // STAINLESS STEEL 316
        {
            id: 9,
            name: 'SS316',
            grade: '316',
            category: 'Stainless Steel',
            density: 8000,
            youngsModulus: 193000,
            poissonRatio: 0.30,
            yieldStrength: 170,
            ultimateStrength: 485,
            shearStrength: 170,
            hardness: 217,
            fatigueLimit: 185,
            thermalConductivity: 16.3,
            thermalExpansion: 0.000016,
            specificHeat: 500,
            standard: 'ASTM A240'
        },

        // STAINLESS STEEL 410
        {
            id: 10,
            name: 'SS410',
            grade: '410',
            category: 'Stainless Steel',
            density: 7750,
            youngsModulus: 200000,
            poissonRatio: 0.27,
            yieldStrength: 275,
            ultimateStrength: 450,
            shearStrength: 240,
            hardness: 269,
            fatigueLimit: 220,
            thermalConductivity: 25,
            thermalExpansion: 0.0000105,
            specificHeat: 490,
            standard: 'ASTM A240'
        },

        // ALUMINUM 5052
        {
            id: 11,
            name: 'Aluminum 5052',
            grade: '5052',
            category: 'Aluminum',
            density: 2680,
            youngsModulus: 70000,
            poissonRatio: 0.33,
            yieldStrength: 228,
            ultimateStrength: 285,
            shearStrength: 160,
            hardness: 60,
            fatigueLimit: 90,
            thermalConductivity: 138,
            thermalExpansion: 0.0000236,
            specificHeat: 960,
            standard: 'ASTM B209'
        },

        // ALUMINUM 6061
        {
            id: 12,
            name: 'Aluminum 6061',
            grade: '6061',
            category: 'Aluminum',
            density: 2700,
            youngsModulus: 69000,
            poissonRatio: 0.33,
            yieldStrength: 276,
            ultimateStrength: 310,
            shearStrength: 205,
            hardness: 95,
            fatigueLimit: 96,
            thermalConductivity: 167,
            thermalExpansion: 0.0000236,
            specificHeat: 896,
            standard: 'ASTM B209'
        },

        // ALUMINUM 7075
        {
            id: 13,
            name: 'Aluminum 7075',
            grade: '7075',
            category: 'Aluminum',
            density: 2810,
            youngsModulus: 72000,
            poissonRatio: 0.33,
            yieldStrength: 505,
            ultimateStrength: 570,
            shearStrength: 331,
            hardness: 150,
            fatigueLimit: 160,
            thermalConductivity: 130,
            thermalExpansion: 0.0000234,
            specificHeat: 960,
            standard: 'ASTM B209'
        },

        // COPPER
        {
            id: 14,
            name: 'Copper',
            grade: 'Cu',
            category: 'Copper & Brass',
            density: 8960,
            youngsModulus: 130000,
            poissonRatio: 0.34,
            yieldStrength: 70,
            ultimateStrength: 200,
            shearStrength: 65,
            hardness: 40,
            fatigueLimit: 60,
            thermalConductivity: 401,
            thermalExpansion: 0.0000165,
            specificHeat: 385,
            standard: 'ASTM B124'
        },

        // BRASS
        {
            id: 15,
            name: 'Brass',
            grade: 'CuZn30',
            category: 'Copper & Brass',
            density: 8470,
            youngsModulus: 100000,
            poissonRatio: 0.35,
            yieldStrength: 75,
            ultimateStrength: 250,
            shearStrength: 110,
            hardness: 50,
            fatigueLimit: 90,
            thermalConductivity: 121,
            thermalExpansion: 0.0000193,
            specificHeat: 390,
            standard: 'ASTM B36'
        },

        // BRONZE
        {
            id: 16,
            name: 'Bronze',
            grade: 'CuSn8',
            category: 'Copper & Brass',
            density: 8800,
            youngsModulus: 110000,
            poissonRatio: 0.33,
            yieldStrength: 200,
            ultimateStrength: 300,
            shearStrength: 140,
            hardness: 80,
            fatigueLimit: 100,
            thermalConductivity: 50,
            thermalExpansion: 0.0000179,
            specificHeat: 385,
            standard: 'ASTM B271'
        },

        // TITANIUM GRADE 2
        {
            id: 17,
            name: 'Titanium Grade 2',
            grade: 'Ti Gr2',
            category: 'Titanium',
            density: 4510,
            youngsModulus: 103000,
            poissonRatio: 0.32,
            yieldStrength: 345,
            ultimateStrength: 450,
            shearStrength: 240,
            hardness: 310,
            fatigueLimit: 200,
            thermalConductivity: 22,
            thermalExpansion: 0.00000885,
            specificHeat: 528,
            standard: 'ASTM B265'
        },

        // TITANIUM GRADE 5
        {
            id: 18,
            name: 'Titanium Grade 5',
            grade: 'Ti Gr5',
            category: 'Titanium',
            density: 4430,
            youngsModulus: 113000,
            poissonRatio: 0.34,
            yieldStrength: 880,
            ultimateStrength: 950,
            shearStrength: 550,
            hardness: 334,
            fatigueLimit: 430,
            thermalConductivity: 8.4,
            thermalExpansion: 0.00000825,
            specificHeat: 526,
            standard: 'ASTM B265'
        },

        // CAST IRON
        {
            id: 19,
            name: 'Cast Iron',
            grade: 'CI',
            category: 'Cast Iron',
            density: 7200,
            youngsModulus: 100000,
            poissonRatio: 0.25,
            yieldStrength: 300,
            ultimateStrength: 350,
            shearStrength: 200,
            hardness: 200,
            fatigueLimit: 100,
            thermalConductivity: 52,
            thermalExpansion: 0.0000105,
            specificHeat: 460,
            standard: 'ASTM A48'
        },

        // ENGINEERING PLASTICS - ACETAL
        {
            id: 20,
            name: 'Acetal (Delrin)',
            grade: 'POM',
            category: 'Engineering Plastics',
            density: 1410,
            youngsModulus: 2900,
            poissonRatio: 0.35,
            yieldStrength: 65,
            ultimateStrength: 90,
            shearStrength: 45,
            hardness: 85,
            fatigueLimit: 25,
            thermalConductivity: 0.24,
            thermalExpansion: 0.000011,
            specificHeat: 1500,
            standard: 'ASTM D4181'
        },

        // ENGINEERING PLASTICS - NYLON
        {
            id: 21,
            name: 'Nylon 6',
            grade: 'PA6',
            category: 'Engineering Plastics',
            density: 1140,
            youngsModulus: 2700,
            poissonRatio: 0.40,
            yieldStrength: 75,
            ultimateStrength: 85,
            shearStrength: 40,
            hardness: 65,
            fatigueLimit: 20,
            thermalConductivity: 0.25,
            thermalExpansion: 0.00008,
            specificHeat: 1600,
            standard: 'ASTM D4066'
        },

        // COMPOSITE - CARBON FIBER
        {
            id: 22,
            name: 'Carbon Fiber Composite',
            grade: 'CFRP',
            category: 'Composites',
            density: 1600,
            youngsModulus: 230000,
            poissonRatio: 0.28,
            yieldStrength: 1500,
            ultimateStrength: 1600,
            shearStrength: 900,
            hardness: 200,
            fatigueLimit: 600,
            thermalConductivity: 5,
            thermalExpansion: -0.0000010,
            specificHeat: 900,
            standard: 'ASTM D3171'
        }
    ],

    /**
     * Get Material by ID
     */
    getMaterialById: (id) => {
        return MaterialsDatabase.materials.find(m => m.id === id);
    },

    /**
     * Get Material by Name
     */
    getMaterialByName: (name) => {
        return MaterialsDatabase.materials.find(m => m.name.toLowerCase() === name.toLowerCase());
    },

    /**
     * Get Materials by Category
     */
    getMaterialsByCategory: (category) => {
        return MaterialsDatabase.materials.filter(m => m.category === category);
    },

    /**
     * Get All Categories
     */
    getAllCategories: () => {
        return [...new Set(MaterialsDatabase.materials.map(m => m.category))];
    },

    /**
     * Search Materials
     */
    searchMaterials: (query) => {
        const q = query.toLowerCase();
        return MaterialsDatabase.materials.filter(m =>
            m.name.toLowerCase().includes(q) ||
            m.grade.toLowerCase().includes(q) ||
            m.category.toLowerCase().includes(q)
        );
    },

    /**
     * Add Custom Material
     */
    addMaterial: (material) => {
        const newId = Math.max(...MaterialsDatabase.materials.map(m => m.id), 0) + 1;
        const newMaterial = { id: newId, ...material };
        MaterialsDatabase.materials.push(newMaterial);
        return newMaterial;
    },

    /**
     * Update Material
     */
    updateMaterial: (id, updates) => {
        const material = MaterialsDatabase.getMaterialById(id);
        if (material) {
            Object.assign(material, updates);
            return material;
        }
        return null;
    },

    /**
     * Delete Material
     */
    deleteMaterial: (id) => {
        const index = MaterialsDatabase.materials.findIndex(m => m.id === id);
        if (index > -1) {
            MaterialsDatabase.materials.splice(index, 1);
            return true;
        }
        return false;
    },

    /**
     * Export Materials as JSON
     */
    exportAsJSON: () => {
        return JSON.stringify(MaterialsDatabase.materials, null, 2);
    },

    /**
     * Import Materials from JSON
     */
    importFromJSON: (jsonString) => {
        try {
            const materials = JSON.parse(jsonString);
            MaterialsDatabase.materials = materials;
            return true;
        } catch (e) {
            console.error('Import error:', e);
            return false;
        }
    }
};

// Export for use in modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = MaterialsDatabase;
}
