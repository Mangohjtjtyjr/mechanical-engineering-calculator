/* ============================================
   MAIN APPLICATION FILE
   MechCalc Pro - Core Application Logic
   ============================================ */

class MechCalcApp {
    constructor() {
        this.currentModule = 'dashboard';
        this.currentTheme = 'light';
        this.unitSystem = 'SI';
        this.calculationHistory = [];
        this.projects = [];
        this.init();
    }

    /**
     * Initialize Application
     */
    init() {
        this.setupTheme();
        this.setupEventListeners();
        this.loadSettings();
        this.loadCalculationHistory();
        this.setupModuleNavigation();
        Utils.log('MechCalc Pro initialized', 'success');
    }

    /**
     * Setup Theme Toggle
     */
    setupTheme() {
        const savedTheme = Utils.getFromStorage(Config.storageKeys.theme) || 'light';
        this.setTheme(savedTheme);

        const themeToggle = Utils.getElement('themeToggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', () => {
                const newTheme = this.currentTheme === 'light' ? 'dark' : 'light';
                this.setTheme(newTheme);
            });
        }
    }

    /**
     * Set Theme
     */
    setTheme(theme) {
        this.currentTheme = theme;
        document.documentElement.setAttribute('data-theme', theme);
        Utils.saveToStorage(Config.storageKeys.theme, theme);

        const icon = Utils.getElement('themeToggle');
        if (icon) {
            icon.innerHTML = theme === 'light' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
        }
    }

    /**
     * Setup Event Listeners
     */
    setupEventListeners() {
        // Navigation
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const module = link.getAttribute('data-module');
                this.loadModule(module);
            });
        });

        // Mobile Menu Toggle
        const menuToggle = Utils.getElement('menuToggle');
        if (menuToggle) {
            menuToggle.addEventListener('click', () => {
                const sidebar = document.querySelector('.sidebar');
                if (sidebar) sidebar.classList.toggle('open');
            });
        }

        // Settings
        const settingsBtn = Utils.getElement('settingsBtn');
        if (settingsBtn) {
            settingsBtn.addEventListener('click', () => this.openSettingsModal());
        }

        // Calculation History
        const historyBtn = Utils.getElement('calculateHistoryBtn');
        if (historyBtn) {
            historyBtn.addEventListener('click', () => this.openHistoryModal());
        }

        // Save Project
        const saveProjectBtn = Utils.getElement('saveProjectBtn');
        if (saveProjectBtn) {
            saveProjectBtn.addEventListener('click', () => this.saveProject());
        }

        // Load Project
        const loadProjectBtn = Utils.getElement('loadProjectBtn');
        if (loadProjectBtn) {
            loadProjectBtn.addEventListener('click', () => this.loadProjectDialog());
        }

        // Export Report
        const exportReportBtn = Utils.getElement('exportReportBtn');
        if (exportReportBtn) {
            exportReportBtn.addEventListener('click', () => this.exportReport());
        }

        // Module Search
        const moduleSearch = Utils.getElement('moduleSearch');
        if (moduleSearch) {
            moduleSearch.addEventListener('input', (e) => this.searchModules(e.target.value));
        }

        // Close Modals
        const closeButtons = document.querySelectorAll('.close-btn');
        closeButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const modal = e.target.closest('.modal');
                if (modal) modal.classList.remove('active');
            });
        });
    }

    /**
     * Setup Module Navigation
     */
    setupModuleNavigation() {
        const moduleCards = document.querySelectorAll('.module-card');
        moduleCards.forEach(card => {
            card.addEventListener('click', () => {
                const module = card.getAttribute('data-module');
                this.loadModule(module);
            });
        });
    }

    /**
     * Load Module
     */
    loadModule(moduleName) {
        // Hide all views
        const views = document.querySelectorAll('.view');
        views.forEach(view => view.classList.remove('active'));

        // Hide dashboard
        const dashboard = Utils.getElement('dashboard');
        if (dashboard) dashboard.classList.remove('active');

        // Update active nav link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-module') === moduleName) {
                link.classList.add('active');
            }
        });

        // Load module
        this.currentModule = moduleName;
        this.loadModuleContent(moduleName);

        // Update breadcrumb
        const navLink = document.querySelector(`[data-module="${moduleName}"]`);
        if (navLink) {
            const breadcrumb = Utils.getElement('breadcrumb');
            if (breadcrumb) {
                const text = navLink.textContent.trim();
                breadcrumb.innerHTML = `<span>Dashboard</span><span>${text}</span>`;
            }
        }

        // Close mobile menu
        const sidebar = document.querySelector('.sidebar');
        if (sidebar) sidebar.classList.remove('open');

        Utils.log(`Module loaded: ${moduleName}`, 'info');
    }

    /**
     * Load Module Content
     */
    loadModuleContent(moduleName) {
        const container = Utils.getElement('moduleContainer');
        if (!container) return;

        // Load appropriate module
        switch(moduleName) {
            case 'material-db':
                this.loadMaterialDatabase();
                break;
            case 'stress-analysis':
                this.loadStressAnalysis();
                break;
            case 'strain-deflection':
                this.loadStrainDeflection();
                break;
            case 'beam-design':
                this.loadBeamDesign();
                break;
            case 'shaft-design':
                this.loadShaftDesign();
                break;
            case 'unit-converter':
                this.loadUnitConverter();
                break;
            default:
                this.loadPlaceholderModule(moduleName);
        }
    }

    /**
     * Load Material Database Module
     */
    loadMaterialDatabase() {
        const container = Utils.getElement('moduleContainer');
        const html = `
            <div class="module-container">
                <div class="module-header">
                    <h2><i class="fas fa-database"></i> Material Database</h2>
                    <button class="btn-primary" id="addMaterialBtn"><i class="fas fa-plus"></i> Add Material</button>
                </div>

                <div class="input-section">
                    <div class="form-group">
                        <label>Search Material</label>
                        <input type="text" id="materialSearch" placeholder="Search by name, grade, or category...">
                    </div>
                </div>

                <div class="table-container">
                    <table class="material-table">
                        <thead>
                            <tr>
                                <th>Material Name</th>
                                <th>Grade</th>
                                <th>Density (kg/m³)</th>
                                <th>E (MPa)</th>
                                <th>Yield (MPa)</th>
                                <th>Ultimate (MPa)</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody id="materialTableBody">
                        </tbody>
                    </table>
                </div>
            </div>
        `;
        Utils.setHTML(container, html);
        this.populateMaterialTable();
        this.setupMaterialSearch();
    }

    /**
     * Populate Material Table
     */
    populateMaterialTable() {
        const tbody = Utils.getElement('materialTableBody');
        if (!tbody) return;

        const materials = MaterialsDatabase.materials;
        let html = '';

        materials.forEach(material => {
            html += `
                <tr>
                    <td><strong>${material.name}</strong></td>
                    <td>${material.grade}</td>
                    <td>${Utils.formatNumber(material.density, 0)}</td>
                    <td>${Utils.formatNumber(material.youngsModulus, 0)}</td>
                    <td>${Utils.formatNumber(material.yieldStrength, 0)}</td>
                    <td>${Utils.formatNumber(material.ultimateStrength, 0)}</td>
                    <td>
                        <div class="material-actions">
                            <button class="btn-secondary btn-small" onclick="app.selectMaterial(${material.id})">Select</button>
                            <button class="btn-secondary btn-small" onclick="app.viewMaterialDetails(${material.id})">View</button>
                        </div>
                    </td>
                </tr>
            `;
        });

        Utils.setHTML(tbody, html);
    }

    /**
     * Setup Material Search
     */
    setupMaterialSearch() {
        const searchInput = Utils.getElement('materialSearch');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                const query = e.target.value;
                const results = MaterialsDatabase.searchMaterials(query);
                this.displayMaterialResults(results);
            });
        }
    }

    /**
     * Display Material Search Results
     */
    displayMaterialResults(results) {
        const tbody = Utils.getElement('materialTableBody');
        if (!tbody) return;

        let html = '';
        results.forEach(material => {
            html += `
                <tr>
                    <td><strong>${material.name}</strong></td>
                    <td>${material.grade}</td>
                    <td>${Utils.formatNumber(material.density, 0)}</td>
                    <td>${Utils.formatNumber(material.youngsModulus, 0)}</td>
                    <td>${Utils.formatNumber(material.yieldStrength, 0)}</td>
                    <td>${Utils.formatNumber(material.ultimateStrength, 0)}</td>
                    <td>
                        <div class="material-actions">
                            <button class="btn-secondary btn-small" onclick="app.selectMaterial(${material.id})">Select</button>
                            <button class="btn-secondary btn-small" onclick="app.viewMaterialDetails(${material.id})">View</button>
                        </div>
                    </td>
                </tr>
            `;
        });

        Utils.setHTML(tbody, html);
    }

    /**
     * View Material Details
     */
    viewMaterialDetails(materialId) {
        const material = MaterialsDatabase.getMaterialById(materialId);
        if (!material) return;

        const detailsHtml = `
            <div style="padding: 20px;">
                <h3>${material.name} (${material.grade})</h3>
                <table style="width: 100%; margin-top: 20px;">
                    <tr><td><strong>Category:</strong></td><td>${material.category}</td></tr>
                    <tr><td><strong>Standard:</strong></td><td>${material.standard}</td></tr>
                    <tr><td><strong>Density:</strong></td><td>${Utils.formatNumber(material.density, 2)} kg/m³</td></tr>
                    <tr><td><strong>Young's Modulus:</strong></td><td>${Utils.formatNumber(material.youngsModulus, 0)} MPa</td></tr>
                    <tr><td><strong>Poisson Ratio:</strong></td><td>${Utils.formatNumber(material.poissonRatio, 3)}</td></tr>
                    <tr><td><strong>Yield Strength:</strong></td><td>${Utils.formatNumber(material.yieldStrength, 1)} MPa</td></tr>
                    <tr><td><strong>Ultimate Strength:</strong></td><td>${Utils.formatNumber(material.ultimateStrength, 1)} MPa</td></tr>
                    <tr><td><strong>Shear Strength:</strong></td><td>${Utils.formatNumber(material.shearStrength, 1)} MPa</td></tr>
                    <tr><td><strong>Hardness:</strong></td><td>${Utils.formatNumber(material.hardness, 0)} HV</td></tr>
                    <tr><td><strong>Fatigue Limit:</strong></td><td>${Utils.formatNumber(material.fatigueLimit, 1)} MPa</td></tr>
                    <tr><td><strong>Thermal Conductivity:</strong></td><td>${Utils.formatNumber(material.thermalConductivity, 2)} W/m·K</td></tr>
                    <tr><td><strong>Thermal Expansion:</strong></td><td>${material.thermalExpansion.toExponential(2)} /K</td></tr>
                    <tr><td><strong>Specific Heat:</strong></td><td>${Utils.formatNumber(material.specificHeat, 0)} J/kg·K</td></tr>
                </table>
            </div>
        `;

        this.showModal('Material Properties', detailsHtml);
    }

    /**
     * Select Material
     */
    selectMaterial(materialId) {
        const material = MaterialsDatabase.getMaterialById(materialId);
        if (material) {
            Utils.saveToStorage(Config.storageKeys.defaultMaterial, materialId);
            Utils.log(`Material selected: ${material.name}`, 'success');
            alert(`Material selected: ${material.name}`);
        }
    }

    /**
     * Load Stress Analysis Module
     */
    loadStressAnalysis() {
        const container = Utils.getElement('moduleContainer');
        const html = `
            <div class="module-container">
                <div class="module-header">
                    <h2><i class="fas fa-chart-line"></i> Stress Analysis</h2>
                </div>

                <div class="module-tabs">
                    <button class="tab-btn active" data-tab="tensile">Tensile Stress</button>
                    <button class="tab-btn" data-tab="compressive">Compressive Stress</button>
                    <button class="tab-btn" data-tab="shear">Shear Stress</button>
                    <button class="tab-btn" data-tab="bending">Bending Stress</button>
                    <button class="tab-btn" data-tab="vonmises">Von Mises</button>
                </div>

                <!-- Tensile Stress Tab -->
                <div class="tab-content active" data-tab="tensile">
                    <div class="input-section">
                        <h3 class="section-title"><i class="fas fa-arrow-right"></i> Tensile Stress Calculation</h3>
                        <div class="form-row">
                            <div class="form-group-inline">
                                <label>Force (N)</label>
                                <input type="number" id="tensileForce" placeholder="Enter force" value="1000">
                            </div>
                            <div class="form-group-inline">
                                <label>Area (mm²)</label>
                                <input type="number" id="tensileArea" placeholder="Enter area" value="100">
                            </div>
                        </div>
                        <button class="btn-primary" onclick="app.calculateTensileStress()"><i class="fas fa-calculator"></i> Calculate</button>
                    </div>
                    <div id="tensileResults"></div>
                </div>

                <!-- Compressive Stress Tab -->
                <div class="tab-content" data-tab="compressive">
                    <div class="input-section">
                        <h3 class="section-title"><i class="fas fa-arrow-left"></i> Compressive Stress Calculation</h3>
                        <div class="form-row">
                            <div class="form-group-inline">
                                <label>Force (N)</label>
                                <input type="number" id="compressiveForce" placeholder="Enter force" value="1000">
                            </div>
                            <div class="form-group-inline">
                                <label>Area (mm²)</label>
                                <input type="number" id="compressiveArea" placeholder="Enter area" value="100">
                            </div>
                        </div>
                        <button class="btn-primary" onclick="app.calculateCompressiveStress()"><i class="fas fa-calculator"></i> Calculate</button>
                    </div>
                    <div id="compressiveResults"></div>
                </div>

                <!-- Shear Stress Tab -->
                <div class="tab-content" data-tab="shear">
                    <div class="input-section">
                        <h3 class="section-title"><i class="fas fa-arrows-alt"></i> Shear Stress Calculation</h3>
                        <div class="form-row">
                            <div class="form-group-inline">
                                <label>Force (N)</label>
                                <input type="number" id="shearForce" placeholder="Enter force" value="500">
                            </div>
                            <div class="form-group-inline">
                                <label>Area (mm²)</label>
                                <input type="number" id="shearArea" placeholder="Enter area" value="50">
                            </div>
                        </div>
                        <button class="btn-primary" onclick="app.calculateShearStress()"><i class="fas fa-calculator"></i> Calculate</button>
                    </div>
                    <div id="shearResults"></div>
                </div>

                <!-- Bending Stress Tab -->
                <div class="tab-content" data-tab="bending">
                    <div class="input-section">
                        <h3 class="section-title"><i class="fas fa-bezier-curve"></i> Bending Stress Calculation</h3>
                        <div class="form-row">
                            <div class="form-group-inline">
                                <label>Bending Moment (N·mm)</label>
                                <input type="number" id="bendingMoment" placeholder="Enter moment" value="10000">
                            </div>
                            <div class="form-group-inline">
                                <label>Distance from Neutral Axis (mm)</label>
                                <input type="number" id="bendingDistance" placeholder="Enter distance" value="10">
                            </div>
                            <div class="form-group-inline">
                                <label>Moment of Inertia (mm⁴)</label>
                                <input type="number" id="bendingInertia" placeholder="Enter inertia" value="5000">
                            </div>
                        </div>
                        <button class="btn-primary" onclick="app.calculateBendingStress()"><i class="fas fa-calculator"></i> Calculate</button>
                    </div>
                    <div id="bendingResults"></div>
                </div>

                <!-- Von Mises Tab -->
                <div class="tab-content" data-tab="vonmises">
                    <div class="input-section">
                        <h3 class="section-title"><i class="fas fa-cube"></i> Von Mises Stress Calculation</h3>
                        <div class="form-row">
                            <div class="form-group-inline">
                                <label>σx (MPa)</label>
                                <input type="number" id="vonmisesX" placeholder="Stress X" value="50">
                            </div>
                            <div class="form-group-inline">
                                <label>σy (MPa)</label>
                                <input type="number" id="vonmisesY" placeholder="Stress Y" value="30">
                            </div>
                            <div class="form-group-inline">
                                <label>σz (MPa)</label>
                                <input type="number" id="vonmisesZ" placeholder="Stress Z" value="0">
                            </div>
                        </div>
                        <button class="btn-primary" onclick="app.calculateVonMises()"><i class="fas fa-calculator"></i> Calculate</button>
                    </div>
                    <div id="vonmisesResults"></div>
                </div>
            </div>
        `;
        Utils.setHTML(container, html);
        this.setupTabs();
    }

    /**
     * Setup Tabs
     */
    setupTabs() {
        const tabButtons = document.querySelectorAll('.tab-btn');
        const tabContents = document.querySelectorAll('.tab-content');

        tabButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const tabName = btn.getAttribute('data-tab');
                
                tabButtons.forEach(b => b.classList.remove('active'));
                tabContents.forEach(c => c.classList.remove('active'));

                btn.classList.add('active');
                const activeContent = document.querySelector(`.tab-content[data-tab="${tabName}"]`);
                if (activeContent) activeContent.classList.add('active');
            });
        });
    }

    /**
     * Calculate Tensile Stress
     */
    calculateTensileStress() {
        const force = parseFloat(Utils.getValue('tensileForce')) || 0;
        const area = parseFloat(Utils.getValue('tensileArea')) || 0;

        if (force <= 0 || area <= 0) {
            alert('Please enter valid positive values');
            return;
        }

        const stress = Utils.calculateTensileStress(force, area);
        const resultsDiv = Utils.getElement('tensileResults');

        const html = `
            <div class="results-section">
                <h3>Results</h3>
                <div class="results-grid">
                    <div class="result-item">
                        <div class="result-label">Tensile Stress</div>
                        <div class="result-value">${Utils.formatNumber(stress, 2)}</div>
                        <div class="result-unit">MPa</div>
                    </div>
                </div>
                <div class="calculation-details">
                    <h4>Formula</h4>
                    <div class="formula-box">
                        <div class="formula-title">Tensile Stress</div>
                        <div class="formula-content">σ = F / A = ${Utils.formatNumber(force)} / ${Utils.formatNumber(area)} = ${Utils.formatNumber(stress, 2)} MPa</div>
                    </div>
                </div>
            </div>
        `;

        Utils.setHTML(resultsDiv, html);
        this.addToHistory('Tensile Stress', { force, area, result: stress });
    }

    /**
     * Calculate Compressive Stress
     */
    calculateCompressiveStress() {
        const force = parseFloat(Utils.getValue('compressiveForce')) || 0;
        const area = parseFloat(Utils.getValue('compressiveArea')) || 0;

        if (force <= 0 || area <= 0) {
            alert('Please enter valid positive values');
            return;
        }

        const stress = Utils.calculateCompressiveStress(force, area);
        const resultsDiv = Utils.getElement('compressiveResults');

        const html = `
            <div class="results-section">
                <h3>Results</h3>
                <div class="results-grid">
                    <div class="result-item">
                        <div class="result-label">Compressive Stress</div>
                        <div class="result-value">${Utils.formatNumber(stress, 2)}</div>
                        <div class="result-unit">MPa</div>
                    </div>
                </div>
            </div>
        `;

        Utils.setHTML(resultsDiv, html);
        this.addToHistory('Compressive Stress', { force, area, result: stress });
    }

    /**
     * Calculate Shear Stress
     */
    calculateShearStress() {
        const force = parseFloat(Utils.getValue('shearForce')) || 0;
        const area = parseFloat(Utils.getValue('shearArea')) || 0;

        if (force <= 0 || area <= 0) {
            alert('Please enter valid positive values');
            return;
        }

        const stress = Utils.calculateShearStress(force, area);
        const resultsDiv = Utils.getElement('shearResults');

        const html = `
            <div class="results-section">
                <h3>Results</h3>
                <div class="results-grid">
                    <div class="result-item">
                        <div class="result-label">Shear Stress</div>
                        <div class="result-value">${Utils.formatNumber(stress, 2)}</div>
                        <div class="result-unit">MPa</div>
                    </div>
                </div>
            </div>
        `;

        Utils.setHTML(resultsDiv, html);
        this.addToHistory('Shear Stress', { force, area, result: stress });
    }

    /**
     * Calculate Bending Stress
     */
    calculateBendingStress() {
        const moment = parseFloat(Utils.getValue('bendingMoment')) || 0;
        const distance = parseFloat(Utils.getValue('bendingDistance')) || 0;
        const inertia = parseFloat(Utils.getValue('bendingInertia')) || 0;

        if (moment <= 0 || distance <= 0 || inertia <= 0) {
            alert('Please enter valid positive values');
            return;
        }

        const stress = Utils.calculateBendingStress(moment, distance, inertia);
        const resultsDiv = Utils.getElement('bendingResults');

        const html = `
            <div class="results-section">
                <h3>Results</h3>
                <div class="results-grid">
                    <div class="result-item">
                        <div class="result-label">Bending Stress</div>
                        <div class="result-value">${Utils.formatNumber(stress, 2)}</div>
                        <div class="result-unit">MPa</div>
                    </div>
                </div>
            </div>
        `;

        Utils.setHTML(resultsDiv, html);
        this.addToHistory('Bending Stress', { moment, distance, inertia, result: stress });
    }

    /**
     * Calculate Von Mises Stress
     */
    calculateVonMises() {
        const sx = parseFloat(Utils.getValue('vonmisesX')) || 0;
        const sy = parseFloat(Utils.getValue('vonmisesY')) || 0;
        const sz = parseFloat(Utils.getValue('vonmisesZ')) || 0;

        const stress = Utils.calculateVonMisesStress(sx, sy, sz);
        const resultsDiv = Utils.getElement('vonmisesResults');

        const html = `
            <div class="results-section">
                <h3>Results</h3>
                <div class="results-grid">
                    <div class="result-item">
                        <div class="result-label">Von Mises Stress</div>
                        <div class="result-value">${Utils.formatNumber(stress, 2)}</div>
                        <div class="result-unit">MPa</div>
                    </div>
                </div>
            </div>
        `;

        Utils.setHTML(resultsDiv, html);
        this.addToHistory('Von Mises Stress', { sx, sy, sz, result: stress });
    }

    /**
     * Load Strain & Deflection Module (Placeholder)
     */
    loadStrainDeflection() {
        this.loadPlaceholderModule('strain-deflection');
    }

    /**
     * Load Beam Design Module (Placeholder)
     */
    loadBeamDesign() {
        this.loadPlaceholderModule('beam-design');
    }

    /**
     * Load Shaft Design Module (Placeholder)
     */
    loadShaftDesign() {
        this.loadPlaceholderModule('shaft-design');
    }

    /**
     * Load Unit Converter Module
     */
    loadUnitConverter() {
        const container = Utils.getElement('moduleContainer');
        const html = `
            <div class="module-container">
                <div class="module-header">
                    <h2><i class="fas fa-exchange-alt"></i> Unit Converter</h2>
                </div>

                <div class="input-section">
                    <h3 class="section-title"><i class="fas fa-ruler"></i> Length Conversion</h3>
                    <div class="form-row">
                        <div class="form-group-inline">
                            <label>From (mm)</label>
                            <input type="number" id="lengthValue" placeholder="Enter value" value="1">
                        </div>
                        <div class="form-group-inline">
                            <label>Convert To</label>
                            <select id="lengthUnit">
                                <option value="mm">Millimeters (mm)</option>
                                <option value="in">Inches (in)</option>
                                <option value="m">Meters (m)</option>
                                <option value="ft">Feet (ft)</option>
                            </select>
                        </div>
                    </div>
                    <button class="btn-primary" onclick="app.convertLength()">Convert</button>
                    <div id="lengthResult"></div>
                </div>

                <div class="input-section">
                    <h3 class="section-title"><i class="fas fa-weight"></i> Force Conversion</h3>
                    <div class="form-row">
                        <div class="form-group-inline">
                            <label>From (N)</label>
                            <input type="number" id="forceValue" placeholder="Enter value" value="1000">
                        </div>
                        <div class="form-group-inline">
                            <label>Convert To</label>
                            <select id="forceUnit">
                                <option value="N">Newtons (N)</option>
                                <option value="kN">Kilonewtons (kN)</option>
                                <option value="lbf">Pounds Force (lbf)</option>
                                <option value="kgf">Kilograms Force (kgf)</option>
                            </select>
                        </div>
                    </div>
                    <button class="btn-primary" onclick="app.convertForce()">Convert</button>
                    <div id="forceResult"></div>
                </div>
            </div>
        `;
        Utils.setHTML(container, html);
    }

    /**
     * Convert Length
     */
    convertLength() {
        const value = parseFloat(Utils.getValue('lengthValue')) || 0;
        const toUnit = Utils.getValue('lengthUnit');
        let result = value;
        let resultUnit = 'mm';

        const conversions = {
            'in': value * Config.conversions.mm_to_in,
            'm': value / 1000,
            'ft': (value / 1000) * Config.conversions.m_to_ft,
            'mm': value
        };

        result = conversions[toUnit];
        resultUnit = toUnit;

        const resultDiv = Utils.getElement('lengthResult');
        const html = `
            <div class="results-section" style="margin-top: 20px;">
                <div class="results-grid">
                    <div class="result-item">
                        <div class="result-label">Result</div>
                        <div class="result-value">${Utils.formatNumber(result, 4)}</div>
                        <div class="result-unit">${resultUnit}</div>
                    </div>
                </div>
            </div>
        `;
        Utils.setHTML(resultDiv, html);
    }

    /**
     * Convert Force
     */
    convertForce() {
        const value = parseFloat(Utils.getValue('forceValue')) || 0;
        const toUnit = Utils.getValue('forceUnit');
        let result = value;

        const conversions = {
            'kN': value / 1000,
            'lbf': value * Config.conversions.N_to_lbf,
            'kgf': value * Config.conversions.N_to_kgf,
            'N': value
        };

        result = conversions[toUnit];

        const resultDiv = Utils.getElement('forceResult');
        const html = `
            <div class="results-section" style="margin-top: 20px;">
                <div class="results-grid">
                    <div class="result-item">
                        <div class="result-label">Result</div>
                        <div class="result-value">${Utils.formatNumber(result, 4)}</div>
                        <div class="result-unit">${toUnit}</div>
                    </div>
                </div>
            </div>
        `;
        Utils.setHTML(resultDiv, html);
    }

    /**
     * Load Placeholder Module
     */
    loadPlaceholderModule(moduleName) {
        const container = Utils.getElement('moduleContainer');
        const formattedName = moduleName.split('-').map(word => 
            word.charAt(0).toUpperCase() + word.slice(1)
        ).join(' ');

        const html = `
            <div class="module-container">
                <div class="module-header">
                    <h2>${formattedName}</h2>
                </div>
                <div class="empty-state">
                    <div class="empty-state-icon">
                        <i class="fas fa-wrench"></i>
                    </div>
                    <h3>Module Under Development</h3>
                    <p>${formattedName} module will be available soon with comprehensive calculations and analysis tools.</p>
                    <button class="btn-primary" onclick="app.loadModule('dashboard')">
                        <i class="fas fa-arrow-left"></i> Back to Dashboard
                    </button>
                </div>
            </div>
        `;
        Utils.setHTML(container, html);
    }

    /**
     * Add to Calculation History
     */
    addToHistory(calculationType, data) {
        const entry = {
            id: Date.now(),
            type: calculationType,
            data: data,
            timestamp: Utils.getCurrentDateTime()
        };
        this.calculationHistory.push(entry);
        Utils.saveToStorage(Config.storageKeys.history, this.calculationHistory);

        // Update calculation count
        const calcCount = Utils.getElement('calcCount');
        if (calcCount) {
            calcCount.textContent = this.calculationHistory.length;
        }
    }

    /**
     * Load Calculation History
     */
    loadCalculationHistory() {
        const history = Utils.getFromStorage(Config.storageKeys.history);
        if (history) {
            this.calculationHistory = history;
        }

        const calcCount = Utils.getElement('calcCount');
        if (calcCount) {
            calcCount.textContent = this.calculationHistory.length;
        }
    }

    /**
     * Open History Modal
     */
    openHistoryModal() {
        const historyList = Utils.getElement('historyList');
        if (!historyList) return;

        let html = '<div style="padding: 20px;">';
        if (this.calculationHistory.length === 0) {
            html += '<p>No calculations yet. Start by performing a calculation.</p>';
        } else {
            html += '<table style="width: 100%; border-collapse: collapse;">';
            html += '<tr><th style="text-align: left; padding: 10px; border-bottom: 2px solid #ccc;">Type</th>';
            html += '<th style="text-align: left; padding: 10px; border-bottom: 2px solid #ccc;">Time</th></tr>';

            this.calculationHistory.reverse().forEach(entry => {
                html += `<tr style="border-bottom: 1px solid #eee;">
                    <td style="padding: 10px;">${entry.type}</td>
                    <td style="padding: 10px;">${entry.timestamp}</td>
                </tr>`;
            });

            html += '</table>';
        }
        html += '</div>';

        Utils.setHTML(historyList, html);

        const modal = Utils.getElement('historyModal');
        if (modal) modal.classList.add('active');
    }

    /**
     * Open Settings Modal
     */
    openSettingsModal() {
        const modal = Utils.getElement('settingsModal');
        if (modal) modal.classList.add('active');

        // Setup save settings button
        const saveBtn = Utils.getElement('saveSettings');
        if (saveBtn) {
            saveBtn.onclick = () => this.saveSettings();
        }

        // Setup cancel button
        const cancelBtn = Utils.getElement('cancelSettings');
        if (cancelBtn) {
            cancelBtn.onclick = () => modal.classList.remove('active');
        }
    }

    /**
     * Save Settings
     */
    saveSettings() {
        const units = document.querySelector('input[name="units"]:checked')?.value || 'SI';
        const decimalPlaces = parseInt(Utils.getValue('decimalPlaces')) || 4;

        Utils.saveToStorage(Config.storageKeys.units, units);
        Utils.saveToStorage(Config.storageKeys.decimalPlaces, decimalPlaces);

        this.unitSystem = units;
        Config.decimalPlaces = decimalPlaces;

        Utils.log('Settings saved', 'success');
        alert('Settings saved successfully!');

        const modal = Utils.getElement('settingsModal');
        if (modal) modal.classList.remove('active');
    }

    /**
     * Load Settings
     */
    loadSettings() {
        const units = Utils.getFromStorage(Config.storageKeys.units) || 'SI';
        const decimalPlaces = Utils.getFromStorage(Config.storageKeys.decimalPlaces) || 4;

        this.unitSystem = units;
        Config.decimalPlaces = decimalPlaces;
    }

    /**
     * Save Project
     */
    saveProject() {
        const projectName = prompt('Enter project name:');
        if (!projectName) return;

        const project = {
            id: Date.now(),
            name: projectName,
            data: this.calculationHistory,
            timestamp: Utils.getCurrentDateTime()
        };

        this.projects.push(project);
        Utils.saveToStorage(Config.storageKeys.projects, this.projects);
        alert(`Project "${projectName}" saved successfully!`);
    }

    /**
     * Load Project Dialog
     */
    loadProjectDialog() {
        if (this.projects.length === 0) {
            alert('No saved projects found.');
            return;
        }

        const projectList = this.projects.map((p, i) => 
            `${i + 1}. ${p.name} (${p.timestamp})`
        ).join('\n');

        const projectIndex = prompt(`Select a project:\n\n${projectList}\n\nEnter project number:`, '1');
        if (projectIndex) {
            const index = parseInt(projectIndex) - 1;
            if (index >= 0 && index < this.projects.length) {
                this.calculationHistory = this.projects[index].data;
                Utils.log(`Project loaded: ${this.projects[index].name}`, 'success');
                alert(`Project loaded: ${this.projects[index].name}`);
            }
        }
    }

    /**
     * Export Report
     */
    exportReport() {
        const reportContent = this.generateReport();
        const element = document.createElement('a');
        const file = new Blob([reportContent], { type: 'text/plain' });
        element.href = URL.createObjectURL(file);
        element.download = `MechCalc_Report_${Date.now()}.txt`;
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    }

    /**
     * Generate Report
     */
    generateReport() {
        let report = `
========================================
MechCalc Pro - Calculation Report
Generated: ${Utils.getCurrentDateTime()}
========================================

CALCULATION HISTORY
========================================
`;
        this.calculationHistory.forEach((entry, index) => {
            report += `\n${index + 1}. ${entry.type}
   Time: ${entry.timestamp}
   Data: ${JSON.stringify(entry.data, null, 2)}
`;
        });

        report += `\n========================================
End of Report
========================================`;

        return report;
    }

    /**
     * Show Modal
     */
    showModal(title, content) {
        const modal = document.createElement('div');
        modal.className = 'modal active';
        modal.innerHTML = `
            <div class="modal-content">
                <div class="modal-header">
                    <h2>${title}</h2>
                    <button class="close-btn" onclick="this.closest('.modal').classList.remove('active')">&times;</button>
                </div>
                <div class="modal-body">
                    ${content}
                </div>
            </div>
        `;
        document.body.appendChild(modal);
    }

    /**
     * Search Modules
     */
    searchModules(query) {
        const navLinks = document.querySelectorAll('.nav-link');
        const q = query.toLowerCase();

        navLinks.forEach(link => {
            const text = link.textContent.toLowerCase();
            if (text.includes(q)) {
                Utils.showElement(link.parentElement);
            } else {
                Utils.hideElement(link.parentElement);
            }
        });
    }
}

// Initialize Application
let app;
document.addEventListener('DOMContentLoaded', () => {
    app = new MechCalcApp();
});
