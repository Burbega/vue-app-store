<template>
  <div class="container p-5 white-bg">
    <div class="row">
      <div class="col-2 p-0 px-1">
        <AppCard
          dynamicIcon="share-square"
          cardTopTitle="Performance"
          bgColor="blue-bg"
          iconBgColor="marine-blue-bg"
          cardTitle="Checkin & Checkout"
          cardText="+ R$ X por colaborador por mês"
          btnText="Contratar"
          btnColor="btn-success"
        />
      </div>
      <div class="col-2 p-0 px-1">
        <AppCard
          dynamicIcon="certificate"
          cardTopTitle="Engajamento"
          bgColor="purple-bg"
          iconBgColor="orange-bg"
          cardTitle="Badges & Cards de Reconhecimento"
          cardText="Gratuito"
          btnText="Ativar"
          btnColor="btn-success"
        />
      </div>
      <div class="col-2 p-0 px-1">
        <AppCard
          dynamicIcon="tasks"
          cardTopTitle="Engajamento"
          bgColor="purple-bg"
          iconBgColor="marine-blue-bg"
          cardTitle="Planos de Ação"
          cardText="Gratuito"
          btnText="Ativar"
          btnColor="btn-success"
        />
      </div>
      <div class="col-2 p-0 px-1">
        <AppCard
          dynamicIcon="book"
          cardTopTitle="Engajamento"
          bgColor="purple-bg"
          iconBgColor="orange-bg"
          cardTitle="Recomendações de Conteúdo sob medida"
          cardText="+ R$ X por colaborador por mês"
          btnText="Contratar"
          btnColor="btn-success"
        />
      </div>
      <div class="col-2 p-0 px-1">
        <AppCard
          dynamicIcon="info-circle"
          cardTopTitle="Engajamento"
          bgColor="purple-bg"
          iconBgColor="marine-blue-bg"
          cardTitle="Posts de Comunicados e Avisos"
          cardText="Instalado"
          btnText="Desativar"
          btnColor="btn-danger"
        />
      </div>
      <div class="col-2 p-0 px-1">
        <AppCard
          dynamicIcon="box-open"
          cardTopTitle="Engajamento"
          bgColor="purple-bg"
          iconBgColor="orange-bg"
          cardTitle="Suggestion Box"
          cardText="Instalado"
          btnText="Desativar"
          btnColor="btn-danger"
        />
      </div>
      <div class="col-2 p-0 px-1">
        <AppCard
          dynamicIcon="comments"
          cardTopTitle="Engajamento"
          bgColor="purple-bg"
          iconBgColor="marine-blue-bg"
          cardTitle="Análise de Comentários"
          cardText="+ R$ X por colaborador por mês"
          btnText="Contratar"
          btnColor="btn-success"
        />
      </div>
      <div class="col-2 p-0 px-1">
        <AppCard
          dynamicIcon="theater-masks"
          cardTopTitle="Cultura"
          bgColor="green-bg"
          iconBgColor="orange-bg"
          cardTitle="Fitting Cultural"
          cardText="+ R$ X por colaborador por mês"
          btnText="Contratar"
          btnColor="btn-success"
        />
      </div>
      <div class="col-2 p-0 px-1">
        <AppCard
          dynamicIcon="handshake"
          cardTopTitle="Relações"
          bgColor="orange-bg"
          iconBgColor="marine-blue-bg"
          cardTitle="Assessments e Recomendações"
          cardText="+ R$ X por colaborador por mês"
          btnText="Ativar"
          btnColor="btn-success"
        />
      </div>
      <div class="col-2 p-0 px-1">
        <AppCard
          dynamicIcon="file-alt"
          cardTopTitle="Performance"
          bgColor="blue-bg"
          iconBgColor="orange-bg"
          cardTitle="Quick Deck"
          cardText="+ R$ X por colaborador por mês"
          btnText="Contratar"
          btnColor="btn-success"
        />
      </div>
      <div class="col-2 p-0 px-1">
        <AppCard
          dynamicIcon="shoe-prints"
          cardTopTitle="Performance"
          bgColor="blue-bg"
          iconBgColor="marine-blue-bg"
          cardTitle="Evidências & Feedback"
          cardText="+ R$ X por colaborador por mês"
          btnText="Contratar"
          btnColor="btn-success"
        />
      </div>
      <div class="col-2 p-0 px-1">
        <AppCard
          dynamicIcon="tachometer-alt"
          cardTopTitle="Performance"
          bgColor="blue-bg"
          iconBgColor="orange-bg"
          cardTitle="Pulsos de Performance"
          cardText="+ R$ X por colaborador por mês"
          btnText="Contratar"
          btnColor="btn-success"
        />
      </div>
      <div class="col-2 p-0 px-1">
        <AppCard
          dynamicIcon="users"
          cardTopTitle="Cultura"
          bgColor="green-bg"
          iconBgColor="marine-blue-bg"
          cardTitle="Team Fitting"
          cardText="+ R$ X por colaborador por mês"
          btnText="Contratar"
          btnColor="btn-success"
        />
      </div>
      <div class="col-2 p-0 px-1">
        <AppCard
          dynamicIcon="hiking"
          cardTopTitle="Performance"
          bgColor="blue-bg"
          iconBgColor="marine-blue-bg"
          cardTitle="PDI 70:20:10"
          cardText="+ R$ X por colaborador por mês"
          btnText="Contratar"
          btnColor="btn-success"
        />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import AppCard from "@/components/AppCard.vue";

export default {
  name: "Home",
  components: {
    AppCard,
  },
};
</script>
