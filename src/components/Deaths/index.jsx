import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";


const Deaths = ({ title, cases, total, active, isRed, ...props }) => {
    // console.log(title, active);

    return (
        <Card>
            <CardContent>
                <Typography color="textSecondary" gutterBottom>
                    Hola
                </Typography>
                <h2 className={`infoBox__cases ${!isRed && "infoBox__cases--green"}`}>
                    89325235
                </h2>
                <Typography className="infoBox__total" color="textSecondary">
                    3243424 Total
                </Typography>
            </CardContent>
        </Card>
    );
}

export default Deaths;
