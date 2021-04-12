<template>
  <div id="app">
    <b-container id="main-container">
      <b-container>
        <b-row class="no-gutters mb-3">
          <b-col><tags :tags="numberTags"></tags></b-col>
          <b-col><numbers :numbers="numbersDown"></numbers></b-col>
          <b-col><numbers :numbers="numbersMixed"></numbers></b-col>
          <b-col><numbers :numbers="numbersUp"></numbers></b-col>
          <b-col><numbers :numbers="numbersN"></numbers></b-col>
        </b-row>

        <b-row class="no-gutters mb-3">
          <b-col><tags :tags="minMaxTags"></tags></b-col>
          <b-col
            ><min-max :numbers="numbersDown" :minMax="minMaxDown"></min-max
          ></b-col>
          <b-col
            ><min-max :numbers="numbersMixed" :minMax="minMaxMixed"></min-max
          ></b-col>
          <b-col
            ><min-max :numbers="numbersUp" :minMax="minMaxUp"></min-max
          ></b-col>
          <b-col
            ><min-max :numbers="numbersN" :minMax="minMaxN"></min-max
          ></b-col>
        </b-row>

        <b-row class="no-gutters">
          <b-col><tags :tags="specialTags"></tags></b-col>
          <b-col><special :special="specialDown"></special></b-col>
          <b-col><special :special="specialMixed"></special></b-col>
          <b-col><special :special="specialUp"></special></b-col>
          <b-col><special :special="specialN"></special></b-col>
        </b-row>
      </b-container>

      <p>All together: {{ result }}</p>


      <div>
        <div>
          <b-button  id="show-btn" @click="$bvModal.show('modal-center')"
            >Start a new game</b-button
          >

          <b-modal  id="modal-center" centered hide-footer hide-header>
            
            <div class="d-block text-center">
              <h3>Do you want to start a new game?</h3>
            </div>
            <b-row>
               <b-button
              class="mt-3 col-4 offset-1"
              block
              @click="$bvModal.hide('bv-modal-example')"
              >New game</b-button>

               <b-button
              class="mt-3 col-4 offset-2"
              block
              @click="$bvModal.hide('bv-modal-example')"
              >Close</b-button
            >
            </b-row>
           
          </b-modal>
        </div>
      </div>
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
    minMaxTags: ["Max", "Min", "Sum"],
    specialTags: ["Kenta", "Full", "Poker", "Jamb", "Sum"],
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
    result: function() {
      if (
        this.allFull(this.numbersDown) &&
        this.allFull(this.numbersMixed) &&
        this.allFull(this.numbersUp) &&
        this.allFull(this.numbersN) &&
        this.allFull(this.minMaxDown) &&
        this.allFull(this.minMaxMixed) &&
        this.allFull(this.minMaxUp) &&
        this.allFull(this.minMaxN) &&
        this.allFull(this.specialDown) &&
        this.allFull(this.specialMixed) &&
        this.allFull(this.specialUp) &&
        this.allFull(this.specialN)
      ) {
        let sum =
          this.numbersDown.sum +
          this.numbersMixed.sum +
          this.numbersUp.sum +
          this.numbersN.sum +
          this.minMaxDown.sum +
          this.minMaxMixed.sum +
          this.minMaxUp.sum +
          this.minMaxN.sum +
          this.specialDown.sum +
          this.specialMixed.sum +
          this.specialUp.sum +
          this.specialN.sum;
        return sum;
      }
    },
  },
  methods: {
    allFull(obj) {
      for (var o in obj) {
        if (!obj[o]) return false;
      }
      return true;
    },
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
