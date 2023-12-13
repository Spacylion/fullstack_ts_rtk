import Row from "../../shared/ui/Row.tsx";
import Heading from "../../shared/ui/Heading.tsx";
import {useEffect} from "react";
import {getCabins} from "../../shared/api/apiCabins.ts";

function Cabins() {

    useEffect(function () {
        getCabins().then(data => console.log(data))
    }, [])
    return (
        <Row type="horizontal">
            <Heading as="h1">All cabins</Heading>
            <p>TEST</p>
        </Row>
    );
}

export default Cabins;
