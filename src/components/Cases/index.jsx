import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const Cases = ({ title, cases, total, active, isRed, ...props }) => {
    return (
        <Card
            onClick={props.onClick}
            className={`infoBox ${active && 'infoBox--selected'} ${
                isRed && 'infoBox--red'
            }`}
        >
            <CardContent>
                <Typography color="textSecondary" gutterBottom>
                    {title}
                </Typography>
                <h2
                    className={`infoBox__cases ${
                        !isRed && 'infoBox__cases--green'
                    }`}
                >
                    {cases}
                </h2>
                <Typography className="infoBox__total" color="textSecondary">
                    {total} Total
                </Typography>
            </CardContent>
        </Card>
    );
};

Cases.displayName = 'Cases';
export default Cases;
