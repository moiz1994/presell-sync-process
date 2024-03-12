import { useState } from "react";
import SelectPreSeller from "./components/SelectPreSeller";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Card from "react-bootstrap/Card";
import CardBody from "react-bootstrap/CardBody";
import CardHeader from "react-bootstrap/CardHeader";


function App() {
  const [selectedValue, setSelectedValue] = useState(null);
  const [selectedMySQLDate, setSelectedMySQLDate] = useState(null);
  const [selectedMyOraDate, setSelectedMyOraDate] = useState(null);

  const handleValueChange = (value) => {
    setSelectedValue(value);
    console.log("Selected value:", value);
    // Here you can handle the selected value as needed
  };

  const handleDateChange = (event) => {
    const date = new Date(event.target.value);
    const formattedDateShort = `${date.getDate()}-${date.toLocaleString('en-us', { month: 'short' })}-${date.getFullYear().toString().substr(-2)}`;
    const formattedDateLong = `${date.getDate()}-${date.toLocaleString('en-us', { month: 'short' })}-${date.getFullYear()}`;
    setSelectedMySQLDate(formattedDateShort);
    setSelectedMyOraDate(formattedDateLong);    
  };

  return (
    <div className="bg-dark full-height-container">
      <Container className="pt-5">
        {/*       Input Container      */}
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
        </Card>

        {/*       Output Container      */}      
        <Row className="mt-4">
          <Col md={3} >
            <div className="grad1 px-2 pb-5 pt-2 rounded text-white">
              <h4>Total Master Synced</h4>
              <h6>123</h6>
            </div>
          </Col>

          <Col md={3} >
            <div className="grad2 px-2 pb-5 pt-2 rounded text-white">
              <h4>Total Master Pending</h4>
              <h6>123</h6>
            </div>
          </Col>

          <Col md={3}>
            <div className="grad3 px-2 pb-5 pt-2 rounded text-white">
              <h4>Total Detail Synced</h4>
              <h6>123</h6>
            </div>
          </Col>

          <Col md={3}>
            <div className="grad4 px-2 pb-5 pt-2 rounded text-white">
              <h4>Total Detail Pending</h4>
              <h6>123</h6>
            </div>
          </Col>
          
        </Row>
        {/* <Card className="mt-5">

          <CardHeader className="bg-primary">
            <h4 className="text-white">Total Order Cases</h4>
          </CardHeader>

          <CardBody>
            <Row className="text-center">

              <Col>
                <Form.Label htmlFor="synced">Total Synced Order Cases</Form.Label>
                <Form.Text id="synced">{}</Form.Text>              
              </Col>

              <Col>
                <Form.Label htmlFor="not-synced">Total Not Synced Order Cases</Form.Label>
                <Form.Text id="not-synced">{}</Form.Text>
              </Col>

            </Row>

          </CardBody>

        </Card> */}
          
      </Container>
    </div>
  );
}

export default App;
