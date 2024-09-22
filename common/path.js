// 项目域名
// export const BASE_URL = 'http://tangyishijia.huizukeji.cn:81/zhihui'   
// export const BASE_URL = 'http://192.168.0.100:8080/api'
export const BASE_URL = 'https://shhg.imjiayi.com'
//----------项目接口请求路径-----------
// 授权注册接口  registerUserInfo
const login =BASE_URL + '/api/login/login' 
const getVideos =BASE_URL + '/api/index/getVideo' 
const userView =BASE_URL + '/api/index/userView' 
const getTestQuestion =BASE_URL + '/api/index/getTestQuestion' 
const testQuestionPost =BASE_URL + '/api/index/testQuestionPost' 
const re_exercise =BASE_URL + '/api/index/re_exercise' 


 export default {
	 testQuestionPost,re_exercise,
 	login,getVideos,userView,getTestQuestion
 }
 