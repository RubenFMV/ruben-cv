"use client";
import { Todo } from "@prisma/client";
import React from "react";
import { TodoItem } from "./TodoItem";

interface GridTodosProps {
  todos: Todo[];
}

export const GridTodos = ({ todos }: GridTodosProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};
