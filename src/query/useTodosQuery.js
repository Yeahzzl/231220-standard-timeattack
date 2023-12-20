import { useMutation } from "react-query";
import { addTodo, removeTodo, switchTodo } from "../api/todos";

export const useTodosQuery = () => {
  const useAddMutation = () => useMutation(addTodo);
  const useDeleteMutation = () => useMutation(removeTodo);
  const useSwitchMutation = () => useMutation(switchTodo);
  return { useAddMutation, useDeleteMutation, useSwitchMutation };
};
