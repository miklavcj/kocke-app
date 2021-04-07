<template>
  <div>
    <div>
      <input type="number" v-model.number="mM.max" @change="updateObject" />
    </div>

    <div>
      <input type="number" v-model.number="mM.min" @change="updateObject" />
    </div>

    <div class="box">{{ minMaxSum || "0" }}</div>
  </div>
</template>

<script>
export default {
  props: {
    numbers: Object,
    minMax: Object,
  },
  data() {
    return {
      mM: {
        max: null,
        min: null,
      },
    };
  },
  computed: {
    minMaxSum: function () {
      if (this.mM.max && this.mM.min && this.numbers.one) {
        let sum =
          (Number(this.mM.max) - Number(this.mM.min)) *
          Number(this.numbers.one);

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
  },
  created() {
    if (localStorage.getItem(this.minMax.storageKey))
      this.mM = JSON.parse(localStorage.getItem(this.minMax.storageKey));
    this.updateObject();
  },
};
</script>

<style scoped>
.box,
select,
input {
  text-align: center;
  width: 80px;
  height: 40px;
  border: 1px solid black;
}

select {
  /* for Firefox */
  -moz-appearance: none;
  /* for Chrome */
  -webkit-appearance: none;
}

/* For IE10 */
select::-ms-expand {
  display: none;
}
</style>