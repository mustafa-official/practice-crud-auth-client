import { useLoaderData } from "react-router-dom";


const AuthUser = () => {
  const loadedUser = useLoaderData();
  return (
    <div>
      <h2>Total Auth User: {loadedUser.length}</h2>
      <table className="table">
        <thead>
          <tr className="text-[16px]">
            <th>No</th>
            <th>Email</th>
            <th>Creation Time</th>
            <th>Last SignIn</th>
          </tr>
        </thead>
        {loadedUser.map((user, idx) => (
          <tbody  key={user._id}>
            <tr>
              <th>{idx +1}</th>
              <td>{user?.email}</td>
              <td>{user?.createdAt}</td>
              <td></td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default AuthUser;
