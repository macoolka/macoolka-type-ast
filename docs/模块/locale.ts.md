---
title: locale.ts
nav_order: 2
parent: 模块
---

# 概述

对一个模块进行本地化

---

<h2 class="text-delta">目录</h2>

- [localeInterface (函数)](#localeinterface-%E5%87%BD%E6%95%B0)
- [localeModule (函数)](#localemodule-%E5%87%BD%E6%95%B0)

---

# localeInterface (函数)

**签名**

```ts

export const localeInterface =
    (a: Mo.MInterface): MonidI18N<Mo.MInterface> => i18nM => ...

```

v0.2.0 中添加

# localeModule (函数)

本地化一个模块
用 desc'locale'替换 description

**签名**

```ts

export const localeModule = (a: Mo.MModule): MonidI18N<Mo.MModule> => i18nM => ...

```

v0.2.0 中添加
