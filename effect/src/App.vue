<template>
	<div class="common-layout">
		<h3>clown-plus-test</h3>
		<hr>
		<el-container>
			<el-aside width="200px">
				<el-menu
					active-text-color="#ffd04b"
					background-color="#545c64"
					class="el-menu-vertical-demo"
					default-active="1"
					text-color="#fff"
					@select="handleSelect"
				>
					<el-menu-item index="1">
						<span>clButton</span>
					</el-menu-item>
					<el-menu-item index="2">
						<span>clYamlEdit</span>
					</el-menu-item>
				</el-menu></el-aside
			>
			<el-main>
				<clButtonTest v-if="currentIndex === '1'" />
				<clYamlEditTest v-if="currentIndex === '2'"
			/></el-main>
		</el-container>
	</div>
</template>

<script setup>
import clButtonTest from './example/buttonTest.vue'
import clYamlEditTest from './example/yamlEditTest.vue'
import { ref } from 'vue'
const currentIndex = ref('1')
const handleSelect = (index) => {
	console.log(index)
	currentIndex.value = index.toString()
}
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
</script>

<style>
#app {
	margin-top: 60px;
	font-family: Avenir, Helvetica, Arial, sans-serif;
	color: #2c3e50;
	text-align: center;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}
</style>
