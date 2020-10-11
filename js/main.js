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
    $(this).not(":last-of-type")
      .addClass("sidebar-menu__item--active")
      .siblings()
      .removeClass("sidebar-menu__item--active");
  }
);
$("ul.priority-list").on(
  "click",
  "li:not(.priority-list__item--active)",
  function () {
    $(this)
      .addClass("priority-list__item--active")
      .siblings()
      .removeClass("priority-list__item--active");
  }
);

//меню карточки
$("#task-menu1").click(function () {
  console.log("Вы кликнули по меню");
  $("#menu1").toggleClass("drop-menu--active");
});
$("#task-menu2").click(function () {
  console.log("Вы кликнули по меню");
  $("#menu2").toggleClass("drop-menu--active");
});