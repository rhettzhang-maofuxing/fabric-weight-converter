# F&B Fashion 官方面料克重转换工具 (Fabric Weight Converter)

**F&B Fashion 官方出品**

一个轻量级、零依赖的实用工具，用于精确转换面料克重，包括 **GSM** (Grams per Square Meter, 克/平方米) 和 **oz/yd²** (Ounces per Square Yard, 盎司/平方码)。

## 🛡️ 实战检验 (Battle-Tested)

本工具由 **F&B Fashion** 团队开发，目前正在我们的独立电商网站和内部供应链系统中积极使用，确保了数据的绝对准确性和可靠性。

## 🚀 核心特性 (Features)

- **极致轻量且零依赖**：快速安装，不增加项目负担。
- **全面兼容性**：同时支持 **ESM** (import) 和 **CJS** (require) 模块。
- **类型安全**：使用 **TypeScript** 编写，提供完整的类型定义。
- **精度可调**：支持自定义结果的小数点位数，满足不同业务场景需求。

## 📦 安装 (Installation)

```bash
npm install fabric-weight-converter
```

## 💻 用法 (Usage)

### 模块导入 (Import)

```javascript
// ESM
import { gsmToOz, ozToGsm } from 'fabric-weight-converter';

// CommonJS
const { gsmToOz, ozToGsm } = require('fabric-weight-converter');
```

### 示例 (Examples)

#### 转换 GSM 到 oz/yd²

```javascript
import { gsmToOz } from 'fabric-weight-converter';

// 标准转换 (默认精度: 2)
console.log(gsmToOz(300)); // 8.85

// 自定义精度
console.log(gsmToOz(300, 4)); // 8.8481
```

#### 转换 oz/yd² 到 GSM

```javascript
import { ozToGsm } from 'fabric-weight-converter';

// 标准转换 (默认精度: 1)
console.log(ozToGsm(8.85)); // 300.1

// 自定义精度
console.log(ozToGsm(8.85, 0)); // 300
```

### 方便别名 (Aliases)

为了方便非英语母语用户和快速输入，提供了中文惯用单位的别名：

- `kToZ` (克 -> 盅) 是 `gsmToOz` 的别名
- `zToK` (盅 -> 克) 是 `ozToGsm` 的别名

```javascript
import { kToZ, zToK } from 'fabric-weight-converter';

console.log(kToZ(300)); // 8.85
```

## 📚 API 参考 (API Reference)

### `gsmToOz(gsm: number, precision?: number): number`

将克/平方米 (Grams per Square Meter) 转换为盎司/平方码 (Ounces per Square Yard)。
- `gsm`: 克重数值 (g/m²)
- `precision`: 结果保留的小数位数 (默认值: 2)

### `ozToGsm(oz: number, precision?: number): number`

将盎司/平方码 (Ounces per Square Yard) 转换为克/平方米 (Grams per Square Meter)。
- `oz`: 盎司数值 (oz/yd²)
- `precision`: 结果保留的小数位数 (默认值: 1)

## 🏭 关于 F&B Fashion（您的专业服装制造商）

本工具由 **F&B Fashion** 团队为您提供。

我们是一家专注于高品质**运动服饰 (Sportswear)** 生产与出口的制造商，提供全球化的 **OEM/ODM**（代工/设计制造）服务。作为供应链的前线人员，我们深知精确数据在面料采购和质量控制中的重要性，因此开发并开源了此工具。

**正在寻找可靠的运动服装制造伙伴？**  
欢迎访问我们的官方网站，了解我们的产品和合作流程：

👉 **F&B Fashion 官方网站**: [https://sportswearbridge.com/](https://sportswearbridge.com/)

## 📄 许可 (License)

MIT
