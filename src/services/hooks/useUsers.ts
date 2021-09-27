import { useQuery, UseQueryOptions } from "react-query";
import { api } from "../api";

const TEN_MINUTES_IN_MILLISECONDS = 1000 * 60 * 10;

type User = {
  id: string;
  name: string;
  email: string;
  createdAt: string;
}

type GetUserResponse = {
  totalCount: number;
  users: User[];
}

export async function getUsers(page: number): Promise<GetUserResponse> {
  const { data, headers } = await api.get("users", {
    params: {
      page
    }
  });

  const totalCount = Number(headers["x-total-count"])

  const users = data.users.map((user) => {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      createdAt: new Date(user.created_at).toLocaleDateString("en-AU", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }),
    };
  });
  return { users, totalCount };
}

export function useUsers(page: number) {
  return useQuery(["users", page], () => getUsers(page), {
    staleTime: TEN_MINUTES_IN_MILLISECONDS
  });
}
