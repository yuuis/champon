new Vue({
  el: '#app',
  data: {
    userMsgList:[],
    botMsgList: []
  }
});

//modalWindow
Vue.component('modal', {
  template: '#modal-template'
})

new Vue({
  el: '#modalWindow',
  data: {
    showModal: true
  }
})
