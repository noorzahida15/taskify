import React, { useState } from "react";
import OtpInput from "react-otp-input";
import { useAuth } from "../lib/AuthProvider";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { handleLogin, sendOTP } = useAuth();
  const [showOTP, setShowOTP] = useState(false);
  const [phno, setPhno] = useState("");
  const [OTP, setOTP] = useState("");
  const navigate = useNavigate();

  // const handleSubmit = () => {
  //   if (OTP.length === 0) {
  //     console.log("abc");
  //     sendOTP(phno);
  //     setShowOTP(true);
  //   } else {
  //     if (OTP.length === 6) {
  //       handleLogin(OTP);
  //     }
  //   }
  // };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-yellow-500">
      <div>
        {!showOTP ? (
          <>
            <p className="text-center text-lg">Hello!</p>
            <p className="text-xl">
              <b style={{ fontSize: "50px" }}>{" Welcome to Taskify :)"}</b>
            </p>
          </>
        ) : (
          <>
            <p className="text-xl">OTP Verification</p>
          </>
        )}
      </div>
      <div>
        <div className="mt-10">
          <p className="text-xl text-center">
            {!showOTP ? "Login/SignUp" : "Enter OTP"}
          </p>

          <form>
            {!showOTP && (
              <>
                <p className="text-lg text-center">Please enter your number</p>

                <div className="flex flex-row mt-5">
                  <div className="bg-gray-300 p-2 rounded-lg">
                    <p className="text-xl text-black text-center">+91</p>
                  </div>
                  <input
                    required
                    id="phno"
                    autoFocus
                    value={phno}
                    onChange={(e) => setPhno(e.target.value)}
                    maxLength={10}
                  />
                </div>
              </>
            )}
            {showOTP && (
              <>
                <p className="text-xl text-center">
                  OTP has been sent to {phno}
                </p>
                <OtpInput
                  value={OTP}
                  onChange={setOTP}
                  numInputs={6}
                  renderInput={(props) => (
                    <input
                      {...props}
                      inputMode="numeric"
                      className="drop-shadow-lg"
                    />
                  )}
                  containerStyle={{
                    justifyContent: "center",
                    marginTop: "0.75rem",
                  }}
                  inputStyle={{
                    border: "1px solid transparent",
                    borderRadius: "8px",
                    width: "14%",
                    height: "54px",
                    fontSize: "16px",
                    color: "#000000",
                    fontWeight: "bold",
                    caretColor: "black",
                    margin: 5,
                    backgroundColor: "#F6F6F6",
                  }}
                  shouldAutoFocus
                />
              </>
            )}
            <div id="recaptcha-container"></div>
            {!showOTP ? (
              <button
                onClick={() => {
                  console.log("Send OTP");
                  sendOTP(phno);
                  setShowOTP(true);
                }}
                className="bg-black flex self-center text-lg text-white rounded-lg px-4 py-2 mt-3 hover:bg-gray-700"
              >
                Send OTP
              </button>
            ) : (
              <button
                disabled={OTP.length !== 6}
                onClick={() => {
                  navigate("/tasks");
                }}
                className="bg-black flex self-center text-lg text-white rounded-lg px-4 py-2 mt-3 hover:bg-gray-700"
              >
                Log In
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
