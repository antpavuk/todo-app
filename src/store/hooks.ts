import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import RootState from "./store-types/RootState";
import * as ActionCreators from "./ActionCreators";

type UseRootStateSelectorCb = (state: RootState) => RootState;

export const useRootStateSelector = (cb: UseRootStateSelectorCb) => {
  return useSelector(cb, shallowEqual);
};

export const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(ActionCreators, dispatch);
};
