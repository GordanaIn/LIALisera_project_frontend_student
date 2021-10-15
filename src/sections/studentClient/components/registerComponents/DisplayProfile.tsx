import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import EditProfile from "./EditProfile";

import Container from "@material-ui/core/Container";
import { Avatar, ListItemSecondaryAction, ThemeProvider } from "@material-ui/core";

import StudInfo from "../../mock-data/addStudent";
import React, { useState } from "react";
import theme from "../../../../Theme";

const DisplayProfile: React.FC<{}> = ({}) => {
    const [students, setStudents] = useState(StudInfo);

    return (
        <>
            <ThemeProvider theme={theme}>
            <Container maxWidth="lg">
                <List><h2> Students </h2>
                    {
                        students.map(student => (
                            <ListItem key={student.id}>
                                FirstName: {student.firstName} ,
                                LastName:  {student.lastName} ,
                                Email:  {student.email} ,
                                Phone:  {student.phone}
                                Username:  {student.user.username}
                                Password:  {student.user.password}
                                LinkedInLink:  {student.linkedInLink}
                                School Name:  {student.school}
                                Education:  {student.eduction}
                                <ListItemSecondaryAction>
                                    <EditProfile student={student}/>
                                </ListItemSecondaryAction>
                            </ListItem>
                        ))
                    }
                </List>
            </Container>
            </ThemeProvider>
        </>

    );
}
export default DisplayProfile;
