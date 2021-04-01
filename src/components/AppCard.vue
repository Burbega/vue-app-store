<template>
  <div class="app-card">
    <div class="card mt-3 h-100">
      <span :class="['text-white', 'card-text', 'text-uppercase', bgColor]">{{
        cardTopTitle
      }}</span>
      <div :class="iconBgColor">
        <font-awesome-icon
          class="my-3 align-self-center fz-70px text-white"
          :icon="dynamicIcon"
        />
      </div>
      <div class="card-body min-h-190px d-flex flex-column align-items-center">
        <h5 class="card-title custom-card-title-text">{{ cardTitle }}</h5>
        <p class="card-text custom-card-text">{{ cardText }}</p>
        <router-link
          to="/app-details"
          :class="['btn', 'custom-button', btnColor]"
          >{{ btnText }}</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppCard",
  props: {
    dynamicIcon: String,
    cardTopTitle: String,
    bgColor: String,
    iconBgColor: String,
    cardTitle: String,
    cardText: String,
    btnText: String,
    btnColor: String,
  },
};
</script>
