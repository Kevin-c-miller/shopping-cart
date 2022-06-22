import { Col, Row } from 'react-bootstrap';
import storeItems from '../data/items.json';

const Store = () => {
  return (
    <>
      <h2>Store</h2>
      <Row>
        {storeItems.map((item) => (
          <Col>{JSON.stringify(item)}</Col>
        ))}
      </Row>
    </>
  );
};

export default Store;
