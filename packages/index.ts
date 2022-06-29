import type { App } from 'vue'

import ClButton from './components/button'
import clYamlEdit from './components/yamlEdit'

const components: any[] = [ClButton,clYamlEdit]
/**
 * 组件注册
 * @param {App} app Vue 对象
 * @returns {Void}
 */
const install = function (app: App) {
	components.forEach((component) => app.component(component.name, component))
}

export { ClButton,clYamlEdit }

export default {
	install,
	...components,
}
