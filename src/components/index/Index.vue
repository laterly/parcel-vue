<template>
    <div class="index">
       {{ msg }}
    </div>
</template>
<script>
export default {
  name: "index",
  mounted() {},
  data() {
    return {
        msg: 'hello parcel vue'
    };
  },
  created(){
      this.showConsole();
  },
  methods: {
    showConsole() {
      console.log('hello parcel vue');
      //调用公共js的方法
      vUtils.msg('lalalal');
    }
  }
};
</script>
<style scoped>
  
</style>
