import { createContext } from "react";

export const AnonymousContext = createContext({
  anonymous: false,
  setAnonymous: () => {},
});
