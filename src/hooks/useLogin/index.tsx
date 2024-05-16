import axios from "axios";
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import useSWR from "swr";
import { generateToken, Props } from "./type";
import { api } from "../../services/services";

const url = 'https://cms.dev.hub.directvgo.com/o/'
const id = 'id-527e2c52-dbd6-80f1-1bb2-4e9417ec3c7d'
const secret = 'secret-7a649481-bb62-cdad-20d7-3d854132a6d'
const redirecturl = 'http://localhost:5173/dashboard?pageSize=5&current=1'


const UseLoginContext = createContext({} as Props);

export const LoginProvider = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(false);
  const [, code] = window.location.href.split("code=");

  const [access_token, setAccessToken] = useState<Props>(() => {
    const token = window.localStorage.getItem("lifeary-token");
    const convertToTokenObj = token && JSON.parse(token);

    if (token) {
      return { ...convertToTokenObj, isLogged: true };
    }
    if (!code && window.location.pathname !== "/login") {
      window.location.href = "/login";
    }
    return { isLogged: false };
  });

  const getUserInformation = useCallback(async () => {
    if (!access_token.isLogged) return;
    const data = await api.get("/headless-admin-user/v1.0/my-user-account");
    console.log('data:::::::::::::::', data)
    setAccessToken((state) => ({
      ...state,
      userName: data.data.alternateName,
      image:
        data.data.image &&
        `${url?.replace("/o/", "")}${
          data.data.image
        }`,
    }));
    return data;
  }, [access_token]);

  useSWR(
    () => {
      if (access_token.userName) {
        console.log('access_token::::::::',access_token)
        return false 
      }
      return `/headless-admin-user/v1.0/my-user-account/${access_token.isLogged}`
    },
    getUserInformation
  );

  const onCode = async ({ code }: { code: string }) => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      params.append("client_id", id || "");
      params.append("client_secret", secret || "");
      params.append("grant_type", "authorization_code");
      params.append("code", code);
      params.append("redirect_uri", redirecturl || "");

      const { data } = await axios.post<generateToken>(
        `${url}/oauth2/token`,
        params
      );
      window.localStorage.setItem("lifeary-token", JSON.stringify(data));
      setAccessToken({
        ...data,
        isLogged: true,
      });
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  const logout = () => {
    window.localStorage.clear();
    setAccessToken({ isLogged: false });
    window.location.href = "/login";
  };
  const refreshToken = async () => {
    if (
      !IdleDeadline ||
      !access_token.isLogged ||
      !secret
    ) {
      return logout();
    }
    var params = new URLSearchParams();

    params.append("client_id", id);
    params.append("client_secret", secret);
    params.append("grant_type", "refresh_token");
    params.append("refresh_token", access_token.refresh_token);
    try {
      const { data } = await axios.post<generateToken>(
        `${url}/oauth2/token`,
        params
      );
      window.localStorage.setItem("lifeary-token", JSON.stringify(data));
      setAccessToken({
        ...data,
        isLogged: true,
      });
      return data;
    } catch (err) {
      return err;
    }
  };
  useEffect(() => {
    if (code) {
      onCode({ code });
    }
  }, [code]);
  if (loading) {
    return (
      <div className="mt-4">
        loading
      </div>
    );
  }
  return (
    <UseLoginContext.Provider value={{ ...access_token, logout, refreshToken }}>
      {children}
    </UseLoginContext.Provider>
  );
};

export const useLogin = () => useContext(UseLoginContext);
