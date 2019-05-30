'use strict';

const Controller = require('egg').Controller;

class ZcController extends Controller {
    async echo() {
        await this.ctx.render('zhuce.html')
      }
    async zc(){
            // 获取前端穿过来的数据
        
        const body = this.ctx.request.body;
        const clazzs = {
            name:body.names,
            password:body.passwords
        }
        await this.app.model.Dl.create(clazzs);
        this.ctx.redirect("/") 
    }
}

module.exports = ZcController;
 