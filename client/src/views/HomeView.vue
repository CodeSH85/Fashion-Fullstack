<template>
  <div id="homepage">
    <section class="swiper-container container-fluid">
      <swiper
        :slidesPerView="3"
        :spaceBetween="30"
        :pagination="{
          clickable: true,
        }"
        :modules="modules"
        class="mySwiper"
      >
        <swiper-slide><img class="about-img" src="images/S22.png" alt="" /></swiper-slide>
        <swiper-slide><img class="about-img" src="images/S21.png" alt="" /></swiper-slide
        ><swiper-slide><img class="about-img" src="images/A21.png" alt="" /></swiper-slide>
        <swiper-slide>Slide 4</swiper-slide
        ><swiper-slide>Slide 5</swiper-slide><swiper-slide>Slide 6</swiper-slide
        ><swiper-slide>Slide 7</swiper-slide><swiper-slide>Slide 8</swiper-slide
        ><swiper-slide>Slide 9</swiper-slide>
      </swiper>
    </section>
<hr>
<hr>
    <section class="press container-fluid col-10">
      <div class="row">
        <div class="heading">
          <h2>PRESS /</h2>
        </div>
        <div class="press-row row-cols-3 row-cols-lg-5 g-2 g-lg-3">
          <div
            class="press-col col-md-6"
            v-for="press in press"
            :key="press.id"
          >
            <PressCard v-bind="press"></PressCard>
          </div>
        </div>

        <div class="home_buttons_list">
          <router-link class="button_white" to="/press">SEE MORE</router-link>
        </div>
      </div>
    </section>
    <hr />
    <hr />
    <section class="about container-fluid col-10 p-0">
      <div class="col-md-6">
        <div class="row about-detail m-5">
          <div class="heading">
            <img class="about-img" src="images/about_name.png" alt="" />
            <h5>
              以自由定義作品態度，善用拼貼與解構等非傳統手法呈現現代女性特有的浪漫與不羈。
            </h5>
          </div>
          <p class="text-start">
            畢業於倫敦藝術大學，曾在Alexander
            McQueen底下實習，也在倫敦做過Stylist。在倫敦待了五年的她，回台灣之後於2013年開始經營自己的品牌。
            每季總是會嘗試與不同藝術團隊進行時尚跨界合作，JENN
            LEE深信1+1大於2，因此積極整合跨界不同的台灣藝術工作者，無論是舞蹈藝術、視覺藝術、畫家、聲音藝術等不同的藝術家，都曾經跨界合作過，而跨界合作的品牌廣告與紀錄片曾在倫敦、柏林、羅馬尼雅與芝加哥獲選首映。
            致力於啟發女性自信與價值，希望不僅僅是用服裝來說故事啟發女性，更從中研究女性線條，不斷耕耘在優雅版型上，讓所有穿上JENN
            LEE的女性質感加倍。曾榮譽獲得臺北時尚大賞「最佳版型運用獎」。
          </p>
        </div>
      </div>
      <div class="col-md-4 m-5">
        <img class="about-img" src="images/profile.jpg" alt="..." />
      </div>
    </section>
    <hr />
    <hr />

    <section class="container-fluid col-10 p-0">
      <div class="contact col-md-10">
        <div class="contact-form row m-3">
          <div class="mb-2">
            <label for="exampleFormControlInput1" class="form-label">
              Name</label
            >
            <input
              type="email"
              class="form-control col-3"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>

          <div class="mb-2">
            <label for="exampleFormControlInput1" class="form-label"
              >Email address</label
            >
            <input
              type="email"
              class="form-control col-3"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>
          <div class="mb-2">
            <label for="exampleFormControlInput1" class="form-label">
              Title</label
            >
            <input
              type="email"
              class="form-control col-3"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>
        </div>
        <div class="contact-detail col-md-5">
          <p class="text-end">
            MON - FRI / 1000-1800 公關媒體/jennleeoffice@gmail.com
            客服信箱/jennleeteam@gmail.com Tel/ +8862-8952-1999 Instagram
            Facebook
          </p>
        </div>
      </div>

      <div class="message  col-md-10">
        <label  for="exampleFormControlTextarea1" class="form-label"
          >Message</label
        >
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
      </div>
      <div class="home_buttons_list">
          <router-link class="button_white" to="/press">SEND</router-link>
        </div>
    </section>
  </div>
</template>

<script>
// import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
// import "./style.css";
// import required modules

// import { Pagination } from "swiper";
// import PressCard from "../components/PressCard.vue";

export default {
  name: "HomeView",
  components: {
  },
  mounted() {
    document.body.style.backgroundColor = 'black'
  },
  beforeUnmount () {
    document.body.style.backgroundColor = 'transparent'
  }
}
</script>
