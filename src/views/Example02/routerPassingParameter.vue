<template>
  <div>
    <p>router传递参数</p>
    <p>studentsID: {{ sid }}</p>
    <br />
    <p>homeworksID: {{ hid }}</p>
    <br />
    <p>也可通过params调用</p>
    <p>{{ $route.params.sid }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: ["sid", "hid"],
  created() {
    this.init();
  },
  beforeUpdate() {
    this.init();
  },
  methods: {
    init() {
      console.log(this.sid);
    }
  }
});
</script>
