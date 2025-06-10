import { supabase } from "./db";

export async function fetchAllQuotes() {
  const { data, error } = await supabase.from("quotes").select("*");
  if (error) {
    throw error;
  }
  return data;
}

export const addQuote = async (text: string) => {
  const { data, error } = await supabase
    .from("quotes")
    .insert([{ text }])
    .select();
  if (error) {
    throw error;
  }
  return data[0];
};

export async function deleteQuoteById(id: string) {
  const { data, error } = await supabase.from("quotes").delete().eq("id", id);
  if (error) {
    throw error;
  }
  return data;
}

export const fetchQuoteById = async (id: string) => {
  const { data, error } = await supabase
    .from("quotes")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    throw error;
  }
  return data;
};
