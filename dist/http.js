"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRepoList = getRepoList;
exports.getTagList = getTagList;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 通过 axios 处理请求
_axios.default.interceptors.response.use(res => {
  return res.data;
});
/**
 * 获取模板列表
 * @returns Promise
 */


async function getRepoList() {
  return _axios.default.get("https://api.github.com/users/gcdxuzhiwei/repos");
}
/**
 * 获取版本信息
 * @param {string} repo 模板名称
 * @returns Promise
 */


async function getTagList(repo) {
  return _axios.default.get(`https://api.github.com/repos/gcdxuzhiwei/${repo}/tags`);
}