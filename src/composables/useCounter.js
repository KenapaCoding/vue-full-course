import { ref } from "vue";

export function useCounter(initial = 0, step=1){
    const count = ref(initial)

    const increment = () => count.value += step
    const decrement = () => count.value -= step

    return { count, increment, decrement}
    
}