const app = getApp()
const GameManager = require('./game_manager');
Page({
  data: {
    grids: []
  },
  gameManager: null,
  onLoad: function () {
    this.gameManager = new GameManager(4);
    const grids = this.gameManager.setup();
    this.setData({
      grids
    })
  },
  touchStart(){
    console.log('touchSatrt');
  },
  touchMove(){
    console.log('touchMove');
  },
  touchEnd(){
    console.log('touchEnd');
  }
})
