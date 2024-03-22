import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const OutputContainer = ({
  totalMstSync,
  totalMstPending,
  totalDtlSync,
  totalDtlPending,
  syncedOrderCase,
  pendingOrderCase,
  totalMstBk,
  totalDtlBk,
  orderCaseBk,
}) => {
  return (
    <>
      <Row className="mt-4">
        <Col md={3}>
          <div className="grad1 px-2 pb-5 pt-2 rounded text-white">
            <h4>Total Master Synced</h4>
            <h6>{totalMstSync}</h6>
          </div>
        </Col>

        <Col md={3}>
          <div className="grad2 px-2 pb-5 pt-2 rounded text-white">
            <h4>Total Master Pending</h4>
            <h6>{totalMstPending}</h6>
          </div>
        </Col>

        <Col md={3}>
          <div className="grad3 px-2 pb-5 pt-2 rounded text-white">
            <h4>Total Detail Synced</h4>
            <h6>{totalDtlSync}</h6>
          </div>
        </Col>

        <Col md={3}>
          <div className="grad4 px-2 pb-5 pt-2 rounded text-white">
            <h4>Total Detail Pending</h4>
            <h6>{totalDtlPending}</h6>
          </div>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col md={3}>
          <div className="grad5 px-2 pb-5 pt-2 rounded text-white">
            <h4>Synced Order Cases</h4>
            <h6>{syncedOrderCase}</h6>
          </div>
        </Col>

        <Col md={3}>
          <div className="grad6 px-2 pb-5 pt-2 rounded text-white">
            <h4>Pending Order Cases</h4>
            <h6>{pendingOrderCase}</h6>
          </div>
        </Col>
      </Row>
      <h3 className="text-center mt-3 text-white">Backup Tables</h3>
      <div className="line"></div>

      <Row>
        <Col md={3}>
          <div className="grad7 px-2 pb-5 pt-2 rounded text-white">
            <h4>Total Master Synced</h4>
            <h6>{totalMstBk}</h6>
          </div>
        </Col>

        <Col md={3}>
          <div className="grad8 px-2 pb-5 pt-2 rounded text-white">
            <h4>Total Detail Synced</h4>
            <h6>{totalDtlBk}</h6>
          </div>
        </Col>
        <Col md={3}>
          <div className="grad9 px-2 pb-5 pt-2 rounded text-white">
            <h4>Total Order Cases</h4>
            <h6>{orderCaseBk}</h6>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default OutputContainer;
