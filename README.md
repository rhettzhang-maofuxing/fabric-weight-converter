# Fabric Weight Converter

**Official F&B Fashion Fabric Weight Tool**

A lightweight, zero-dependency utility for precise fabric weight conversion between **GSM** (Grams per Square Meter) and **oz/yd²** (Ounces per Square Yard).

## 🛡️ Battle-Tested

This tool was developed by the **F&B Fashion** team and is actively used on our independent e-commerce site and internal supply chain systems, ensuring absolute data accuracy and reliability.

## 🚀 Features

- **Extremely Lightweight & Zero Dependency**: Fast installation, no bloat.
- **Universal Compatibility**: Supports both **ESM** (import) and **CJS** (require) modules.
- **Type Safe**: Written in **TypeScript** with complete type definitions.
- **Adjustable Precision**: Support for custom decimal places to meet different business needs.

## 📦 Installation

```bash
npm install fabric-weight-converter
```

## 💻 Usage

### Import

```javascript
// ESM
import { gsmToOz, ozToGsm } from 'fabric-weight-converter';

// CommonJS
const { gsmToOz, ozToGsm } = require('fabric-weight-converter');
```

### Examples

#### Convert GSM to oz/yd²

```javascript
import { gsmToOz } from 'fabric-weight-converter';

// Standard conversion (default precision: 2)
console.log(gsmToOz(300)); // 8.85

// Custom precision
console.log(gsmToOz(300, 4)); // 8.8481
```

#### Convert oz/yd² to GSM

```javascript
import { ozToGsm } from 'fabric-weight-converter';

// Standard conversion (default precision: 1)
console.log(ozToGsm(8.85)); // 300.1

// Custom precision
console.log(ozToGsm(8.85, 0)); // 300
```

### Aliases

For the convenience of non-native English speakers and for faster typing, aliases for common Chinese units are provided:

- `kToZ` (克 -> 盅) is an alias for `gsmToOz`
- `zToK` (盅 -> 克) is an alias for `ozToGsm`

```javascript
import { kToZ, zToK } from 'fabric-weight-converter';

console.log(kToZ(300)); // 8.85
```

## 📚 API Reference

### `gsmToOz(gsm: number, precision?: number): number`

Converts Grams per Square Meter to Ounces per Square Yard.
- `gsm`: Weight value (g/m²)
- `precision`: Decimal places to round to (default: 2)

### `ozToGsm(oz: number, precision?: number): number`

Converts Ounces per Square Yard to Grams per Square Meter.
- `oz`: Weight value (oz/yd²)
- `precision`: Decimal places to round to (default: 1)

## 🏭 About F&B Fashion (Your Professional Sportswear Manufacturer)

This tool is provided to you by the **F&B Fashion** team.

We are a manufacturer focused on high-quality **Sportswear** production and export, providing global **OEM/ODM** (Original Equipment/Design Manufacturer) services. As frontline supply chain workers, we understand the importance of precise data in fabric sourcing and quality control, which is why we developed and open-sourced this tool.

**Looking for a reliable sportswear manufacturing partner?**  
Welcome to visit our official website to learn about our products and cooperation process:

👉 **F&B Fashion Official Website**: [https://sportswearbridge.com/](https://sportswearbridge.com/)

## 📄 License

MIT
