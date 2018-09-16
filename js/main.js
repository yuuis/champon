new Vue({
  el: '#app',
  data: {
    newMessage: {
      type: '',
      body: ''
    },
    userMsgList: [],
    botMsgList: [
      { type: "lang", body: '聞きたい言語やFWはなんですか' }
    ],
  },
  methods: {
    addUserList: function (newMessage) {
      this.userMsgList.push({
        type: 'LANG',
        body: newMessage.body
      });
      this.newMessage = '';
    },
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
