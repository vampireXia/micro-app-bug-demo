<script setup>
import { computed, ref, shallowRef } from "vue";
import MicroComp from "./components/MicroComp.vue";
import { NButton, NConfigProvider, NModal, zhCN } from "naive-ui";
import { TestProvider, useOperations } from "./hooks";

const $testRef = shallowRef(null);
const visible = ref(false);
const visible2 = ref(false);

const defineMicroData = computed(() => ({
  handleActionEvents,
}));

const handleActionEvents = async (type) => {
  // await new Promise((reslove) => {
  //   setTimeout(() => {
  //     reslove();
  //   }, 1000);
  // });
  // visible.value = true;
  // $testRef.value?.show({
  //   beforeshow: async () => {
  //     const data = await new Promise((reslove) => {
  //       setTimeout(() => {
  //         reslove({ a: 123 });
  //       }, 1000);
  //     });
  //     return data;
  //   },
  // });
  handleTestModal();
};

const openModal2 = async () => {
  await new Promise((reslove) => {
    setTimeout(() => {
      reslove();
    }, 1000);
  });
  visible2.value = true;
};
</script>

<template>
  <NConfigProvider :locale="zhCN" :date-locale="dateZhCN">
    <TestProvider>
      <RouterView />
    </TestProvider>
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
