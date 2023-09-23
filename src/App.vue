<script setup>
import { onMounted } from "vue";

</script>

<template>
    <router-view :key="$route.fullPath" />
</template>

<style scoped lang="scss">
</style>
