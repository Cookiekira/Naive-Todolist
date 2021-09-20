<template>
    <n-list>
        <n-list-item
            v-for="todo in todoItem"
            :key="todoItem.id"
            class="bg-light-200 rounded-3xl border m-3 cursor-pointer"
            @click="todo.completed = !todo.completed"
        >
            <template #prefix>
                <n-checkbox :checked="todo.completed" class="ml-3"></n-checkbox>
            </template>
            <n-text
                class="text-xl"
                :italic="todo.completed"
                :delete="todo.completed"
            >{{ todo.content }}</n-text>
        </n-list-item>
    </n-list>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { NList, NListItem, NCheckbox, NText } from "naive-ui";

const props = defineProps(["todoItem"]);
</script>
