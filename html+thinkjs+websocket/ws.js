const Base = require('./base.js');

module.exports = class extends Base {
  openAction() {
    console.log('ws open');
    // this.broadcast('open','上线');//{"event":"open","data":"open2"}    thinkjs 规范
  }
  closeAction() {
    console.log('ws close');
    // this.broadcast('close','下线');
    // return this.success();
  }
  messageAction(){
    const data = this.wsData.data;// wsData 储存发送的消息 .content 提取content内的数据
    this.broadcast('message',data);
    console.log(data)
  }
  // onlineAction(){
  //   const id = this.wsData.data.userid
  //   this.broadcast('online',`游客${id}上线`)
  // }
};
