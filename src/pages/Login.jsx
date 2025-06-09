import { useState } from "react";
import { GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginWithEmail = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login Successful!");
    } catch (error) {
      alert(error.message);
    }
  };

  const loginWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      alert("Google Login Successful!");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="p-8 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Login to Shopee</h2>
      <input
        className="border p-2 mb-2 w-full"
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="border p-2 mb-2 w-full"
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="bg-blue-500 text-white px-4 py-2 w-full mb-2" onClick={loginWithEmail}>
        Login
      </button>
      <button className="bg-red-500 text-white px-4 py-2 w-full" onClick={loginWithGoogle}>
        Login with Google
      </button>
    </div>
  );
}
