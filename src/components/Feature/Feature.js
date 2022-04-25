import React from "react";
import Card from "@material-tailwind/react/Card";
import CardImage from "@material-tailwind/react/CardImage";
import CardBody from "@material-tailwind/react/CardBody";
import CardFooter from "@material-tailwind/react/CardFooter";
import H6 from "@material-tailwind/react/Heading6";
import Paragraph from "@material-tailwind/react/Paragraph";
import Button from "@material-tailwind/react/Button";
import { Link } from "react-router-dom";

const Feature = (props) => {
  const { id, name, img } = props.feature;
  return (
    <Card>
    <CardImage
        src={img}
        alt="Card Image"
    />

    <CardBody>
        <H6 color="gray">{name}</H6>
        <Paragraph color="gray">
            Don't be scared of the truth because we need to restart the human
            foundation in truth...
        </Paragraph>
    </CardBody>

    <CardFooter>
    <Link to='/services'>
    <Button color="lightBlue" size="lg" ripple="light">
            Show More
        </Button>
    </Link>
        
    </CardFooter>
</Card>
  );
};

export default Feature;
