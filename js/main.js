// header nav hover action
const planList = document.querySelector('#plan_list');
const planListItem = document.querySelector('.plan_list_item');

planList.addEventListener('mouseover', function () {
  planListItem.classList.add('active')
})
planList.addEventListener('mouseout', function () {
  setTimeout(function () {
    if (!planListItem.classList.contains('active')) {
      planListItem.classList.remove('active');
    }
  }, 2000);
})

planListItem.addEventListener('mouseover', function () {
  planListItem.classList.add('active')
})

planListItem.addEventListener('mouseout', function () {
  planListItem.classList.remove('active')
})




// hamburger
const btn = document.querySelector('.toggle_btn');
const inner = document.querySelector('.sp_nav');
const mask = document.querySelector('#mask');

btn.onclick = () => {
  inner.classList.toggle('active');
  mask.classList.toggle('active');
  btn.classList.toggle('active');
};

mask.onclick = () => {
  inner.classList.toggle('active');
  mask.classList.toggle('active');
  btn.classList.toggle('active');
};



// accordion
const planListTarget = document.querySelector('#plan_list_target');
const planListDrop = document.querySelector('#plan_list_drop');

planListTarget.addEventListener('mouseover', function () {
  planListDrop.classList.add('active')
  this.classList.add('open')
})
planListTarget.addEventListener('mouseout', function () {
  setTimeout(function () {
    if (!planListDrop.classList.contains('active')) {
      planListDrop.classList.remove('active');
    }
  }, 1000);
})

planListDrop.addEventListener('mouseover', function () {
  planListDrop.classList.add('active')
})

planListDrop.addEventListener('mouseout', function () {
  planListDrop.classList.remove('active')
  planListTarget.classList.remove('open');
})



//top scroll
const top_scroll = document.querySelector('.top_scroll');

window.addEventListener('scroll', () => {
  let scroll_y = window.scrollY;
  console.log(scroll_y);
  if (scroll_y > 700) {
    top_scroll.classList.add('active');
  } else {
    top_scroll.classList.remove('active');
  }
});

top_scroll.addEventListener("click", scroll_top);

function scroll_top() {
  window.scroll({ top: 0, behavior: "smooth" });
}
