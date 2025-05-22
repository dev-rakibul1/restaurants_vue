<template>
  <div class="container-wrap">
    <!-- hr line -->
    <span class="footer__hr"></span>

    <!-- footer content area -->
    <div class="container flex items-end justify-end footer__content__wrap">
      <div
        class="flex w-full md:w-1/2 flex-col items-start justify-start ml-auto"
      >
        <h3 class="font-semibold footer__title">Company information</h3>
        <div>
          <!-- content -->

          <ul class="flex flex-wrap footer__content">
            <li><a href="#">User agreement </a></li>
            <li><a href="#">Contacts </a></li>
            <li><a href="#">Delivery</a></li>
            <li><a href="#">FAQ </a></li>
            <li><a href="#">Become a partner</a></li>
            <li><a href="#">Become a courier</a></li>
          </ul>

          <ul class="flex flex-wrap footer__content">
            <li><a href="#">Eats for Business </a></li>
            <li><a href="#">Plastic recycling </a></li>
            <li><a href="#">Order food in the Yandex Go app</a></li>
            <li class="flex items-center justify-center">
              <a href="#" class="flex items-center justify-center">
                <img
                  src="../../assets/images/email.png"
                  alt="Apple logo"
                  class="w-4 h-4 opacity-50"
                />
                <span class="inline-block" style="margin-left: 10px"
                  >Feedback</span
                >
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- hr line -->
    <span class="footer__hr"></span>

    <!-- footer copyright -->
    <div class="container footer__copy__wrap flex items-center justify-between">
      <p class="footer__copy_text">&copy; 2018–2025 Yandex Eats LLC</p>
      <p class="footer__copy_text flex items-center justify-start">
        Project for Yandex

        <img
          class="w-7 h-7 opacity-90 footer__copy__icon"
          src="https://avatars.mds.yandex.net/get-bunker/49769/9362802ad550d87a743751b144a576ad35d9d035/svg"
          alt=""
        />
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "FooterView",
};
</script>
<style scoped>
.footer__content li {
  margin: 10px;
}
.footer__content li a {
  font-size: 12px;
  color: rgb(92, 92, 92);
  transition: all 0.5s;
}

.footer__copy_text {
  font-size: 12px;
  color: rgb(92, 92, 92);
  transition: all 0.5s;
}

.footer__content li:hover a {
  color: rgb(145, 145, 145);
}

.footer__title {
  margin: 10px;
}

.footer__hr {
  width: 100%;
  height: 1px;
  display: block;
  background: rgb(204, 204, 204);
  margin-top: 90px;
}

.footer__copy__wrap {
  margin: 30px 0;
}

.footer__content__wrap {
  margin-top: 30px;
}

.footer__copy__icon {
  margin-left: 10px;
}
</style>
