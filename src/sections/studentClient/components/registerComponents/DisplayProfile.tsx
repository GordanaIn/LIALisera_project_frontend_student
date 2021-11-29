import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Container from "@material-ui/core/Container";
import { Avatar, ListItemSecondaryAction, ThemeProvider } from "@material-ui/core";

import React, { useState } from "react";
import theme from "../../../../Theme";
import {IStudent} from "../../interfaces/HandleInterface";

const DisplayProfile: React.FC<{}> = ({}) => {
    const [student, setStudent] = useState<IStudent>();
    return (
        <>
            <ThemeProvider theme={theme}>
            <Container maxWidth="lg">
                <List><h2> Students </h2>
                    {
                           <ListItem key={student?.studentId}>
                                FirstName: {student?.firstName} ,
                                LastName:  {student?.lastName} ,
                                Email:  {student?.email} ,
                                Phone:  {student?.phone}
                                Username:  {student?.username}

                                <ListItemSecondaryAction>
                                </ListItemSecondaryAction>
                            </ListItem>
                       // ))
                    }
                </List>
            </Container>
            </ThemeProvider>
        </>

    );
};
export default DisplayProfile;
