/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: Ankang
 * @Date: 2021-07-02 19:58:49
 * @LastEditors: Ankang
 * @LastEditTime: 2021-07-15 22:22:52
 */
import { Redirect } from 'umi'
import useAuth from '@/hooks/useAuth'
export default (props: any) => {
  const { isLogin } = useAuth()
  // console.log(isLogin);
  if (isLogin) {
    return <div>{ props.children }</div>;
  } else {
    return <Redirect to="/login" />;
  }
}