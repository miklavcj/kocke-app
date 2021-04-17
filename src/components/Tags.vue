<template>
<div class="d-flex flex-column justify-content-between big-div">
    <div class="d-flex align-items-center justify-content-center small-div mb-1" v-for="item,index in tags" :key="index" :id="title+ '-' +item">
     {{item}}
    </div>

<!-- Tooltip for numbers sum -->
      <b-tooltip target="numbers-TOTAL" triggers="hover" placement="bottomright">
    If Σ ≥ 60 => Σ + 30
  </b-tooltip>

<!-- Tooltip for MinMax sum -->
   <b-tooltip target="minMax-TOTAL" triggers="hover" placement="bottomright">
    Σ = (Max-min)*N1
  </b-tooltip>

  <!-- Tooltip for Full -->
   <b-tooltip target="special-FULL" triggers="hover" placement="bottomright">
    Σ +30
  </b-tooltip>

    <!-- Tooltip for Poker -->
   <b-tooltip target="special-POKER" triggers="hover" placement="bottomright">
    Σ + 40
  </b-tooltip>

    <!-- Tooltip for Jamb -->
   <b-tooltip target="special-JAMB" triggers="hover" placement="bottomright">
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
  font-size: 0.8rem;
  font-weight: 700;
  background: #6A747E;
  opacity: .5;
  color: #fff;
  border-radius: 5px;
  flex-grow:1;
}

#numbers-TOTAL, #minMax-TOTAL, #special-TOTAL {
  background: white;
  color: #69747D;
  opacity: 1 ;
}



</style>