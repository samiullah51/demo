import React, { useState } from "react";
import { publicRequest } from "../../requestMethods";
import { profileImages } from "./profileImage";
import "./Register.css";
import { useNavigate } from "react-router";
function Register() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [birthDay, setBirthDay] = useState("");
  const [birthMonth, setBirthMonth] = useState("");
  const [birthYear, setBirthYear] = useState("");
  const [gender, setGender] = useState("");
  // Error
  const [error, setError] = useState("");
  // Navigate Hook
  const navigate = useNavigate();

  // User Registration
  const handleRegistration = async () => {
    if (
      !fullName ||
      !email ||
      !password ||
      !cpassword ||
      !birthDay ||
      !birthMonth ||
      !birthYear ||
      !gender
    ) {
      setError("Please fill the required fields");
      return false;
    } else if (password !== cpassword) {
      setError("Confirm password does not match");
      return false;
    } else {
      try {
        const newUser = await publicRequest.post("/user/register", {
          profileImage: profileImages[Math.floor(Math.random(0, 19) * 19)],
          fullName,
          email,
          password,
          dob: birthDay + " " + birthMonth + ", " + birthYear,
          gender,
        });
        navigate("/login");
      } catch (err) {
        console.log(err.response.data);
      }
    }
  };

  const days = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const years = [];
  for (var i = 1990; i <= 2022; i++) {
    years.push(i);
  }
  return (
    <div className="register">
      <div className="overlay">
        <div className="register__form">
          <h2 className="logo">SERB</h2>
          <p className="desc">
            Register Yourself to Sell, Exchange or Buy Products
          </p>
          {/* inputs */}
          <div className="inputs">
            <div className="inputs__box">
              <p>Full Name</p>
              <input
                type="text"
                placeholder="Example"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>
            <div className="inputs__box">
              <p>Email</p>
              <input
                type="text"
                placeholder="someone@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="inputs__box">
              <p>Password</p>
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="inputs__box">
              <p>Confirm Password</p>
              <input
                type="password"
                placeholder="••••••••"
                value={cpassword}
                onChange={(e) => setCpassword(e.target.value)}
              />
            </div>
            {/* DOB */}
            <div className="inputs__box" style={{ width: "100%" }}>
              <p>Date of Birth</p>
              <select onChange={(e) => setBirthDay(e.target.value)}>
                <option hidden>DD</option>
                {days.map((d) => (
                  <option value={d < 10 ? `0${d}` : d}>
                    {d < 10 ? `0${d}` : d}
                  </option>
                ))}
              </select>
              <select onChange={(e) => setBirthMonth(e.target.value)}>
                <option hidden>MM</option>
                {months.map((m) => (
                  <option value={m}>{m}</option>
                ))}
              </select>
              <select onChange={(e) => setBirthYear(e.target.value)}>
                <option hidden>YY</option>
                {years.map((y) => (
                  <option value={y}>{y}</option>
                ))}
              </select>
            </div>

            {/* Gender */}
            <div className="inputs__box" style={{ width: "100%" }}>
              <p>Gender</p>
              <select onChange={(e) => setGender(e.target.value)}>
                <option hidden>Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <p style={{ fontSize: "13px", color: "var(--primary-color)" }}>
              By clicking Sign Up, you agree to our Terms, Privacy Policy and
              Cookies Policy. You may receive SMS notifications from us and can
              opt out at any time.
            </p>
            {/* Form Footer */}
            <div className="form__footer">
              <button onClick={handleRegistration}>Register Now</button>
              <p>
                Already have an account? <span>Login</span> here.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
