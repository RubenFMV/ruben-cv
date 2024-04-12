import { Todo } from "@prisma/client";
import React from "react";
import styles from "./Todos.module.css";

interface TodoItemProps {
  todo: Todo;
}

export const TodoItem = ({ todo }: TodoItemProps) => {
  return (
    <>
      <div className={todo.complete ? styles.todoDone : styles.todoPending}>
        <div className="flex flex-col sm:flex-row justify-start items-center gap-4">
          <div
            className={`flex p-2 rounded-md cursor-pointer hover:bg-opacity-60
          ${todo.complete ? "bg-green-500" : "bg-red-500"}`}>
            {todo.complete ? "✅" : "❌"}
          </div>
          <div>
            <div className="text-center sm:text-left">{todo.description}</div>
          </div>
        </div>
      </div>
    </>
  );
};
