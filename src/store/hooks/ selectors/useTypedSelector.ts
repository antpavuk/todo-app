import { shallowEqual, useSelector } from "react-redux";
import RootState from "../../store-types/RootState";

type UseTypedSelectorCb<T> = (state: RootState) => T;

const useTypedSelector = <T>(cb: UseTypedSelectorCb<T>) => {
  return useSelector(cb, shallowEqual);
};

export default useTypedSelector;
