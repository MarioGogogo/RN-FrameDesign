import {observable, action, configure, computed} from 'mobx';
// mobx@4.x 之后的严格模式改成这么用了~
configure({enforceActions:"always"});  //使用严格模式，防止直接在view层修改store中的数据

class LoginStore {
  @observable username = "";
  @observable password = "";

  @action setUser=(username)=>{
    this.username = username
  }
  @action setPassword=(password)=>{
    this.password = password
  }
}
export default LoginStore;
