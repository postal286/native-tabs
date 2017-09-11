function ready() {

  function changeTab() {
    var buttons = document.getElementsByClassName('tabs__controls-link'),
        tabsContent = document.getElementsByClassName('tabs__item'),
        hasClass = buttons[this.num].classList.contains('tabs__controls-link-active');

    if (hasClass) { return }

    for ( var i = 0; i < tabsContent.length; i++) {
      buttons[i].classList.remove('tabs__controls-link-active');
      tabsContent[i].classList.remove('tabs__item-active');
    }

    buttons[this.num].classList.add('tabs__controls-link-active');
    tabsContent[this.num].classList.add('tabs__item-active');
  }

  var elements = document.getElementsByClassName('tabs__controls-link');

  for (var i = 0; i < elements.length; i++) {
    elements[i].preventDefault;
    elements[i].num = i;
    elements[i].addEventListener('click', changeTab);
  }
}

document.addEventListener("DOMContentLoaded", ready);
