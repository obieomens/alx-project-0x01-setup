import { UserProps } from "@/interfaces";

interface UsersProps {
  user: UserProps;
}

const Users: React.FC<UsersProps> = ({ user }) => {
  return (
    <div className="max-w-xl mx-auto my-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="mb-4">
        <h2 className="text-2xl font-semibold text-gray-800">{user}</h2>
        <p className="text-sm text-gray-500">@{user.username}</p>
      </div>
      <div className="mt-4 flex flex-col gap-2 text-sm text-gray-600">
        <span><strong>Email:</strong> {user.email}</span>
        <span><strong>Phone:</strong> {user.phone}</span>
        <span><strong>Company:</strong> {user.company}</span>
        <span><strong>Website:</strong> {user.website}</span>
        <span><strong>Address:</strong> {user.address}, {user.address.city}</span>
      </div>
    </div>
  );
};

export default Users;
