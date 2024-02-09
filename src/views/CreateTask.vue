<script setup>
import Navbar from "@/components/Navbar.vue"
import router from "@/router";
import { ref } from 'vue'
import { useRouter } from 'vue-router';
import Swal from "sweetalert2";

    let task = ref({
        title : '',
        description : '',
        dueDate : '', 
        isDone : false
    })

    function submitTask() {
        let tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        if (!Array.isArray(tasks)) {
        tasks = [];
        }   
        tasks.push(task.value);
        localStorage.setItem('tasks', JSON.stringify(tasks)); // Corrected: 'tasks' to tasks
        Swal.fire({
            title: "Task Created!",
            icon: "success"
        })
        task.value = { title: '', description: '', dueDate: '' };
        router.push('/tasks')
    }

</script>

<template>
    <Navbar></Navbar>
    <div class="tasks d-flex justify-content-center align-items-center">
        <div class="form w-100 w-md-75 w-lg-50">
            <form class="d-flex flex-column gap-3" method="POST" @submit.prevent="submitTask">
            <div class="form-group">
                <label for="exampleInputTitle">Title</label>
                <input v-model="task.title" type="text" class="form-control" id="exampleInputTitle" required placeholder="Enter Task Title">
            </div>
            <div class="form-group">
                <label for="exampleInputdDescription">Description</label>
                <input v-model="task.description" type="text" class="form-control" id="exampleInputdDescription" required placeholder="Enter Task Description">
            </div>
            <div class="form-group">
                <label for="exampleInputdate">Due Date</label>
                <input v-model="task.dueDate" type="date" class="form-control" id="exampleInputdate" required>
            </div>
            <div class="d-flex flex-column flex-md-row gap-2">
                <a href="/" class="btn btn-outline-secondary flex-grow-1 mt-2 mt-md-0">Go Back</a>  
                <button type="submit" class="btn btn-outline-success flex-grow-1">Submit</button>
            </div>
            </form>
        </div>
    </div>
</template>


<style>
.tasks{
    height: calc(100vh - 56px); 
}
.form {
  max-width: 500px; /* Limit form width */
  margin: auto; /* Center form horizontally */
}
</style>   