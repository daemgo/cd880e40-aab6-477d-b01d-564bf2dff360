---
name: init-app
description: 在现有 SyncMind 项目中基于方案文档生成应用代码。项目基础设施已就绪，基础技术栈（Next.js 16、TypeScript、Tailwind CSS v4、shadcn/ui）
metadata:
  short-description: 在现有项目中基于方案生成应用代码
---

# SyncMind 应用生成 Skill

这个 skill 用于在**现有 SyncMind 项目**中基于方案文档生成应用代码。

**重要约束**：
- **在现有项目中初始化**：项目基础设施已经准备好，在现有项目基础上添加功能
- **基础技术栈固定**：使用项目已有的基础技术栈（Next.js 16、React、TypeScript、Tailwind CSS v4、shadcn/ui），**不接受改变基础技术栈**（如引入 Vue、Angular）


## 工作流程

当用户要求生成应用时，按以下步骤执行：

1. **分析需求**：
   - 从用户输入中提取项目名称、功能需求
   - 如果存在方案文档，读取 `docs/plan/` 目录下的相关方案
   - 结合用户需求和方案文档，确定功能需求和技术方案

2. **生成应用代码**：
   - 创建路由页面、功能组件，使用 shadcn/ui 构建界面
   - 实现核心业务逻辑

3. **验证**：
   - 确保代码可以正常构建，无语法错误

## 项目结构

在现有项目结构基础上添加：
- `src/app/[routes]/` - 新路由页面
- `src/components/[feature]/` - 功能组件
- `src/lib/` - 工具函数（如需要）
- `src/hooks/` - 自定义 Hooks（如需要）

使用已安装的 shadcn/ui 组件，可通过 `npx shadcn@latest add [component]` 添加新组件。

## 示例

**基于方案生成**：用户说"基于 CRM 系统方案生成一个 demo"
- 读取 `docs/plan/crm-system.md`
- 提取功能需求，创建主要页面和组件
- 使用 shadcn/ui 组件构建界面

**直接生成**：用户说"创建一个电商平台的 website"
- 分析需求，创建主要页面结构
- 实现核心功能（商品展示、购物车、订单等）

## 注意事项

- 如果存在方案文档，严格按照方案的功能需求执行，但使用项目现有的基础技术栈实现
- 生成的代码要可以直接运行，遵循项目现有的代码规范和风格
- 实现核心功能的基础版本，复杂功能提供框架和占位符
- 可以修改配置文件添加依赖，但只添加工具库，不引入新框架
- 更新 README.md 添加新功能说明
