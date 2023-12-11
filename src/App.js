import { Contanier, Content, Row } from "./style";
import Input from "./components/Input";
import Button from "./components/Button";
import { useState } from "react";

const App = () => {
  const[currentNumber, setCurrentNumber ] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');

  const handleOnClear = () => {
    setCurrentNumber('0');
    setFirstNumber('0');
  }

  const handleAddnumber = (num) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${num} `) 
  }


  const handleSumNumbers = () => {

    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
    } else{
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum))
    }
  }

  return (
    <Contanier>
      <Content>
        <Input value={currentNumber}/>
        <Row>
        <Button label={'x'}onClick={() => handleAddnumber ('')}/>
        <Button label={'/'}onClick={() => handleAddnumber ('')}/>
        <Button label={'C'}onClick={handleOnClear}/>
        <Button label={'%'}onClick={() => handleAddnumber ('')}/>
        </Row>
        <Row>
        <Button label={7}onClick={() => handleAddnumber ('7')}/>
        <Button label={8}onClick={() => handleAddnumber ('8')}/>
        <Button label={9}onClick={() => handleAddnumber ('9')}/>
        <Button label={'-'}onClick={() => handleAddnumber ('')}/>
        </Row>
        <Row>
        <Button label={4}onClick={() => handleAddnumber ('4')}/>
        <Button label={5}onClick={() => handleAddnumber ('5')}/>
        <Button label={6}onClick={() => handleAddnumber ('6')}/>
        <Button label={'+'}onClick={handleSumNumbers}/>
        </Row>
        <Row>
        <Button label={1}onClick={() => handleAddnumber ('1')}/>
        <Button label={2}onClick={() => handleAddnumber ('2')}/>
        <Button label={3}onClick={() => handleAddnumber ('3')}/>
        <Button label={'='}onClick={() => handleAddnumber ('')}/>
        </Row>
      </Content>
    </Contanier>
  );
};

export default App;
