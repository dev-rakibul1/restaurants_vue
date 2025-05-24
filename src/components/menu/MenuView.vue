<template>
  <div>
    <!-- Overlay -->
    <div
      v-if="isMenuOpen"
      @click="toggleMenu"
      class="fixed inset-0 bg-opacity-50 z-50 lg:hidden overly__bg w-full"
    ></div>

    <!-- Overlay for card sidebar -->
    <div
      v-if="isCardSidebarOpen"
      class="fixed inset-0 bg-opacity-50 z-40 card__overly"
      style="z-index: 5000"
      @click="closeCardSidebar"
    ></div>

    <!-- Card Sidebar -->
    <div
      style="z-index: 5001"
      v-if="isCardSidebarOpen"
      ref="cardSidebar"
      class="fixed p-5 right-0 top-0 w-64 h-full bg-white shadow-lg z-50 transition-transform duration-300"
    >
      <h2 class="text-xl font-bold mb-4">My Cart</h2>
      <!-- view card -->

      <div class="h-screen overflow-y-scroll">
        <!-- Display cart items -->

        <div
          v-if="store.products.length === 0"
          class="flex items-center justify-center h-[50vh] text-gray-500"
        >
          Cart is empty!
        </div>
        <div v-else>
          <div>
            <div
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

            <AddToCard
              v-for="product in store.products"
              :key="product.id"
              :product="product"
            />
          </div>
        </div>

        <!-- <UserCard /> -->
      </div>
    </div>

    <!-- Main Nav Container -->
    <div
      :class="['main-nav-wrapper', { scrolled: isScrolled }]"
      class="min-h-[80px] flex items-center justify-center px-8 border-b border-gray-300"
    >
      <nav class="w-full flex items-center justify-between p-8 container">
        <!-- Left: Logo -->
        <div class="flex items-center gap-4" style="padding: 0 10px">
          <img
            src="https://avatars.mds.yandex.net/get-bunker/994123/b78e4890b454976f74575e3ea79f24a5eeee5fd8/orig"
            alt="Logo"
            class="w-11 h-11"
          />
        </div>

        <!-- Desktop Menu -->
        <div class="hidden lg:flex justify-between items-center w-full px-8">
          <!-- Left section -->
          <div class="flex flex-wrap items-center gap-4">
            <div class="relative">
              <input
                type="search"
                class="search__input"
                placeholder="Find in your resturants"
              />
              <img
                src="../../assets/images/search.png"
                alt="Search"
                class="w-5 h-5 search__icon"
              />
            </div>

            <button
              class="flex items-center bg-yellow-300 hover:bg-yellow-300 text-black font-semibold rounded-2xl transition duration-200"
              style="padding: 13px 17px"
            >
              <span class="px-1">
                <img
                  src="../../assets/images/send.png"
                  class="w-5 h-5"
                  alt=""
                />
              </span>
              Enter delivery address
            </button>
          </div>

          <!-- Right section -->
          <div class="flex items-center gap-12">
            <div class="relative group mt-10">
              <div
                class="flex items-center text-sm text-black gap-1 flex-col cursor-pointer"
              >
                <img
                  src="../../assets/images/world.png"
                  alt="World"
                  class="w-5 h-5"
                />
                <p>English</p>
              </div>

              <!-- Language Dropdown for Mobile -->
              <div
                class="language__dropdown mt-2 w-full bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <ul>
                  <li
                    class="px-4 py-2 hover:bg-gray-100 cursor-pointer transition-colors duration-200"
                  >
                    Русский
                  </li>
                  <li
                    class="px-4 py-2 hover:bg-gray-100 cursor-pointer transition-colors duration-200"
                  >
                    English
                  </li>
                  <li
                    class="px-4 py-2 hover:bg-gray-100 cursor-pointer transition-colors duration-200"
                  >
                    Қазақша
                  </li>
                  <li
                    class="px-4 py-2 hover:bg-gray-100 cursor-pointer transition-colors duration-200"
                  >
                    O'zbek
                  </li>
                  <li
                    class="px-4 py-2 hover:bg-gray-100 cursor-pointer transition-colors duration-200"
                  >
                    Казак
                  </li>
                </ul>
              </div>
            </div>
            <!-- <div class="flex items-center text-sm text-black gap-1 flex-col">
              <img
                src="../../assets/images/world.png"
                alt="World"
                class="w-5 h-5"
              />
              <p>English</p>
            </div> -->
            <button class="login__btn">Log in</button>
          </div>
        </div>

        <!-- Hamburger Icon -->
        <div class="lg:hidden">
          <button @click="toggleMenu">
            <svg
              v-if="!isMenuOpen"
              class="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
            <svg
              v-else
              class="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
      </nav>
    </div>

    <!-- Slide-In Mobile Menu -->
    <div
      class="mobile__menu fixed top-0 left-0 w-3/4 max-w-sm bg-white h-full z-40 transform transition-transform duration-300 lg:hidden"
      :class="{ '-translate-x-full': !isMenuOpen, 'translate-x-0': isMenuOpen }"
    >
      <div class="p-6 space-y-6">
        <div class="relative mt-10">
          <input
            type="search"
            class="search__input w-full"
            placeholder="Find in your resturants"
          />
          <img
            src="../../assets/images/search.png"
            alt="Search"
            class="w-5 h-5 search__icon"
          />
        </div>

        <button
          class="mt-10 flex items-center bg-yellow-300 text-black text-sm md:text-xl font-semibold rounded-2xl transition duration-200 w-full justify-center"
          style="padding: 13px 17px"
        >
          <img src="../../assets/images/send.png" class="w-5 h-5 mr-2" alt="" />
          Enter delivery address
        </button>

        <div
          class="flex items-center text-sm text-black gap-2 mt-10 cursor-pointer"
        >
          <img
            src="../../assets/images/world.png"
            alt="World"
            class="w-5 h-5"
          />
          <p>English</p>
        </div>

        <button
          @click.stop="toggleCardSidebar"
          class="card__btn bg-gray-300 rounded-xl w-full mt-10 flex items-center justify-center cursor-pointer"
        >
          <img
            src="../../assets/images/shoping.png"
            class="w-4 h-4 mr-5 cursor-pointer"
            alt=""
          />
          Card
          <p class="card__bage">{{ totalQuantity || 0 }}</p>
        </button>

        <button class="login__btn w-full mt-10 cursor-pointer">Log in</button>
      </div>
    </div>
  </div>
</template>

<script>
import { useTaskStore } from "@/stores/taskStore";
import { computed } from "vue";
import AddToCard from "../../addToCard/AddToCard.vue";

export default {
  name: "MenuView",

  components: {
    AddToCard,
  },

  data() {
    return {
      isMenuOpen: false,
      isScrolled: false,
      isCardSidebarOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    toggleCardSidebar() {
      this.isCardSidebarOpen = !this.isCardSidebarOpen;
    },
    closeCardSidebar() {
      this.isCardSidebarOpen = false;
    },
    handleScroll() {
      this.isScrolled = window.scrollY > 10;
    },
    handleClickOutside(event) {
      const sidebar = this.$refs.cardSidebar;
      if (sidebar && !sidebar.contains(event.target)) {
        this.closeCardSidebar();
      }
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    document.addEventListener("click", this.handleClickOutside);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
    document.removeEventListener("click", this.handleClickOutside);
  },

  setup() {
    const store = useTaskStore();
    const formattedTotalAmount = computed(() => {
      if (store.totalAmount === undefined || store.totalAmount === null) {
        return "0.00"; // Handle cases where totalAmount is null or undefined
      }
      return Number(store.totalAmount).toFixed(2);
    });

    const totalQuantity = computed(() => {
      return store.products.reduce(
        (total, item) => total + (item.quantity || 0),
        0
      );
    });

    return { store, formattedTotalAmount, totalQuantity };
  },
};
</script>

<style scoped>
.search__input {
  border: 2px solid #c0c0c0;
  min-height: 50px;
  border-radius: 13px;
  padding: 5px 5px 5px 39px;
  width: 100%;
}
.search__icon {
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}
.card__btn {
  padding: 10px 20px;
  background: #ddd;
  border-radius: 12px;
  position: relative;
}
.login__btn {
  padding: 10px 20px;
  display: inline-block;
  background: #ddd;
  border-radius: 12px;
}
.card__overly,
.overly__bg {
  background: #00000070;
}
.main-nav-wrapper.scrolled {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: white;
  z-index: 50;
  transition: all 0.5s ease;
  border: none;
  box-shadow: 0 8px 20px rgba(117, 115, 111, 0.2);
}
.mobile__menu {
  z-index: 99;
  padding: 15px;
}
.card__bage {
  border: 1px solid #ffdf20;
  position: absolute;
  top: 0;
  right: 50%;
  margin-right: -50px;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  border-radius: 100%;
  background: #ffdf20;
}
.main-nav-wrapper {
  position: fixed;
  z-index: 98;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  background: #fff;
}

/* Add these to your existing styles */
.group {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
.language__dropdown {
  opacity: 0;
  visibility: hidden;
  transform: translateX(-50%);
  transition: all 0.3s ease;
  max-height: auto;
  min-width: 200px;
  position: absolute;
  top: 0;
  left: -100%;
  transform: translateY(15%);
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  border: 1px solid #ddd;
}

.language__dropdown ul {
  width: 100%;
  max-width: 100%;
}
.language__dropdown ul li {
  margin-top: 10px;
  width: 100%;
  max-width: 100%;
  display: block;
  padding: 10px;
  transition: all 0.3s;
  color: #424242;
}
.language__dropdown ul li:hover {
  background: #ebebeb;
}

.language__dropdown ul li:first-child {
  margin-top: 0px;
}

.group:hover .language__dropdown,
.group:focus-within .language__dropdown {
  opacity: 1;
  visibility: visible;
  transform: translateY(45px);
}

/* For mobile menu */
@media (max-width: 1023px) {
  .language__dropdown {
    position: static;
    transform: none;
    width: 100%;
  }

  .group:hover .language__dropdown,
  .group:focus-within .language__dropdown {
    transform: none;
  }
}
</style>
