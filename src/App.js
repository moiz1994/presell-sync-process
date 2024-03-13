import { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import InputContainer from "./components/InputContainer";
import OutputContainer from "./components/OutputContainer";


function App() {
  const [selectedValue, setSelectedValue] = useState(null);
  const [selectedMySQLDate, setSelectedMySQLDate] = useState(null);
  const [selectedMyOraDate, setSelectedMyOraDate] = useState(null);
  const [fetchTrigger, setFetchTrigger] = useState(false); // New state variable
  const [psrData, setPsrData] = useState(null);

  const mstSync = psrData && psrData.length > 0 ? psrData[0] : null;
  const mstPending = psrData && psrData.length > 0 ? psrData[1] : null;

  const dtlSync = psrData && psrData.length > 0 ? psrData[2] : null;
  const dtlPending = psrData && psrData.length > 0 ? psrData[3] : null;

  const ordCaseSync = psrData && psrData.length > 0 ? psrData[4] : null;
  const ordCasePending = psrData && psrData.length > 0 ? psrData[5] : null;


  // Safely access totalMstSync
  const totalMstSync = mstSync ? mstSync.totalMstSync : '0';
  const totalMstPending = mstPending ? mstPending.totalMstPending : '0';
  const totalDtlSync = dtlSync ? dtlSync.totalDtlSync : '0';
  const totalDtlPending = dtlPending ? dtlPending.totalDtlPending : '0';
  const syncedOrderCase = ordCaseSync ? ordCaseSync.syncOrderCases : '0';
  const pendingOrderCase = ordCasePending ? ordCasePending.pendingOrderCases : '0';
  

  const handleValueChange = (value) => {
    setSelectedValue(value);
    // Here you can handle the selected value as needed
  };

  const handleDateChange = (event) => {
    const date = new Date(event.target.value);
    const formattedDateShort = `${date.getDate()}-${date.toLocaleString('en-us', { month: 'short' })}-${date.getFullYear().toString().substr(-2)}`;
    const formattedDateLong = `${date.getDate()}-${date.toLocaleString('en-us', { month: 'short' })}-${date.getFullYear()}`;
    setSelectedMySQLDate(formattedDateShort);
    setSelectedMyOraDate(formattedDateLong);    
  };

  const handleFetchData = () => {
    if(selectedValue && selectedMySQLDate){
      setFetchTrigger(!fetchTrigger);
    }else{

    }
  }

  useEffect(() => {
    const fetchPSRData = async () => {      
      const url = "http://mailserver.sukkurbeverages.net:689/react/presell-sync-process/API/get_mysql_data.php";
      const data = {
          "orderDate": selectedMySQLDate,
          "username": selectedValue
      };
      const response = await fetch(url, {
          method: "POST", // *GET, POST, PUT, DELETE, etc.
          headers: {
              "Content-Type": "application/json charset=utf-8",
          },
          body: JSON.stringify(data),
      }).catch(error => {
          console.log(error);
      });

      // Read the response body as text
      const responseText = await response.text();
      // If you need to use the response as JSON, parse it here
      const responseJson = JSON.parse(responseText);
      console.log(responseJson);

      // Return the parsed JSON or the text as needed
      setPsrData(responseJson);
    }
    if(selectedValue && selectedMySQLDate){
      fetchPSRData();
    }
  }, [fetchTrigger])

  return (
    <div className="bg-dark full-height-container">
      <Container className="pt-5">
        {/*       Input Container      */}
        <InputContainer 
          handleDateChange={handleDateChange} 
          handleFetchData={handleFetchData} 
          handleValueChange={handleValueChange} />

        {/*       Output Container      */}     
        <OutputContainer 
          totalMstSync={totalMstSync}
          totalMstPending={totalMstPending}
          totalDtlSync={totalDtlSync}
          totalDtlPending={totalDtlPending}
          syncedOrderCase={syncedOrderCase}
          pendingOrderCase={pendingOrderCase}
        />        
      </Container>
    </div>
  );
}

export default App;
