import { useFetch } from "../../hooks/useFetch";

const ListUsers = () => {
  const [loading, error, data] = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  console.log(loading, error, data);

  return (
    <div>
      <h1>Users</h1>
      <dl>
        {data?.map((user) => {
          return (
            <>
              <dt>{user.name}</dt>
              <dd>{user.email}</dd>
            </>
          );
        })}
      </dl>
    </div>
  );
};

export default ListUsers;
