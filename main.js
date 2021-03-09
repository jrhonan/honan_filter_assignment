document.addEventListener("DOMContentLoaded", function(){
  const select_menu = document.querySelector(".filter")

  select_menu.addEventListener("change", function(e){
    const flex_container_class = select_menu.value;
    const active_items = document.querySelectorAll(".item.active");

  active_items.forEach(function(item){
    item.classList.remove("active");
  });

  const streaming_items = document.querySelectorAll(` .item.${flex_container_class}`);

  streaming_items.forEach(function(item){
    item.classList.add("active");
  });
});
});
