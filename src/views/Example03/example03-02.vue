<template>
  <div>
    <h1>v-bind</h1>
    <label>
      <input type="checkbox" @click="setAgree" />
      同意以上条款
    </label>
    <br />
    <button type="button" v-bind:disabled="submitButtonDisabled">提交</button>
    <p
      @mouseover="active = true"
      @mouseleave="active = false"
      :class="{ 'bg-red': active }"
    >
      当鼠标移动到该区域时改变样式
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const submitButtonDisabled = ref(true);
    const active = ref(false);
    const setAgree = () => {
      submitButtonDisabled.value = !submitButtonDisabled.value;
    };
    return {
      submitButtonDisabled,
      active,
      setAgree
    };
  }
});
</script>

<style scoped>
.bg-red {
  background-color: red;
}
</style>
