import {InputContanier} from './style'

const Input = ({value}) => {
    return (
      <InputContanier>
        <input disabled value={value}/>
      </InputContanier>
    );
  }
  
  export default Input;
  