<template>
  <div
    class="w-full md:w-1/2 flex items-center flex-col"
    style="margin-top: 150px"
  >
    <div class="flex flex-col">
      <h3 class="text-xl font-semibold mb-4">Even easier in the app</h3>

      <div class="flex gap-4 mt-10">
        <!-- Apple Store Button -->
        <button
          class="flex items-center gap-2 border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-100 transition app__btn"
        >
          <img
            src="../../../assets/images/apple-logo.png"
            alt="Apple logo"
            class="w-5 h-5 opacity-65"
          />
          <span class="text-sm font-medium">Apple Store</span>
        </button>

        <!-- Play Store Button -->
        <button
          class="flex items-center gap-2 border-gray-300 border px-4 py-2 rounded-lg hover:bg-gray-100 transition app__btn"
        >
          <img
            src="../../../assets/images/play.png"
            alt="Google Play logo"
            class="w-5 h-5 opacity-65"
          />
          <span class="text-sm font-medium">Play Store</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppStore",
};
</script>

<style scoped>
.app__btn {
  background-color: white;
  padding: 5px 15px;
}
.app__btn span {
  display: inline-block;
  font-size: 12px;
  color: #5c5c5c;
}
</style>
