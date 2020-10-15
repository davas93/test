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
$("#inquiry1").hover(function (e) { 
  e.preventDefault();
   $(".drop-menu-inquiry").toggleClass("drop-menu-inquiry--active")
});
$("#template1").hover(function (e) { 
  e.preventDefault();
   $(".drop-menu-template").toggleClass("drop-menu-template--active")
});
$("#inquiry2").hover(function (e) { 
  e.preventDefault();
   $(".drop-menu-inquiry").toggleClass("drop-menu-inquiry--active")
});
$("#template2").hover(function (e) { 
  e.preventDefault();
   $(".drop-menu-template").toggleClass("drop-menu-template--active")
});
$("#inquiry3").hover(function (e) { 
  e.preventDefault();
   $(".drop-menu-inquiry").toggleClass("drop-menu-inquiry--active")
});
$("#template3").hover(function (e) { 
  e.preventDefault();
   $(".drop-menu-template").toggleClass("drop-menu-template--active")
});
$("#inquiry4").hover(function (e) { 
  e.preventDefault();
   $(".drop-menu-inquiry").toggleClass("drop-menu-inquiry--active")
});
$("#template4").hover(function (e) { 
  e.preventDefault();
   $(".drop-menu-template").toggleClass("drop-menu-template--active")
});
$("#inquiry5").hover(function (e) { 
  e.preventDefault();
   $(".drop-menu-inquiry").toggleClass("drop-menu-inquiry--active")
});
$("#template5").hover(function (e) { 
  e.preventDefault();
   $(".drop-menu-template").toggleClass("drop-menu-template--active")
});
$("#inquiry6").hover(function (e) { 
  e.preventDefault();
   $(".drop-menu-inquiry").toggleClass("drop-menu-inquiry--active")
});
$("#template6").hover(function (e) { 
  e.preventDefault();
   $(".drop-menu-template").toggleClass("drop-menu-template--active")
});
$("#inquiry7").hover(function (e) { 
  e.preventDefault();
   $(".drop-menu-inquiry").toggleClass("drop-menu-inquiry--active")
});
$("#template7").hover(function (e) { 
  e.preventDefault();
   $(".drop-menu-template").toggleClass("drop-menu-template--active")
});
$("#inquiry8").hover(function (e) { 
  e.preventDefault();
   $(".drop-menu-inquiry").toggleClass("drop-menu-inquiry--active")
});
$("#template8").hover(function (e) { 
  e.preventDefault();
   $(".drop-menu-template").toggleClass("drop-menu-template--active")
});
$("#inquiry9").hover(function (e) { 
  e.preventDefault();
   $(".drop-menu-inquiry").toggleClass("drop-menu-inquiry--active")
});
$("#template9").hover(function (e) { 
  e.preventDefault();
   $(".drop-menu-template").toggleClass("drop-menu-template--active")
});
$("#inquiry10").hover(function (e) { 
  e.preventDefault();
   $(".drop-menu-inquiry").toggleClass("drop-menu-inquiry--active")
});
$("#template10").hover(function (e) { 
  e.preventDefault();
   $(".drop-menu-template").toggleClass("drop-menu-template--active")
});
$("#inquiry11").hover(function (e) { 
  e.preventDefault();
   $(".drop-menu-inquiry").toggleClass("drop-menu-inquiry--active")
});
$("#template11").hover(function (e) { 
  e.preventDefault();
   $(".drop-menu-template").toggleClass("drop-menu-template--active")
});
$("#inquiry12").hover(function (e) { 
  e.preventDefault();
   $(".drop-menu-inquiry").toggleClass("drop-menu-inquiry--active")
});
$("#template12").hover(function (e) { 
  e.preventDefault();
   $(".drop-menu-template").toggleClass("drop-menu-template--active")
});
$("#inquiry13").hover(function (e) { 
  e.preventDefault();
   $(".drop-menu-inquiry").toggleClass("drop-menu-inquiry--active")
});
$("#template13").hover(function (e) { 
  e.preventDefault();
   $(".drop-menu-template").toggleClass("drop-menu-template--active")
});
$(document).mouseup(function (e){
    if (!$(".card-interface__icon").is(e.target) 
        && $(".card-interface__icon").has(e.target).length === 0) { 
      $(".drop-menu").removeClass("drop-menu--active"); 
    }
  });

$(".new-task").click(function(){
  console.log("Добавляется карточка с новой задачей")
});
$(".drop-menu__item").click(function(){
  console.log("Выполняется действие в соответствии с пунктом меню")
});
$(".sidebar-menu__text").click(function(){
  console.log("Карточки фильтруются в соответствии с данным пунктом")
});
$(".priority-list__item").click(function(){
  console.log("Карточки фильтруются еще и в соответствии с данным приоритетом вдобавок")
});
$(".header-interface__user").click(function(){
  console.log("Тут личный кабинет")
});
$("#settings").click(function(){
  console.log("Тут настройки приложения")
});
$("#exit").click(function(){
  console.log("Тут выход из учетки")
});
$(".task-modal__subtasks-item").hover(function (e) { 
  e.preventDefault();
  $(this).toggleClass("task-modal__subtasks-item--active")
  .find(".task-modal__subtasks-interface").toggleClass("task-modal__subtasks-interface--active")
});
$(".task-actions__button").hover(function (e) { 
  e.preventDefault();
  $(this).find(".task-actions__inquiry").toggleClass("task-actions__inquiry--active")
});
$(".task-actions__button").hover(function (e) { 
  e.preventDefault();
  $(this).find(".task-actions__template").toggleClass("task-actions__template--active")
});