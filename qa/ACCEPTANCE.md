# V1.0 验收记录

日期：2026-11-08（Asia/Singapore）。

## 已实际运行

| 检查 | 结果 |
| --- | --- |
| `pnpm build` | 成功；Next.js 编译、TypeScript、39 项构建任务完成；36 个 HTML 页面 |
| `tsc --noEmit` | 成功，无 TypeScript 错误 |
| `pnpm test` | 12/12 通过 |
| 本地 HTTP / 静态引用审计 | 36 个页面 HTTP 200；46 个本地链接/资源引用存在 |
| 首页真实浏览器视觉检查 | 1440 / 768 / 390 px；0 横向页面溢出、0 破图、0 控制台错误 |
| Reduced motion | 检查中未发现被隐藏的首屏内容；动画支持 reduced-motion |
| 界面实际操作 | 商品规格、改量、加购、购物车刷新、删除、空状态、演示结账、手机菜单、筛选、搜索、快速预览、画廊、角色/系列链路通过 |

自动测试覆盖：数据数量与唯一性、角色/系列/商品关系、图片文件与日期、联合过滤、搜索、排序、库存总量、同规格合并、规格隔离、无效/售罄/未发售购物车条目、库存限制、序列化恢复、Windows 导出路径回归。

## 实际浏览器操作证据

- Mori / Mineral finish / 数量 2 加购 → 抽屉显示 $136。
- 刷新后仍显示 2 件与 Mineral finish；增加到 3 件 → $204。
- 演示结账显示 $204，并明确表示没有支付或订单；无银行卡/地址字段。
- 删除后角标归零，购物车显示空状态。
- 手机筛选 Quiet Forms + Available → 2 件；URL 同步 `collection=quiet-forms&status=Available`。
- 搜索不存在的名称 → 0 件和空结果反馈；更改排序同步 `sort=price-asc`。
- 全站弹层搜索 Pico 并按 Enter → `/shop/?q=Pico`，显示 3 件。
- 快速预览→完整详情、Mori→Quiet Forms、移动菜单→Characters 跳转正常。
- 画廊第二张缩略图可切换；手机商品与系列页面未出现破图/横向页面溢出。

## 修复的问题

1. 静态 Sitemap / Robots 路由需要 `force-static`。
2. 业务 JS 模块补充 TypeScript 声明，修复隐式 any。
3. Google Fonts 首次返回单字重字体，改为本地可变 Manrope WOFF2。
4. 提升次要文案至至少 13px，正文主要使用 16px，修复过长故事标题。
5. Windows 上 Next.js 导出 RSC 分段文件目录与客户端请求名不一致。构建后规范化 34 个文件，保留原始载荷，修复预取/客户端跳转。
6. 搜索表单关闭弹层导致原生提交未完成。改为显式客户端导航，复验通过。

## 视觉检查解释

技能方向：The page is the object，seed 427954791。概念为“收藏品的展签成为网页的内容框架”；使用纸色说明板、展台式构图与克制的字标。用户已指定的颜色、字体、首页顺序优先于抽取方向中的不适用布局。

`screenshots/report.json` 保留全部测量结果，`screenshots/` 包含桌面、平板和手机首屏及整页联系表，均已逐张查看。

最终视觉检查 0 FAIL，使用两个明确例外：

- `few-pictures`：用户允许明确占位图；商品/系列使用原创 SVG，不为了满足光栅图数量而伪装成摄影。
- `grey-body`：主视觉白字叠在照片深色区域，检查器按容器底色推算的对比度不反映真实照片区域；已查看三个尺寸截图。

保留的 WARN：品牌指定 #F7F6F2 暖色底；Newsletter 的线是实际表单输入线；电商元信息与编辑标题需要更多字号层级；多列商品网格在列内形成多个对齐线；移动端横滑商品为用户明确要求；没有引入不相关的背景视频。

### 最后视觉评审

ROUND 3

Seen in one second: 一大一小的陶瓷伙伴，配清晰的系列探索入口。

Idea (one sentence): 展台上的收藏品与纸色展签成为网页的视觉语言。

Live thing: 可筛选的商品目录、可选择规格并持久化的购物车，以及角色→系列的探索链路。

Layout words by section: hero=全幅摄影 / collections=错落展签 / arrivals=商品陈列 / characters=色面档案 / favorites=陈列 / story=摄影与纸色展签 / releases=日期条目 / journal=编辑版式 / newsletter=表单面板 / footer=大字标。

Scores: design 6.5 · usability 8 · creativity 7 · content 5 → overall 6.9。

Caps applied: 商品 SVG 为用户允许的视觉占位，不能作为正式商品摄影；不足四张独立摄影，限制 design 与 content 分数。这是严格技能评分，不是功能测试结果。

Top three problems and treatment:

1. 第一轮 desktop-page-02 中故事标题三行：已改为两行短标题。
2. 第一轮全站字重过粗：已换为真正可变字体；最终截图层级更清晰。
3. 商品占位图与主视觉写实度不一致：保留并明确标记，正式上线前换成真实、统一摄影。无真实商品素材时不虚构实物证据。

## 验证边界

没有执行 Lighthouse 性能评分、完整 WCAG/axe 审计、真实移动硬件矩阵或后端安全测试。SEO metadata、结构化数据与布局基础已实现；不能据此宣称某个性能分数或完整无障碍认证。

目前只提供前端演示。真实支付、订单、库存预留、物流、会员认证、邮件、CMS、税费与运营政策均未接入。正式销售前必须替换演示数据、素材与政策。
