/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: Ankang
 * @Date: 2021-07-07 20:26:30
 * @LastEditors: Ankang
 * @LastEditTime: 2021-07-13 08:44:23
 */
import { defineConfig } from 'umi';
// import routes from './routes';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  // layout: {
  //   name: 'Ant Design',
  //   locale: true,
  //   layout: 'side',
  // },
  // routes,
  fastRefresh: {},
});