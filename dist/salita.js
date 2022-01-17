#! /usr/bin/env node
"use strict";

var _commander = require("commander");

var _figlet = _interopRequireDefault(require("figlet"));

var _chalk = _interopRequireDefault(require("chalk"));

var _create = _interopRequireDefault(require("./create"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const program = new _commander.Command();
program // 定义命令和参数
.command("create <app-name>").description("create a new project") // -f or --force 为强制创建，如果创建的目录存在则直接覆盖
.option("-f, --force", "overwrite target directory if it exist").action(_create.default);
program.on("--help", () => {
  // 使用 figlet 绘制 Logo
  console.log("\r\n" + _figlet.default.textSync("salita", {
    font: "Ghost",
    horizontalLayout: "default",
    verticalLayout: "default",
    width: 80,
    whitespaceBreak: true
  })); // 新增说明信息

  console.log(`\r\nRun ${_chalk.default.cyan(`salita <command> --help`)} show details\r\n`);
}); // 解析用户执行命令传入参数

program.parse(process.argv);