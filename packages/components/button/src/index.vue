<template>
	<button class="mu_Button">{{ title }}</button>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
const title = ref('自定义组件test')
// defineOptions({
//   name: 'MuButton',
// })
</script>
<style scoped></style>
