import { ThemeProvider } from "@material-ui/core";
import React, {FC, useState} from "react";
import theme from "../../Theme";



const StudentClient: FC<{}> = () => {
    const [jwt, setJwt] = useState(false);
    const [loading, setLoading] = useState(true);

    return(
        <ThemeProvider theme={theme}>
        <div>

        </div>
        </ThemeProvider>
    )

}
export default StudentClient;
