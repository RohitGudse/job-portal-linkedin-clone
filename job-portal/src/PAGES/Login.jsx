export default function Login() {
  return (
    <div>
      <h2>Login</h2>
      <input placeholder="Email" />
      <input placeholder="Password" type="password" />
      <button>Login</button>
    </div>
  );
}

// =========================
// API SERVICE
// =========================
import axios from "axios";

export const getJobs = async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  return res.data;
};