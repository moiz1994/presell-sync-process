import SelectPreSeller from "./SelectPreSeller";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Card from "react-bootstrap/Card";
import CardBody from "react-bootstrap/CardBody";
import CardHeader from "react-bootstrap/CardHeader";
import CardFooter from "react-bootstrap/CardFooter";
import Button from "react-bootstrap/Button";

const InputContainer = ({handleValueChange, handleDateChange, handleFetchData}) => {
    return (
        <Card>
            <CardHeader className="bg-primary">
                <h4 className="text-white">Select Pre-seller and Order Date</h4>
            </CardHeader>
            <CardBody>
                <Row>
                    <Col>
                        <SelectPreSeller onValueChange={handleValueChange} />
                    </Col>
                    <Col>
                        <Form.Control type="date" placeholder="Select Order Date" onChange={handleDateChange}/>
                    </Col>
                </Row>
            </CardBody>
            <CardFooter>
                <Button variant="primary" className="float-end" onClick={handleFetchData}>Fetch Data</Button>
                <Button variant="success" className="float-start mx-1">Sync Pending Records</Button>
            </CardFooter>
        </Card>
    );
}

export default InputContainer;