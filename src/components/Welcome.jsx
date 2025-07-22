import Alert from "react-bootstrap/Alert";

const Welcome = () => {
  return (
    <>
      <h1>Benvenuto in Epibooks!</h1>
      {["primary"].map((variant) => (
        <Alert key={variant} variant={variant}>
          Presenti sul mercato da piú di 30 anni, ti proponiamo i nostri best
          sellers!
        </Alert>
      ))}
    </>
  );
};

export default Welcome;
