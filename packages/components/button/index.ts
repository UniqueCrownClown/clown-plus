import type { App } from 'vue'
import ClButton from './src/index.vue'
import type { SFCWithInstall } from '../../types'

ClButton.install = (app: App) => {
	app.component(ClButton.name, ClButton)
}

const InMeAccordionItem: SFCWithInstall<typeof ClButton> = ClButton // 增加类型
export default InMeAccordionItem
