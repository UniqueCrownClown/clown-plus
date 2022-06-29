<template>
	<div>
		<el-row class="mb-4">
			<clYamlEdit :renderData.sync="combineData" ref="clYamlEditRef" />
		</el-row>
	</div>
</template>
<script>
export default {
	name: 'clYamlEditTest',
}
</script>
<script setup>
import { onMounted, ref, unref } from 'vue'
import { clYamlEdit } from '../../../lib/index'
const combineData = ref({})
const clYamlEditRef = ref()
const defineData = {
	enable: {
		type: 'switch',
		desc: '总开关',
	},
	resourceDef: {
		desc: 'resourceDef',
		children: {
			outAdaptors: {
				type: 'input',
				desc: 'outAdaptors',
				children: {
					nioHttpOutAdaptor: {
						isArray: true,
						desc: 'nioHttpOutAdaptor',
						children: {
							resourceExpr: {
								type: 'input',
								desc: 'resourceExpr',
							},
							usageType: {
								type: 'input',
								desc: 'usageType',
							},
						},
					},
				},
			},
		},
	},
	rules: {
		isArray: true,
		desc: '',
		children: {
			resource: {
				type: 'input',
				desc: 'rules-resource',
			},
			enable: {
				type: 'input',
				desc: 'rules-enable',
			},
			grade: {
				type: 'select',
				desc: 'rules-grade',
				others: {
					options: [
						{
							label: '慢调用比例',
							value: '0',
						},
						{
							label: '异常比例',
							value: '1',
						},
						{
							label: '异常数',
							value: '2',
						},
					],
				},
			},
			timeWindow: {
				type: 'input',
				desc: 'rules-timeWindow',
			},
			count: {
				type: 'input',
				desc: 'rules-count',
			},
			minRequestAmount: {
				type: 'input',
				desc: 'rules-minRequestAmount',
			},
			slowRatioThreshold: {
				type: 'input',
				desc: 'rules-slowRatioThreshold',
			},
			statIntervalMs: {
				type: 'input',
				desc: 'rules-statIntervalMs',
			},
		},
	},
}
const yamlData = {
	enable: true,
	resourceDef: {
		outAdaptors: {
			nioHttpOutAdaptor: [
				{
					resourceExpr: '/out/${serviceCode}',
				},
				{
					resourceExpr: '/out/http/${__rf.host}:${__rf.varPort}/${serviceCode}',
					usageType: 'SND_RCV',
				},
			],
		},
	},
	rules: [
		{
			resource: '\/out\/test',
			enable: true,
			grade: 0,
			timeWindow: 10,
			count: 1000,
			minRequestAmount: 1,
			slowRatioThreshold: 0.6,
			statIntervalMs: 10000,
		},
	],
}
onMounted(() => {
	combineData.value = unref(clYamlEditRef).initData(defineData, yamlData)
})
</script>
