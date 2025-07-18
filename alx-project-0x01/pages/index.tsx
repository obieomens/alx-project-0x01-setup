import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import { UserProps } from "@/interfaces";

const sampleUsers: UserProps[] = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496",
      },
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets",
    },
  },
];

const Home: React.FC = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex-grow flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 gap-10 p-8">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white">
            Welcome to our Application!
          </h1>
          <p className="mt-4 text-xl text-white">
            We're glad you're here. Explore and enjoy your experience.
          </p>
          <button className="mt-6 px-6 py-3 bg-white text-blue-500 rounded-full font-semibold hover:bg-gray-200 transition">
            Get Started
          </button>
        </div>

        <div className="bg-white p-6 rounded-md shadow-md w-full max-w-4xl">
          <UserCard user={sampleUsers} />
        </div>
      </main>
    </div>
  );
};

export default Home;
