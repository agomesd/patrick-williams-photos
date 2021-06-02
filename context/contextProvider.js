import { createContext, useEffect, useState } from "react";
import { supabase } from "../utils/initSupabase";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([]);
  const [session, setSession] = useState();

  useEffect(() => {
    setSession(supabase.auth.session());

    supabase.auth.onAuthStateChange((event, session) => {
      setSession(session);
      console.log(session);
    });
  }, []);

  useEffect(() => {
    const getBlogs = async () => {
      let { data: Blogs, error } = await supabase.from("Blogs").select("*");
      if (error) console.log(error);
      setBlogs(Blogs);
      console.log(Blogs);
    };
    getBlogs();
  }, []);

  const signUp = (email, password) => {
    return supabase.auth.signUp({ email, password });
  };

  const signIn = (email, password) => {
    return supabase.auth.signIn({ email, password });
  };

  const signOut = (token) => {
    return supabase.auth.signOut(token);
  };

  const createProfile = async (userId, email) => {
    return await supabase.from("profiles").upsert([{ userId, email }]);
  };

  const exposed = {
    blogs,
    signUp,
    signIn,
    signOut,
    createProfile,
    session,
  };

  return <Context.Provider value={exposed}>{children}</Context.Provider>;
};

export default ContextProvider;
