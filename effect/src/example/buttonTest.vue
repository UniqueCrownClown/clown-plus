<template>
	<div><ClButton @click="add">自定义按钮</ClButton></div>
</template>
<script>
export default {
	name: 'clButtonTest',
}
</script>
<script setup>
import { ClButton } from '../../../lib/index'
import { useDeveloper } from '../../../lib/hooks/useDeveloper'
import { developFn } from '../../../lib/utils/myDevelop'

const { num } = useDeveloper()

function add() {
	developFn()
	num.value = num.value + 1
}
</script>
