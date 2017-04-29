$(window).ready(function () {
  const toggle = $('.js-toggle-navigation')
  const navigation = $('.js-navigation')
  toggle.click(() => {
    $(navigation).toggleClass('is-visible')
  })

})