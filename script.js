// navigation
let section = document.querySelectorAll("section");
let lists = document.querySelectorAll(".nav .container ul li");
function activeLink(li) {
  lists.forEach((item) => item.classList.remove("active"));
  li.classList.add("active");
}
lists.forEach((item) =>
  item.addEventListener("click", function () {
    activeLink(this);
  })
);

window.onscroll = () => {
  section.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 5;
    // let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset) {
      const target = document.querySelector(`[href='#${id}']`).parentElement;
      activeLink(target);
    }
  });
};

// chart
var googling = {
  chart: {
    height: 180,
    type: "radialBar",
  },
  series: [100],
  labels: ["Googling"],
};
var htmlCss = {
  chart: {
    height: 180,
    type: "radialBar",
  },
  series: [70],
  labels: ["HTML-CSS"],
};
var javascript = {
  chart: {
    height: 180,
    type: "radialBar",
  },
  series: [60],
  labels: ["Javascript"],
};
var php = {
  chart: {
    height: 180,
    type: "radialBar",
  },
  series: [45],
  labels: ["PHP"],
};
var bootstrap = {
  chart: {
    height: 180,
    type: "radialBar",
  },
  series: [85],
  labels: ["Bootstrap"],
};
var tailwind = {
  chart: {
    height: 180,
    type: "radialBar",
  },
  series: [85],
  labels: ["Tailwind"],
};
var sassScss = {
  chart: {
    height: 180,
    type: "radialBar",
  },
  series: [65],
  labels: ["SASS/SCSS"],
};
var vuejs = {
  chart: {
    height: 180,
    type: "radialBar",
  },
  series: [35],
  labels: ["Vue.js"],
};
var reactjs = {
  chart: {
    height: 180,
    type: "radialBar",
  },
  series: [65],
  labels: ["React.js"],
};
var mysql = {
  chart: {
    height: 180,
    type: "radialBar",
  },
  series: [50],
  labels: ["MySQL"],
};
var codeigniter = {
  chart: {
    height: 180,
    type: "radialBar",
  },
  series: [50],
  labels: ["Codeigniter"],
};
var laravel = {
  chart: {
    height: 180,
    type: "radialBar",
  },
  series: [50],
  labels: ["Laravel"],
};
var git = {
  chart: {
    height: 180,
    type: "radialBar",
  },
  series: [80],
  labels: ["GIT"],
};

var google = new ApexCharts(document.querySelector("#googling"), googling);
var htmlCss = new ApexCharts(document.querySelector("#html-css"), htmlCss);
var javascript = new ApexCharts(
  document.querySelector("#javascript"),
  javascript
);
var php = new ApexCharts(document.querySelector("#php"), php);
var bootstrap = new ApexCharts(document.querySelector("#bootstrap"), bootstrap);
var tailwind = new ApexCharts(document.querySelector("#tailwind"), tailwind);
var sassScss = new ApexCharts(document.querySelector("#sass-scss"), sassScss);
var vuejs = new ApexCharts(document.querySelector("#vuejs"), vuejs);
var reactjs = new ApexCharts(document.querySelector("#reactjs"), reactjs);
var mysql = new ApexCharts(document.querySelector("#mysql"), mysql);
var codeigniter = new ApexCharts(
  document.querySelector("#codeigniter"),
  codeigniter
);
var laravel = new ApexCharts(document.querySelector("#laravel"), laravel);
var git = new ApexCharts(document.querySelector("#git"), git);

google.render();
htmlCss.render();
javascript.render();
php.render();
bootstrap.render();
tailwind.render();
sassScss.render();
vuejs.render();
reactjs.render();
mysql.render();
codeigniter.render();
laravel.render();
git.render();
// chart

// header menu responsive
// const ul = document.querySelector(".nav ul");
// const hMenu = document
//   .querySelector(".menu-toggle")
//   .addEventListener("click", (e) => {
//     e.preventDefault();
//     ul.classList.toggle("active");
//   });

// hover descImg
// const descImg = document.querySelector('.descImg')
// descImg.addEventListener('onhover', () => {
//     // alert('ok')
// })

// scrolling images
// window.addEventListener("scroll", () => {
//   const header = document.querySelector(".header");
//   const hKanan = document.querySelector(".hutan-kanan");
//   const hKiri = document.querySelector(".hutan-kiri");
//   const wrapDesc = document.querySelector(".wrap-desc");
//   // const thumbImg = document.querySelector('.about .wrapper .thumb-img')
//   // const desc = document.querySelector('.about .wrapper .desc')

//   const valueY = window.scrollY;

//   // sticky header
//   header.classList.toggle("wrapperSticky", valueY);

//   // if (valueY >= 174) {
//   //     // thumbImg.classList.toggle('active')
//   //     // thumbImg.style.opacity = 1
//   //     desc.style.opacity = 1
//   // }
//   // if (valueY <= 174) {
//   //     // thumbImg.classList.toggle('active')
//   //     thumbImg.style.opacity = 0
//   //     desc.style.opacity = 0
//   // }

//   // handler images
//   hKanan.style.bottom = valueY * -0.2 + "px";
//   hKiri.style.bottom = valueY * -0.1 + "px";
//   wrapDesc.style.top = valueY * 0.1 + "px";
// });

// filter galery images
const list = document.querySelectorAll(".list");
const card = document.querySelectorAll(".card");

for (let i = 0; i < list.length; i++) {
  list[i].addEventListener("click", (e) => {
    // console.log("ok");
    for (let j = 0; j < list.length; j++) {
      list[j].classList.remove("active");
    }

    e.target.classList.add("active");

    const dataFilter = e.target.getAttribute("data-filter");

    for (let k = 0; k < card.length; k++) {
      card[k].classList.remove("active");
      card[k].classList.add("hide");

      if (
        card[k].getAttribute("data-items") == dataFilter ||
        dataFilter == "all"
      ) {
        card[k].classList.remove("hide");
        card[k].classList.add("active");
      }
    }
  });
}

// modal image galery
const modal = document.querySelector("#myModal");
const img = document.querySelectorAll(".image");
const desc = document.querySelector(".card .desc1");
const modalImg = document.getElementById("img01");
const captionText = document.querySelector(".caption");
const spanX = document.querySelector(".container .btnClose");
const linkModal = document.querySelector("#myModal a");

for (let i = 0; i < img.length; i++) {
  img[i].addEventListener("click", (e) => {
    const getUrl = e.target.dataset;
    modal.style.display = "flex";
    modalImg.src = e.target.src;
    captionText.innerHTML = e.target.alt;
    linkModal.href = getUrl.url;

    // if (!img[i].getAttribute("data-url")) {
    //   // linkModal.style.display = "none";
    // } else {
    //   linkModal.style.display = "block";
    // }
  });
}

spanX.addEventListener("click", () => {
  modal.style.display = "none";
});
