import type { App } from 'vue'
import yamlEdit from './src/index.vue'
import type { SFCWithInstall } from "../../types";

yamlEdit.install = (app: App) => {
	app.component(yamlEdit.name, yamlEdit)
}

const _yamlEdit: SFCWithInstall<typeof yamlEdit> = yamlEdit // 增加类型
export default _yamlEdit
