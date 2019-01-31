<template>
    <div class="index">
      <div class="swipe-box">
        <mt-swipe :auto="4000">
          <mt-swipe-item><img src="../../assets/index/banner01.jpg"/></mt-swipe-item>
          <mt-swipe-item><img src="../../assets/index/banner02.jpg"/></mt-swipe-item>
          <mt-swipe-item><img src="../../assets/index/banner03.jpg"/></mt-swipe-item>
        </mt-swipe>
      </div>
       <div class="index-tab">
        <mt-progress :value="60">
          <div slot="start">0%</div>
          <div slot="end">100%</div>
        </mt-progress>
      </div>
       <div>
        <mt-button type="default">default</mt-button>
        <mt-button type="primary">primary</mt-button>
        <mt-button type="danger">danger</mt-button>
        <mt-button size="small">small</mt-button>
        <mt-button size="large">large</mt-button>
        <mt-button size="normal">normal</mt-button>
        <mt-button icon="back">back</mt-button>
        <mt-button icon="more">more</mt-button>
      </div>
    </div>
</template>
<script>
import Vue from "vue";
import {
  Button,
  Swipe,
  SwipeItem,
  Progress
} from "mint-ui";
Vue.component(Button.name, Button);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Progress.name, Progress);
export default {
  name: "index",
  mounted() {},
  data() {
    return {
      sarchValue: "", //搜索的关键字
      loadIndex: -1,
      active:''
    };
  },
  created() {},
  mounted() {
    this.showConsole();
  },
  methods: {
    showConsole() {
      //调用公共js的方法
      let load = vUtils.loading();
      console.log("load", load);
      setTimeout(() => {
        load.close();
      }, 1000);
      // vUtils.toast.msg('你好');
      // vUtils.toast.success();
    }
  }
};
</script>
<style lang="stylus" scoped>
.index-search {
  height: 1rem;
}

.swipe-box {
  height: 3.66rem;

  img {
    height: 3.66rem;
  }
}
.index-tab{
  height .5rem;
}
</style>
          
                       
                              
                                  
                                  
                                  
           
          
           
        
                     
                                          
                                 
                                         
                
                
               
          
            
                             
      
    
             
                       
    
            
                   
                                      
                 
                            
     
   
  
         
                            
// @import '../../libs/style';

// .index 
//   background-color: red;

</style>
