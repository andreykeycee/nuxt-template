<template>
  <base-input v-model="value" :filter="filter"/>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import BaseNumberInput from '@/components/base/inputs/BaseNumberInput.vue'
import BaseInput from '@/components/base/inputs/BaseInput.vue'
import { numberFromString } from '@/helpers/numbers'

@Component({
  components: { BaseInput }
})
export default class index extends Vue {
  filter = numberFromString

  get value () {
    return this.$store.state.value
  }
  set value (value: any) {
    this.$store.commit('input', value)
  }
}
</script>