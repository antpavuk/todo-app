import { createSelector } from "reselect";
import RootState from "../../store-types/RootState";
import useTypedSelector from "./useTypedSelector";

const useIsAuthorized = () => {
  const isAuthorized = createSelector<RootState, string, boolean>(
    state => state.auth.tokenState?.token!,
    token => !!token
  );

  return useTypedSelector(isAuthorized);
};

export default useIsAuthorized;
