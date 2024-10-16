import { User } from "@/types";

const Users = async () => {
  const url = "https://jsonplaceholder.typicode.com/users";
  const res = await fetch(url);

  if (!res.ok) {
    throw Error("Failed to fetch users data");
  }

  const users: [User] = await res.json();

  return (
    <div className="flex flex-col justify-start gap-2">
      {users.map((user) => {
        return (
          <div key={user.id} className="bg-yellow-100 border border-black rounded-md p-4">
            <h1>{user.name}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default Users;
