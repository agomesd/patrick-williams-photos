import { createContext, useEffect, useState } from "react";
import { supabase } from "../utils/initSupabase";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([]);
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(false);
  const [currentProfile, setCurrentProfile] = useState(null);

  useEffect(() => {
    setSession(supabase.auth.session());

    supabase.auth.onAuthStateChange((event, session) => {
      setSession(session);
      console.log(session);
    });
  }, []);

  useEffect(() => {
    const getBlogs = async () => {
      let { data: Blogs, error } = await supabase
        .from("blogs")
        .select("*")
        .order("created_at", { ascending: false });
      if (error) console.log(error);
      setBlogs(Blogs);
    };
    getBlogs();
  }, []);

  useEffect(() => {
    const getProfile = async () => {
      setLoading(true);
      try {
        let { data, error } = await supabase
          .from("profiles")
          .select("*")
          .eq("userId", session?.user.id)
          .single();
        if (error) console.log(error.message);
        setCurrentProfile(data);
      } catch (error) {
        console.log("error: ", error.message);
      } finally {
        setLoading(false);
      }
    };
    getProfile();
  });

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
    currentProfile,
    loading,
    setLoading,
    session,
  };

  return <Context.Provider value={exposed}>{children}</Context.Provider>;
};

export default ContextProvider;
