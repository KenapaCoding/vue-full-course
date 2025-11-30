import { nextTick, ref } from "vue";

export function useCounter(initial = 0, step=1){
    const count = ref(initial)
    const box = ref(null)

    const increment = async () => {
        count.value += step
        await nextTick()
        console.log(`data : ${count.value}`)
        console.log(`dom : ${box.value.innerText}`)
    }
    const decrement = () => count.value -= step

    return { box,count, increment, decrement}
    
}