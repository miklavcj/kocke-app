<template>
  <div >
  
    <div>
    <b-form-select v-model.number="nms.one"  :class="[ nms.one !== null  ? filledInput : '',customSelect, mb]"  @change="updateObject()">
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
    <b-form-select v-model.number="nms.two" :class="[ nms.two !== null  ? filledInput : '',customSelect, mb]" @change="updateObject()" >
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
    <b-form-select v-model.number="nms.three" :class="[ nms.three !== null  ? filledInput : '',customSelect, mb]" @change="updateObject()" >
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
    <b-form-select v-model.number="nms.four" :class="[ nms.four !== null  ? filledInput : '',customSelect, mb]" @change="updateObject()" >
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
    <b-form-select v-model.number="nms.five" :class="[ nms.five !== null  ? filledInput : '',customSelect, mb]" @change="updateObject()" >
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
    <b-form-select v-model.number="nms.six" :class="[ nms.six !== null  ? filledInput : '',customSelect, mb]" @change="updateObject()" >
      <b-form-select-option :value="null"></b-form-select-option>
      <b-form-select-option value="0">0</b-form-select-option>
      <b-form-select-option value="6" >6</b-form-select-option>
      <b-form-select-option value="12" >12</b-form-select-option>
      <b-form-select-option value="18" >18</b-form-select-option>
      <b-form-select-option value="24" >24</b-form-select-option>
      <b-form-select-option value="30" >30</b-form-select-option>
      
    </b-form-select>
     </div>

    

    <div class="box d-flex align-items-center justify-content-center mb-1"><div>{{ numSum || 0 }}</div></div>

  </div>
</template>

<script>
export default {
  props: {
    numbers: Object,
    reset: Boolean,
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
        sum: null
      },
      filledInput: "filled-input",
      customSelect: "custom-select",
      mb: "mb-1"

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
      this.nms.sum = sum;
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
    resetValue() {
      for (let n in this.nms) {
        this.nms[n] = null;
      }
      this.updateObject()
      
    },
    isFilled(value) {
      if(value !== "" || value !== null || value !== 0) {
        return true
      }
      return false
    },
  },
  created() {
    if (localStorage.getItem(this.numbers.storageKey))
      this.nms = JSON.parse(localStorage.getItem(this.numbers.storageKey));
    this.updateObject();
  },
  watch: { 
      	reset: function() { 
          if(this.reset) {
          this.resetValue()
          }
          
        }
  }

};
</script>

<style scoped>

.custom-select {
background: none !important;
text-align: center !important;
text-align-last:center !important;
padding-left: 1.25rem !important;
padding-right: 1.25rem !important;
color: #fff !important;
background-color: #AE8500 !important;
opacity: .4 !important;
}

.box {
  text-align: center;
  width: 100%;
  height: calc(1.5em + .75rem + 2px) !important;
  height: 35px;
  border-radius: 5px;
}

.filled-input {
  opacity: .7 !important;
}


</style>