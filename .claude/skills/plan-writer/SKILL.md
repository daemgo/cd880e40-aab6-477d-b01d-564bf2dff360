---
name: plan-writer
description: 基于项目名称和需求描述生成项目方案文档，结合已存在的客户资料。方案可以是业务方案、产品方案、技术方案等不同类型
metadata:
  short-description: 生成项目方案文档
---

# SyncMind 方案生成 Skill

基于项目名称和需求描述生成方案文档，保存到 `docs/plan/` 目录。方案可以是业务方案、产品方案、技术方案等不同类型。

**重点**：
- 结合已存在的资料：读取 `docs/customer/` 目录下的所有相关文件（profile.json、followups.json、insights.json、tracking.json 以及客户提供的其他资料）
- 满足用户需求：基于用户描述和客户资料制定方案，关注业务需求、产品设计、实施计划等
- 技术实现（如需要）：如果涉及技术实现，使用已约定的技术栈（Next.js 16、TypeScript、Tailwind CSS v4、shadcn/ui），但不要过度关注技术细节

## 方案文档结构

**重要约束**：方案文档开头必须包含 metadata 信息（YAML frontmatter）。

```markdown
---
name: [项目名称]
description: [项目描述]
metadata:
  type: [方案类型：业务方案/产品方案/技术方案等]
  customer: [客户名称，如存在]
  created: [创建日期]
---

# [项目名称] 方案

[根据项目类型和需求灵活组织内容，可包含但不限于：]
- 项目概述（背景、目标、范围）
- 需求分析（业务需求、用户需求等）
- 方案设计（业务方案/产品方案/技术方案等）
- 实施计划（阶段、里程碑、时间估算）
- 资源需求（人员、预算等）
- 风险评估（主要风险、应对措施）
[根据实际情况调整章节和内容]
```

## 工作流程

1. **分析需求**：
   - 从用户输入中提取项目名称和需求描述
   - 读取 `docs/customer/` 目录下的所有相关文件（profile.json、followups.json、insights.json、tracking.json 以及客户提供的其他资料）
   - 结合用户需求和客户资料确定功能需求

2. **制定方案**：
   - 根据项目类型和需求灵活组织方案内容，不要拘泥于固定结构
   - 重点关注业务需求、产品设计、实施计划等核心内容
   - 如果涉及技术实现，使用已约定的技术栈（Next.js 16、TypeScript、Tailwind CSS v4、shadcn/ui），但不要过度关注技术细节
   - 根据实际情况包含必要的章节（如实施计划、资源需求、风险评估等）

3. **生成文档**：
   - 创建 `docs/plan/[项目名称].md`
   - **必须在文档开头添加 metadata 信息**（YAML frontmatter），包含 name、description、metadata.type、metadata.customer（如存在）、metadata.created 等字段
   - 生成完整的 Markdown 格式方案文档

## 示例

用户说："为电商平台项目制定方案"
- 提取项目名称，读取 `docs/customer/` 目录下的所有相关文件（如存在）
- 结合用户需求和客户资料制定方案，重点关注业务需求、产品设计、实施计划
- 如果涉及技术实现，使用已约定的技术栈，但不过度关注技术细节
- 生成 `docs/plan/ecommerce-platform.md`，**文档开头必须包含 metadata 信息**
