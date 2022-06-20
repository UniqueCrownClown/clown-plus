import { createElementVNode, defineComponent, ref, openBlock, createElementBlock, toDisplayString } from 'vue';

const _hoisted_1 = createElementVNode("h3", null, "helloworld", -1);
const _hoisted_2 = { class: "mu_Button" };
var script$1 = defineComponent({
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

script$1.__file = "packages/components/button/src/index.vue";

script$1.install = (app) => {
    app.component(script$1.name, script$1);
};
const InMeAccordionItem = script$1;

function render(_ctx, _cache) {
  return (openBlock(), createElementBlock("div", null, "HelloWrold2"))
}

const script = {};


script.render = render;
script.__file = "packages/components/yamlEdit/src/index.vue";

script.install = (app) => {
    app.component(script.name, script);
};
const _yamlEdit = script;

const components = [InMeAccordionItem, _yamlEdit];
const install = function (app) {
    components.forEach((component) => app.component(component.name, component));
};
var index = {
    install,
    ...components,
};

export { InMeAccordionItem as IButton, _yamlEdit as YamlEdit, index as default };
