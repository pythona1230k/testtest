// plan accordion (pc)
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

planList

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
const body = document.querySelector('body');

btn.onclick = () => {
  inner.classList.toggle('active');
  mask.classList.toggle('active');
  btn.classList.toggle('active');
  body.classList.toggle('active');
};

mask.onclick = () => {
  inner.classList.remove('active');
  mask.classList.remove('active');
  btn.classList.remove('active');
  body.classList.remove('active');
};



// plan accordion (sp in hambager)
const planListTarget = document.querySelector('#plan_list_target');
const planListDrop = document.querySelector('#plan_list_drop');

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  // スマートフォンやタブレットの場合の処理
  planListTarget.addEventListener('click', function(){
    this.classList.toggle('open')
    planListDrop.classList.toggle('active')
  })
} else {
  // PCの場合の処理
  planListTarget.addEventListener('mouseover', function () {
    planListDrop.classList.add('active')
    this.classList.add('open')

    this.addEventListener('mouseout', function () {
      planListTarget.classList.remove('open')
      planListDrop.classList.remove('active')
    })
  })

  planListDrop.addEventListener('mouseover', function () {
    planListDrop.classList.add('active')
    planListTarget.classList.add('open')
  })

  planListDrop.addEventListener('mouseout', function () {
    planListDrop.classList.remove('active')
    planListTarget.classList.remove('open');
  })
}

// planListTarget.addEventListener('click', function () {
//   planListDrop.classList.add('active')
//   this.classList.add('open')

//   this.addEventListener('mouseout', function () {
//     planListTarget.classList.remove('open')
//     planListDrop.classList.remove('active')
//   })
// })




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
