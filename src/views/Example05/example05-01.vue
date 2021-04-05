<template>
  <div>
    <h1>state</h1>
    <p>
      可在视图直接通过$store.state直接获取state中的数据。
      <br />
      {{ $store.state.user.name }} / {{ $store.state.user.address }}
    </p>
    <hr />
    <p>
      通过计算属性绑定state数据，当state数据改变时，触发计算使视图响应式改变
      <br />
      在组件setup()函数，通过useStore()函数获取store对象，再获取state对象
    </p>
    <p>{{ userS.name }} / {{ userS.address }}</p>
    <hr />
    <p>
      基于vuex的mapState辅助函数及对象扩展符，声明绑定组件计算属性。在setup()函数外部声明
      <br />
      {{ user.name }} / {{ user.address }}
      <br />
    </p>
    <hr />
    <button type="button" @click="updateUser">update</button>
  </div>
</template>

<script lang="ts">
import { User } from "@/datasource/Types";
import { State } from "@/store";
import { computed, defineComponent } from "vue";
import { mapState, Store, useStore } from "vuex";

export default defineComponent({
  setup() {
    const store: Store<State> = useStore();
    const userS = computed(() => store.state.user);
    const updateUser = () => {
      store.commit("updateUser", {
        name: "dean",
        address: "952"
      } as User);
    };
    return {
      userS,
      updateUser
    };
  },
  computed: {
    ...mapState(["user"])
  }
});
</script>
