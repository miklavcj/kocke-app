<template>
  <div>
    <div>
      <b-form-input
        class="input mb-1"
        type="number"
        :class="[mM.max !== null ? filledInput : '']"
        v-model.number="mM.max"
        @change="updateMax()"
        @keyup.enter="hideKeyboard()"
      ></b-form-input>
    </div>

    <div>
      <b-form-input
        class="input mb-1"
        type="number"
        :class="[mM.min !== null ? filledInput : '']"
        v-model.number="mM.min"
        @change="updateMin()"
        @keyup.enter="hideKeyboard()"
      ></b-form-input>
    </div>

    <div class="box d-flex align-items-center justify-content-center mb-1">
      {{ minMaxSum || 0 }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    numbers: Object,
    minMax: Object,
    reset: Boolean,
  },
  data() {
    return {
      mM: {
        max: null,
        min: null,
        sum: null,
      },
      filledInput: "filled-input",
    };
  },
  computed: {
    minMaxSum: function() {
      if (this.mM.max && this.mM.min && this.numbers.one) {
        let sum =
          (Number(this.mM.max) - Number(this.mM.min)) *
          Number(this.numbers.one);

        this.mM.sum = sum;
        this.minMax.sum = sum;
        return sum;
      }
    },
  },
  methods: {
    updateObject() {
      this.minMax.max = this.mM.max;
      this.minMax.min = this.mM.min;
      this.minMax.sum = this.minMaxSum;

      localStorage.setItem(this.minMax.storageKey, JSON.stringify(this.mM));
    },
    resetValue() {
      for (let n in this.mM) {
        this.mM[n] = null;
      }
      this.updateObject();
    },
    updateMax() {
      if (this.mM.max === "") {
        this.mM.max = null;
        this.updateObject();
        return;
      }
      this.updateObject();
    },
    updateMin() {
      if (this.mM.min === "") {
        this.mM.min = null;
        this.updateObject();
        return;
      }
      this.updateObject();
    },
    hideKeyboard() {
      document.activeElement.blur();
    },
  },
  created() {
    if (localStorage.getItem(this.minMax.storageKey))
      this.mM = JSON.parse(localStorage.getItem(this.minMax.storageKey));
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
