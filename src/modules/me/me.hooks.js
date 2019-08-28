import { useContext } from "react";
import { postLogin } from "./me.api";
import { MyContext } from "./me.context";

export const useMyStore = () => {
  const [state, setState] = useContext(MyContext);

  const me = state.me;

  const isLoading = state.isLoading;
  const hasErrored = state.hasErrored;

  const setMe = newMe => {
    setState(oldState => ({ ...oldState, me: newMe }));
  };

  const setLoading = value => {
    setState(oldState => ({ ...oldState, isLoading: value }));
  };

  const setHasErrored = value => {
    setState(oldState => ({ ...oldState, hasErrored: value }));
  };

  const login = async (name, password) => {
    try {
      setLoading(true);
      setHasErrored(false);
      const newMe = await postLogin(name);
      setMe(newMe);
    } catch (error) {
      setHasErrored(true);
      console.log("Error during login", { error });
    } finally {
      setLoading(false);
    }
  };

  return {
    me,
    login,
    isLoading,
    hasErrored
  };
};
