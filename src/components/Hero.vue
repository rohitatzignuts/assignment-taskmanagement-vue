<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>
<template>
    <div class="jumbotron jumbotron-fluid bg-dark text-light hero d-flex justify-content-center align-items-center">
        <div class="container">
            <h1 class="display-4">Welcome to Taskify</h1>
            <p class="lead">Streamline your productivity, organize your day, and conquer your goals 
                <br>with Taskify – the ultimate task management platform designed to simplify your life.</p>
                <div class="d-flex gap-2">
                    <RouterLink to="/tasks/create" class="btn btn-outline-success">Create A Task</RouterLink>
                    <RouterLink to="/tasks" class="btn btn-outline-light">View all tasks</RouterLink>
                </div>
        </div>
    </div>
</template>
<style>
.hero{
    height: calc(100vh - 56px); 
}
</style>