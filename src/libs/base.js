/*公共base.js */
import Vue from 'vue'
import './style'
import './remConfig'
import {
    Indicator,
    Toast
} from 'mint-ui';
//一些工具
window.vUtils = {
    loading: (text) => {
        Indicator.open({
            text: text || '请稍后...',
            spinnerType: 'snake'
        });
        return Indicator;
    },
    toast: {
        msg: (text) => {
            Toast(text);
        },
        success: (text) => {
            Toast({
                message: text || '操作成功',
                iconClass: 'icon icon-success'
            });
        },
        fail: (text) => {
            Toast({
                message: text || '失败',
                iconClass: 'icon icon-fail'
            });
        }
    }
}