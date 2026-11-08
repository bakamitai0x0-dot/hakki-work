# HAKKI WORK V1.1 增量更新报告

## 更新范围与备份

本次在同一个现有项目内更新首页与必要导航、Footer，不创建新项目。原项目品牌内容为 ATELIER OBJECTS 演示商城；首页新增 HAKKI WORK 工作室定位，其余页面保留原内容。

修改前的可恢复版本：Git 标签 `hakki-v1.1-before-update`，提交 `c7b10feef8bff47d1ef7dbdd53ca6b00b3b2921c`，以及项目外的 `outputs/hakki-work-before-v1.1.zip` 源码备份。

没有新增依赖，没有修改商品数据、购物车/结账/会员逻辑、数据库、API、Next 配置、依赖锁文件或 Sites 托管配置。

## 完成区段

依序包含：Navigation、Hero、What We Do、Selected Works、From Idea to Reality、Business Solutions、Custom Shop、How It Works、Why HAKKI WORK、About the Studio、Project Inquiry、Footer。

- 导航具备 Home / Services / Our Works / Custom Shop / About / Contact / Get a Quote，保留搜索、账号、购物车、MegaMenu 和旧页面入口。
- 服务内容与主要首页文案配置在 `src/data/studio.ts`。
- 作品分类支持 All、IP & Characters、Website & Apps、3D Models、Custom Products。4 件内部展示均明确为 Concept；没有编造客户、交付结果或评价。
- 商业询价以 `audience=business` 进入表单；服务与个人客制入口预填对应 Project Type。
- 客制分类使用 Request a Quote，不虚构价格或库存，不显示未经证实的 Customizable 标签。
- 原有演示商品直接使用既有 `products` 与 `ProductCard`，原价、库存、规格和商品路由不变。
- 表单含必填验证、长度约束、重复提交保护、实际请求的提交中/已确认接收/失败状态，以及独立的未配置状态。后端为 null 时不发网络请求、不保存信息、不报告成功。
- 未连接上传服务，页面不渲染文件上传控件或无效上传按钮。
- 更新首页独立标题、描述、OG、Twitter 与 canonical，沿用既有字体、图像优化、Reveal、Modal 与 reduced-motion。

## 文件清单

修改的现有文件：

- `src/app/page.tsx`：首页入口与首页 metadata。
- `src/app/globals.css`：仅追加共享导航、Footer 的必要样式。
- `src/components/layout/header.tsx`：工作室字标、导航与询价入口；保留原有交互。
- `src/components/layout/footer.tsx`：补充工作室和政策入口，保留旧链接。

新增文件：

- `src/app/studio.css`：首页专用、响应式样式。
- `src/data/studio.ts`：工作室内容、作品、分类、服务、流程和询价配置。
- `src/components/home/studio/studio-home.tsx`：首页组装及 10 个区段组件。
- `src/components/home/studio/selected-works.tsx`：作品筛选和 Concept 详情。
- `src/components/home/studio/project-inquiry.tsx`：表单与提交反馈。
- `src/lib/inquiry.mjs`、`src/lib/inquiry.d.mts`：验证、提交适配器与类型。
- `public/media/website-concept.webp`：将原有网站截图转换为本地 WebP 内部展示素材。
- `tests/inquiry.test.mjs`：7 项新增询价回归测试。
- `qa/v1.1/audit.json`、`qa/v1.1/screenshots/`、本报告：验收资料。

新增导出组件共 13 个：StudioHome、StudioHero、StudioServices、StudioWorks、IdeaToReality、BusinessSolutions、StudioCustomShop、StudioProcess、WhyStudio、AboutStudio、StudioContact、SelectedWorks、ProjectInquiry。

## 验证

- Build 通过，包括编译、TypeScript、39 项静态生成任务及既有 Windows RSC 路径修复。
- 19/19 自动测试通过，其中原有 12 项与新增询价 7 项。
- 36 个原有 HTML 页面 HTTP 检查通过，47 个本地引用存在，首页指定锚点和区段顺序检查通过。
- 与备份标签比对，商品系统、其他页面源码、依赖及部署配置没有差异。
- 浏览器实测：作品筛选、Concept 弹层、企业询价上下文、客制类型预填、空表单错误、未配置反馈、手机菜单。
- 原商城实测：Mori 数量 2 加购为 $136，进入原演示结账无真实支付或订单，刷新后购物车仍保留；测试数据已移除。
- 手机视口 390px 下无页面横向溢出，文件输入数量为 0，实际交互控制台错误为 0。
- 首页 1440 / 768 / 390px 的测量、截图与 reduced-motion 检查保存在 screenshots。

未测试真实后端接收、真实邮件、文件上传、实际支付或物理生产能力；这些服务没有配置。没有声称 Lighthouse 得分或完整无障碍认证。

## 人工配置

1. 在 `studio.inquiry.endpoint` 配置真实询价 API。当前请求为 JSON POST，服务端必须校验字段；仅返回 HTTP 成功且 JSON `{ "accepted": true }` 才会展示已接收。
2. 配置接收人与后端错误处理、服务端防重复/限流和正式隐私说明后，再启用真实提交。机密凭证应留在服务端。
3. 连接安全文件上传服务后再增加文件字段，同时执行类型、容量与服务端校验。
4. 用经过确认的真实作品、客制商品及照片替换 Concept；没有这些资料时保留现有标注。
5. About、Support 与政策页按本次范围保留旧演示内容，需后续单独提供并更新正式 HAKKI WORK 品牌故事、联系方式、隐私条款与服务条款。

## 视觉记录与媒体

沿用已有 Premium Editorial 设计系统及 The page is the object 方向（seed 427954791），没有重抽风格或替换全站主题。Hero 从文字到雕塑、企业服务的深色面板、个人客制的商品陈列和询价表单形成不同节奏。

媒体全部复用原项目：ImageGen 原创角色概念主视觉、原创 SVG 研究图、原有商城截图。没有新增外部品牌资源。原素材授权和来源仍见 `qa/MEDIA.md` 与 `/support/#media`。这些图不作为真实客户交付或真实生产照片的证明。

ROUND 3

Seen in one second: HAKKI WORK 的创意工作室定位、主要询价按钮和实体创作概念。

Idea (one sentence): 用同一张展签式页面把设计、数字开发和实体创作连接起来。

Live thing: 分类作品、可预填的企业/个人询价、既有演示商品快速预览与购物车。

Layout words by section: hero=图文大版 / services=三联展签 / works=双列档案 / process=连续图文 / business=深色企业面板 / custom=分类及既有商品 / steps=有序流程 / values=分栏 / about=图文 / inquiry=说明与表单 / footer=品牌收尾。

Scores: design 6.5 · usability 8 · creativity 6.5 · content 5 → overall 6.8。

Caps applied: 复用概念占位图与内部展示，尚无真实项目摄影，限制图像和内容评分。

Top three problems and treatment:

1. 桌面 Hero 标题断行偏向末词：调整为 Your Ideas. / Made Real. 两行。
2. 作品分类标签像眉题：移到作品名称下方，保留必要分类与 Concept 标记。
3. 桌面表单比说明区高：说明区在桌面轻量 sticky，手机恢复自然排列。

保留的视觉提示均有原因：品牌指定暖色底、服务/商品/表单不同层级需要相应字号、多列网格存在列内对齐线、用户明确要求 Learn More 和 01–04 流程编号。未增加不相关视频或大型动画库，保留轻量 Reveal。商品 SVG 仍明确为占位，照片上的白色说明文字已实际检查对比度。
