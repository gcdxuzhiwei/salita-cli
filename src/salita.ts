#! /usr/bin/env node

import { Command } from "commander";
import figlet from "figlet";
import chalk from "chalk";

import create from "./create";

const program = new Command();

program
  // 定义命令和参数
  .command("create <app-name>")
  .description("create a new project")
  // -f or --force 为强制创建，如果创建的目录存在则直接覆盖
  .option("-f, --force", "overwrite target directory if it exist")
  .action(create);

program.on("--help", () => {
  // 使用 figlet 绘制 Logo
  console.log(
    "\r\n" +
      figlet.textSync("salita", {
        font: "Ghost",
        horizontalLayout: "default",
        verticalLayout: "default",
        width: 80,
        whitespaceBreak: true,
      })
  );
  // 新增说明信息
  console.log(
    `\r\nRun ${chalk.cyan(`salita <command> --help`)} show details\r\n`
  );
});

// 解析用户执行命令传入参数
program.parse(process.argv);
