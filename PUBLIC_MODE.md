# 芳村仓库存：公开共享模式

本版本不使用应用登录或角色权限。只要能访问部署链接，就可以读取和修改同一份 Neon 数据库中的库存。

- Vercel Deployment Protection 必须保持 Disabled
- Vercel 环境变量需要保留 DATABASE_URL（Production）
- 不需要设置 VITE_AUTH_ENABLED；应用代码不再依赖登录状态
- 所有库存增删改查通过服务端函数写入 Neon
- 首页数据改为浏览器加载，避免首屏等待数据库导致移动端白屏
