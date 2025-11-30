import { ref, onMounted } from "vue";

export default function useFetch(url){
    const data = ref(null)
    const error = ref(null)
    const loading = ref(true)

    onMounted(async ()=> {
        try {
            const res = await fetch(url)
            data.value = await res.json()
        } catch (err) {
            error.value = err
        } finally {
            loading.value = false
        }
    })

    return {data, error,loading}
}