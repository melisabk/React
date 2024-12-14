import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // useNavigate import ediyoruz
import "../Styles/signup.css";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // useNavigate hook'u

  // Giriş yönlendirmesi
  const switchToSignin = () => {
    navigate("/"); // Signin sayfasına yönlendiriyoruz
  };

  // Sign up formunun submit fonksiyonu
  const handleSubmit = (e) => {
    e.preventDefault();

    // Kayıt için doğrulama
    if (email && password) {
      // Başarılı kayıt sonrası yönlendirme
      navigate("/status"); // Kullanıcıyı 'employees' sayfasına yönlendiriyoruz
    } else {
      alert("Lütfen tüm alanları doldurun");
    }
  };

  return (
    <div className="signin-container">
      <form onSubmit={handleSubmit}>
        <p className="form-title">Sign Up</p>

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
        <label>
          Password:
          <input
            type="passwordtwo"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <br />

        <button type="submit">Sign Up</button>

        <p className="signin-redirect">
          Already have an account?{" "}
          <button
            type="button"
            id="signin-switch-button"
            onClick={switchToSignin}
          >
            Sign In
          </button>
        </p>
      </form>
    </div>
  );
}
