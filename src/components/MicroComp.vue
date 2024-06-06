<script setup lang="ts">
import { nanoid } from "nanoid/non-secure";
import { computed, onMounted, ref } from "vue";

defineOptions({ name: "micro-comp" });

const props = defineProps({
  microData: {
    type: Object,
    default: () => ({}),
  },
});

const microName = ref("");

const data = computed(() => ({
  ...props.microData,
}));

const url = computed(() => "http://localhost:5173/");
// const url = computed(() => "http://localhost:63001/");

const defaultPage = "/#/";
// const defaultPage = "/#/discharged-inner-tabs-list?isMicro=1";

onMounted(() => {
  microName.value = nanoid();
});
</script>

<template>
  <div class="h-full w-full">
    <micro-app
      v-if="microName"
      :key="microName"
      class="h-full w-full"
      :name="microName"
      :url="url"
      :data="data"
      :default-page="defaultPage"
      :keep-alive="true"
      :iframe="true"
      v-bind="$attrs"
    ></micro-app>
  </div>
</template>
