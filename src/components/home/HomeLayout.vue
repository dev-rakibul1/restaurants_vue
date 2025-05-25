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
        :class="['p-4', showSidebar ? 'block' : 'hidden', 'lg:block lg:w-1/5']"
      >
        <div class="sticky top-4" style="margin-top: 30px">
          <h3 class="text-left font-semibold mb-4" style="padding: 10px">
            Menu
          </h3>
          <ul class="space-y-4 home__layout__menu">
            <li class="p-2 hover:bg-gray-200 font-semibold">
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
      <main class="w-full lg:w-3/5 p-4">
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
      <aside class="hidden lg:block lg:w-1/5">
        <div class="sticky top-4 bg-white rounded-3xl">
          <h2 class="text-2xl font-semibold mb-4" style="padding: 10px 25px">
            Cart
          </h2>

          <div
            class="flex items-center justify-center h-[60vh] overflow-y-scroll"
          >
            <!-- Display cart items -->

            <div
              v-if="localCart.length === 0"
              class="flex items-center justify-center"
              style="height: 20vh"
            >
              <UserCard />
            </div>
            <div v-else>
              <AddToCard
                v-for="product in localCart"
                :key="product.id"
                :product="product"
              />
            </div>

            <!-- <UserCard /> -->
          </div>

          <div
            v-if="store.products.length"
            class="p-5"
            style="
              border-top: 1px solid #ddd;
              margin-top: 10px;
              padding: 15px 0;
            "
          >
            <p class="text-xs">Quantity: {{ " " }} {{ totalQuantity }}</p>
            <p class="text-xs">
              Total Amount: {{ " " }} {{ formattedTotalAmount }} {{ " " }}₸
            </p>
          </div>
        </div>
      </aside>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, ref, watch } from "vue";
import AddToCard from "../../addToCard/AddToCard.vue";
import CategoryEightView from "../products/categories/CateEightView.vue";
import CategoryFiveView from "../products/categories/CateFiveView.vue";
import CategoryFourView from "../products/categories/CateFourView.vue";
import CategoryNineView from "../products/categories/CateNineView.vue";
import CategoryOneView from "../products/categories/CateOneView.vue";
import CategorySevenView from "../products/categories/CateSevenView.vue";
import CategorySixView from "../products/categories/CateSixView.vue";
import CategoryTenView from "../products/categories/CateTenView.vue";
import CategoryThreeView from "../products/categories/CateThreeView.vue";
import CategoryTwoView from "../products/categories/CateTwoView.vue";
import FreeDelivery from "../products/categories/FreeDelivery.vue";
import UserCard from "../products/userCard/UserCard.vue";
import HomeTopBanner from "./homeTopBanner/HomeTopBanner.vue";

import { useTaskStore } from "@/stores/taskStore";
// import AddCard from "../addCard/AddCard.vue";

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
    AddToCard,
  },
  data() {
    return {
      showSidebar: false,
    };
  },

  // setup() {
  //   const store = useTaskStore();
  //   const formattedTotalAmount = computed(() => {
  //     if (store.totalAmount === undefined || store.totalAmount === null) {
  //       return "0.00"; // Handle cases where totalAmount is null or undefined
  //     }
  //     return Number(store.totalAmount).toFixed(2);
  //   });

  //   const totalQuantity = computed(() => {
  //     return store.products.reduce(
  //       (total, item) => total + (item.quantity || 0),
  //       0
  //     );
  //   });

  //   // localstore set data
  //   const cartInit = localStorage.getItem("cart");
  //   const localCart = JSON.parse(cartInit);

  //   console.log("cart init", localCart);

  //   return { store, formattedTotalAmount, totalQuantity };
  // },

  setup() {
    const store = useTaskStore();
    const localCart = ref([]);

    onMounted(() => {
      const cartInit = localStorage.getItem("cart");
      if (cartInit) {
        try {
          localCart.value = JSON.parse(cartInit);
        } catch (error) {
          console.error("Error parsing localStorage cart:", error);
          localCart.value = [];
        }
      }
    });

    const formattedTotalAmount = computed(() => {
      return Number(store.totalAmount || 0).toFixed(2);
    });

    const totalQuantity = computed(() => {
      return store.products.reduce(
        (total, item) => total + (item.quantity || 0),
        0
      );
    });

    watch(
      () => store.products,
      (newVal) => {
        localStorage.setItem("cart", JSON.stringify(newVal));
        localCart.value = newVal;
      },
      { deep: true }
    );

    return { store, formattedTotalAmount, totalQuantity, localCart };
  },
};
</script>

<style>
.back__icon {
  margin-left: 10px;
}

.home__layout__menu li {
  margin-top: 11px;
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
  padding: 10px 35px;
  background: #fff;
  border-radius: 10px;
}

.max__height {
  height: 75vh;
}
</style>
