Polymer({
  is: 'careers-page',
  open_dialog: function(){
    this.$["application-dialog"].open()
  },
  submit_form: function(){
    this.$["form"].submit()
  }
})
