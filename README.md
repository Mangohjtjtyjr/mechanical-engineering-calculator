# MechCalc Pro - Professional Mechanical Engineering Design Calculator

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![Status](https://img.shields.io/badge/status-Active-success)

A comprehensive, professional-grade mechanical engineering design calculator web application built with HTML5, CSS3, JavaScript, Chart.js, and Three.js. Supports ASME, ANSI, ISO, DIN, CEMA, AGMA, AWS, AISC, API, and EN standards.

## 🎯 Features

### Core Modules (45+ Calculations)

#### 1. **Material Database** 
- 22+ pre-configured engineering materials
- Complete material properties database
- Editable custom materials
- Search and filter capabilities
- Material categories: Steel, Stainless Steel, Aluminum, Titanium, Composites, etc.

#### 2. **Stress Analysis**
- Tensile stress calculation (σ = F/A)
- Compressive stress analysis
- Shear stress determination
- Bending stress calculation (σ = M·c/I)
- Von Mises stress computation
- Principal stress calculation
- Maximum shear stress analysis

#### 3. **Strain & Deflection**
- Linear strain calculation (ε = ΔL/L)
- Young's modulus computation
- Beam deflection analysis
- Angular deflection
- Plate deflection analysis
- Thermal expansion effects

#### 4. **Beam Design**
- Support conditions: Cantilever, Simply Supported, Fixed-Fixed, Overhanging
- Shear Force Diagram (SFD) generation
- Bending Moment Diagram (BMD) generation
- Reaction force calculations
- Maximum stress determination
- Factor of safety computation

#### 5. **Shaft Design**
- ASME shaft design standards
- Required diameter calculation
- Torque capacity analysis
- Power capacity determination
- Fatigue analysis
- Critical speed calculation

#### 6. **Additional Modules**
- Bearing Design (ISO 281)
- Bolt Design (ISO 898, ASME)
- Weld Design (AWS, ASME)
- Gear Design (AGMA, ISO 6336)
- Belt Drive
- Chain Drive
- Conveyor Design (CEMA)
- Structural Design
- Sheet Metal Design
- Pressure Vessel Design (ASME Section VIII)
- Fatigue Analysis (Goodman, Gerber, Soderberg)
- Buckling Analysis (Euler, Johnson)
- Vibration Analysis
- Thermal Analysis
- FEA Analysis with visualization
- GD&T Calculator (ASME Y14.5)
- ISO Fits & Tolerances
- Stack-up Analysis
- Hydraulic Cylinder Design
- Pneumatic Cylinder Design
- Lifting Lug Design
- Power Screw Design
- Cam Design
- Coupling Design
- Heat Exchanger Sizing

### Advanced Features

#### Dashboard & Navigation
- Professional dashboard with quick stats
- Modular sidebar navigation
- Search functionality for modules
- Breadcrumb navigation
- Responsive design for all devices

#### Theme System
- Dark mode / Light mode toggle
- Persistent theme storage
- Professional color schemes

#### Unit System Support
- **SI (Metric)**: mm, N, MPa, kg/m³, °C, W, N·m, m/s
- **Imperial (US)**: in, lbf, psi, lb/in³, °F, hp, lbf·in, ft/s
- **Mixed Units**: mm, kgf, kg/mm², g/cm³, °C, W, kg·m

#### Calculations & Analysis
- Step-by-step calculation display
- Formula reference with explanations
- Engineering interpretation of results
- Safety factor color indicators
- Calculation history tracking
- Export calculation results

#### Data Management
- Material database with 22+ materials
- Custom material creation
- Project save/load functionality
- Calculation history
- Local storage persistence
- Export as JSON, PDF, Excel, CSV

## 🛠️ Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Visualization**: Chart.js 3.9.1, Three.js r128
- **Icons**: Font Awesome 6.4.0
- **Storage**: LocalStorage API

## 📋 Supported Standards

| Standard | Description |
|----------|-------------|
| **ASME** | American Society of Mechanical Engineers |
| **ANSI** | American National Standards Institute |
| **ISO** | International Organization for Standardization |
| **DIN** | Deutsches Institut für Normung |
| **CEMA** | Conveyor Equipment Manufacturers Association |
| **AGMA** | American Gear Manufacturers Association |
| **AWS** | American Welding Society |
| **AISC** | American Institute of Steel Construction |
| **API** | American Petroleum Institute |
| **EN** | European Standards |

## 🚀 Getting Started

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/Mangohjtjtyjr/mechanical-engineering-calculator.git
cd mechanical-engineering-calculator
```

2. **Open in browser**
```bash
# Simple approach - open index.html directly
open index.html

# Or use a local server
python -m http.server 8000
# Then visit http://localhost:8000
```

## 📖 Usage Guide

### Basic Workflow

1. **Select a Calculation Module**
   - Click on any module from the sidebar
   - Use the search function to find modules quickly

2. **Input Your Data**
   - Fill in required parameters
   - Units are clearly labeled
   - Tooltips provide guidance

3. **Calculate Results**
   - Click the Calculate button
   - View results with full breakdown
   - See formulas and calculation steps

4. **Export & Share**
   - Generate PDF reports
   - Export to Excel
   - Save as JSON for later use

## 📁 Project Structure

```
mechanical-engineering-calculator/
├── index.html              # Main HTML file
├── css/
│   ├── style.css          # Main stylesheet
│   ├── dashboard.css      # Dashboard & module styles
│   └── responsive.css     # Responsive design
├── js/
│   ├── config.js          # Configuration & constants
│   ├── utils.js           # Utility & math functions
│   ├── materials.js       # Material database
│   └── app.js             # Main application logic
└── README.md             # This file
```

## 📊 Included Materials

**Steels:**
- Mild Steel, EN8, EN19, EN24, A36, S275, S355

**Stainless Steel:**
- SS304, SS316, SS410

**Aluminum:**
- 5052, 6061, 7075

**Other Materials:**
- Copper, Brass, Bronze
- Titanium Grade 2, Grade 5
- Cast Iron
- Engineering Plastics (Acetal, Nylon)
- Carbon Fiber Composite

## 🔄 Key Calculations

### Stress Analysis
- **Tensile**: σ = F / A
- **Von Mises**: σ_vm = √(σx² + σy² + σz² - σx·σy - σy·σz - σz·σx)
- **Bending**: σ = M·c / I

### Beam Deflection
- **Simply Supported**: δ = (P·L³) / (48·E·I)
- **Cantilever**: δ = (P·L³) / (3·E·I)

### Buckling
- **Euler**: P_cr = π²·E·I / L²

## 💾 Features

✅ 45+ Calculation Modules
✅ 22+ Material Database
✅ Dark/Light Theme Toggle
✅ Project Save/Load
✅ Calculation History
✅ Multiple Unit Systems
✅ Professional Reports
✅ Responsive Design
✅ Standard Compliance
✅ Real-time Calculations

## 🔐 Safety & Accuracy

- All calculations follow industry standards
- Results should be verified by qualified engineers
- Use appropriate safety factors
- Always comply with local regulations and standards

## 📝 License

MIT License - See LICENSE file for details

## 🤝 Contributing

Contributions welcome! Please fork and submit pull requests.

## 📞 Support

For issues or questions, open an issue on GitHub.

---

**MechCalc Pro** - Professional Mechanical Engineering Design Calculator
**Version 1.0.0** | MIT Licensed
