"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _path = _interopRequireDefault(require("path"));

var _fsExtra = _interopRequireDefault(require("fs-extra"));

var _inquirer = _interopRequireDefault(require("inquirer"));

var _generator = _interopRequireDefault(require("./generator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = async (name, options) => {
  // 当前命令行选择的目录
  const cwd = process.cwd(); // 需要创建的目录地址

  const targetAir = _path.default.join(cwd, name); // 目录是否已经存在？


  if (_fsExtra.default.existsSync(targetAir)) {
    // 是否为强制创建？
    if (options.force) {
      await _fsExtra.default.remove(targetAir);
    } else {
      // 询问用户是否确定要覆盖
      const {
        action
      } = await _inquirer.default.prompt([{
        name: "action",
        type: "list",
        message: "Target directory already exists Pick an action:",
        choices: [{
          name: "Overwrite",
          value: "overwrite"
        }, {
          name: "Cancel",
          value: false
        }]
      }]);

      if (!action) {
        return;
      } else if (action === "overwrite") {
        // 移除已存在的目录
        console.log(`\r\nRemoving...`);
        await _fsExtra.default.remove(targetAir);
      } else {
        return;
      }
    }
  } // 创建项目


  const generator = new _generator.default(name, targetAir); // 开始创建项目

  generator.create();
};

exports.default = _default;