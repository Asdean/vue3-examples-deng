<template>
  <div>
    <h1>composition-api使用业务逻辑的聚合</h1>
    <hr />
    <h2>useMessage()函数</h2>
    <p>聚合message的相关业务逻辑，包括计算属性/函数</p>
    <p>messageRef: {{ messageRef }}</p>
    <p>reversMessageRef: {{ reversMessage }}</p>
    <button type="button" @click="changeMessage">changeMessage</button>
    <hr />
    <h2>useUser()函数</h2>
    <p>聚合userRef的相关业务逻辑，包括计算属性/函数</p>
    <p>{{ userRef.name }} / {{ userRef.insertTime }} / {{ userRef.address }}</p>
    <button type="button" @click="changeAddress">changeAddress</button>
    <p>{{ formatDateFunc }}</p>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, Ref, ref } from "vue";
import { User } from "@/datasource/Types";

function useMessage(msg: Ref<string>) {
  const reversMessage = computed(() => {
    return msg.value
      .split("")
      .reverse()
      .join("");
  });
  const changeMessage = () => {
    return (msg.value = "composition-api");
  };
  return {
    reversMessage,
    changeMessage
  };
}

function useUser(user: Ref<User>) {
  const formatDateFunc = computed(() => {
    return user.value.insertTime?.replace("T", " ");
  });
  const changeAddress = () => {
    return (user.value.address = (Math.random() * 1000).toFixed(0).toString());
  };
  return {
    formatDateFunc,
    changeAddress
  };
}

export default defineComponent({
  setup() {
    const user: User = {
      name: "dean",
      insertTime: "2021-3-24T15:40:39",
      address: ""
    };
    const userRef = ref(user);
    const messageRef = ref("hello world!");
    const { reversMessage, changeMessage } = useMessage(messageRef);
    const { formatDateFunc, changeAddress } = useUser(userRef);
    return {
      user,
      userRef,
      messageRef,
      reversMessage,
      changeMessage,
      formatDateFunc,
      changeAddress
    };
  }
});
</script>
