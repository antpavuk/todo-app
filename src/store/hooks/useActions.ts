import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as ActionCreators from "../ActionCreators";

const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(ActionCreators, dispatch);
};

export default useActions;
