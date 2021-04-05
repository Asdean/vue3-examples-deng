<template>
  <div>
    <p>{{ user.name }} / {{ user.address }}</p>
    <div>
      <input type="text" v-model="myUser.name" />
      <br />
      <input type="text" v-model="myUser.address" />
      <br />
      <button type="button" @click="updateUser">update</button>
    </div>
  </div>
</template>

<script lang="ts">
import { useStore } from "vuex";
import { computed, defineComponent, ref } from "vue";
import { State } from "@/store";
import { User } from "@/datasource/Types";
import { UPDATE_USER } from "@/store/VuexTypes";

export default defineComponent({
  setup() {
    const store = useStore<State>();
    const user = computed(() => store.state.user);
    const myUser = ref<User>({});
    const updateUser = () => {
      return store.commit(UPDATE_USER, {
        name: myUser.value.name,
        address: myUser.value.address
      } as User);
    };
    return {
      user,
      myUser,
      updateUser
    };
  }
});
</script>
