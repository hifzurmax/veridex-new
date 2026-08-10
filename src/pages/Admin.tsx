import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ADMIN_PASSWORD = "veridex2026";

const AdminLogin = () => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      localStorage.setItem("veridex-admin", "true");
      navigate("/admin/dashboard");
    } else {
      setError(true);
    }
  };

  return (
    <main className="min-h-screen bg-paper text-ink flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <h1 className="font-display text-[32px] mb-8">Admin</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="password"
            value={password}
            onChange={(e) => { setPassword(e.target.value); setError(false); }}
            placeholder="Password"
            className="w-full px-4 py-3 border border-line-soft bg-white text-[14px] focus:outline-none focus:border-signal"
          />
          {error && <p className="text-red-500 text-[14px]">Incorrect password</p>}
          <button
            type="submit"
            className="w-full bg-ink text-paper px-4 py-3 text-[14px] font-medium hover:bg-ink/90"
          >
            Login
          </button>
        </form>
      </div>
    </main>
  );
};

export default AdminLogin;