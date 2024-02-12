<script>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
    <nav class="navbar navbar-expand-lg navbar-dark sticky-top bg-secondary">
        <div class="container">
            <a class="navbar-brand" href="/">Taskify</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" 
            data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto gap-5"> 
                    <RouterLink to="/" class="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Home</RouterLink>
                    <RouterLink to="/tasks" class="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Tasks</RouterLink>
                    <RouterLink to="/tasks/create" class="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Create</RouterLink>
                </ul>
            </div>
        </div>
    </nav>
</template>
