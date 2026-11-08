# ATELIER OBJECTS

原创高端收藏品牌电商前端 V1.0。品牌、角色、商品、库存、发售日期和政策均为演示内容；不创建真实订单，不收集支付信息。

## 启动

需要 Node.js 22.18+（本次使用 24.22.1）及 pnpm 11+。

```powershell
cd outputs/atelier-objects
pnpm install --frozen-lockfile
pnpm dev
```

开发地址为 `http://localhost:3000`。如果系统有 npm，也可以 `npm install`、`npm run dev`，但建议使用已提供的 pnpm 锁文件。

当前 Codex 运行环境没有全局 npm/pnpm 命令，可在项目目录运行：

```powershell
node "$env:USERPROFILE/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/pnpm/bin/pnpm.cjs" dev
```

生产检查与静态预览：

```powershell
pnpm test
pnpm typecheck
pnpm build
pnpm start
```

`pnpm start` 通过项目自带的 `preview.mjs` 预览 `out/`，不是 Next.js 服务端运行模式。`build` 包含 Windows 导出路径修复步骤；不要跳过它直接部署原始 `next build` 产物。

## 技术与结构

固定稳定依赖：Next.js 16.4.5 / React 19.3.1 / TypeScript 7.0.2 / Tailwind CSS 4.3.5 / Motion 14.10.1 / Lucide React 1.70.0。精确版本见 package.json 与 pnpm-lock.yaml。

```text
atelier-objects/
├── src/
│   ├── app/                   # App Router、独立 metadata、错误/加载/404、SEO
│   ├── components/
│   │   ├── layout/            # 公告、导航、MegaMenu、搜索、Footer
│   │   ├── home/              # HeroCarousel、首页区块、Newsletter
│   │   ├── commerce/          # 商品、画廊、筛选、快速预览、购物车、会员演示
│   │   ├── collections/       # 系列卡片
│   │   ├── characters/        # 角色卡片
│   │   └── ui/                # Media、Modal、Reveal、Breadcrumbs、状态组件
│   ├── data/                  # brand.ts、catalog.ts，统一结构化 Mock Data
│   ├── lib/                   # 过滤、库存校验、购物车合计、金额/日期格式化
│   └── types/                 # Product、Variant、Character、Collection、CartLine
├── public/
│   ├── media/                 # 原创生成主视觉、原创 SVG 占位、WebP
│   └── fonts/                 # 本地可变 Manrope 与 OFL 授权
├── scripts/normalize-export.mjs # Windows 静态导出兼容修复
├── tests/                     # 业务逻辑与导出回归测试
├── qa/                        # 验收说明、截图与审计结果
├── .openai/hosting.json        # Sites 项目标识与静态托管配置
├── .env.example
├── next.config.ts
├── preview.mjs
└── README.md
```

设计变量集中于 `src/app/globals.css` 的 `:root` 和 Tailwind `@theme inline`。品牌文案与导航集中在 `src/data/brand.ts`；商品、角色、系列和专题集中在 `src/data/catalog.ts`。目前界面语言为英文。

## 页面清单

| 路由 | 内容 |
| --- | --- |
| `/` | 按需求顺序展示全部首页区块 |
| `/shop` | 搜索、组合筛选、排序、空状态与快速预览 |
| `/products/[slug]` | 12 件商品详情、画廊、规格、购买反馈、推荐 |
| `/collections`、`/collections/[slug]` | 3 个系列及专题 |
| `/characters`、`/characters/[slug]` | 4 个原创角色及品牌故事式详情 |
| `/new-releases` | 6 条核心发售数据，另加入一条售罄示例，按日期分组 |
| `/journal`、`/journal/[slug]` | 3 篇原创演示品牌专题 |
| `/about` | 原创品牌介绍、创作理念及演示说明 |
| `/cart` | 数量修改、移除、合计和空状态 |
| `/checkout` | 仅展示演示摘要；无支付/地址输入，无订单创建 |
| `/account` | 会员视图与本地表单演示；无账户创建或邮件发送 |
| `/support` | 帮助、演示政策、隐私、媒体来源 |
| `/not-found` | 可访问的 404 设计展示；未知路由使用真正的 404 页面 |
| `/sitemap.xml`、`/robots.txt` | 静态 SEO 文件 |

导出共 36 个 HTML 页面（包括内部 404）。

## 已完成功能

- 桌面 MegaMenu、手机导航、全站搜索、粘性 Header、手动 Hero 轮播。
- 按商品名称/描述/标签搜索，系列、分类、价格、库存组合筛选，价格升降序与新品排序。
- 筛选与 URL 查询参数同步；刷新可恢复参数，空结果有明确反馈。
- 商品多图与缩略图切换，触控横滑画廊，首页移动端商品横滑。
- 两种规格、分规格库存上限、数量调整、售罄/未发售禁用购买、预购演示。
- 快速预览、原生 dialog 焦点约束、Escape 关闭、关闭后恢复焦点。
- Cart Drawer、独立购物车页、角标、行小计、USD 合计；localStorage 持久化。
- 恢复购物车时校验商品/规格/状态/库存，合并重复行，限制数量，兼容损坏存储。
- 角色→系列→商品关联链路，专题布局与推荐对象。
- 结构化发售日历，日期与时间固定显示为 Asia/Singapore；没有虚假倒计时。
- Newsletter 与会员表单仅本地验证，明确告知不保存、不订阅、不发邮件。
- 独立页面标题、描述、Open Graph、站点地图、Robots 和商品 Product JSON-LD。
- 演示商品的 JSON-LD 不包含可交易 Offer，避免将虚构价格标记成真实销售承诺。
- 本地字体、WebP 主视觉（约 110 KB）、保留图片比例、懒加载、破图兜底。
- 语义链接/按钮、输入标签、焦点样式、跳转主内容、状态播报与 reduced-motion。
- 静态导出保留服务端组件；仅有交互的模块使用客户端组件。

## 尚未接入的真实后端

商品/价格/库存同步、订单、付款、真实购物车、物流、税费、会员认证、订单历史、收藏、邮件订阅、CMS、分析和后台管理均未接入。库存没有跨访问者锁定，也没有真实预购交付承诺。政策为演示说明，正式上线前须替换。

## 媒体与原创性

主视觉通过内置 ImageGen 原创生成，存放于 `public/media/campaign.png`，线上使用 WebP。提示词与来源说明见 `qa/MEDIA.md`。

4 个角色和 3 组系列场景使用原创本地 SVG 视觉占位；这些图是设计研究，不是真实商品照片。无 POP MART 素材、商标、角色或代码。替换图片只需更改 catalog 中的路径；保留图库比例和替代文本即可。

字体为 Manrope（SIL OFL），授权位于 `public/fonts/OFL.txt`。中文使用 Noto Sans SC / 系统字体回退；若正式上线中文内容，建议按所需字集接入本地 Noto Sans SC，避免下载全量中文字体。图标使用 Lucide（ISC）。

## 测试与验收

详见 `qa/ACCEPTANCE.md`。测试覆盖真实业务边界：联合过滤、排序、关系完整性、价格、库存、无效购物车恢复、重复规格合并、序列化恢复，以及 Windows 导出兼容性。

Windows 上 Next.js 16 静态导出存在 RSC 分段文件路径问题，见 [上游问题 #85374](https://github.com/vercel/next.js/issues/85374)。本项目在构建后复制出路由器请求的点分文件名，保留原始数据不变；Linux/macOS 上没有错误嵌套时不产生额外修改。

这是可用的前端演示，尚未执行真实支付、后端安全审计、真实设备全矩阵测试或 Lighthouse 性能评分。

## 接入 Shopify / CMS

1. 保留现有 Product/Variant/Collection 类型与 UI，在 `src/lib/` 添加服务端 catalog adapter，替换本地数据读取。Shopify Storefront API 负责真实商品、规格、价格和可售状态。
2. 购物车切换到 Shopify Cart API，持久化 cart ID，并跳转 Shopify 的真实 hosted checkout。正式接入前保持当前演示模式，避免前端自行收集银行卡。
3. 使用 Shopify metaobjects 或独立 CMS 管理 Character、Journal、Collection 的故事字段与媒体；通过 ID 映射保留角色→系列→商品关系。
4. 接入 Shopify Customer Account、邮件服务和真实支持渠道；配置库存同步、配送地区、币种、税费与政策。
5. 动态价格/库存上线时移除 `output: 'export'`，使用兼容的 Next.js 托管，加入服务端请求、缓存与 webhook 更新；机密令牌不得放入 `NEXT_PUBLIC_*`。
6. 设置真实 `NEXT_PUBLIC_SITE_URL`，替换所有 demo 文案、视觉占位、商品规格、虚构库存和日期，再补充合法真实的 Offer 数据。
