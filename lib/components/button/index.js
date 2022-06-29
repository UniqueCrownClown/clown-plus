import { defineComponent, openBlock, createElementBlock, renderSlot } from 'vue';

const _hoisted_1 = { class: "mu_Button" };
const __default__ = {
    name: 'clButton',
};
var script = defineComponent({
    ...__default__,
    setup(__props) {
        return (_ctx, _cache) => {
            return (openBlock(), createElementBlock("button", _hoisted_1, [
                renderSlot(_ctx.$slots, "default")
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
