/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: Ankang
 * @Date: 2021-07-07 20:26:30
 * @LastEditors: Ankang
 * @LastEditTime: 2021-07-15 22:36:40
 */
import { defineConfig } from 'umi';
// import routes from './routes';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  fastRefresh: {},
  dva: {
    immer: true,
    hmr: false,
    skipModelValidate:true
  },
});