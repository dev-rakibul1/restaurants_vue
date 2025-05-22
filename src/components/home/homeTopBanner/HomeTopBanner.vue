<template>
  <div>
    <div class="w-full home__banner_wrap overflow-hidden shadow-lg relative">
      <!-- Background Image Wrapper -->
      <div
        class="home__top__banner__img bg-cover bg-center flex flex-col justify-end p-4 relative"
        style="
          background-image: url('https://eda.yandex/images/3378693/049e8232c93c3ce2b19dc94a1da9ba26-1100x825.jpg');
        "
      >
        <!-- Content -->
        <div class="relative z-10 text-white kfc__malika">
          <h2 class="text-2xl md:text-4xl font-bold mb-2">KFC Malika</h2>
          <div class="flex items-center space-x-2 gap-4 mt-10">
            <div
              class="bg-white text-black px-2 py-1 rounded-lg text-sm flex items-center gap-4 kfc__rating"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 mr-1 text-black"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.945a1 1 0 00.95.69h4.144c.969 0 1.371 1.24.588 1.81l-3.357 2.44a1 1 0 00-.364 1.118l1.285 3.945c.3.921-.755 1.688-1.538 1.118l-3.357-2.44a1 1 0 00-1.175 0l-3.357 2.44c-.783.57-1.838-.197-1.538-1.118l1.285-3.945a1 1 0 00-.364-1.118L2.081 9.372c-.783-.57-.38-1.81.588-1.81h4.145a1 1 0 00.95-.69l1.285-3.945z"
                />
              </svg>
              <div>
                <p>4.6</p>
                <p class="text-[10px] font-light">200+</p>
              </div>
            </div>

            <div class="bg-white text-black p-1 rounded-lg kfc__details">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeTopBanner",
};
</script>

<style scoped>
.home__banner_wrap {
  border-radius: 35px !important;
}
.home__top__banner__img {
  width: 100%;
  height: 320px;
  background-size: cover;
  background-position: center;
  position: relative;
  border-radius: 25px !important;
}

.home__top__banner__img::before {
  position: absolute;
  top: 0;
  left: 0;
  content: "";
  background: #000000;
  background: linear-gradient(
    17deg,
    rgba(0, 0, 0, 0.63) 17%,
    rgba(237, 221, 83, 0) 100%
  );
  opacity: 0.5;
  width: 100%;
  height: 100%;
}

.kfc__rating {
  padding: 5px 12px;
  border-radius: 12px !important;
}

.kfc__malika {
  margin: 40px;
}

.kfc__details {
  padding: 12px;
}
</style>
