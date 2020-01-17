# TSDX BASIC

TSDX BASIC 模板

## 使用

### Start

编译文件并监听文件改变

```
yarn start
```

### Build

编译

```
yarn build
```

### Testing

测试

```
yarn test
```

### Lint

代码质量检测

```
yarn lint
```

## 开发过程

使用 `npm link` 把包链接到全局, 在依赖这个包的项目中使用 `npm link <projectName>`, 

把该包链接到需要调用它的项目中去。

如果成功发版本, 我们需要在被依赖项目中, 使用 `npm unlink <projectName>` 解除链接。

然后, 使用 `npm install <projectName>` 或 `yarn add <projectName>`, 将包安装到项目中去。

例如, 

```
  npm 包 (calc)                                         依赖 calc 包的 (前端某项目)
+ --------------------------------- +                 + --------------------------------- +
+  npm link                         +   开发阶段 -->   + npm link calc                     +
+ --------------------------------- +                 + --------------------------------- +
+  npm unlink                       +   <-- 开发完成   + npm unlink calc                   +
+ --------------------------------- +                 + --------------------------------- +
+  npm publish                      +   发版成功 -->   + yarn add calc OR npm install calc +
+ --------------------------------- +                 + --------------------------------- +
```

我有一个 `calc` 包, 它实现基础运算的包, 现在在要 `前端某项目` 中使用。

我们在 `calc` 的根目录中运行 `npm link` 链接到全局。

在使用项目 `前端某项目` 中运行 `npm link calc`, 把这个包链接到 `node_modules` 目录下。

然后, 我们就可以在 `前端某项目` 中导入 `import { plus } from 'calc';` 这个包。

`calc` 包开发完成后, 成功发布了 `0.1.0` 版本后, 我们需要在 `前端某项目` 中使用, `npm unlink calc` 解除链接。

使用 `npm install calc` 或 `yarn add calc` 安装包到我们前端某项目中去。

## 依赖

### 基础

  - [x] TypeScript    TS 编译工具
  - [x] tsdx          零配置, TypeScript 包开发 CLI 工具。
  - [x] husky         GIT HOOKS
  - [x] lint-staged   对暂存的文件进行 linter

### 提交规范

  - [x] commitlint    提交规范

### 代码约束

  - [x] ESLint                    代码格式规范
  - [x] jest                      代码测试
  - [x] prettier / VSCode Format  代码格式化

### 代码测试

  - [x] jest

## 参考

[gitattributes](https://git-scm.com/docs/gitattributes)

[tsdx](https://github.com/jaredpalmer/tsdx)

[commitlint](https://commitlint.js.org/#/)

[Husky](https://github.com/typicode/husky)

[lint-staged](https://github.com/okonet/lint-staged)

[ESLint](https://cn.eslint.org/)

[TypeScript ESLint](https://github.com/typescript-eslint/typescript-eslint)

