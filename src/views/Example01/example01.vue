<template>
  <div>
    <h1>data</h1>
    <p>{{ msg }}</p>

    <h1>methods</h1>
    <p>{{ user.name }}</p>
    <p>{{ user.insertTime }}</p>
    <button @click="change">change</button>
    <button @click="addAddress">add</button>
    <p>{{ user.address }}</p>

    <h1>computed</h1>
    <p>{{ reversMessage }}</p>
    <p>{{ Myshow }}</p>
    <p>{{ replaceshow }}</p>

    <h1>watch</h1>
    <button @click="isshow = !isshow">changeisshow</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data: () => ({
    msg: "hello",
    user: {
      name: "dean",
      insertTime: "2020-03-14T11:55:49",
      address: ""
    },
    isshow: "true"
  }),
  methods: {
    change() {
      this.user.name = "SUN";
    },
    addAddress() {
      this.user.address = "haerbin";
    }
  },
  computed: {
    Myshow(): string {
      return this.isshow ? "为true显示" : "为false显示";
    },
    replaceshow(): string {
      return this.user.insertTime.replace("T", " ");
    },
    reversMessage(): string {
      return this.msg
        .split("")
        .reverse()
        .join("");
    }
  },
  watch: {
    isshow(newValue, oldValue) {
      alert(`新值为${newValue},旧值为${oldValue}`);
    }
  }
});
</script>
