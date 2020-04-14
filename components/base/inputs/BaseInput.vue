<template>
  <input
    :value="inputValue"
    ref="input"
    @input="setValue"
  />
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

type InputValue = string | number

@Component({})
export default class BaseInput extends Vue {
  @Prop({ default: '' }) value!: InputValue
  @Prop({
    default: (value: string) => value
  }) filter!: (value: string) => string

  $refs!: {
    input: HTMLInputElement
  }

  get inputValue () {
    return this.value
  }
  setValue (event: InputEvent) {
    const rawValue = event && (event.target as HTMLInputElement).value
    const value = this.filter(rawValue)

    this.$refs.input.value = value
    this.$emit('input', value)
  }
}
</script>

<style lang="sass" scoped>

</style>