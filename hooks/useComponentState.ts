import { readonly, ref } from '@vue/composition-api'

export default function useComponentState(initialState: any) {
  const state = ref(initialState)
  const setState = (newState: any) => {
    state.value = newState
  }

  return [readonly(state), setState]
}
