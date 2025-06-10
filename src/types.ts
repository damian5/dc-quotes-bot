export type Quote = {
  text: string;
  id: string;
  created_at: string;
};

export type DBError = {
  code: string;
  details: string;
  hint: null;
  message: string;
};
