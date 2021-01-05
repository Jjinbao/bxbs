#!/usr/bin/env node

const { program } = require("commander");
const pkg = require("../package.json");

program.version(pkg.version, '-v --version');

program.command('init [projectName]', 'init project')

program.parse(process.argv);