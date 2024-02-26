import React from "react";
import Title from "../components/Title";
import UnorderedList from "../components/UnorderedList";

function About() {
    return <div>
        <Title 
        name="Node JS Guide"
        collegeName={"Birla"}
        schoolName={"P.B.M"}
        rollNo={"12"}
        contactNumber={"9355639652"} />
        {/*<UnorderedList />*
        <Title name="General" />
<Title name="Node JS Core Concepts" />*/}
    </div>
}
export default About;
