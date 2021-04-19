<template>
  <div>
    <div>
      <b-form-select
        v-model.number="spl.kenta"
        class="custom-select plain mb-1"
        :class="[spl.kenta !== null ? filledInput : '']"
        @change="updateObject()"
      >
        <b-form-select-option :value="null"></b-form-select-option>
        <b-form-select-option value="0">0</b-form-select-option>
        <b-form-select-option value="46">46</b-form-select-option>
        <b-form-select-option value="56">56</b-form-select-option>
        <b-form-select-option value="66">66</b-form-select-option>
      </b-form-select>
    </div>

    <div>
      <b-form-input
        class="input mb-1"
        type="number"
        v-model.number="spl.full"
        :class="[spl.full !== null ? filledInput : '']"
        @change="updateFull()"
        @keyup.enter="hideKeyboard()"
      ></b-form-input>
    </div>

    <div>
      <b-form-input
        class="input mb-1"
        type="number"
        v-model.number="spl.poker"
        :class="[spl.poker !== null ? filledInput : '']"
        @change="updatePoker()"
        @keyup.enter="hideKeyboard()"
      >
      </b-form-input>
    </div>

    <div>
      <b-form-input
        class="input mb-1"
        type="number"
        v-model.number="spl.jamb"
        :class="[spl.jamb !== null ? filledInput : '']"
        @change="updateJamb()"
        @keyup.enter="hideKeyboard()"
      ></b-form-input>
    </div>

    <div class="box d-flex align-items-center justify-content-center mb-1">
      {{ splSum || 0 }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    special: Object,
    reset: Boolean,
  },
  data() {
    return {
      spl: {
        kenta: null,
        full: null,
        poker: null,
        jamb: null,
        sum: null,
      },
      filledInput: "filled-input",
    };
  },
  computed: {
    splSum: function() {
      let sum =
        Number(this.spl.kenta) +
        Number(this.spl.full) +
        Number(this.spl.poker) +
        Number(this.spl.jamb);

      this.spl.sum = sum;
      this.special.sum = sum;
      return sum;
    },
  },
  methods: {
    updateObject() {
      this.special.kenta = this.spl.kenta;
      this.special.full = this.spl.full;
      this.special.poker = this.spl.poker;
      this.special.jamb = this.spl.jamb;
      this.special.sum = this.splSum;

      localStorage.setItem(this.special.storageKey, JSON.stringify(this.spl));
    },
    updateFull() {
      if (this.spl.full === 0) {
        this.updateObject();
        return;
      } else if (this.spl.full === "") {
        this.spl.full = null;
        this.updateObject();
        return;
      }
      this.spl.full = Number(this.spl.full) + 30;
      this.updateObject();
    },
    updatePoker() {
      if (this.spl.poker === 0) {
        this.updateObject();
        return;
      } else if (this.spl.poker === "") {
        this.spl.poker = null;
        this.updateObject();
        return;
      }
      this.spl.poker = Number(this.spl.poker) + 30;
      this.updateObject();
    },
    updateJamb() {
      if (this.spl.jamb === 0) {
        this.updateObject();
        return;
      } else if (this.spl.jamb === "") {
        this.spl.jamb = null;
        this.updateObject();
        return;
      }
      this.spl.jamb = Number(this.spl.jamb) + 30;
      this.updateObject();
    },
    resetValue() {
      for (let n in this.spl) {
        this.spl[n] = null;
      }
      this.updateObject();
    },
    hideKeyboard() {
      document.activeElement.blur();
    },
  },
  created() {
    if (localStorage.getItem(this.special.storageKey))
      this.spl = JSON.parse(localStorage.getItem(this.special.storageKey));
    this.updateObject();
  },
  watch: {
    reset: function() {
      if (this.reset) {
        this.resetValue();
      }
    },
  },
};
</script>

<style scoped>
.custom-select {
  background: none !important;
  text-align: center !important;
  text-align-last: center !important;
  padding-left: 1.25rem !important;
  padding-right: 1.25rem !important;
  color: #fff !important;
  background-color: #ae8500 !important;
  opacity: 0.4 !important;
  font-weight: 600;
  border: none;
}

.input {
  text-align: center;
}

.box {
  text-align: center;
  width: 100%;
  height: 35px;
  border-radius: 5px;
}

.filled-input {
  opacity: 0.7 !important;
}
</style>
