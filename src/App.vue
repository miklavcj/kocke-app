<template>
  <div id="app">
    <b-container id="main-container">
      <b-container>
        <b-row class="no-gutters ">
          <b-col></b-col>
          <b-col class="box d-flex align-items-center justify-content-center">
            <b-icon-arrow-down></b-icon-arrow-down
          ></b-col>
          <b-col class="box d-flex align-items-center justify-content-center">
            <b-icon-arrow-down-up></b-icon-arrow-down-up
          ></b-col>
          <b-col class="box d-flex align-items-center justify-content-center">
            <b-icon-arrow-up></b-icon-arrow-up
          ></b-col>
          <b-col class="box d-flex align-items-center justify-content-center"
            >N</b-col
          >
        </b-row>
        <b-row class="no-gutters mb-3">
          <b-col><tags :tags="numberTags" :title="numTitle"></tags></b-col>
          <b-col
            ><numbers :numbers="numbersDown" :reset="reset"></numbers
          ></b-col>
          <b-col
            ><numbers :numbers="numbersMixed" :reset="reset"></numbers
          ></b-col>
          <b-col><numbers :numbers="numbersUp" :reset="reset"></numbers></b-col>
          <b-col><numbers :numbers="numbersN" :reset="reset"></numbers></b-col>
        </b-row>

        <b-row class="no-gutters mb-3">
          <b-col><tags :tags="minMaxTags" :title="mMTitle"></tags></b-col>
          <b-col
            ><min-max
              :numbers="numbersDown"
              :minMax="minMaxDown"
              :reset="reset"
            ></min-max
          ></b-col>
          <b-col
            ><min-max
              :numbers="numbersMixed"
              :minMax="minMaxMixed"
              :reset="reset"
            ></min-max
          ></b-col>
          <b-col
            ><min-max
              :numbers="numbersUp"
              :minMax="minMaxUp"
              :reset="reset"
            ></min-max
          ></b-col>
          <b-col
            ><min-max
              :numbers="numbersN"
              :minMax="minMaxN"
              :reset="reset"
            ></min-max
          ></b-col>
        </b-row>

        <b-row class="no-gutters mb-3">
          <b-col><tags :tags="specialTags" :title="splTitle"></tags></b-col>
          <b-col
            ><special :special="specialDown" :reset="reset"></special
          ></b-col>
          <b-col
            ><special :special="specialMixed" :reset="reset"></special
          ></b-col>
          <b-col><special :special="specialUp" :reset="reset"></special></b-col>
          <b-col><special :special="specialN" :reset="reset"></special></b-col>
        </b-row>

        <b-row class="no-gutters">
          <b-col class="box d-flex align-items-center justify-content-center"
            >Result</b-col
          >
          <b-col class="box d-flex align-items-center justify-content-center">{{
            result
          }}</b-col>
        </b-row>
      </b-container>

      <div class="mt-4">
        <div>
          <b-button id="show-btn" @click="$bvModal.show('modal-center')"
            >Start a new game</b-button
          >

          <b-modal id="modal-center" centered hide-footer hide-header>
            <div class="d-block text-center">
              <h3>Do you want to start a new game?</h3>
            </div>
            <b-row>
              <b-button
                class="mt-3 col-4 offset-1"
                block
                @click="
                  $bvModal.hide('modal-center');
                  newGame();
                "
                >New game</b-button
              >

              <b-button
                class="mt-3 col-4 offset-2"
                block
                @click="$bvModal.hide('modal-center')"
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
import { BIcon, BIconArrowUp, BIconArrowDown, BIconArrowDownUp } from 'bootstrap-vue'

import numbers from "./components/Numbers";
import minMax from "./components/MinMax";
import special from "./components/Special";
import tags from "./components/Tags";


export default {
  name: "App",
  components: {
     BIcon,
    BIconArrowUp,
    BIconArrowDown,
    BIconArrowDownUp,
    numbers,
    minMax,
    special,
    tags,
  },
  data: () => ({
    reset: false,
    numTitle: "numbers",
    mMTitle: "minMax",
    splTitle: "special",
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

    newGame() {
      console.log("A new game will be started")
      this.reset = true
      setTimeout(() => { this.reset = false }, 1000);

    },
    async requestWakeLock() {
       try {
        const wakeLock = await navigator.wakeLock.request('screen');
        console.log("WakeLock:", wakeLock)
      } catch (err) {
    console.log(`${err.name}, ${err.message}`);
      }
    }

  },
  created() {
  this.requestWakeLock()

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

.box {
  text-align: center;
  width: 100%;
  height: 35px;
  border: 1px solid grey;
  border-radius: 5px;
}
</style>
