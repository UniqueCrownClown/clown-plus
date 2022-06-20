import { createElementVNode, defineComponent, ref, openBlock, createElementBlock, toDisplayString } from 'vue';

const _hoisted_1 = createElementVNode("h3", null, "helloworld", -1);
const _hoisted_2 = { class: "mu_Button" };
var script = defineComponent({
    __name: 'index',
    setup(__props) {
        const title = ref('自定义组件test');
        return (_ctx, _cache) => {
            return (openBlock(), createElementBlock("div", null, [
                _hoisted_1,
                createElementVNode("button", _hoisted_2, toDisplayString(title.value), 1)
            ]));
        };
    }
});

script.__file = "packages/components/button/src/index.vue";

script.install = (app) => {
    app.component(script.name, script);
};
const InMeAccordionItem = script;

export { InMeAccordionItem as default };
