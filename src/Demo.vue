<script setup>
import { NButton, NModal } from "naive-ui";
import MicroComp from "./components/MicroComp.vue";
import { computed, ref, shallowRef } from "vue";
import { useOperations } from "./hooks";
import { useRouter } from "vue-router";

const { handleTestModal } = useOperations();

const router = useRouter();
const visible = ref(false);
const handleSetLoading = shallowRef();

const handleActionEvents = async (type) => {
  handleTestModal({
    setLoading: handleSetLoading.value,
  });
  // handleSetLoading.value?.(true);
  // visible.value = true;
  // setTimeout(() => {
  //   handleSetLoading.value?.(false);
  // }, 1000);
};
const defineMicroData = computed(() => ({
  handleActionEvents,
}));

const handleMicroDataChange = (event) => {
  const { setLoading } = event?.detail?.data;
  handleSetLoading.value = setLoading;
};
</script>
<template>
  <div class="flex w-full">
    <div class="w-500 of-hidden">
      <MicroComp
        :micro-data="defineMicroData"
        router-mode="pure"
        @datachange="handleMicroDataChange"
      />
    </div>
    <NButton @click="router.push('/demo2')">跳转非嵌微应用页面</NButton>
    <NModal
      v-model:show="visible"
      title="父应用弹窗"
      preset="card"
      :style="{ width: '800px' }"
      :bordered="false"
      :mask-closable="false"
    >
      父应用弹窗
    </NModal>
  </div>
</template>
