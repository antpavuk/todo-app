import { createSelector } from "reselect";
import RootState from "../../store-types/RootState";
import useTypedSelector from "./useTypedSelector";

const useToken = () => {
  const token = createSelector<RootState, string, string>(
    state => state.auth.tokenState?.token!,
    token => token
  );
  return useTypedSelector(token);
};

export default useToken;
