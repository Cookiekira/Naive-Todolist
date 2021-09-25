import { ref } from "vue";

export default function useTodos() {
    const todos = ref<any[]>([]);
    todos.value = JSON.parse(localStorage.todos);

    // 添加 todo
    const addTodo = (todo: { content: string }) => {
        todo.content !== ""
            ? todos.value.push(todo)
            : console.log("输入不能为空");
        localStorage.todos = JSON.stringify(todos.value);
    };
    //根据时间戳删除
    const deleteTodo = (id: number) => {
        todos.value.splice(
            todos.value.findIndex((todo) => todo.id === id),
            1
        );
        localStorage.todos = JSON.stringify(todos.value);
    };

    return {
        todos,
        addTodo,
        deleteTodo,
    };
}
