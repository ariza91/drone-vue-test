<template>
  <div class="footer">
    <b-row
      class="col-10 d-flex justify-content-center align-items-center mx-auto"
    >
      <b-row class="col-12 col-sm">
        <img
          class="col-12 col-sm mb-2 mb-md-0"
          src="@/assets/logo.svg"
          alt="Skilling Drone Lab"
        />
        <div class="col-12 col-sm font-small-size">
          {{ $t("Footer.text1") }}
        </div>
      </b-row>
      <b-row
        class="col-12 col-sm d-flex justify-content-center align-items-md-center"
      >
        <div class="desc-wrapper">
          <div class="font-title">{{ $t("Footer.services") }}</div>
          <div class="font-small-size">{{ $t("Footer.email") }}</div>
          <div class="font-small-size">{{ $t("Footer.campaign") }}</div>
        </div>
        <div class="desc-wrapper">
          <div class="font-title">{{ $t("Footer.about") }}</div>
          <div class="font-small-size">{{ $t("Footer.outStory") }}</div>
          <div class="font-small-size">{{ $t("Footer.benefits") }}</div>
        </div>
        <div class="desc-wrapper">
          <div class="font-title">{{ $t("Footer.followUs") }}</div>
          <div>
            <img src="@/assets/icon-facebook.svg" />
            <img src="@/assets/icon-twitter.svg" />
            <img src="@/assets/icon-ig.svg" />
          </div>
          <div><br /></div>
        </div>
      </b-row>
    </b-row>
    <b-row
      class="col-12 mx-auto d-flex justify-content-center align-items-center font-small-size mt-5 mb-md-0 bottom"
    >
      {{ $t("Footer.copyright") }}
    </b-row>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
@import "@/style/theme.scss";

.footer {
  background-color: $background-primary;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  height: $footer-size;
  border-top: 1px solid $main;

  .top {
    &-right {
      border-left: 1px solid $border;
    }
  }

  .bottom {
    border-top: 1px solid $border;
  }

  .desc-wrapper {
    width: calc(100% / 3);
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    div {
      margin-bottom: 10px;
    }

    img {
      margin-right: 10px;
    }
  }
}
</style>