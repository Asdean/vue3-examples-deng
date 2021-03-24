<template>
  <div>
    <h1>conposition-api</h1>
    <h2>ref()</h2>
    <p>
      messageref为响应式数据
      <br />
    </p>
    <p>
      {{ messageref }}
    </p>
    <hr />
    <button @click="changeUserRef">changeUserRef</button>
    <p>{{ userRef.name }} / {{ userRef.insertTime }} / {{ userRef.address }}</p>
    <hr />
    <h2>computed()</h2>
    <p>computed函数，计算属性</p>
    <p>{{ userComputed }}</p>
    <hr />
    <h2>watch()</h2>
    <p>watch函数，监听数据</p>
  </div>
</template>

<script lang="ts">
import { User } from "@/datasource/Types";
import { computed, defineComponent, ref, watch } from "vue";

export default defineComponent({
  setup() {
    const user: User = {
      name: "dean",
      insertTime: "2021-03-21T15:05:00"
    };
    const messageref = ref("hello world!");
    const userAsync: User = {
      name: "sun",
      insertTime: "2021-03-21T15:25:45",
      address: "956"
    };
    const userRef = ref(user);
    const changeUserRef = () => {
      setTimeout(() => {
        userRef.value = userAsync;
      }, 1000);
    };
    const userComputed = computed(() => {
      return userRef.value.insertTime?.replace("T", " ");
    });
    watch(userRef, (newuser, olduser) => {
      return alert(`用户名：${olduser.name}被修改为：${newuser.name}`);
    });

    return {
      user,
      messageref,
      userRef,
      changeUserRef,
      userComputed,
      watch
    };
  }
});
</script>
