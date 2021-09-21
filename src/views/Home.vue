<template>
  <div class="grid justify-center">
    <n-card
      size="large"
      class="bg-true-gray-100 rounded-4xl shadow-xl md:min-w-screen-md sm:min-w-screen-sm"
    >
      <template #header>
        <n-h1 prefix="bar">Naive Todolist</n-h1>
      </template>
      <TodoAdd @add-todo="addTodo"></TodoAdd>
      <TodoFilter @change-filter="filter = $event"></TodoFilter>
      <TodoList @delete-todo="deleteTodo" :todo-item="filteredTodos"></TodoList>
    </n-card>
  </div>
</template>

<script lang="ts" setup>
import { NCard, NH1 } from "naive-ui"

import TodoFilter from "../components/TodoFilter.vue"
import TodoList from "../components/TodoList.vue"
import TodoAdd from "../components/TodoAdd.vue"
import useTodos from "../composables/useTodos";
import useFilteredTodos from "../composables/useFilteredTodos";

const { todos, addTodo, deleteTodo } = useTodos();
const { filter, filteredTodos } = useFilteredTodos(todos);
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: Helvetica, "PingFang SC", "Microsoft Yahei", sans-serif;
}
</style>