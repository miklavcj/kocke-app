<template>
  <div>
    <div>
      <b-form-input class="input" type="number"  v-model.number="mM.max" @change="updateObject()" ></b-form-input>
    </div>

    <div>
      <b-form-input class="input" type="number"  v-model.number="mM.min" @change="updateObject()" ></b-form-input>
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

.input {
  text-align: center;
}

.box {
  text-align: center;
  width: 100%;
  height: 35px;
  border: 1px solid grey;
  border-radius: 5px;
}

</style>