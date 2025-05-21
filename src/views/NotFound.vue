<template>
  <div class="Not__found__wrap">
    <h1 class="Not__found__title">
      <span class="Not__404">404</span>
      <span class="Not__shape"></span>
      <span class="Not__text">The page is not found</span>
    </h1>
  </div>
</template>
<script>
export default {
  name: "NotFound",
};
</script>
<style scoped>
.Not__found__title {
  display: flex;
  justify-content: center;
  align-items: center;
}
.Not__404 {
  font-size: 25px;
  font-weight: 500;
}

.Not__shape {
  background: #9e9e9e;
  width: 1px;
  height: 60px;
  display: inline-block;
  margin: 0 15px;
}

.Not__text {
  font-weight: 300;
  font-size: 17px;
  color: #616161;
}

.Not__found__wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
}
</style>
