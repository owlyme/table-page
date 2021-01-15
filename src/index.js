import Vue from 'vue';
import * as validates from "./validateFormFns";
import * as tools from "./tools";
import $formModal from './form-modal';
import formModal from './formModal';
import table from './table';
import render from './render';
import tableHeader from './table-header';
import box from './box';

const componentList = [
  { name: 'sn-form-modal', component: formModal },
  { name: 'sn-table', component: table },
  { name: 'sn-render', component: render },
  { name: 'sn-table-header', component: tableHeader },
  { name: 'sn-box', component: box }
];

Vue.prototype.$formModal = $formModal;

componentList.forEach(({ name, component }) => {
  Vue.component(name, component)
});

export const validates.checkNone;
export const validates.checkPhone;
export const validates.checkNumber;
export const tools.createFormData;

export default {
  ...validates,
  ...tools
};