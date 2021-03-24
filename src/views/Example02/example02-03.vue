<template>
  <div>
    <p>
      从setup()函数中注入路由,父元素通过props传入的参数不可直接修改(单向数据流)
    </p>
    <p>studentID: {{ sid }}</p>
    <p>homeworkID: {{ hid }}</p>
    <hr />
    <p>也可以从setup()函数中获取studentID: {{ sidR }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  props: {
    sid: String,
    hid: String
  },
  setup(props) {
    const sidR = ref(props.sid);
    console.log(sidR);
    return {
      sidR
    };
  }
});
</script>
