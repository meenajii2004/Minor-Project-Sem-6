import { supabase } from '../lib/supabaseClient';

// **Sign Up Function**
export const signUp = async (email: string, password: string, name: string) => {
  const { data, error } = await supabase.auth.signUp({ email, password });

  if (error) throw error;

  // If user is created, store their info in "users" table
  const { error: dbError } = await supabase.from("users").insert([{ 
    id: data.user?.id,  // User ID from Supabase Auth
    name: name,
    email: email 
  }]);

  if (dbError) throw dbError;

  return data.user;
};

// **Login Function**
export const login = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) throw error;
  return data.user;
};

// **Logout Function**
export const logout = async () => {
  const { error } = await supabase.auth.signOut();
  if (error) throw error;
};

// **Get Current User**
export const getCurrentUser = async () => {
  const { data, error } = await supabase.auth.getUser();
  if (error) throw error;
  return data.user;
};
``
