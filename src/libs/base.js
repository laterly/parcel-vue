/*公共base.js */
import Vue from 'vue'
import './style'
import './remConfig'
console.log('公共jszzz');
//一些工具
window.vUtils = {
    loading:()=>{

    },
    msg:(text)=>{
        console.log(text);
    }
}