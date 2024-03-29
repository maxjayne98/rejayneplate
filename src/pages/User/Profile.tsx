import React from "react";
import { useEffect } from "react";
import { useAppSelector } from "../../redux/hooks";
import DefaultLayout from "../../components/Layouts/DefaultLayout";

import {
  selectUser,
  selectUserIsLoading,
  selectUserError,
} from "../../redux/user/selector";
import { User } from "../../model";
import ProfileDetails from "../../components/Profile/ProfileDetails";
import AddCharge from "../../components/Profile/AddCharge";
import { Error } from "../../components/Lottie/Error";

interface Props {}

const Profile: React.FC = () => {
  const user: User = useAppSelector(selectUser);
  const isUserLoading: boolean = useAppSelector(selectUserIsLoading);
  const hasUserError: boolean = useAppSelector(selectUserError);

  if (hasUserError) return <Error />;
  // if (isUserLoading) return <div style={{ color: "red" }}>Loading!</div>;
  return (
    <DefaultLayout>
      <ProfileDetails
        data={user}
        isLoading={isUserLoading}
        hasError={hasUserError}
      />
      <AddCharge />
    </DefaultLayout>
  );
};

export default Profile;
