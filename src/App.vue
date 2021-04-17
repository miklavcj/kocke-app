<template>
  <div id="app" class="mt-4">
    <b-container id="main-container">
      <b-container>
        <b-row class="no-gutters mb-2 ">
          <b-col class="ml-1"></b-col>
          <b-col
            class="box-icon d-flex align-items-center justify-content-center ml-1 h5 "
          >
            <b-icon-arrow-down
              style="color: #69747D; "
              font-scale="1"
            ></b-icon-arrow-down
          ></b-col>
          <b-col
            class="box-icon d-flex align-items-center justify-content-center ml-1 h5"
          >
            <b-icon-arrow-down-up style="color: #69747D;"></b-icon-arrow-down-up
          ></b-col>
          <b-col
            class="box-icon d-flex align-items-center justify-content-center ml-1 h5"
          >
            <b-icon-arrow-up
              style="color: #69747D; font-weight: 700;"
            ></b-icon-arrow-up
          ></b-col>
          <b-col
            class="box-icon d-flex align-items-center justify-content-center ml-1 h5"
            style="color: #69747D;"
            >N</b-col
          >
        </b-row>
        <b-row class="no-gutters mb-3">
          <b-col class="ml-1"
            ><tags :tags="numberTags" :title="numTitle"></tags
          ></b-col>
          <b-col class="ml-1"
            ><numbers :numbers="numbersDown" :reset="reset"></numbers
          ></b-col>
          <b-col class="ml-1"
            ><numbers :numbers="numbersMixed" :reset="reset"></numbers
          ></b-col>
          <b-col class="ml-1"
            ><numbers :numbers="numbersUp" :reset="reset"></numbers
          ></b-col>
          <b-col class="ml-1"
            ><numbers :numbers="numbersN" :reset="reset"></numbers
          ></b-col>
        </b-row>

        <b-row class="no-gutters mb-3">
          <b-col class="ml-1"
            ><tags :tags="minMaxTags" :title="mMTitle"></tags
          ></b-col>
          <b-col class="ml-1"
            ><min-max
              :numbers="numbersDown"
              :minMax="minMaxDown"
              :reset="reset"
            ></min-max
          ></b-col>
          <b-col class="ml-1"
            ><min-max
              :numbers="numbersMixed"
              :minMax="minMaxMixed"
              :reset="reset"
            ></min-max
          ></b-col>
          <b-col class="ml-1"
            ><min-max
              :numbers="numbersUp"
              :minMax="minMaxUp"
              :reset="reset"
            ></min-max
          ></b-col>
          <b-col class="ml-1"
            ><min-max
              :numbers="numbersN"
              :minMax="minMaxN"
              :reset="reset"
            ></min-max
          ></b-col>
        </b-row>

        <b-row class="no-gutters mb-3">
          <b-col class="ml-1"
            ><tags :tags="specialTags" :title="splTitle"></tags
          ></b-col>
          <b-col class="ml-1"
            ><special :special="specialDown" :reset="reset"></special
          ></b-col>
          <b-col class="ml-1"
            ><special :special="specialMixed" :reset="reset"></special
          ></b-col>
          <b-col class="ml-1"
            ><special :special="specialUp" :reset="reset"></special
          ></b-col>
          <b-col class="ml-1"
            ><special :special="specialN" :reset="reset"></special
          ></b-col>
        </b-row>

        <b-row class="no-gutters">
          <b-col class="final d-flex align-items-center pl-2 col-5"
            >FINAL RESULT</b-col
          >
          <b-col class="box-final d-flex align-items-center justify-content-center mr-2  ">{{
            result
          }}</b-col>

          <b-col  class="col-1 offset-1 mr-0  d-flex align-items-center justify-content-end">
            <b-button id="show-btn" @click="$bvModal.show('modal-center')"
            ><b-icon-arrow-clockwise
              style="color: #69747D; font-weight: 700;"  variant="light"
            ></b-icon-arrow-clockwise></b-button
          >
          </b-col>
        </b-row>
      </b-container>

      <div class="mt-4">
        <div>
          

          <b-modal id="modal-center" centered hide-footer hide-header>
            <div class="d-block text-center">
              <h3>Do you want to start a new game?</h3>
            </div>
              <div class="d-flex align-items-center justify-content-around">
                <b-button id="btn-yes"
                class="mt-3 px-1"
                block
                @click="
                  $bvModal.hide('modal-center');
                  newGame();
                "
                >YES, START NEW</b-button
              >

              <b-button id="btn-no"
                class="mt-3 px-1"
                block
                @click="$bvModal.hide('modal-center')"
                >NO, CANCEL</b-button
              >
              </div>
             
          </b-modal>
        </div>
      </div>
    </b-container>
  </div>
</template>

<script>
import {
  BIcon,
  BIconArrowUp,
  BIconArrowDown,
  BIconArrowDownUp,
  BIconArrowClockwise,
} from "bootstrap-vue";

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
    BIconArrowClockwise,
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
    numberTags: [1, 2, 3, 4, 5, 6, "TOTAL"],
    minMaxTags: ["MAX", "MIN", "TOTAL"],
    specialTags: ["KENTA", "FULL", "POKER", "JAMB", "TOTAL"],
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
      console.log("A new game will be started");
      this.reset = true;
      setTimeout(() => {
        this.reset = false;
      }, 1000);
    },
    async requestWakeLock() {
      try {
        const wakeLock = await navigator.wakeLock.request("screen");
        console.log("WakeLock:", wakeLock);
      } catch (err) {
        console.log(`${err.name}, ${err.message}`);
      }
    },
  },
  created() {
    this.requestWakeLock();
  },
};
</script>

<style>
#app {
  font-family: "Open Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
}

.box {
  background: #ae8500;
  font-weight: 700;
  opacity: 1;
  text-align: center;
  width: 100%;
  border-radius: 5px;
}

.custom-select,
.input {
  color: #fff !important;
  background-color: #ae8500 !important;
  opacity: 0.4 !important;
  font-weight: 600;
  border: none;
}

.final {
  font-size: 1rem;
  font-weight: 700;
  color: #69747D;
  opacity: 1 ;

}

.box-final {
  color: #fff;
  font-weight: 800;
  background: #ae8500;
  opacity: 1;
  text-align: center;
  width: 100%;
  border-radius: 5px;
  flex-grow:1;
}

#show-btn {
  stroke-width: 3 !important;
  border: none;
}

#modal-center {
  color: #69747D;
  opacity: 1;

}

#btn-yes {
  width: 45%;
  color: #fff;
  background: #ae8500;
  font-weight: 700;
  font-size: 1.05rem;
  border: none;
}

#btn-no {
   width: 45%;
  background: #69747D;
  opacity: .5 ;
  font-weight: 700;
  font-size: 1.05rem;
  border: none;
}
</style>
