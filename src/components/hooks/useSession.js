import { useState, useEffect } from "react";

export const useSession = () => {
  const [loading, setLoading] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);
  const [myAccount, setMyAccount] = useState(undefined);

  useEffect(() => {
    if (localStorage.account) {
      setMyAccount(JSON.parse(localStorage.account));
      setLoggedIn(true);
    }
    setLoading(false);
  }, []);

  return { loading, loggedIn, myAccount };
};
