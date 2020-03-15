import request from '@/utils/request'


/************** 发现 ***************/

// banner
export const reqBanner = (params) => request('/banner', params)

// 推荐歌单
export const reqRecommendSonglist = (params) => request('/personalized', params)

/************** 发现 ***************/

/************** 我的 ***************/

// 邮箱登录
export const reqEmailLogin = (params) => request('/login', params)

// 手机号登录
export const reqCellphoneLogin = (params) => request('/login/cellphone', params)

// 获取用户歌单
export const reqSongMenu = (params) => request('/user/playlist', params)

// 获取歌单歌曲
export const reqMenuSong = (params) => request('/playlist/detail', params)

// 获取歌曲详情
export const reqSongDtail = (params) => request('/song/detail', params)

// 获取歌词
export const reqLyric = (id) => request('/lyric', {id: id})

/************** 我的 ***************/
