import { ThemeProvider } from "@material-ui/core";
import React, {FC, useEffect, useState} from "react";
import theme from "../../Theme";



const StudentClient: FC<{}> = () => {
    const [jwt, setJwt] = useState(false);
    const [loading, setLoading] = useState(true);
    const [nav, setNav] = useState("home");
    const [upload, setUpload] = useState({});

   /* useEffect(() => {
        const setJSONWebToken async() => {
            return await localStorage.getItem("jwt");
        };
        setJSONWebToken().then(() => {
            setJwt(JSON.parse(result));
            setLoading(false);
        });
    }, []);*/

    const logOut = () => {
        localStorage.clear();
        setNav("logout");
    };

  /*  const uploadFile = (result) => {
        if (result === "file") {
            setNav(result);
        } else {
            setNav("uploadFile")
        }
    }*/

    return  (
        <ThemeProvider theme={theme}>
        <div>
          {/*  {jwt.role.indexOf("ROLE_STUDENT") > -1 ? (
            ) : (
            )}
            ):()}*/}

        </div>
        </ThemeProvider>
    )

}
export default StudentClient;
