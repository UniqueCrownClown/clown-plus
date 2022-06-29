interface IRenderData {
    disabled?: boolean;
    multiple: boolean;
    options: Array<any>;
}
interface IDetailVal {
    value: string;
}
export declare const lineFormEmits: {
    change: (value: any, renderData: any, detailVal?: any, totalValue?: any) => any;
};
export interface IlineFormProps {
    type: string;
    label: string;
    disabled: boolean;
    propValue: any;
    renderData: IRenderData;
    detailVal: IDetailVal;
}
export declare type IRenderDataObj = {
    [key: string]: any;
};
export {};
