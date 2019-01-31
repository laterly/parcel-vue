<template>
    <div class="index">
      <mt-button type="default">default</mt-button>
<mt-button type="primary">primary</mt-button>
<mt-button type="danger">danger</mt-button>
    </div>
</template>
<script>
import Vue from "vue";
import { Button } from 'mint-ui';
Vue.component(Button.name, Button);
export default {
  name: "index",
  mounted() {},
  data() {
    return {
      msg: "hello parcel vue"
    };
  },
  created() {
    this.showConsole();
  },
  methods: {
    showConsole() {
      console.log("hello parcel vue");
      //调用公共js的方法
      vUtils.msg("lalalal");
    }
  }
};
</script>
<style lang="stylus" scoped>
  .index
      background-color:red;
</style>
          
                       
                              
                                  
                                  
                                  
           
          
           
        
                     
                                          
                                 
                                         
                
                
               
          
            
                             
      
    
             
                       
    
            
                   
                                      
                 
                            
     
   
  
         
                            
// @import '../../libs/style';

// .index 
//   background-color: red;

</style>
