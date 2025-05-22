<template>
  <div>
    <!-- Overlay -->
    <div
      v-if="isMenuOpen"
      @click="toggleMenu"
      class="fixed inset-0 bg-opacity-50 z-30 lg:hidden overly__bg"
    ></div>

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
            <!-- Search Box -->
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

            <!-- Delivery Button -->
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
            <div class="flex items-center text-sm text-black gap-1 flex-col">
              <img
                src="../../assets/images/world.png"
                alt="World"
                class="w-5 h-5"
              />
              <p>English</p>
            </div>
            <button class="login__btn">Log in</button>
          </div>
        </div>

        <!-- Hamburger Icon (Mobile Only) -->
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
        <!-- Search -->
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

        <!-- Delivery -->
        <button
          class="mt-10 flex items-center bg-yellow-300 text-black font-semibold rounded-2xl transition duration-200 w-full justify-center"
          style="padding: 13px 17px"
        >
          <img src="../../assets/images/send.png" class="w-5 h-5 mr-2" alt="" />
          Enter delivery address
        </button>

        <!-- Language -->
        <div class="flex items-center text-sm text-black gap-2 mt-10">
          <img
            src="../../assets/images/world.png"
            alt="World"
            class="w-5 h-5"
          />
          <p>English</p>
        </div>

        <!-- Login -->
        <button class="login__btn w-full mt-10">Log in</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MenuView",
  data() {
    return {
      isMenuOpen: false,
      isScrolled: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    handleScroll() {
      this.isScrolled = window.scrollY > 10;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
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
.login__btn {
  padding: 10px 20px;
  display: inline-block;
  background: #ddd;
  border-radius: 12px;
}
.overly__bg {
  background: #0000005b;
}

/* Sticky Navbar on Scroll */
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

.main-nav-wrapper {
  position: fixed;
  z-index: 98;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  background: #fff;
}
</style>
