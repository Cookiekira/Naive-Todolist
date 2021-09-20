<template>
    <div>
        <n-menu
            :options="filters"
            mode="horizontal"
            @update:value="(key) => $emit('change-filter', key)"
        ></n-menu>
    </div>
</template>

<script setup lang="ts">
import { NMenu } from "naive-ui";

defineProps(["selected"]);

const filters = [
    { label: "全部", key: "all" },
    { label: "已完成", key: "done" },
    { label: "未完成", key: "todo" },
];
</script>

