<script setup>

  import { ref, onMounted } from 'vue';
  import Swal from "sweetalert2";
  const tasks = ref([])

  // fetch tasks from localStorage
  onMounted(() => {
    const storedTasks = localStorage.getItem('tasks')
    if(storedTasks){
        tasks.value = JSON.parse(storedTasks)
    }
  })

  // shift done tasks to dione list
  function markAsDone(task){
    task.isDone = true
    updateLocalStorage()
  }

  // remove done tasks
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
  <section class="container">
      <div class="noTasks mt-5 text-center" v-show="!tasks.length">
        <p>No Tasks For Now....</p>
      </div>
      <div class="row my-5 gap-4" v-show="tasks.length">
        <!-- list on in progress task -->
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
        <!-- list of done tasks -->
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
      </div>
  </section>
    <!-- Edit Task Modal -->

</template>

<style>
  .tasks{
    height: calc(100vh - 56px); 
  }
</style>