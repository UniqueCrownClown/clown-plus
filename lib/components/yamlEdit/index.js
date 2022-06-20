import { openBlock, createElementBlock } from 'vue';

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

export { _yamlEdit as default };
