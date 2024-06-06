<script setup>
import {
  NButton,
  NCard,
  NConfigProvider,
  NModal,
  dateZhCN,
  zhCN,
} from "naive-ui";
import { useMicroApp } from "../hooks/micro-app";
import { onMounted, ref, shallowRef } from "vue";
import HelloWorld from "./components/HelloWorld.vue";

const { microAppData } = useMicroApp();
const $subRef = shallowRef();

const visible = ref(false);

onMounted(() => {
  window.microApp?.dispatch({
    setLoading: (loading) => $subRef.value?.loading(loading),
  });
});
</script>

<template>
  <NConfigProvider :locale="zhCN" :date-locale="dateZhCN" cls-prefix="std">
    <NCard title="子应用">
      <div class="w-300 h-300 b-1 b-solid b-coolGray">
        <NButton
          type="primary"
          @click="microAppData?.handleActionEvents('open')"
        >
          点击弹父
        </NButton>
        <HelloWorld ref="$subRef" />
        <NButton type="primary" @click="visible = true"> 点击弹子 </NButton>
      </div>
    </NCard>
    <NModal
      v-model:show="visible"
      title="子应用弹窗"
      preset="card"
      :style="{ width: '800px' }"
      :bordered="false"
      :mask-closable="false"
    >
      子应用弹窗
    </NModal>
  </NConfigProvider>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
