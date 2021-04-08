<template>
<div>
    <div v-for="item,index in tags" :key="index">
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

</style>