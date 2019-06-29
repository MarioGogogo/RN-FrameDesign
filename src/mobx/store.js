// root.js主要内容是配置react-navigation(导航器)
import LoginStore from "./LoginStore"
// import AuthStore from './AuthStore'
// import HomeStore from './HomeStore'
const loginStore = new LoginStore()
// const authStore = new AuthStore()
// const homeStore = new HomeStore()

const stores = {
  loginStore
}


export default stores
