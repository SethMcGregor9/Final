import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

function Accordions() {
  return (
       
        

    <Accordion  flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Who Are We?</Accordion.Header>
        <Accordion.Body className='Acbody'>
         We are a small company here to help make building your first home as easy as possible by starting you off building your floor plan.
        </Accordion.Body>


      </Accordion.Item >
      <Accordion.Item eventKey="1">
        <Accordion.Header>What Can We Do for You?</Accordion.Header>
        <Accordion.Body className='Acbody'>
          With our custom floor plan page you can add rooms and the square feet instantly!
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>






  );
}

export default Accordions