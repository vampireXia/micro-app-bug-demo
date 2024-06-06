import { computed, onMounted, onUnmounted, ref } from "vue";

export const useMicroApp = () => {
  const cacheAppData = ref();

  const microAppData = computed(() => cacheAppData.value);

  const setMicroAppData = (value) => (cacheAppData.value = value);

  const dataListener = (data) => {
    console.log("🚀 ~ dataListener ~ data:", data);
    setMicroAppData(data);
  };

  onMounted(() => {
    window.microApp?.addDataListener(dataListener, true);
  });

  onUnmounted(() => {
    window.microApp?.removeDataListener(dataListener);
  });
  return { microAppData, setMicroAppData };
};
