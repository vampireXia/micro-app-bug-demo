<script setup>
import { NDataTable } from "naive-ui";
import { ref } from "vue";

const loading = ref(false);

const createColumns = () => {
  return [
    {
      title: "No",
      key: "no",
    },
    {
      title: "Title",
      key: "title",
    },
    {
      title: "Length",
      key: "length",
    },
  ];
};

const data = [
  { no: 3, title: "Wonderwall", length: "4:18" },
  { no: 4, title: "Don't Look Back in Anger", length: "4:48" },
  { no: 12, title: "Champagne Supernova", length: "7:27" },
];

const setLoading = (value) => {
  loading.value = value;
  console.log("sub application loading to: ", value);
};
defineExpose({ loading: setLoading });
</script>

<template>
  <NDataTable
    :loading="loading"
    :columns="createColumns()"
    :data="data"
    :pagination="false"
    :bordered="false"
  />
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
