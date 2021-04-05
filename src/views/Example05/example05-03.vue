<template>
  <div>
    <p>{{ user.name }} / {{ user.address }}</p>
    <div>
      <input type="text" v-model="myUser.name" />
      <br />
      <input type="text" v-model="myUser.address" />
      <br />
      <button type="button" @click="asyncUpdate">update</button>
    </div>
  </div>
</template>

<script lang="ts">
import { User } from "@/datasource/Types";
import { State } from "@/store";
import { Store, useStore } from "vuex";
import { computed, defineComponent, Ref, ref } from "vue";
import { UPDATE_USER } from "@/store/VuexTypes";

function useAsyncUpdateUser(myUser: Ref<User>, store: Store<State>) {
  const asyncUpdate = () => {
    store.dispatch(UPDATE_USER, {
      name: myUser.value.name,
      address: myUser.value.address
    } as User);
  };
  return {
    asyncUpdate
  };
}

export default defineComponent({
  setup() {
    const store = useStore<State>();
    const user = computed(() => store.state.user);
    const myUser = ref<User>({});
    const { asyncUpdate } = useAsyncUpdateUser(myUser, store);
    return {
      user,
      myUser,
      asyncUpdate
    };
  }
});
</script>
