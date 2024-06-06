<script setup>
import { NButton } from "naive-ui";
import { useOperations } from "./hooks";
import { useRouter } from "vue-router";

const router = useRouter();

const { handleTestModal } = useOperations();
</script>
<template>
  <div>
    非嵌微应用页面
    <NButton @click="handleTestModal">点击弹窗</NButton>
    <NButton @click="router.push('/demo')">跳转嵌微应用页面</NButton>
  </div>
</template>
