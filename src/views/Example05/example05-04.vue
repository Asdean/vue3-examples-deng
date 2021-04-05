<template>
  <div>
    <p>基于mapState获取user属性值</p>
    <br />
    <p>{{ user.name }} / {{ user.address }} / {{ user.level }}</p>
    <br />
    <p>基于setup()绑定</p>
    <span v-if="premissionGetter1(1)">
      调用方法premissionGetter1，用户权限为1显示
    </span>
    <br />
    <span v-if="premissionGetter1(2)">
      调用方法premissionGetter1，用户权限为2显示
    </span>
    <br />
    <span v-if="premissionGetter2(1)">
      调用方法premissionGetter2，用户权限为1显示
    </span>
    <br />
    <span v-if="premissionGetter2(2)">
      调用方法premissionGetter2，用户权限为2显示
    </span>
    <br />
    <p>基于mapGetters辅助函数绑定</p>
    <span v-if="premission(1)">
      调用方法premission，用户权限为1显示
    </span>
    <br />
    <span v-if="premission(2)">
      调用方法premission，用户权限为2显示
    </span>
  </div>
</template>

<script lang="ts">
import { mapGetters, mapState, Store, useStore } from "vuex";
import { computed, defineComponent } from "vue";
import { State } from "@/store";
import { GETTER_PREMISSION } from "@/store/VuexTypes";

export default defineComponent({
  setup() {
    const store: Store<State> = useStore();
    const premissionGetter1 = computed(() => store.getters.premission);
    const premissionGetter2 = computed(() => store.getters[GETTER_PREMISSION]);
    return {
      premissionGetter1,
      premissionGetter2
    };
  },
  computed: {
    ...mapState(["user"]),
    ...mapGetters(["premission"])
  }
});
</script>
