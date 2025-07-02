"use client";
import { signinApi, signupApi } from "@/services/authServices";
import { useRouter } from "next/navigation";
import { createContext, useContext, useReducer } from "react";
import toast from "react-hot-toast";

const AuthContext = createContext();

const initialState = {
  user: null,
  isAuthenticated: false,
  isLoading: true,
  error: null,
};

const authReducer = (state, action) => {
  switch (action.type) {
    case "loading":
      return {
        ...state,
        isLoading: true,
      };

    case "rejected":
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };

    case "signin":
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
      };
    case "signup":
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
      };
  }
};

export default function AuthProvider({ children }) {
    const router = useRouter();
  const [{ user, isAuthenticated, isLoading, error }, dispatch] = useReducer(
    authReducer,
    initialState
  );
  const signup = async (values) => {
    dispatch({ type: "loading" });
    try {
      const { user, message } = await signupApi(values);
      dispatch({ type: "signup", payload: user });
      toast.success(message);
      router.push("/profile");
    } catch (error) {
      const errorMsg = error.response?.data?.message;
      dispatch({ type: "rejected", payload: errorMsg });
      toast.error(errorMsg);
    }
  };
  const signin = async (values) => {
    dispatch({ type: "loading" });
    try {
      const { user, message } = await signinApi(values);
      dispatch({ type: "signin", payload: user });
      toast.success(message);
    } catch (error) {
      const errorMsg = error.response?.data?.message;
      dispatch({ type: "rejected", payload: errorMsg });
      toast.error(errorMsg);
    }
  };
  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, isLoading, signup, signin }}
    >
      {children}
    </AuthContext.Provider>
  );
}
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    // context will be undefined when you try to use top level which is not correct.
    throw new Error("not found auth context");
  }
  return context;
};
