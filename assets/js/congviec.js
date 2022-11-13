console.log(123);

var list_postdate = document.getElementById('list-postdate')
list_postdate.addEventListener("click", function () {
  let list_sort_postdate = document.getElementById('list_sort_postdate');
  list_sort_postdate.classList.toggle('hide');
  list_sort_postdate.classList.toggle('border');
  list_sort_postdate.classList.toggle('block');
  list_sort_postdate.parentElement.style.marginBottom = "10px"
  list_sort_postdate.parentElement.classList.toggle('border')
  list_sort_postdate.parentElement.style.transition = "all 1s ease-in-out";
});
