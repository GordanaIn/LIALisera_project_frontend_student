import React, {FC, useEffect, useState} from "react";

const Home:FC<{}> = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(false);
    },[]);


    return(
        <div>
            <h1 style={{alignItems:'center', textAlign:'center'}}>Welcome</h1>
        </div>

    );
}
export default Home;
