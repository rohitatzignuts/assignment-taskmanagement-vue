<script setup>
    import Swal from "sweetalert2";
    
    defineProps({
        tasks : Array
    })
    function removeTask(taskRemoved){
        tasks.value = tasks.value.filter(task => task !== taskRemoved)
        Swal.fire({
                title: "Task Deleted!",
                icon: "error"
        })
        updateLocalStorage()
    }
    function updateLocalStorage(){
        localStorage.setItem('tasks',JSON.stringify(tasks.value))
    }
    
</script>

<template>
    <div id="done" class="col">
    <h4 class="mb-4">Done</h4>
    <ul v-for="task in tasks" class="row p-0 m-0">
        <li class="card col" v-if="task.isDone">
        <article style="width: 18rem;">
            <div class="card-body">
            <h5 class="card-title">{{ task.title }}</h5>
            <small class="card-subtitle mb-2 text-muted">{{ task.dueDate }}</small>
            <p class="card-text">{{  task.description }}</p>
            <a href="#" class="card-link" @click="removeTask(task)">Delete</a>
            </div>
        </article>
        </li>
    </ul>
    </div>
</template>