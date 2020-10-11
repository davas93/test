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
$("#task-menu3").click(function () {
  console.log("Вы кликнули по меню");
  $("#menu3").toggleClass("drop-menu--active");
});
$("#task-menu4").click(function () {
  console.log("Вы кликнули по меню");
  $("#menu4").toggleClass("drop-menu--active");
});
$("#task-menu5").click(function () {
  console.log("Вы кликнули по меню");
  $("#menu5").toggleClass("drop-menu--active");
});
$("#task-menu6").click(function () {
  console.log("Вы кликнули по меню");
  $("#menu6").toggleClass("drop-menu--active");
});
$("#task-menu7").click(function () {
  console.log("Вы кликнули по меню");
  $("#menu7").toggleClass("drop-menu--active");
});
$("#task-menu8").click(function () {
  console.log("Вы кликнули по меню");
  $("#menu8").toggleClass("drop-menu--active");
});
$("#task-menu9").click(function () {
  console.log("Вы кликнули по меню");
  $("#menu9").toggleClass("drop-menu--active");
});
$("#task-menu10").click(function () {
  console.log("Вы кликнули по меню");
  $("#menu10").toggleClass("drop-menu--active");
});
$("#task-menu11").click(function () {
  console.log("Вы кликнули по меню");
  $("#menu11").toggleClass("drop-menu--active");
});
$("#task-menu12").click(function () {
  console.log("Вы кликнули по меню");
  $("#menu12").toggleClass("drop-menu--active");
});
$("#task-menu13").click(function () {
  console.log("Вы кликнули по меню");
  $("#menu13").toggleClass("drop-menu--active");
});