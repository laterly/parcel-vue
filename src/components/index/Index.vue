<template>
    <div class="index">
      <div>
        <mt-button type="default">default</mt-button>
        <mt-button type="primary">primary</mt-button>
        <mt-button type="danger">danger</mt-button>
      </div>
      <div class="swipe-box">
        <mt-swipe :auto="4000">
          <mt-swipe-item><img src="../../assets/index/banner01.jpg"/></mt-swipe-item>
          <mt-swipe-item><img src="../../assets/index/banner02.jpg"/></mt-swipe-item>
          <mt-swipe-item><img src="../../assets/index/banner03.jpg"/></mt-swipe-item>
        </mt-swipe>
      </div>
    </div>
</template>
<script>
import Vue from "vue";
import { Button } from "mint-ui";
import { Swipe, SwipeItem } from "mint-ui";
Vue.component(Button.name, Button);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
export default {
  name: "index",
  mounted() {},
  data() {
    return {
      bannerImg: "hello parcel vue",
      loadIndex:-1,
    };
  },
  created() {
    
  },
  mounted(){
    this.showConsole();
  },
  methods: {
    showConsole() {
      //调用公共js的方法
      let load=vUtils.loading();
      console.log('load',load);
      setTimeout(()=>{
         load.close();
      },1000);
      // vUtils.toast.msg('你好');
      vUtils.toast.success();
    }
  }
};
</script>
<style lang="stylus" scoped>
.swipe-box
  height 3.66rem
  img
    height 3.66rem
</style>
          
                       
                              
                                  
                                  
                                  
           
          
           
        
                     
                                          
                                 
                                         
                
                
               
          
            
                             
      
    
             
                       
    
            
                   
                                      
                 
                            
     
   
  
         
                            
// @import '../../libs/style';

// .index 
//   background-color: red;

</style>
