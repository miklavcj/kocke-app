<template>
  <div id="app">
    <b-container id="main-container">
      <b-container >
        
        <b-row class="no-gutters mb-3">
          <b-col><tags :tags="numberTags"></tags></b-col>
          <b-col><numbers :numbers="numbersDown"></numbers></b-col>
          <b-col><numbers :numbers="numbersMixed"></numbers></b-col>
          <b-col><numbers :numbers="numbersUp"></numbers></b-col>
          <b-col><numbers :numbers="numbersN"></numbers></b-col>
        </b-row>      
      
        <b-row class="no-gutters mb-3">
          <b-col><tags :tags="minMaxTags"></tags></b-col>
          <b-col><min-max :numbers="numbersDown" :minMax="minMaxDown"></min-max></b-col>
          <b-col><min-max :numbers="numbersMixed" :minMax="minMaxMixed"></min-max></b-col>
          <b-col><min-max :numbers="numbersUp" :minMax="minMaxUp"></min-max></b-col>
          <b-col><min-max :numbers="numbersN" :minMax="minMaxN"></min-max></b-col>
        </b-row>
        
         <b-row class="no-gutters">
          <b-col><tags :tags="specialTags"></tags></b-col>
          <b-col><special  :special="specialDown"></special></b-col>
          <b-col><special  :special="specialMixed"></special></b-col>
          <b-col><special  :special="specialUp"></special></b-col>
          <b-col><special :special="specialN"></special></b-col>
        </b-row>
      </b-container>

      <p>All together: {{result}}</p>
    </b-container>
  </div>
</template>

<script>
import numbers from "./components/Numbers";
import minMax from "./components/MinMax";
import special from "./components/Special";
import tags from "./components/Tags";

export default {
  name: "App",
  components: {
    numbers,
    minMax,
    special,
    tags,
  },
  data: () => ({
    numberTags: [1, 2, 3, 4, 5, 6, "Sum"],
    minMaxTags: ["Max","Min", "Sum"],
    specialTags: ["Kenta","Full", "Poker", "Jamb", "Sum"],
    numbersDown: {
      storageKey: "numbersDown",
      one: null,
      two: null,
      three: null,
      four: null,
      five: null,
      six: null,
      sum: null,
    },
    numbersMixed: {
      storageKey: "numbersMixed",
      one: null,
      two: null,
      three: null,
      four: null,
      five: null,
      six: null,
      sum: null,
    },
    numbersUp: {
      storageKey: "numbersUp",
      one: null,
      two: null,
      three: null,
      four: null,
      five: null,
      six: null,
      sum: null,
    },
    numbersN: {
      storageKey: "numbersN",
      one: null,
      two: null,
      three: null,
      four: null,
      five: null,
      six: null,
      sum: null,
    },
    minMaxDown: {
      storageKey: "minMaxDown",
      max: null,
      min: null,
      sum: null,
    },
    minMaxMixed: {
      storageKey: "minMaxMixed",
      max: null,
      min: null,
      sum: null,
    },
    minMaxUp: {
      storageKey: "minMaxUp",
      max: null,
      min: null,
      sum: null,
    },
    minMaxN: {
      storageKey: "minMaxN",
      max: null,
      min: null,
      sum: null,
    },
    specialDown: {
      storageKey: "specialDown",
      kenta: null,
      full: null,
      poker: null,
      jamb: null,
      sum: null,
    },
    specialMixed: {
      storageKey: "specialMixed",
      kenta: null,
      full: null,
      poker: null,
      jamb: null,
      sum: null,
    },
    specialUp: {
      storageKey: "specialUp",
      kenta: null,
      full: null,
      poker: null,
      jamb: null,
      sum: null,
    },
    specialN: {
      storageKey: "specialN",
      kenta: null,
      full: null,
      poker: null,
      jamb: null,
      sum: null,
    },
  }),
  computed: {
    result: function ()  {
      if( this.numbersDown.sum !== null  && this.numbersMixed.sum !== null  && this.numbersUp.sum !== null  && this.numbersN.sum !== null  &&
          this.minMaxDown.sum !== null  && this.minMaxMixed.sum !== null  && this.minMaxUp.sum !== null  && this.minMaxN.sum !== null  &&
          this.specialDown.sum !== null  && this.specialMixed.sum !== null  && this.specialUp.sum !== null  && this.specialN.sum !== null 
      ) {
        let sum = this.numbersDown.sum + this.numbersMixed.sum + this.numbersUp.sum + this.numbersN.sum +
        this.minMaxDown.sum + this.minMaxMixed.sum + this.minMaxUp.sum + this.minMaxN.sum +
        this.specialDown.sum + this.specialMixed.sum + this.specialUp.sum + this.specialN.sum
      return sum;
      }
      

}
  },
  
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
