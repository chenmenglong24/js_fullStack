let Toast = {}
Toast.install = function (Vue, options) {
  let opt = {
    defaultType: 'center',  //默认显示的位置
    duration: '1500'  //持续的时间
  }
  for (let property in options) {
    opt[property] = options[property]  //使用options的配置
  }
  Vue.property.$toast = (tips, type) => {
    if (type) {
      opt.defaultType = type
    }
    if (document.getElementsByClassName('vue-toast').length) {
      return  //如果toast此时在页面是出现状态，则不再执行
    }
    let toastTpl = Vue.extend({
      template: '<div class="vue-toast toast-'+ opt.defaultType +'">' + tips + '</div>'
    })
    let tpl = new toastTpl.$mount().$el  //挂载到以后要去到的dom结构上
    document.body.appendChild(tpl)
    setTimeout(() => {
      document.body.removeChild(tpl)
    }, opt.duration)
  }
  ['bottom', 'center', 'top'].forEach(type => {
    Vue.property.$toast[type] = (tips) => {
      return Vue.property.$toast(tips, type)
    }
  })
}