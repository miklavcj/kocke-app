<template>
  <div>
    <div>
      <select v-model.number="spl.kenta" @change="updateObject">
        <option>0</option>
        <option>46</option>
        <option>56</option>
        <option>66</option>
      </select>
    </div>

    <div>
      <input type="number" v-model.number="spl.full" @change="updateObject" />
    </div>

    <div>
      <input type="number" v-model.number="spl.poker" @change="updateObject" />
    </div>

    <div>
      <input type="number" v-model.number="spl.jamb" @change="updateObject" />
    </div>

    <div class="box">{{ splSum || "0" }}</div>
  </div>
</template>

<script>
export default {
  props: {
    special: Object,
  },
  data() {
    return {
      spl: {
        kenta: null,
        full: null,
        poker: null,
        jamb: null,
      },
    };
  },
  computed: {
    splSum: function () {
      let sum =
        Number(this.spl.kenta) +
        Number(this.spl.full) +
        Number(this.spl.poker) +
        Number(this.spl.jamb);

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
  },
  created() {
    if (localStorage.getItem(this.special.storageKey))
      this.spl = JSON.parse(localStorage.getItem(this.special.storageKey));
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