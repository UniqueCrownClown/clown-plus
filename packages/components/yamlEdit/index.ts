import type { App } from 'vue'
import clYamlEdit from './src/index.vue'
import type { SFCWithInstall } from "../../types";

clYamlEdit.install = (app: App) => {
	app.component(clYamlEdit.name, clYamlEdit)
}

const _clYamlEdit: SFCWithInstall<typeof clYamlEdit> = clYamlEdit // 增加类型
export default _clYamlEdit
