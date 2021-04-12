<template>
  <div>

    <div>
    <b-form-select v-model.number="spl.kenta" class="custom-select plain mb-0"   @change="updateObject()">
      <b-form-select-option :value="null"></b-form-select-option>
      <b-form-select-option value="0" >0</b-form-select-option>
      <b-form-select-option value="46" >46</b-form-select-option>
      <b-form-select-option value="56" >56</b-form-select-option>
      <b-form-select-option value="66" >66</b-form-select-option>
    </b-form-select>
     </div>

     <div>
      <b-form-input class="input" type="number" v-model.number="spl.full" @change="updateObject()" ></b-form-input>
    </div>

     <div>
      <b-form-input class="input" type="number" v-model.number="spl.poker" @change="updateObject()" > </b-form-input>
    </div>

     <div>
      <b-form-input class="input" type="number" v-model.number="spl.jamb" @change="updateObject()" ></b-form-input>
    </div>



    <div class="box">{{ splSum || 0 }}</div>
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
        sum: null,
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
  },
  created() {
    if (localStorage.getItem(this.special.storageKey))
      this.spl = JSON.parse(localStorage.getItem(this.special.storageKey));
    this.updateObject();
  },
};
</script>

<style scoped>

.custom-select{
background: none !important;
text-align: center !important;
text-align-last:center !important;
}

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