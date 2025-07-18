import Header from "@/components/layout/Header";
import { UserProps } from "@/interfaces";

interface UsersProps {
  users: UserProps[];
}

const Users: React.FC<UsersProps> = ({ users }) => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">User List</h2>
      <ul className="space-y-4">
        {users.map((user) => (
          <li key={user.id} className="p-4 border rounded">
            <h3 className="text-lg font-semibold">{user.name} (@{user.username})</h3>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <p>Company: {user.company.name}</p>
            <p>Website: {user.website}</p>
            <p>Address: {user.address.street}, {user.address.city}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  const posts = await response.json()

  return {
    props: {
      posts
    }
  }
}

export default Users;
