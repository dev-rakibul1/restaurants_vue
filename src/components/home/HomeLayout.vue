<template>
  <div class="flex flex-col min-h-screen">
    <!-- Toggle button (only on small/medium) -->
    <div class="flex items-center justify-between min-h-[50px]">
      <button class="flex items-center cursor-pointer back__icon_wrap">
        <span>
          <!-- Back Icon SVG -->
          <svg
            fill="#000000"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.293,12.707a1,1,0,0,1-.216-.325.986.986,0,0,1,0-.764,1,1,0,0,1,.216-.325l8-8a1,1,0,1,1,1.414,1.414L4.414,11H22a1,1,0,0,1,0,2H4.414l6.293,6.293a1,1,0,0,1-1.414,1.414Z"
            />
          </svg>
        </span>
        <span class="back__icon">All restaurants</span>
      </button>
      <button
        @click="showSidebar = !showSidebar"
        class="lg:hidden p-2 m-2 bg-gray-200 rounded"
      >
        ☰
      </button>
    </div>

    <!-- Parent container -->
    <div class="flex flex-1 flex-col lg:flex-row gap-4">
      <!-- Sidebar (1st child) -->
      <aside
        :class="['p-4', showSidebar ? 'block' : 'hidden', 'lg:block lg:w-1/4']"
      >
        <div class="sticky top-4">
          <h3 class="text-left font-semibold mb-4">Menu</h3>
          <ul class="space-y-4 home__layout__menu">
            <li class="p-2 hover:bg-gray-200">
              <a href="#free__delivery">What's new</a>
            </li>
            <li class="p-2 hover:bg-gray-200">
              <a href="#category__one">Новинки</a>
            </li>
            <li class="p-2 hover:bg-gray-200">
              <a href="#category__two">Соло баскеты</a>
            </li>
            <li class="p-2 hover:bg-gray-200">
              <a href="#category__three">Комбо</a>
            </li>
            <li class="p-2 hover:bg-gray-200">
              <a href="#category__four">Боксы</a>
            </li>
            <li class="p-2 hover:bg-gray-200">
              <a href="#category__five">Бургеры и сэндвичи</a>
            </li>
            <li class="p-2 hover:bg-gray-200">
              <a href="#category__six">Комбо баскеты</a>
            </li>
            <li class="p-2 hover:bg-gray-200">
              <a href="#category__seven">Сочная курочка</a>
            </li>
            <li class="p-2 hover:bg-gray-200">
              <a href="#category__eight">Снэки</a>
            </li>
            <li class="p-2 hover:bg-gray-200">
              <a href="#category__nine">Напитки</a>
            </li>
            <li class="p-2 hover:bg-gray-200">
              <a href="#category__ten">Дополнительно</a>
            </li>
          </ul>
        </div>
      </aside>

      <!-- Main content (2nd child) -->
      <main class="w-full lg:w-1/2 p-4">
        <!-- Top banner -->
        <HomeTopBanner />

        <!-- free delivery -->
        <div id="free__delivery" class="mt-10"><FreeDelivery /></div>
        <div id="category__one" class="mt-10"><CategoryOneView /></div>
        <div id="category__two" class="mt-10"><CategoryTwoView /></div>
        <div id="category__three" class="mt-10"><CategoryThreeView /></div>
        <div id="category__four" class="mt-10"><CategoryFourView /></div>
        <div id="category__five" class="mt-10"><CategoryFiveView /></div>
        <div id="category__six" class="mt-10"><CategorySixView /></div>
        <div id="category__seven" class="mt-10"><CategorySevenView /></div>
        <div id="category__eight" class="mt-10"><CategoryEightView /></div>
        <div id="category__nine" class="mt-10"><CategoryNineView /></div>
        <div id="category__ten" class="mt-10"><CategoryTenView /></div>
      </main>

      <!-- Right sidebar (3rd child) -->
      <aside class="hidden lg:block lg:w-1/4">
        <div class="sticky top-4 bg-white rounded-3xl p-5">
          <h2 class="text-2xl font-semibold mb-4">Cart</h2>
          <div class="flex items-center justify-center h-[60vh]">
            <UserCard />
          </div>
        </div>
      </aside>
    </div>
  </div>
</template>

<script>
import CategoryOneView from "../products/categories/CateOneView.vue";
import CategoryFourView from "../products/categories/CateFourView.vue";
import CategoryFiveView from "../products/categories/CateFiveView.vue";
import CategoryThreeView from "../products/categories/CateThreeView.vue";
import CategorySixView from "../products/categories/CateSixView.vue";
import CategorySevenView from "../products/categories/CateSevenView.vue";
import CategoryEightView from "../products/categories/CateEightView.vue";
import CategoryNineView from "../products/categories/CateNineView.vue";
import CategoryTwoView from "../products/categories/CateTwoView.vue";
import FreeDelivery from "../products/categories/FreeDelivery.vue";
import CategoryTenView from "../products/categories/CateTenView.vue";
import UserCard from "../products/userCard/AddToCard.vue";
import HomeTopBanner from "./homeTopBanner/HomeTopBanner.vue";

export default {
  name: "HomeLayout",
  components: {
    HomeTopBanner,
    CategoryOneView,
    CategoryTwoView,
    CategoryThreeView,
    CategoryFourView,
    CategoryFiveView,
    CategorySixView,
    CategorySevenView,
    CategoryEightView,
    CategoryNineView,
    UserCard,
    CategoryTenView,
    FreeDelivery,
  },
  data() {
    return {
      showSidebar: false,
    };
  },
};
</script>

<style>
.back__icon {
  margin-left: 10px;
}

.home__layout__menu li {
  margin-top: 15px;
  padding: 10px;
  border-radius: 7px;
  cursor: pointer;
}

.home__layout__menu li a {
  display: block;
  width: 100%;
  height: 100%;
}

.home__layout__parent {
  position: sticky;
  top: 0;
}
.back__icon_wrap {
  padding: 15px;
}

.max__height {
  height: 75vh;
}
</style>
