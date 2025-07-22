import Accordion from 'react-bootstrap/Accordion';

const Welcome = () => {
    return(
        <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Benvenuto in Epibooks! </Accordion.Header>
        <Accordion.Body>
         Presenti sul mercato da piú di 30 anni, ti proponiamo i nostri best sellers!
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1"></Accordion.Item>
       </Accordion>
    )
}

export default Welcome