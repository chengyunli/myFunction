/**
 * 选项卡切换
 * 参数btns为按钮组，参数cards为卡片，参数btnClass为选中按钮样式
 */
function card(btns, cards, btnClass) {
  $(btns).each(function(i){
    $(this).click(function(){
      $(btns+"."+btnClass).removeClass(btnClass);
      $(this).addClass(btnClass);
      $(cards).hide();
      $(cards).eq(i).show();
    })
  })
}