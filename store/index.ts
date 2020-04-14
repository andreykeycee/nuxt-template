export const state = (): RootState => ({
  value: 'hello world'
})

export const mutations = {
  input: (state: RootState, value: any) => {
    state.value = value
  }
}

type RootState = {
  value: string
}