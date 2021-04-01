<template>
  <div class="app-details min-h-40vw white-bg">
    <div class="container">
      <h1 class="d-flex pt-4 text-gray-color">Contratar módulo</h1>
      <div class="row">
        <div class="col-6">
          <div class="flex-row card mt-3 h-100">
            <div class="col-4 marine-blue-bg m-0 p-0">
              <div class="blue-bg w-100">
                <span class="text-white card-text text-uppercase blue-bg"
                  >Performance</span
                >
              </div>
              <div class="marine-blue-bg">
                <font-awesome-icon
                  class="my-3 align-self-center fz-70px text-white"
                  icon="share-square"
                />
              </div>
            </div>
            <div class="col-8 card-body d-flex flex-column align-items-start">
              <h5 class="card-title custom-card-title-text">
                Checkin & Checkout
              </h5>
              <p class="card-text custom-card-text">
                + R$ X por colaborador por mês
              </p>
              <router-link to="/" class="btn custom-button btn-success"
                >Contratar e ativar módulo</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppDetails",
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
