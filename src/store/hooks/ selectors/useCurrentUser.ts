import { createSelector } from "reselect";
import IUser from "../../../types/interfaces/IUser";
import RootState from "../../store-types/RootState";
import useTypedSelector from "./useTypedSelector";

const useCurrentUser = () => {
  const currentUserSelector = createSelector<
    RootState,
    IUser | null,
    IUser | null
  >(
    state => state.user.user,
    user => user
  );

  return useTypedSelector(state => currentUserSelector(state));
};

export default useCurrentUser;
