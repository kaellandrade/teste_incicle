import React from "react";

/**
 * Componente de convidados.
 */
const ProfilePeople = ({ name, avatar }) => {
  return (
    <div className="profile-invit">
      <img className="img-fluid" title={name} alt={name} src={avatar} />
    </div>
  );
};

export default ProfilePeople;
