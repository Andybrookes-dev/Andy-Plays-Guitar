import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Auth.css";

export default function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState("");
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
    setServerError("");
  }

  function validate() {
    const newErrors = {};

    if (!form.username.trim()) newErrors.username = "Username is required";
    if (!form.password) newErrors.password = "Password is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    setServerError("");

    try {
      const res = await fetch("http://localhost:8000/api/login/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setServerError(data.detail || "Invalid username or password");
      } else {
        // store token later
        navigate("/");
      }
    } catch (err) {
      setServerError("Could not connect to server.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="auth-page">
      <div className="auth-amp-panel">
        <div className="auth-amp-header">
          <span className="auth-brand">Andy Plays Guitar</span>
          <span className="auth-label">Login</span>
        </div>

        <div className="auth-amp-body">
          <form className="auth-form" onSubmit={handleSubmit} noValidate>
            {serverError && (
              <div className="auth-error-banner">{serverError}</div>
            )}

            <div className="auth-field">
              <label htmlFor="username">Username or Email</label>
              <input
                id="username"
                name="username"
                value={form.username}
                onChange={handleChange}
                autoComplete="username"
              />
              {errors.username && (
                <p className="auth-field-error">{errors.username}</p>
              )}
            </div>

            <div className="auth-field">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                value={form.password}
                onChange={handleChange}
                autoComplete="current-password"
              />
              {errors.password && (
                <p className="auth-field-error">{errors.password}</p>
              )}
            </div>

            <button className="auth-submit" type="submit" disabled={loading}>
              {loading ? "Logging in..." : "Login"}
            </button>

            <div className="auth-links">
              <Link to="/register">Create an account</Link>
              <span>•</span>
              <Link to="/forgot-password">Forgot password</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
