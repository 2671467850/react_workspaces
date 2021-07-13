/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: Ankang
 * @Date: 2021-06-21 19:29:18
 * @LastEditors: Ankang
 * @LastEditTime: 2021-06-21 19:35:00
 */
// const log4js = require("log4js")
// log4js.configure({
//   appenders: { cheese: { type: "file", filename: "cheese.log" } },
//   categories: { default: { appenders: ["cheese"], level: "debug" } }
// })
// const logger = log4js.getLogger("cheese")

const cc = require('customize-cra')
// logger.debug(cc)

const {addDecoratorsLegacy, override} = cc 

module.exports = override(
  addDecoratorsLegacy()
)