import type { App } from 'vue'

import IButton from './components/button'
import YamlEdit from './components/yamlEdit'

const components: any[] = [IButton,YamlEdit]
/**
 * 组件注册
 * @param {App} app Vue 对象
 * @returns {Void}
 */
const install = function (app: App) {
	components.forEach((component) => app.component(component.name, component))
}

export { IButton,YamlEdit }

export default {
	install,
	...components,
}
