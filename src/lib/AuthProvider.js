import React, { createContext, useContext, useEffect, useState } from "react";
import {
  RecaptchaVerifier,
  onAuthStateChanged,
  signInWithPhoneNumber,
  signOut,
} from "firebase/auth";
import { useNavigate } from "react-router";
import { auth } from "../firebase";

export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [OtpResult, setOtpResult] = useState();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        console.log("User");
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const handleLogin = async (OTP) => {
    console.log("abc");
    if (OtpResult) {
      const signUpData = await OtpResult.confirm(OTP);
      if (signUpData) {
        console.log(signUpData);
        // Store user data in local storage
        localStorage.setItem("firebaseUser", signUpData);
        navigate(`/tasks`);
      } else {
        console.log("Sign in Error");
      }
    }
  };

  const sendOTP = async (phno) => {
    console.log("Submit clicked");
    if (!OtpResult) {
      const captcha = new RecaptchaVerifier(auth, "recaptcha-container", {
        size: "invisible",
        callback: (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          // console.log(response);
        },
      });
      const OtpSigninResult = await signInWithPhoneNumber(
        auth,
        phno.includes("+91") ? phno : "+91" + phno,
        captcha
      );
      if (OtpSigninResult) {
        console.log("OTP sent successfully!");
        setOtpResult(OtpSigninResult);
      }
    }
  };

  const handleLogout = async () => {
    localStorage.removeItem("firebaseUser");
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        console.log("Logged out");
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };

  return (
    <AuthContext.Provider
      value={{
        sendOTP: sendOTP,
        handleLogin: handleLogin,
        logout: handleLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  return useContext(AuthContext);
}

export default AuthProvider;
