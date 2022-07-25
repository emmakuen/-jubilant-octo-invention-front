import {
  useContext,
  createContext,
  useState,
  useEffect,
  useCallback,
  useMemo,
} from "react";
import * as userService from "../services/user";
import useLocalStorage from "../hooks/useLocalStorage";
import * as socketConnection from "../socket/socketConnection";

const LOCAL_STORAGE_KEY = "comment-ui-user";

export const UsersContext = createContext();

export const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useLocalStorage(LOCAL_STORAGE_KEY, null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const _fetchUsers = async () => {
      setLoading(true);
      try {
        socketConnection.connectWithSocketServer();
        const usersData = await userService.getUsers();
        setUsers(usersData);
      } catch (err) {
        setError(err);
        console.error(err);
      }
      setLoading(false);
    };

    _fetchUsers();
  }, []);

  const login = useCallback((userData) => setUser(userData), [setUser]);

  const value = useMemo(
    () => ({ users, user, loading, login, error }),
    [error, loading, login, user, users]
  );

  return (
    <UsersContext.Provider value={value}>{children}</UsersContext.Provider>
  );
};

export const useUsers = () => useContext(UsersContext);
