<template>
<div class="d-flex flex-column justify-content-between big-div">
    <div class="small-div" v-for="item,index in tags" :key="index">
        {{item}}
    </div>
</div>
  
</template>

<script>
export default {
 props: {
    tags: Array,
  },
  
}

</script>

<style>

.big-div {
    height: 100%;
    display: flex;
    
}

.small-div {
    border: 1px solid grey;
  border-radius: 5px;
  
  flex-grow:1;
}

</style>