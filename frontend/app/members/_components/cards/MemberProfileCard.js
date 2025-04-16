import Link from "next/link";
import React from "react";
import { Card, CardBody, CardTitle, CardText, Button } from "reactstrap";

const MemberProfileCard = ({ member }) => {
  const { id, firstName, lastName, positionName } = member;

  return (
    <Card className="w-64 shadow-lg">
      <CardBody>
        <CardTitle className="text-xl font-bold mb-2">
          {firstName + " " + lastName}
        </CardTitle>
        <CardText className="text-sm text-gray-600 mb-2">
          {positionName}
        </CardText>
        {/* <CardText className="text-sm text-center mb-4">
          {bio || "Not availible"}
        </CardText> */}
      </CardBody>
    </Card>
  );
};

export default MemberProfileCard;
