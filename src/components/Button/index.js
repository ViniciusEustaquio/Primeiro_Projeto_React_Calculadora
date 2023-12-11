import {ButtonContanier} from './style'


const Button = ({label, onClick}) => {
    return (
      <ButtonContanier onClick={onClick}>   
        {label}
      </ButtonContanier>
    );
  }
  
  export default Button;
  