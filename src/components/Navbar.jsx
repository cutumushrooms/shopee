import { useAuth } from "../context/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  return (
    <nav className="flex justify-between items-center px-4 py-3 bg-white shadow-md sticky top-0 z-50">
      <h1 className="text-xl font-bold">Shopee 🛍️</h1>
      {user ? (
        <div className="flex items-center gap-3">
          <span className="text-gray-700 text-sm">Hi, {user.email}</span>
          <button onClick={handleLogout} className="bg-red-500 text-white px-3 py-1 rounded">
            Logout
          </button>
        </div>
      ) : (
        <button
          onClick={() => navigate("/login")}
          className="bg-blue-500 text-white px-3 py-1 rounded"
        >
          Login
        </button>
      )}
    </nav>
  );
}
