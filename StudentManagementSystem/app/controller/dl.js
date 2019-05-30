'use strict';

const Controller = require('egg').Controller;

class DengluController extends Controller {
// 添加页面
  async index() {
    const{
        ctx
    } =this;
    await ctx.render('denglu.html')  
  }
// 查询表，比较
  async login(){
    const user = this.ctx.request.body;    
    const dlList = await this.app.model.Dl.findOne({
      where:{
        name:user.name,
        password:user.password,
      }
    });
    if(dlList==null){
      this.ctx.body = "用户名或密码错误！";
      return
    };
    await this.ctx.render('denglu', {
        dlList: dlList
    });
    if(user.name == dlList.name  && user.password == dlList.password && user.name !== null && user.password !== null ){
        // this.ctx.session.user = user;
        this.ctx.redirect("/clazz")
    }else{
        this.ctx.body = "用户名或密码错误！";
    }
  }
  async logout(){
    delete this.ctx.session.user  //删除session中的用户，取消用户登录状态
    this.ctx.redirect("/")
  }
}

module.exports = DengluController;
