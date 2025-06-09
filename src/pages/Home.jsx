import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="p-10">
        <h2 className="text-3xl font-bold mb-4">Welcome to Shopee 🛒</h2>
        <p>This is your e-commerce dashboard. Products coming soon!</p>
      </div>
    </div>
  );
}
