import React, { FC, useEffect } from "react";
import { FaUserCircle } from "react-icons/fa";
import useCurrentUser from "../../store/hooks/ selectors/useCurrentUser";
import useActions from "../../store/hooks/useActions";

const CurrentUserNavItem: FC = () => {
  const { getCurrentUser } = useActions();
  const currentUser = useCurrentUser();

  useEffect(() => {
    getCurrentUser();
  }, [currentUser]);

  return (
    currentUser && (
      <div className="nav-item">
        <FaUserCircle />
        {`${currentUser?.username}, ${currentUser?.age}`}
      </div>
    )
  );
};

export default CurrentUserNavItem;
