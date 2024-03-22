import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import InputContainer from "./components/InputContainer";
import OutputContainer from "./components/OutputContainer";
import Loader from "./components/Loader";
import { getPSRData } from "./httpRequest/http";

function App() {
  const [selectedValue, setSelectedValue] = useState(null);
  const [selectedMySQLDate, setSelectedMySQLDate] = useState(null);
  const [selectedMyOraDate, setSelectedMyOraDate] = useState(null);
  const [fetchTrigger, setFetchTrigger] = useState(false); // New state variable
  const [postTrigger, setPostTrigger] = useState(false); // New state variable
  const [psrData, setPsrData] = useState(null);
  const [loading, setLoading] = useState(false);

  const mstSync = psrData && psrData.length > 0 ? psrData[0] : null;
  const mstPending = psrData && psrData.length > 0 ? psrData[1] : null;

  const dtlSync = psrData && psrData.length > 0 ? psrData[2] : null;
  const dtlPending = psrData && psrData.length > 0 ? psrData[3] : null;

  const ordCaseSync = psrData && psrData.length > 0 ? psrData[4] : null;
  const ordCasePending = psrData && psrData.length > 0 ? psrData[5] : null;

  const mstSyncBk = psrData && psrData.length > 0 ? psrData[6] : null;
  const dtlSyncBk = psrData && psrData.length > 0 ? psrData[7] : null;
  const ordCaseSyncBk = psrData && psrData.length > 0 ? psrData[8] : null;

  // Safely access totalMstSync
  const totalMstSync = mstSync ? mstSync.totalMstSync : "0";
  const totalMstPending = mstPending ? mstPending.totalMstPending : "0";
  const totalDtlSync = dtlSync ? dtlSync.totalDtlSync : "0";
  const totalDtlPending = dtlPending ? dtlPending.totalDtlPending : "0";
  const syncedOrderCase = ordCaseSync ? ordCaseSync.syncOrderCases : "0";
  const pendingOrderCase = ordCasePending
    ? ordCasePending.pendingOrderCases
    : "0";
  const totalMstBk = mstSyncBk ? mstSyncBk.totalMstSyncBk : "0";
  const totalDtlBk = dtlSyncBk ? dtlSyncBk.totalDtlSyncBk : "0";
  const syncedOrderCaseBk = ordCaseSyncBk
    ? ordCaseSyncBk.syncOrderCasesBk
    : "0";

  const handleValueChange = (value) => {
    setSelectedValue(value);
    // Here you can handle the selected value as needed
  };

  const handleDateChange = (event) => {
    const date = new Date(event.target.value);
    const formattedDateShort = `${date.getDate()}-${date.toLocaleString(
      "en-us",
      { month: "short" }
    )}-${date.getFullYear().toString().substr(-2)}`;
    const formattedDateLong = `${date.getDate()}-${date.toLocaleString(
      "en-us",
      { month: "short" }
    )}-${date.getFullYear()}`;
    setSelectedMySQLDate(formattedDateShort);
    setSelectedMyOraDate(formattedDateLong);
  };

  const handleFetchData = () => {
    if (selectedValue && selectedMySQLDate) {
      setFetchTrigger(!fetchTrigger);
    }
  };

  const handleSyncData = () => {
    if (selectedValue && selectedMyOraDate) {
      setFetchTrigger(!postTrigger);
    }
  };

  useEffect(() => {
    const fetchPSRData = async () => {
      setLoading(true);
      const psrDataResponse = await getPSRData(
        selectedMySQLDate,
        selectedValue
      );

      setLoading(false);
      const responseJson = JSON.parse(psrDataResponse);
      console.log(responseJson);

      setPsrData(responseJson);
    };
    if (selectedValue && selectedMySQLDate) {
      fetchPSRData();
    }
  }, [fetchTrigger]);

  useEffect(() => {
    const postData = async () => {
      setLoading(true);
      const postDataResponse = await getPSRData(
        selectedMyOraDate,
        selectedValue
      );

      setLoading(false);
      console.log(postDataResponse);
    };
    if (selectedValue && selectedMySQLDate) {
      postData();
    }
  }, [postTrigger]);

  return (
    <div>
      {loading ? (
        <Loader loading={loading} />
      ) : (
        <div className="bg-dark full-height-container">
          <Container className="pt-5">
            {/*       Input Container      */}
            <InputContainer
              handleDateChange={handleDateChange}
              handleFetchData={handleFetchData}
              handleValueChange={handleValueChange}
              handleSyncData={handleSyncData}
            />

            {/*       Output Container      */}
            <OutputContainer
              totalMstSync={totalMstSync}
              totalMstPending={totalMstPending}
              totalDtlSync={totalDtlSync}
              totalDtlPending={totalDtlPending}
              syncedOrderCase={syncedOrderCase}
              pendingOrderCase={pendingOrderCase}
              totalMstBk={totalMstBk}
              totalDtlBk={totalDtlBk}
              orderCaseBk={syncedOrderCaseBk}
            />
          </Container>
        </div>
      )}
    </div>
  );
}

export default App;
