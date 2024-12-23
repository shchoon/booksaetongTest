import { todayBooks } from "../libs/apis/todaybooks";
import { useQuery } from "@tanstack/react-query";

export const useTodayBooks = () => {
  return useQuery({ queryFn: () => todayBooks(), queryKey: ["todayBooks"] });
};