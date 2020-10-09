//Скрытие приоритетов
$(".sidebar-menu__item--priority").click(function () {
  $(".priority-list__item").slideToggle(200);
  $(".sidebar-menu__icon--priority").toggleClass(
    "sidebar-menu__icon--priority-active"
  );
});
//Переключение вкладок меню
$("ul.sidebar-menu").on(
  "click",
  "li:not(.sidebar-menu__item--active)",
  function () {
    $(this)
      .addClass("sidebar-menu__item--active")
      .siblings()
      .removeClass("sidebar-menu__item--active");
  }
);
