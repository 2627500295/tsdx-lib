const { devDependencies, dependencies } = require('../package.json');

const cp = require('child_process');
const { exec, spawn } = cp;

const dev = Object.keys(devDependencies).join(' ');
const prod = Object.keys(dependencies).join(' ');


console.log(`yarn add -D ${dev}`);
exec(`yarn add -D ${dev}`, {}, (e, stdout, stderr) => {
  if (!e) {
    console.log(stdout);
    console.log(stderr);
  }
});

console.log(`yarn add ${prod}`);
exec(`yarn add ${prod}`, {}, (e, stdout, stderr) => {
  if (!e) {
    console.log(stdout);
    console.log(stderr);
  }
});

// exec(`yarn add -D @commitlint/{cli,config-conventional} @semantic-release/{changelog,commit-analyzer,git,npm,release-notes-generator} semantic-release`, {}, (e, stdout, stderr) => {
//   if (!e) {
//     console.log(stdout);
//     console.log(stderr);
//   }
// })

