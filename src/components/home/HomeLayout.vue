<template>
  <div class="flex flex-col min-h-screen">
    <!-- Toggle button (only on small/medium) -->
    <div class="flex items-center justify-between min-h-[50px]">
      <button class="flex items-center cursor-pointer back__icon_wrap">
        <span>
          <svg
            fill="#000000"
            width="800px"
            height="800px"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.293,12.707a1,1,0,0,1-.216-.325.986.986,0,0,1,0-.764,1,1,0,0,1,.216-.325l8-8a1,1,0,1,1,1.414,1.414L4.414,11H22a1,1,0,0,1,0,2H4.414l6.293,6.293a1,1,0,0,1-1.414,1.414Z"
            />
          </svg>
        </span>
        <span class="back__icon">All resturants</span>
      </button>
      <button
        @click="showSidebar = !showSidebar"
        class="lg:hidden p-2 m-2 bg-gray-200 rounded"
      >
        ☰
      </button>
    </div>

    <!-- Parent container -->
    <div class="flex flex-1 flex-col lg:flex-row home__layout__parent">
      <!-- Sidebar (1st child) -->
      <aside
        :class="[
          'bg-gray-100 p-4',
          showSidebar ? 'block' : 'hidden',
          'lg:block lg:w-1/4',
        ]"
      >
        <h3
          class="text-left"
          style="margin: 15px 0; padding: 15px; font-weight: 600"
        >
          Menu
        </h3>
        <ul class="space-y-9 home__layout__menu">
          <li class="p-2 hover:bg-gray-200"><a href="#">What's new</a></li>
          <li class="p-2 hover:bg-gray-200"><a href="#">Новинки</a></li>
          <li class="p-2 hover:bg-gray-200"><a href="#">Соло баскеты</a></li>
          <li class="p-2 hover:bg-gray-200"><a href="#">Комбо</a></li>
          <li class="p-2 hover:bg-gray-200"><a href="#">Боксы</a></li>
          <li class="p-2 hover:bg-gray-200">
            <a href="#">Бургеры и сэндвичи</a>
          </li>
          <li class="p-2 hover:bg-gray-200"><a href="#">Комбо баскеты</a></li>
          <li class="p-2 hover:bg-gray-200"><a href="#">Сочная курочка</a></li>
          <li class="p-2 hover:bg-gray-200"><a href="#">Снэки</a></li>
          <li class="p-2 hover:bg-gray-200"><a href="#">Напитки</a></li>
          <li class="p-2 hover:bg-gray-200"><a href="#">Дополнительно</a></li>
        </ul>
      </aside>

      <!-- Main content (2nd child) -->
      <main class="w-full lg:w-1/2 p-4 bg-white">
        <h1 class="text-xl font-bold mb-4">Main Content</h1>
        <p>This section takes 50% of the width on large screens.</p>
      </main>

      <!-- Right sidebar (3rd child) — hidden on small/medium -->
      <aside class="hidden lg:block lg:w-1/4 bg-gray-50 p-4">
        <h2 class="text-lg font-semibold mb-2">Right Panel</h2>
        <p>Visible only on large screens and up.</p>
      </aside>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeLayout",
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

.home__layout__parent {
  position: sticky;
  top: 0;
}
.back__icon_wrap {
  padding: 15px;
}
</style>
