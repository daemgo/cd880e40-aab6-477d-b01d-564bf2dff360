# SyncMind Project Template

一个基于 Next.js 16、Tailwind CSS v4 和 shadcn/ui 的现代化项目模板，专为 SyncMind 项目设计。

## ✨ 特性

- ⚡ **Next.js 16** - 使用最新的 Next.js 框架，支持 App Router
- 🎨 **Tailwind CSS v4** - 最新版本的 Tailwind CSS，性能更优
- 🧩 **shadcn/ui** - 43+ 个精心设计的 UI 组件，开箱即用
- 🪝 **常用 Hooks** - 4 个实用的 React Hooks
- 🤖 **Claude Skills** - 2 个自动化客户管理技能
- 📱 **响应式设计** - 完美支持移动端和桌面端
- 🌙 **暗色模式** - 内置暗色主题支持
- 🔧 **TypeScript** - 完整的 TypeScript 支持
- ⚡ **pnpm** - 快速、高效的包管理器

## 🚀 快速开始

### 安装依赖

```bash
pnpm install
```

### 开发

```bash
pnpm dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看效果。

### 构建

```bash
pnpm build
```

### 启动生产服务器

```bash
pnpm start
```

## 📦 已包含的组件

### UI 组件 (43+)

**表单组件**
- Button, Input, Textarea, Select, Checkbox, Radio Group, Switch, Label, Form

**布局组件**
- Card, Separator, Aspect Ratio, Resizable, Scroll Area, Skeleton

**交互组件**
- Dialog, Alert Dialog, Drawer, Sheet, Popover, Tooltip, Hover Card, Context Menu, Dropdown Menu

**导航组件**
- Tabs, Accordion, Breadcrumb, Pagination, Navigation Menu

**数据展示**
- Table, Badge, Avatar, Alert, Progress, Slider, Calendar, Chart, Carousel

**其他**
- Command, Toggle, Toggle Group, Collapsible, Sonner (Toast)

### Hooks (4)

- `useMediaQuery` - 媒体查询
- `useMobile` - 检测移动端
- `useDebounce` - 防抖
- `useClickOutside` - 点击外部区域

## 📁 项目结构

```
├── .claude/
│   └── skills/          # Claude Skills
│       ├── profile/     # 客户档案初始化 skill
│       └── insights/    # 客户洞察生成 skill
├── docs/                # 项目文档
│   ├── customer/        # 客户数据
│   │   ├── profile.json    # 客户档案
│   │   ├── followups.json  # 跟进记录
│   │   ├── tracking.json    # 追踪数据
│   │   └── insights.json    # AI 洞察
│   ├── plan/            # 计划文档
│   └── summary/         # 总结文档
├── src/
│   ├── app/              # Next.js App Router
│   │   ├── layout.tsx    # 根布局
│   │   ├── page.tsx      # 首页
│   │   └── globals.css   # 全局样式
│   ├── components/       # 组件目录
│   │   └── ui/          # shadcn/ui 组件
│   ├── hooks/           # 自定义 Hooks
│   └── lib/             # 工具函数
│       └── utils.ts     # 通用工具函数
├── components.json      # shadcn/ui 配置
└── package.json
```

## 🎨 添加更多组件

使用 shadcn/ui CLI 添加更多组件：

```bash
npx shadcn@latest add [component-name]
```

例如：

```bash
npx shadcn@latest add button
npx shadcn@latest add card
```

## 🔧 配置

### shadcn/ui

配置文件位于 `components.json`，你可以自定义：

- 样式风格 (default, new-york)
- 基础颜色 (slate, gray, zinc, neutral, stone)
- CSS 变量
- 路径别名

### Tailwind CSS

项目使用 Tailwind CSS v4，配置通过 `src/app/globals.css` 中的 `@theme` 指令进行。

## 📝 使用示例

### 使用组件

```tsx
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function Page() {
  return (
    <Card>
      <Button>Click me</Button>
    </Card>
  )
}
```

### 使用 Hooks

```tsx
import { useMobile, useDebounce } from "@/hooks"

export default function Component() {
  const isMobile = useMobile()
  const debouncedValue = useDebounce(searchTerm, 500)
  
  return <div>...</div>
}
```

## 🤖 Claude Skills

项目包含两个 Claude Skills，用于自动化客户管理流程：

### profile - 客户档案初始化

基于客户名称自动生成客户档案，包含网络搜索和资料整合功能。

**功能：**
- 网络搜索客户公司信息
- 自动推断行业、规模、评级等
- 生成符合 `ProfileResponse` 结构的 `docs/customer/profile.json`

**使用方式：**
在 Claude 中直接说："为 [客户名称] 初始化客户档案" 或 "创建 [客户名称] 的 profile"

### insights - 客户洞察生成

基于客户档案、跟进记录、追踪数据等信息，生成 AI 洞察分析报告。

**功能：**
- 综合分析客户档案、跟进记录、追踪数据
- 生成风险分析、成交概率评估
- 提供行动建议和机会识别
- 生成符合 `InsightsResponse` 结构的 `docs/customer/insights.json`

**使用方式：**
在 Claude 中直接说："生成这个客户的洞察" 或 "分析一下客户情况"

**支持自定义要求：**
- "重点关注成交概率和风险"
- "客户最近有新的需求，重新生成洞察"
- "分析一下跟进效果"

## 📚 文档结构

### docs/customer/ - 客户数据

客户相关的所有数据文件：

- **profile.json** - 客户档案
  - 公司基本信息（名称、行业、规模、评级）
  - 联系人信息
  - 需求、痛点
  - 预算信息

- **followups.json** - 跟进记录
  - 跟进日期、类型、内容
  - 参与人员
  - 相关文件和图片

- **tracking.json** - 追踪数据
  - 信息覆盖度
  - 各类别问题回答情况

- **insights.json** - AI 洞察
  - 风险分析
  - 成交概率评估
  - 行动建议
  - 机会识别

### docs/plan/ - 计划文档

项目计划和方案文档。

### docs/summary/ - 总结文档

项目总结和复盘文档。
