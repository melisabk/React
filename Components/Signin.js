import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // useNavigate import ediyoruz
import "../Styles/signup.css";

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // useNavigate hook'u

  // Sign up yönlendirmesi
  const switchToSignup = () => {
    navigate("/signup"); // Signup sayfasına yönlendiriyoruz
  };

  // Giriş formunun submit fonksiyonu
  const handleSubmit = (e) => {
    e.preventDefault();

    // Giriş için doğrulama
    if (email && password) {
      // Başarılı giriş sonrası yönlendirme
      navigate("/status"); // Kullanıcıyı 'employees' sayfasına yönlendiriyoruz
    } else {
      alert("Lütfen tüm alanları doldurun");
    }
  };

  return (
    <div className="signin-container">
      <form onSubmit={handleSubmit}>
        <p className="form-title">Sign In</p>

        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <br />

        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <br />

        <button type="submit">Sign In</button>

        <p className="signup-redirect">
          Don't have an account?{" "}
          <button
            type="button"
            id="signupswitch-button"
            onClick={switchToSignup}
          >
            Sign Up
          </button>
        </p>
      </form>
    </div>
  );
}
