import React from "react";
import { User } from "../../model";

interface Props {
  data: User;
  isLoading: boolean;
  hasError: false;
}

const defaultProps: Props = {
  data: {} as User,
  isLoading: false,
  hasError: false,
};

const ProfileDetails: React.FC<Props> = ({ data, isLoading, hasError }) => {
  const {
    credit,
    email,
    fisrtName,
    id,
    lastName,
    location,
    orders,
    password,
    phonenumebr,
  } = data;

  return (
    <div style={{ color: "red", fontSize: "1.4rem" }}>
      <div>
        <span style={{ marginRight: "1rem" }}>credit</span>
        <span>{credit}</span>
      </div>
      <div>
        <span style={{ marginRight: "1rem" }}>mail</span>
        <span>{email}</span>
      </div>
    </div>
  );
};

export default ProfileDetails;
ProfileDetails.defaultProps = defaultProps;
