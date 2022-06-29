import { openBlock, createElementBlock, createElementVNode, defineComponent, ref, onBeforeMount, computed, watch, resolveComponent, createBlock, unref, withCtx, Fragment, renderList, createVNode, createCommentVNode, createTextVNode, toDisplayString, nextTick } from 'vue';

/*! Element Plus Icons Vue v2.0.6 */

// unplugin-vue:/plugin-vue/export-helper
var export_helper_default = (sfc, props) => {
  let target = sfc.__vccOpts || sfc;
  for (let [key, val] of props)
    target[key] = val;
  return target;
};
var _sfc_main79 = {
  name: "Delete"
}, _hoisted_179 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_279 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M160 256H96a32 32 0 0 1 0-64h256V95.936a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V192h256a32 32 0 1 1 0 64h-64v672a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32V256zm448-64v-64H416v64h192zM224 896h576V256H224v640zm192-128a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32zm192 0a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32z"
}, null, -1), _hoisted_378 = [
  _hoisted_279
];
function _sfc_render79(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_179, _hoisted_378);
}
var delete_default = /* @__PURE__ */ export_helper_default(_sfc_main79, [["render", _sfc_render79], ["__file", "delete.vue"]]);
var _sfc_main197 = {
  name: "Plus"
}, _hoisted_1197 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2197 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M480 480V128a32 32 0 0 1 64 0v352h352a32 32 0 1 1 0 64H544v352a32 32 0 1 1-64 0V544H128a32 32 0 0 1 0-64h352z"
}, null, -1), _hoisted_3196 = [
  _hoisted_2197
];
function _sfc_render197(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1197, _hoisted_3196);
}
var plus_default = /* @__PURE__ */ export_helper_default(_sfc_main197, [["render", _sfc_render197], ["__file", "plus.vue"]]);

const _hoisted_1$1 = {
    class: "single-line-form",
    style: { "display": "inline-block", "width": "100%" }
};
var script$1 = defineComponent({
    __name: 'lineForm',
    props: {
        type: { type: String, required: true, default: 'input' },
        label: { type: String, required: true, default: '' },
        disabled: { type: Boolean, required: true, default: false },
        modelValue: { type: null, required: true, default: "" },
        renderData: { type: null, required: true, default: () => ({
                multiple: false,
                options: [{ label: 'hello', value: 'world' }],
            }) },
        detailVal: { type: null, required: true, default: () => ({
                value: '',
            }) }
    },
    emits: ['change', 'selectChange'],
    setup(__props, { emit }) {
        const props = __props;
        const value = ref();
        let totalValue = {};
        onBeforeMount(() => {
            if (props.renderData.multiple) {
                totalValue = props.detailVal.value;
            }
            if (Array.isArray(props.modelValue)) {
                value.value = props.modelValue;
                if (props.modelValue.length > 0) {
                    emit('selectChange', props.modelValue, props.renderData, props.detailVal, totalValue);
                }
            }
            else {
                value.value = props.modelValue.toString();
                if (props.type === 'select') {
                    emit('selectChange', props.modelValue, props.renderData);
                }
            }
        });
        const selectChange = (val) => {
            if (props.renderData?.multiple) {
                emit('selectChange', val, props.renderData, props.detailVal, totalValue);
                return;
            }
            emit('selectChange', val, props.renderData);
        };
        const renderDisabled = computed(() => props.renderData?.disabled || props.disabled);
        watch(value, (newVal) => {
            emit('change', newVal);
        });
        return (_ctx, _cache) => {
            const _component_el_option = resolveComponent("el-option");
            const _component_el_select = resolveComponent("el-select");
            const _component_el_switch = resolveComponent("el-switch");
            const _component_el_input = resolveComponent("el-input");
            return (openBlock(), createElementBlock("div", _hoisted_1$1, [
                (__props.type === 'select')
                    ? (openBlock(), createBlock(_component_el_select, {
                        key: 0,
                        modelValue: value.value,
                        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => ((value).value = $event)),
                        label: __props.label,
                        disabled: unref(renderDisabled),
                        multiple: __props.renderData.multiple || false,
                        placeholder: "请选择",
                        onChange: selectChange
                    }, {
                        default: withCtx(() => [
                            (openBlock(true), createElementBlock(Fragment, null, renderList(__props.renderData.options, (item) => {
                                return (openBlock(), createBlock(_component_el_option, {
                                    key: item.value,
                                    label: item.label,
                                    value: item.value
                                }, null, 8, ["label", "value"]));
                            }), 128))
                        ]),
                        _: 1
                    }, 8, ["modelValue", "label", "disabled", "multiple"]))
                    : (__props.type === 'switch')
                        ? (openBlock(), createBlock(_component_el_switch, {
                            key: 1,
                            modelValue: value.value,
                            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => ((value).value = $event)),
                            label: __props.label,
                            disabled: unref(renderDisabled),
                            "active-color": "#13ce66",
                            "inactive-color": "#ff4949",
                            "active-value": "true",
                            "inactive-value": "false"
                        }, null, 8, ["modelValue", "label", "disabled"]))
                        : (openBlock(), createBlock(_component_el_input, {
                            key: 2,
                            modelValue: value.value,
                            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => ((value).value = $event)),
                            label: __props.label,
                            disabled: unref(renderDisabled),
                            placeholder: "请输入内容"
                        }, null, 8, ["modelValue", "label", "disabled"]))
            ]));
        };
    }
});

script$1.__file = "packages/components/yamlEdit/src/lineForm.vue";

const _hoisted_1 = { class: "clYamlEdit" };
const _hoisted_2 = { style: { "padding": "10px", "position": "relative" } };
const _hoisted_3 = { style: { "padding": "10px", "position": "relative" } };
const __default__ = {
    name: 'clYamlEdit',
};
var script = defineComponent({
    ...__default__,
    props: {
        renderData: { type: null, required: true, default: () => ({ apple: '2' }) },
        isEdit: { type: Boolean, required: true, default: () => true },
        labelWidth: { type: String, required: true, default: () => '100px' }
    },
    emits: ['update:renderData'],
    setup(__props, { expose, emit }) {
        const props = __props;
        let multiShowData = {};
        const initData = (defineData, yamlData) => {
            const circleGet = (defineData, yamlData) => {
                const entries = Object.entries(defineData);
                const flatArr = entries.reduce((prev, item) => {
                    if (item[1].children && yamlData[item[0]]) {
                        if (item[1].isArray && yamlData[item[0]]?.length > 0) {
                            const arrData = yamlData[item[0]].map((element) => circleGet(item[1].children, element));
                            return [
                                ...prev,
                                [
                                    item[0],
                                    {
                                        ...item[1],
                                        value: arrData,
                                    },
                                ],
                            ];
                        }
                        if (item[1]?.others?.multiple) {
                            const optionsValue = Object.keys(yamlData[item[0]]);
                            const cEntries = Object.entries(item[1].children);
                            const totalYamlData = cEntries.map((elem) => {
                                return Object.keys(yamlData[item[0]]).includes(elem[0])
                                    ? [elem[0], yamlData[item[0]][elem[0]]]
                                    : [elem[0], elem[1].defaultValue];
                            });
                            return [
                                ...prev,
                                [
                                    item[0],
                                    {
                                        ...item[1],
                                        value: circleGet(item[1].children, Object.fromEntries(totalYamlData)),
                                        optionsValue,
                                    },
                                ],
                            ];
                        }
                        return [
                            ...prev,
                            [
                                item[0],
                                {
                                    ...item[1],
                                    value: circleGet(item[1].children, yamlData[item[0]]),
                                },
                            ],
                        ];
                    }
                    if (yamlData[item[0]] !== undefined) {
                        console.log(yamlData[item[0]]);
                        return [
                            ...prev,
                            [
                                item[0],
                                {
                                    ...item[1],
                                    value: yamlData[item[0]] + '',
                                },
                            ],
                        ];
                    }
                    return [...prev];
                }, []);
                return Object.fromEntries(flatArr);
            };
            const combineData = circleGet(defineData, yamlData);
            return combineData;
        };
        const parseToYaml = (renderData) => {
            const data = JSON.parse(JSON.stringify(renderData));
            for (let prop in data) {
                if (data[prop].children) {
                    if (data[prop].isArray && Array.isArray(data[prop].value)) {
                        const arrResult = data[prop].value.map((item) => parseToYaml(item));
                        data[prop] = arrResult;
                    }
                    else {
                        const childResult = parseToYaml(data[prop].value);
                        data[prop] = childResult;
                    }
                }
                else {
                    if (data[prop].value) {
                        if (Number.isNaN(Number(data[prop].value))) {
                            if (data[prop].value === 'true' || data[prop].value === 'false') {
                                data[prop] = JSON.parse(data[prop].value);
                            }
                            else {
                                data[prop] = data[prop].value;
                            }
                        }
                        else {
                            data[prop] = new Number(data[prop].value);
                        }
                    }
                    else {
                        delete data[prop];
                    }
                }
            }
            return data;
        };
        const getCircleValue = (data, judgeIsOnce = false) => {
            for (let prop in data) {
                if (data[prop].children) {
                    const childResult = getCircleValue(data[prop].children, judgeIsOnce);
                    if (data[prop].isArray) {
                        data[prop] = { ...data[prop], value: [childResult] };
                    }
                    data[prop] = { ...data[prop], value: childResult };
                }
                else {
                    const value = data[prop].others?.defaultValue || '';
                    const isRequire = judgeIsOnce && data[prop].others?.isOnce;
                    if (isRequire) {
                        delete data[prop];
                    }
                    else {
                        data[prop] = { ...data[prop], value };
                    }
                }
            }
            return data;
        };
        const handleAddRow = (value) => {
            let judgeIsOnce = false;
            if (value.value.length >= 1) {
                judgeIsOnce = true;
            }
            const itemValue = getCircleValue(JSON.parse(JSON.stringify(value.children)), judgeIsOnce);
            if (!value?.value) {
                value.value = [];
            }
            value.value.push(itemValue);
        };
        const handleDelRow = (value, index) => {
            const cloneData = JSON.parse(JSON.stringify(value));
            cloneData.value.splice(index, 1);
            value.value = [];
            nextTick(() => {
                value.value = cloneData.value;
            });
        };
        const selectChange = (val, drawData, detailVal, totalValue) => {
            if (detailVal?.children) {
                const result = Object.entries(totalValue).filter((item) => val.includes(item[0]));
                multiShowData = detailVal.value = Object.fromEntries(result) || {};
                return;
            }
            if (drawData?.optionRelations) {
                const descItem = Object.entries(drawData.optionRelations.descRules).find((item) => item[0] === val);
                if (Array.isArray(descItem) && descItem.length === 2) {
                    props.renderData[drawData.optionRelations.target].desc = descItem[1];
                }
            }
        };
        watch(props.renderData, (newVal) => {
            emit('update:renderData', newVal);
        }, { deep: true });
        expose({
            initData,
            parseToYaml,
        });
        return (_ctx, _cache) => {
            const _component_el_col = resolveComponent("el-col");
            const _component_el_form_item = resolveComponent("el-form-item");
            const _component_el_button = resolveComponent("el-button");
            const _component_clYamlEdit = resolveComponent("clYamlEdit");
            const _component_el_icon = resolveComponent("el-icon");
            const _component_el_form = resolveComponent("el-form");
            return (openBlock(), createElementBlock("div", _hoisted_1, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(__props.renderData, (value, key) => {
                    return (openBlock(), createBlock(_component_el_form, {
                        "label-position": "right",
                        "label-width": __props.labelWidth,
                        key: key
                    }, {
                        default: withCtx(() => [
                            (!value.children)
                                ? (openBlock(), createBlock(_component_el_form_item, {
                                    key: 0,
                                    label: value.desc
                                }, {
                                    default: withCtx(() => [
                                        createVNode(_component_el_col, { span: 24 }, {
                                            default: withCtx(() => [
                                                createVNode(script$1, {
                                                    disabled: !__props.isEdit,
                                                    type: value.type,
                                                    renderData: value.others,
                                                    modelValue: value.value,
                                                    "onUpdate:modelValue": ($event) => ((value.value) = $event),
                                                    onSelectChange: selectChange
                                                }, null, 8, ["disabled", "type", "renderData", "modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 2
                                        }, 1024)
                                    ]),
                                    _: 2
                                }, 1032, ["label"]))
                                : createCommentVNode("v-if", true),
                            createCommentVNode(" 配置项定义多选start "),
                            (value.others && value.others.multiple)
                                ? (openBlock(), createBlock(_component_el_form_item, {
                                    key: 1,
                                    label: value.desc
                                }, {
                                    default: withCtx(() => [
                                        createVNode(_component_el_col, { span: 24 }, {
                                            default: withCtx(() => [
                                                createVNode(script$1, {
                                                    disabled: !__props.isEdit,
                                                    type: value.type,
                                                    renderData: value.others,
                                                    detailVal: value,
                                                    modelValue: value.optionsValue,
                                                    "onUpdate:modelValue": ($event) => ((value.optionsValue) = $event),
                                                    onSelectChange: selectChange
                                                }, null, 8, ["disabled", "type", "renderData", "detailVal", "modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 2
                                        }, 1024),
                                        createCommentVNode(" <el-col v-if=\"value.others && value.others.multiple\">\r\n          <clYamlEdit\r\n            :renderData=\"multiShowData\"\r\n            :isEdit=\"false\"\r\n            :label-width=\"labelWidth\"\r\n          />\r\n        </el-col> ")
                                    ]),
                                    _: 2
                                }, 1032, ["label"]))
                                : createCommentVNode("v-if", true),
                            createCommentVNode(" && !(value.others && value.others.multiple) "),
                            createCommentVNode(" 配置项定义多选end "),
                            (value.children)
                                ? (openBlock(), createBlock(_component_el_form_item, {
                                    key: 2,
                                    label: value.others && value.others.multiple ? '' : value.desc
                                }, {
                                    default: withCtx(() => [
                                        (value.isArray && __props.isEdit)
                                            ? (openBlock(), createBlock(_component_el_col, {
                                                key: 0,
                                                style: { "margin-bottom": "10px" }
                                            }, {
                                                default: withCtx(() => [
                                                    createVNode(_component_el_button, {
                                                        icon: unref(plus_default),
                                                        onClick: ($event) => (handleAddRow(value))
                                                    }, {
                                                        default: withCtx(() => [
                                                            createTextVNode("新增" + toDisplayString(value.desc), 1)
                                                        ]),
                                                        _: 2
                                                    }, 1032, ["icon", "onClick"])
                                                ]),
                                                _: 2
                                            }, 1024))
                                            : createCommentVNode("v-if", true),
                                        (!value.isArray)
                                            ? (openBlock(), createBlock(_component_el_col, {
                                                key: 1,
                                                style: { "border": "1px solid #aaa", "margin-bottom": "10px" }
                                            }, {
                                                default: withCtx(() => [
                                                    createElementVNode("div", _hoisted_2, [
                                                        (value.others && value.others.multiple)
                                                            ? (openBlock(), createBlock(_component_clYamlEdit, {
                                                                key: 0,
                                                                renderData: unref(multiShowData),
                                                                "label-width": __props.labelWidth
                                                            }, null, 8, ["renderData", "label-width"]))
                                                            : (openBlock(), createBlock(_component_clYamlEdit, {
                                                                key: 1,
                                                                renderData: value.value,
                                                                "label-width": __props.labelWidth
                                                            }, null, 8, ["renderData", "label-width"]))
                                                    ])
                                                ]),
                                                _: 2
                                            }, 1024))
                                            : (openBlock(), createElementBlock(Fragment, { key: 2 }, [
                                                createCommentVNode(" 数组类型 "),
                                                (openBlock(true), createElementBlock(Fragment, null, renderList(value.value, (item, index) => {
                                                    return (openBlock(), createBlock(_component_el_col, {
                                                        key: item.desc + '-' + index,
                                                        style: { "border": "1px solid #ccc", "margin-bottom": "10px" }
                                                    }, {
                                                        default: withCtx(() => [
                                                            createElementVNode("div", _hoisted_3, [
                                                                (__props.isEdit)
                                                                    ? (openBlock(), createBlock(_component_el_icon, {
                                                                        key: 0,
                                                                        onClick: ($event) => (handleDelRow(value, index))
                                                                    }, {
                                                                        default: withCtx(() => [
                                                                            createVNode(unref(delete_default))
                                                                        ]),
                                                                        _: 2
                                                                    }, 1032, ["onClick"]))
                                                                    : createCommentVNode("v-if", true),
                                                                createVNode(_component_clYamlEdit, {
                                                                    renderData: item,
                                                                    "label-width": __props.labelWidth
                                                                }, null, 8, ["renderData", "label-width"])
                                                            ])
                                                        ]),
                                                        _: 2
                                                    }, 1024));
                                                }), 128))
                                            ], 2112))
                                    ]),
                                    _: 2
                                }, 1032, ["label"]))
                                : createCommentVNode("v-if", true)
                        ]),
                        _: 2
                    }, 1032, ["label-width"]));
                }), 128))
            ]));
        };
    }
});

script.__file = "packages/components/yamlEdit/src/index.vue";

script.install = (app) => {
    app.component(script.name, script);
};
const _clYamlEdit = script;

export { _clYamlEdit as default };
