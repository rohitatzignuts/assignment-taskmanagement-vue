<script setup>

    defineProps({
        tasks : Array
    })

    // shift done tasks to dione list
    function markAsDone(task){
    task.isDone = true
    updateLocalStorage()
    }
    function updateLocalStorage(){
        localStorage.setItem('tasks',JSON.stringify(tasks.value))
    }
</script>

<template>
    <div id="inProgress" class="col">
        <h4 class="mb-4">In Progress</h4>
        <ul v-for="task in tasks" class="row p-0 m-0">
        <li class="card col" v-if="!task.isDone">
            <article style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">{{ task.title }}</h5>
                <small class="card-subtitle mb-2 text-muted">{{ task.dueDate }}</small>
                <p class="card-text">{{  task.description }}</p>
                <a href="#" class="card-link" @click="markAsDone(task)">Done</a>
                <a href="#" class="card-link" @click="editTask(task)">Edit</a>
            </div>
            </article>
        </li>
        </ul>
    </div>
</template>