import { ref } from "vue";

export default function useTodos() {
    const todos = ref<object[]>([]);

    // 添加 todo
    const addTodo = (todo: any) => {
        todo.content !== ""
            ? todos.value.push(todo)
            : console.log("输入不能为空");
    };

    return {
        todos,
        addTodo,
    };
}
