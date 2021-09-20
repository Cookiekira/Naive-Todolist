<template>
    <n-input size="large" round placeholder v-model:value="todoContent" @keyup.enter="emitAddTodo"></n-input>
    <n-button @click="emitAddTodo" class="absolute right-2rem" type="success" circle size="large">
        <template #icon>
            <n-icon>
                <AddOutline></AddOutline>
            </n-icon>
        </template>
    </n-button>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { NInput, NIcon, NButton } from "naive-ui";
import { AddOutline } from "@vicons/ionicons5";

const props = defineProps(["tid"]);
const emit = defineEmits(["add-todo"]);

const todoContent = ref("");

const emitAddTodo = () => {
    const todo = {
        id: props.tid,
        content: todoContent.value,
        completed: false,
    };
    emit("add-todo", todo);
    todoContent.value = "";
};
</script>
