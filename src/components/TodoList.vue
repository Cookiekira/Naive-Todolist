<template>
    <n-list>
        <n-list-item
            v-for="(todo,i) in todoItem"
            :key="i"
            class="bg-light-200 rounded-3xl border m-3"
        >
            <template #prefix>
                <n-checkbox v-model:checked="todo.completed" class="ml-3"></n-checkbox>
            </template>
            <n-text
                class="text-xl cursor-pointer"
                :italic="todo.completed"
                :delete="todo.completed"
                @click="todo.completed = !todo.completed"
            >{{ todo.content }}</n-text>
            <template #suffix>
                <n-button
                    type="error"
                    circle
                    size="small"
                    @click="emit('deleteTodo', todo.id)"
                    class="mr-2"
                >
                    <n-icon>
                        <close-outline />
                    </n-icon>
                </n-button>
            </template>
        </n-list-item>
    </n-list>
</template>

<script setup lang="ts">
import { NList, NListItem, NCheckbox, NText, NIcon, NButton } from "naive-ui";
import { CloseOutline } from "@vicons/ionicons5";

const props = defineProps(["todoItem"]);
const emit = defineEmits(['deleteTodo']);

</script>
