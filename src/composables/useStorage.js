export function useStorage(){
    function updateLocalStorage(){
        localStorage.setItem('tasks',JSON.stringify(tasks.value))
    }
    return {updateLocalStorage}
}