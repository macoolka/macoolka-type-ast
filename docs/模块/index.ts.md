---
title: index.ts
nav_order: 1
parent: 模块
---

# 概述

Parse file to Model Module

---

<h2 class="text-delta">目录</h2>

- [parse (函数)](#parse-%E5%87%BD%E6%95%B0)
- [parseI18N (函数)](#parsei18n-%E5%87%BD%E6%95%B0)

---

# parse (函数)

解析 ts 文件到`Module`

v0.2.0 中添加

# parseI18N (函数)

解析 ts 文件到`Module`(i18n)

**签名**

```ts

export const parseI18N = (files: Array<FileWhereUniqueInput>)=>(i18n: MonidI18NParam) : E.Either<string, Module.MModule[]> => ...

```

v0.2.0 中添加
