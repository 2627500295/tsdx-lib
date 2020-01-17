#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const camelcase = require('camelcase').default;
const Command = require('commander').Command;
const pkg = require('../package.json');

// Remove the package name scope if it exists
const removeScope = (name) => name.replace(/^@.*\//, '');

// UMD-safe package name
const safeVariableName = (name) => camelcase(removeScope(name)
    .toLowerCase()
    .replace(/((^[^a-zA-Z]+)|[^\w.-])|([^a-zA-Z0-9]+$)/g, ''));

const safePackageName = (name) => name
    .toLowerCase()
    .replace(/(^@.*\/)|((^[^a-zA-Z]+)|[^\w.-])|([^a-zA-Z0-9]+$)/g, '');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

let name = 'mylib';

// 工程名称
const program = new Command('change-name')
  .arguments('<project-directory>')
  .usage('<project-directory>')
  .action(projName => projName && (name = projName))
  .allowUnknownOption()
  .parse(process.argv);

Object.assign(pkg, { 
    name, 
    module: `dist/${safePackageName(name)}.esm.js` 
});

fs.writeFileSync(resolveApp('package.json'), JSON.stringify(pkg, null, 4));
