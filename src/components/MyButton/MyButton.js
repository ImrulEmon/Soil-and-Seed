import React from "react";
import Button from "@material-tailwind/react/Button";

export default function MyButton(props) {
    
    return (
        <Button
            color="lightBlue"
            buttonType="outline"
            size="lg"
            rounded={false}
            block={true}
            iconOnly={false}
            ripple="dark"
            margin='1%'
            onClick={props.details}
        >
            Learn More!
        </Button>
    )
}