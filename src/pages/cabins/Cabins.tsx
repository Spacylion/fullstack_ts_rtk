import Row from "../../shared/ui/Row.tsx";
import Heading from "../../shared/ui/Heading.tsx";
import CabinTable from "../../features/cabins/CabinTable.tsx";
import Button from "../../shared/ui/Button.tsx";
import {useState} from "react";
import CreateCabinForm from "../../features/cabins/CreateCabinForm.tsx";

function Cabins() {
    const [showForm, setShowForm] = useState(false)


    return (
        <>
            <Row type="horizontal">
                <Heading as="h1">All cabins</Heading>
                <p>Filter / Sort</p>
            </Row>
            <Row>
                <CabinTable/>
                <Button onClick={() => setShowForm((show) => !show)}>
                    Add new cabin
                </Button>
                {showForm && <CreateCabinForm/>}
            </Row>

        </>
    )
        ;
}

export default Cabins;
