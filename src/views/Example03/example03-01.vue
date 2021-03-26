<template>
  <div>
    <h2>v-if</h2>
    <p v-if="user.level >= 4">此内容仅level大于4才显示</p>
    <p>vue3.0,input组件默认不会被复用了</p>
    <hr />
    <button v-on:click="changeInput">切换</button>
    <br />
    <template v-if="userNameLogin">
      <input placeholder="Enter your username" />
      <br />
      <input type="password" placeholder="Enter your password" />
    </template>
    <template v-else>
      <input placeholder="Enter your key" />
    </template>
    <hr />
    <h2>v-show</h2>
    <button v-on:click="changeClose">切换</button>
    <p v-show="close">此部分仅当close为真时显示</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const user = ref({ name: "dean", level: 5 });
    const close = ref(true);
    const userNameLogin = ref(true);
    const changeInput = () => {
      userNameLogin.value = !userNameLogin.value;
    };
    const changeClose = () => {
      close.value = !close.value;
    };
    return {
      user,
      close,
      userNameLogin,
      changeInput,
      changeClose
    };
  }
});
</script>
