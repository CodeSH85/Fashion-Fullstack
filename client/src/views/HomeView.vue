<template>
  <div id="homepage">
    <section class="swiper container-fluid col-10">
      <swiper
        :slides-per-view="3"
        :space-between="50"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
      >
        <swiper-slide>Slide 1</swiper-slide>
        <swiper-slide>Slide 2</swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
        ...
      </swiper>
    </section>

    <section class="press container-fluid">
      <div class="row">
        <div class="heading">
          <h2>PRESS</h2>
        </div>
        <div
          class="press-row row-cols-3 row-cols-lg-5 g-2 g-lg-3"
        >
          <div class="press-col col-md-6" v-for="press in press" :key="press.id">
            <PressCard v-bind="press"></PressCard>
          </div>
        </div>

        <div
          class="btn-fluid flex my-5 allFood"
          style="justify-content: center"
        >
          <router-link class="link" to="/press">SEE MORE</router-link>
        </div>
      </div>
    </section>

    <section class="about my-5">
      <div
        class="container-fluid col-10"
        style="text-align: center; display: flex"
      >
        <div class="about col-md-6">
          <div class="detail-box">
            <div class="heading-container">
              <h3>
                以自由定義作品態度，善用拼貼與解構等非傳統手法呈現現代女性特有的浪漫與不羈。
              </h3>
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

        <div class="about col-md-6">
          <div class="about-img">
            <img
              class="img-fluid d-block w-40"
              src="images/profile.jpg"
              alt="..."
            />
          </div>
        </div>
      </div>
    </section>

    <section class="contact">
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label"
          >Email address</label
        >
        <input
          type="email"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label"
          >Example textarea</label
        >
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
      </div>
    </section>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import PressCard from "../components/PressCard.vue";

export default {
  name: "HomeView",
  components: {
    Swiper,
    SwiperSlide,
    PressCard,
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };
    return {
      onSwiper,
      onSlideChange,
    };
  },

  data() {
    return {
      press: [
        {
          id: 1,
          title: "VOGUE",
          img: "../images/press1.jpeg",
        },
        {
          id: 2,
          title: "LON",
          img: "../images/press2.jpeg",
        },
        {
          id: 3,
          title: "BBC",
          img: "../images/press3.jpeg",
        },
        {
          id: 4,
          title: "IDK",
          img: "../images/press4.jpeg",
        },
        {
          id: 5,
          title: "VOGUE",
          img: "../images/press5.jpeg",
        },
        {
          id: 6,
          title: "VOGUE TW",
          img: "../images/press6.jpeg",
        },
      ],
    };
  },
  computed: {
    test() {
      return this.$store.state.press;
    },
  },

};
</script>
