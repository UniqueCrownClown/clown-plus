import path from 'path'
import type { UserConfig, ConfigEnv } from 'vite'
import Inspect from 'vite-plugin-inspect'
import DefineOptions from 'unplugin-vue-define-options/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default (configEnv: ConfigEnv): UserConfig => {
	console.log('插入配置')
	const pathSrc = path.resolve(__dirname)
	return {
		server: {
			host: true,
		},
		plugins: [
			DefineOptions(),
			Inspect(), // only applies in dev mode
			AutoImport({
				// Auto import functions from Vue, e.g. ref, reactive, toRef...
				// 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
				imports: ['vue'],
		  
				// Auto import functions from Element Plus, e.g. ElMessage, ElMessageBox... (with style)
				// 自动导入 Element Plus 相关函数，如：ElMessage, ElMessageBox... (带样式)
				resolvers: [
				  ElementPlusResolver(),
		  
				  // Auto import icon components
				  // 自动导入图标组件
				  IconsResolver({
					prefix: 'Icon',
				  }),
				],
		  
				dts: path.resolve(pathSrc, 'auto-imports.d.ts'),
			  }),
		  
			  Components({
				resolvers: [
				  // Auto register icon components
				  // 自动注册图标组件
				  IconsResolver({
					enabledCollections: ['ep'],
				  }),
				  // Auto register Element Plus components
				  // 自动导入 Element Plus 组件
				  ElementPlusResolver(),
				],
		  
				dts: path.resolve(pathSrc, 'components.d.ts'),
			  }),
		  
			  Icons({
				autoInstall: true,
			  }),
		],
	}
}
