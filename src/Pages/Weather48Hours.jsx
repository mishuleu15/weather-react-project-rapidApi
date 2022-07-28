import React, { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import ListGroup from 'react-bootstrap/ListGroup';
import Accordion from 'react-bootstrap/Accordion';

const Weather48Hours = () => {
  const [open, setOpen] = useState(false);
  //   console.log({ weather48Hours });

  //   return (
  //     <div className='weather48Hours-container'>
  //       <Button
  //         onClick={() => setOpen(!open)}
  //         aria-controls='example-collapse-text'
  //         aria-expanded={open}
  //       >
  //         <div>Release Me</div>
  //       </Button>
  //       <Collapse in={open}>
  //         <div id='example-collapse-text' className='collapse-text'>
  //           <ListGroup variant='flush'>
  //             <ListGroup.Item>Cras justo odio</ListGroup.Item>
  //             <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
  //             <ListGroup.Item>Morbi leo risus</ListGroup.Item>
  //             <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
  //           </ListGroup>
  //           <ListGroup variant='flush'>
  //             <ListGroup.Item>Cras justo odio</ListGroup.Item>
  //             <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
  //             <ListGroup.Item>Morbi leo risus</ListGroup.Item>
  //             <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
  //           </ListGroup>
  //         </div>
  //       </Collapse>
  //     </div>
  //   );

  return (
    <div className='weather48Hours-container'>
      <Accordion defaultActiveKey='0'>
        <Accordion.Item eventKey='0'>
          <Accordion.Header>Accordion Item #1</Accordion.Header>
          <Accordion.Body>
            <div id='example-collapse-text' className='collapse-text'>
              <ListGroup variant='flush'>
                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
              </ListGroup>
              <ListGroup variant='flush'>
                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
              </ListGroup>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Weather48Hours;
