//Скрытие приоритетов
$(".sidebar-menu__item--priority").click(function () {
  $(".priority-list__item").slideToggle(200);
  $(".sidebar-menu__icon--priority").toggleClass(
    "sidebar-menu__icon--priority-active"
  );
});
