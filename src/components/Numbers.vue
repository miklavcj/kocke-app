<template>
  <div>
    <div>
      <select v-model.number="nms.one" @change="updateObject">
        <option>0</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </select>
    </div>

    <div>
    <b-form-select v-model.number="nms.one" class="plain mb-3" >
      <b-form-select-option :value="null"></b-form-select-option>
      <b-form-select-option value="0">0</b-form-select-option>
      <b-form-select-option value="1" >1</b-form-select-option>
      <b-form-select-option value="2" >2</b-form-select-option>
      <b-form-select-option value="3" >3</b-form-select-option>
      <b-form-select-option value="4" >4</b-form-select-option>
      <b-form-select-option value="5" >5</b-form-select-option>
      
    </b-form-select>
     </div>

    <div>
      <select v-model.number="nms.two" @change="updateObject">
        <option>0</option>
        <option>2</option>
        <option>4</option>
        <option>6</option>
        <option>8</option>
        <option>10</option>
      </select>
    </div>

    <div>
      <select v-model.number="nms.three" @change="updateObject">
        <option>0</option>
        <option>3</option>
        <option>6</option>
        <option>9</option>
        <option>12</option>
        <option>15</option>
      </select>
    </div>

    <div>
      <select v-model.number="nms.four" @change="updateObject">
        <option>0</option>
        <option>4</option>
        <option>8</option>
        <option>12</option>
        <option>16</option>
        <option>20</option>
      </select>
    </div>

    <div>
      <select v-model.number="nms.five" @change="updateObject">
        <option>0</option>
        <option>5</option>
        <option>10</option>
        <option>15</option>
        <option>20</option>
        <option>25</option>
      </select>
    </div>

    <div>
      <select v-model.number="nms.six" @change="updateObject">
        <option>0</option>
        <option>6</option>
        <option>12</option>
        <option>18</option>
        <option>24</option>
        <option>30</option>
      </select>
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
select.form-control {
  -moz-appearance: none;
   -webkit-appearance: none;
   appearance: none;
}

</style>