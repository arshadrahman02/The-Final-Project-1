import { useQuery } from "@tanstack/react-query";
import React from "react";

const AllUsers = () => {
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const response = await fetch("http://localhost:5000/users");
    return response.json();
  });
  return (
    <div>
      <h1 className="text-3xl font-semibold">Total Users: {users.length}</h1>
    </div>
  );
};

export default AllUsers;
