import { useLoaderData } from "react-router-dom";
import SingleCard from "../../components/SingleCard";
import { useState } from "react";

const Home = () => {
  const loadedUser = useLoaderData();
  const [users, setUsers] = useState(loadedUser);
  console.log(users);
  return (
    <section>
      <h3 className="text-3xl">Total Coffee: {users.length}</h3>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
        {users.map((user) => (
          <SingleCard users={users} setUsers={setUsers} key={user._id} user={user}></SingleCard>
        ))}
      </div>
    </section>
  );
};

export default Home;
