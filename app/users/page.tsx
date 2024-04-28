import React from "react";

interface User {
  id: number;
  name: string;
}

const UsersPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    // next: { revalidate: 10 }, // Next Js will run a background job and hit the endpoint every 10s
  });
  const users: User[] = await res.json();

  return (
    <>
      <h1>Users</h1>
      <ul>
        {users?.map((user) => {
          return <li key={user.id}>{user.name}</li>;
        })}
      </ul>
    </>
  );
};

export default UsersPage;
