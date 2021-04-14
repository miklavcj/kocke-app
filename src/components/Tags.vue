<template>
<div class="d-flex flex-column justify-content-between big-div">
    <div class="d-flex align-items-center justify-content-center small-div" v-for="item,index in tags" :key="index" :id="title+ '-' +item">
     {{item}}
    </div>

<!-- Tooltip for numbers sum -->
      <b-tooltip target="numbers-Sum" triggers="hover" placement="bottomright">
    If Σ ≥ 60 => Σ + 30
  </b-tooltip>

<!-- Tooltip for MinMax sum -->
   <b-tooltip target="minMax-Sum" triggers="hover" placement="bottomright">
    Σ = (Max-min)*N1
  </b-tooltip>

  <!-- Tooltip for Full -->
   <b-tooltip target="special-Full" triggers="hover" placement="bottomright">
    Σ +30
  </b-tooltip>

    <!-- Tooltip for Poker -->
   <b-tooltip target="special-Poker" triggers="hover" placement="bottomright">
    Σ + 40
  </b-tooltip>

    <!-- Tooltip for Jamb -->
   <b-tooltip target="special-Jamb" triggers="hover" placement="bottomright">
    Σ + 50
  </b-tooltip>
</div>
  
</template>

<script>
export default {
 props: {
    tags: Array,
    title: String
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
  /* height: calc(100%/); */
  flex-grow:1;
 

}



</style>