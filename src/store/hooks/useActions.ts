import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as AuthActionCreators from "../action-creators/authActionCreators";
import * as UserActionCreators from "../action-creators/userActionCreators";
import * as TodoActionCreators from "../action-creators/todoActionCreators";
import * as FilterTodoActivityActionCreators from "../action-creators/filterTodoActivityActionCreators";

const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(
    {
      ...AuthActionCreators,
      ...UserActionCreators,
      ...TodoActionCreators,
      ...FilterTodoActivityActionCreators,
    },
    dispatch
  );
};

export default useActions;
