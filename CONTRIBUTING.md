# Contributing to MechCalc Pro

Thank you for your interest in contributing to MechCalc Pro! We welcome contributions from the community. This document provides guidelines and instructions for contributing.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Setup](#development-setup)
- [Making Changes](#making-changes)
- [Submission Guidelines](#submission-guidelines)
- [Coding Standards](#coding-standards)
- [Testing](#testing)
- [Documentation](#documentation)
- [Pull Request Process](#pull-request-process)

## Code of Conduct

### Our Pledge

We are committed to providing a welcoming and inspiring community for all. Please be respectful, inclusive, and constructive in all interactions.

### Expected Behavior

- Use welcoming and inclusive language
- Be respectful of differing opinions and experiences
- Accept constructive criticism gracefully
- Focus on what is best for the community
- Show empathy towards other community members

### Unacceptable Behavior

- Harassment, discrimination, or hate speech
- Trolling, insulting/derogatory comments
- Personal attacks
- Publishing private information without consent
- Other conduct that could reasonably be considered inappropriate

## Getting Started

### Prerequisites

- Git installed on your machine
- Modern web browser (Chrome, Firefox, Safari, or Edge)
- Text editor or IDE (VS Code recommended)
- Basic understanding of HTML, CSS, and JavaScript

### Fork & Clone

1. Fork the repository on GitHub
2. Clone your fork locally:
```bash
git clone https://github.com/YOUR-USERNAME/mechanical-engineering-calculator.git
cd mechanical-engineering-calculator
```

3. Add upstream remote:
```bash
git remote add upstream https://github.com/Mangohjtjtyjr/mechanical-engineering-calculator.git
```

## Development Setup

### Local Development

1. **Open the project**
```bash
# Using Python HTTP server
python -m http.server 8000

# Or using Node.js http-server (if installed)
npx http-server
```

2. **Access in browser**
```
http://localhost:8000
```

3. **No build process required** - Just edit HTML, CSS, and JavaScript files directly

### File Organization

```
mechanical-engineering-calculator/
├── index.html              # Main entry point
├── css/                    # Stylesheets
│   ├── style.css          # Main styles
│   ├── dashboard.css      # Dashboard styles
│   └── responsive.css     # Responsive design
├── js/                    # JavaScript modules
│   ├── config.js          # Configuration constants
│   ├── utils.js           # Utility functions
│   ├── materials.js       # Material database
│   └── app.js             # Main application logic
├── assets/                # Images, icons, data files
└── modules/               # Individual calculation modules (optional)
```

## Making Changes

### Create a Feature Branch

```bash
git checkout -b feature/your-feature-name
```

Branch naming conventions:
- `feature/description` - New features
- `bugfix/description` - Bug fixes
- `docs/description` - Documentation updates
- `refactor/description` - Code refactoring
- `perf/description` - Performance improvements
- `test/description` - Test additions

### Commit Messages

Write clear, descriptive commit messages:

```
feat: Add tensile stress calculation module

- Implement σ = F/A calculation
- Add material selection dropdown
- Include safety factor visualization
- Add formula reference tooltip
```

Format:
```
<type>: <subject>

<body>

<footer>
```

Types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`

### Keep Your Branch Updated

```bash
git fetch upstream
git rebase upstream/main
```

## Submission Guidelines

### Before Submitting a Pull Request

1. **Ensure your code works**
   - Test in multiple browsers
   - Verify calculations are correct
   - Check responsive design on mobile

2. **Follow coding standards** (see below)
   - Use consistent naming conventions
   - Write clear, readable code
   - Add comments for complex logic

3. **Test your changes**
   - Verify all calculations produce correct results
   - Test edge cases and invalid inputs
   - Ensure no console errors

4. **Update documentation**
   - Update README if adding new modules
   - Document new features in comments
   - Update CHANGELOG.md

## Coding Standards

### JavaScript

```javascript
// Use meaningful variable names
const youngsModulus = 210000; // Not: const ym = 210000;

// Use const by default, let when needed
const PI = 3.14159;
let counter = 0;

// Use arrow functions for callbacks
setTimeout(() => {
  updateResults();
}, 100);

// Use template literals
const message = `Stress: ${stress} MPa`;

// Add JSDoc comments for functions
/**
 * Calculate tensile stress
 * @param {number} force - Applied force in Newtons
 * @param {number} area - Cross-sectional area in mm²
 * @returns {number} Tensile stress in MPa
 */
function calculateTensileStress(force, area) {
  return force / area;
}
```

### CSS

```css
/* Use semantic class names */
.module-card { }
.calculation-input { }
.result-display { }

/* Group related properties */
.button {
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
}

/* Use CSS variables for consistency */
:root {
  --primary-color: #007bff;
  --secondary-color: #6c757d;
  --success-color: #28a745;
  --danger-color: #dc3545;
}

.button {
  background-color: var(--primary-color);
}
```

### HTML

```html
<!-- Use semantic HTML5 elements -->
<header>...</header>
<nav>...</nav>
<main>...</main>
<section>...</section>
<article>...</article>
<footer>...</footer>

<!-- Use meaningful IDs and classes -->
<div id="beam-design-module" class="calculation-module">
  <input id="beam-length" class="calculation-input" type="number">
</div>

<!-- Include ARIA labels for accessibility -->
<input aria-label="Beam Length (mm)" type="number">
```

## Testing

### Manual Testing Checklist

Before submitting, test:

- [ ] All calculations produce correct results
- [ ] Input validation works (negative numbers, zero, etc.)
- [ ] Output displays correct number of decimal places
- [ ] Unit conversions work correctly
- [ ] Theme toggle works (light/dark mode)
- [ ] Responsive design works on mobile, tablet, desktop
- [ ] No console errors or warnings
- [ ] Navigation works correctly
- [ ] Data persistence (localStorage) works

### Browser Testing

Test on:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

### Test Cases for New Calculations

For each new calculation module, include test cases:

```javascript
// Example test cases
const testCases = [
  {
    input: { force: 1000, area: 100 },
    expected: 10,
    description: "Standard tensile stress"
  },
  {
    input: { force: 0, area: 100 },
    expected: 0,
    description: "Zero force"
  },
  {
    input: { force: 1000, area: 0 },
    expected: "Error",
    description: "Zero area (should error)"
  }
];
```

## Documentation

### README Updates

If adding a new calculation module:

1. Add to the features list
2. Include calculation formulas
3. Add example usage
4. Document parameters and units

### Code Comments

```javascript
// Good: Explains why, not what
const safetyFactor = 2; // ASME standards recommend minimum 2.0

// Avoid: Obvious comments
const x = 10; // Set x to 10

// Complex logic needs explanation
// Apply fatigue reduction factor based on stress concentration
const effectiveStress = nominalStress * stressConcentrationFactor;
```

### Function Documentation

```javascript
/**
 * Calculate beam deflection for simply supported beam
 * 
 * Formula: δ = (P·L³) / (48·E·I)
 * 
 * @param {number} load - Point load in Newtons
 * @param {number} length - Beam length in mm
 * @param {number} youngsModulus - Young's modulus in MPa
 * @param {number} momentOfInertia - Moment of inertia in mm⁴
 * @returns {number} Maximum deflection in mm
 * 
 * @example
 * const deflection = calculateBeamDeflection(1000, 500, 210000, 8333);
 * // Returns: 0.75 mm
 */
```

## Pull Request Process

### Create Pull Request

1. Push your branch to your fork:
```bash
git push origin feature/your-feature-name
```

2. Open a pull request on GitHub
3. Fill out the PR template completely

### PR Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] New feature
- [ ] Bug fix
- [ ] Documentation update
- [ ] Performance improvement
- [ ] Code refactoring

## Related Issues
Closes #(issue number)

## Testing
Describe testing performed:
- [ ] Tested in Chrome
- [ ] Tested in Firefox
- [ ] Tested on mobile
- [ ] All calculations verified

## Checklist
- [ ] Code follows style guidelines
- [ ] Comments added for complex logic
- [ ] Documentation updated
- [ ] No new warnings generated
- [ ] No breaking changes

## Screenshots (if applicable)
Add screenshots for UI changes
```

### Review Process

1. At least one maintainer will review your PR
2. Address requested changes
3. Push additional commits to the same branch
4. Re-request review once changes are made
5. Once approved, your PR will be merged

### After Merge

1. Delete your feature branch
2. Pull the latest changes from upstream
3. Celebrate! 🎉

## Reporting Issues

### Bug Reports

Include:
- Browser and version
- Steps to reproduce
- Expected behavior
- Actual behavior
- Screenshots/error messages
- Calculation details (inputs, outputs)

### Feature Requests

Include:
- Clear description of the feature
- Use case and motivation
- Possible implementation approach
- Related standards or references

## Questions or Need Help?

- Check existing issues and discussions
- Ask in a new GitHub discussion
- Review existing documentation
- Comment on related issues

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

## Recognition

Contributors will be recognized in:
- CHANGELOG.md
- GitHub contributor list
- Project documentation

Thank you for contributing to MechCalc Pro! 🚀
