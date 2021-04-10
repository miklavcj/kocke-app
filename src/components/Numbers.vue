<template>
  <div>
  
    <div>
    <b-form-select v-model.number="nms.one" class="custom-select plain mb-0 text-center"   @change="updateObject()">
      <b-form-select-option :value="null"></b-form-select-option>
      <b-form-select-option value="0" >0</b-form-select-option>
      <b-form-select-option value="1" >1</b-form-select-option>
      <b-form-select-option value="2" >2</b-form-select-option>
      <b-form-select-option value="3" >3</b-form-select-option>
      <b-form-select-option value="4" >4</b-form-select-option>
      <b-form-select-option value="5" >5</b-form-select-option>
      
    </b-form-select>
     </div>
     <div>
    <b-form-select v-model.number="nms.two" class="custom-select plain mb-0" @change="updateObject()" >
      <b-form-select-option :value="null"></b-form-select-option>
      <b-form-select-option value="0">0</b-form-select-option>
      <b-form-select-option value="2" >2</b-form-select-option>
      <b-form-select-option value="4" >4</b-form-select-option>
      <b-form-select-option value="6" >6</b-form-select-option>
      <b-form-select-option value="8" >8</b-form-select-option>
      <b-form-select-option value="10" >10</b-form-select-option>
      
    </b-form-select>
     </div>
      <div>
    <b-form-select v-model.number="nms.three" class="custom-select plain mb-0" @change="updateObject()" >
      <b-form-select-option :value="null"></b-form-select-option>
      <b-form-select-option value="0">0</b-form-select-option>
      <b-form-select-option value="3" >3</b-form-select-option>
      <b-form-select-option value="6" >6</b-form-select-option>
      <b-form-select-option value="9" >9</b-form-select-option>
      <b-form-select-option value="12" >12</b-form-select-option>
      <b-form-select-option value="15" >15</b-form-select-option>
      
    </b-form-select>
     </div>
      <div>
    <b-form-select v-model.number="nms.four" class="custom-select plain mb-0" @change="updateObject()" >
      <b-form-select-option :value="null"></b-form-select-option>
      <b-form-select-option value="0">0</b-form-select-option>
      <b-form-select-option value="4" >4</b-form-select-option>
      <b-form-select-option value="8" >8</b-form-select-option>
      <b-form-select-option value="12" >12</b-form-select-option>
      <b-form-select-option value="16" >16</b-form-select-option>
      <b-form-select-option value="20" >20</b-form-select-option>
      
    </b-form-select>
     </div>

         <div>
    <b-form-select v-model.number="nms.five" class="custom-select plain mb-0" @change="updateObject()" >
      <b-form-select-option :value="null"></b-form-select-option>
      <b-form-select-option value="0">0</b-form-select-option>
      <b-form-select-option value="5" >5</b-form-select-option>
      <b-form-select-option value="10" >10</b-form-select-option>
      <b-form-select-option value="15" >15</b-form-select-option>
      <b-form-select-option value="20" >20</b-form-select-option>
      <b-form-select-option value="25" >25</b-form-select-option>
      
    </b-form-select>
     </div>

         <div>
    <b-form-select v-model.number="nms.six" class="custom-select plain mb-0" @change="updateObject()" >
      <b-form-select-option :value="null"></b-form-select-option>
      <b-form-select-option value="0">0</b-form-select-option>
      <b-form-select-option value="6" >6</b-form-select-option>
      <b-form-select-option value="12" >12</b-form-select-option>
      <b-form-select-option value="18" >18</b-form-select-option>
      <b-form-select-option value="24" >24</b-form-select-option>
      <b-form-select-option value="30" >30</b-form-select-option>
      
    </b-form-select>
     </div>

    

    <div class="box">{{ numSum || "0" }}</div>
  </div>
</template>

<script>
export default {
  props: {
    numbers: Object,
  },
  data: () => {
    return {
      nms: {
        one: null,
        two: null,
        three: null,
        four: null,
        five: null,
        six: null,
      },
      selectOne: [0, 1, 2, 3, 4, 5],
    };
  },
  computed: {
    numSum: function () {
      let sum =
        Number(this.nms.one) +
        Number(this.nms.two) +
        Number(this.nms.three) +
        Number(this.nms.four) +
        Number(this.nms.five) +
        Number(this.nms.six);

      if (sum >= 60) {
        sum += 30;
      }
      this.numbers.sum = sum;
      return sum;
    },
  },
  methods: {
    updateObject() {
      this.numbers.one = this.nms.one;
      this.numbers.two = this.nms.two;
      this.numbers.three = this.nms.three;
      this.numbers.four = this.nms.four;
      this.numbers.five = this.nms.five;
      this.numbers.six = this.nms.six;
      this.numbers.sum = this.numSum;

      localStorage.setItem(this.numbers.storageKey, JSON.stringify(this.nms));
    },
  },
  created() {
    if (localStorage.getItem(this.numbers.storageKey))
      this.nms = JSON.parse(localStorage.getItem(this.numbers.storageKey));
    this.updateObject();
  },
};
</script>

<style scoped>
.custom-select{
background: none !important;
text-align: center !important;
text-align-last:center;
}
.box {
  text-align: center;
  width: 100%;
  height: 35px;
  border: 1px solid grey;
  border-radius: 5px;
}


</style>