import React , { useState} from 'react';
import Icon from './Components/Icon';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Container, Card, CardBody, Row, Col } from 'reactstrap';
import './style.css';

const tictacArray = new Array(9).fill("");

function App() {
  const [isCross, setIsCross]  = useState(true);
  const [winMessage, setWinMessage] = useState("");

  const playAgain = () => {
    setIsCross(true);
    setWinMessage("");
    tictacArray.fill("");
  }

  const findWinner = () => {
    //console.log('findWinner called');
    if(tictacArray[0]==tictacArray[1]&&tictacArray[0]==tictacArray[2]&& tictacArray[0]!=""){
        setWinMessage(tictacArray[0]+" has won");
    }
    else if(tictacArray[3]==tictacArray[4]&&tictacArray[3]==tictacArray[5]&&tictacArray[3]!=""){
      setWinMessage(tictacArray[3]+" has won");
    }
    else if(tictacArray[6]==tictacArray[7]&&tictacArray[6]==tictacArray[8]&&tictacArray[6]!=""){
      setWinMessage(tictacArray[6]+" has won");
    }
    else if(tictacArray[0]==tictacArray[3]&&tictacArray[0]==tictacArray[6]&&tictacArray[0]!=""){
      setWinMessage(tictacArray[0]+" has won");
    }
    else if(tictacArray[1]==tictacArray[4]&&tictacArray[1]==tictacArray[7]&&tictacArray[1]!=""){
      setWinMessage(tictacArray[1]+" has won");
    }
    else if(tictacArray[2]==tictacArray[5]&&tictacArray[2]==tictacArray[8]&&tictacArray[2]!=""){
      setWinMessage(tictacArray[2]+" has won");
    }
    else if(tictacArray[2]==tictacArray[4]&&tictacArray[2]==tictacArray[6]&&tictacArray[2]!=""){
      setWinMessage(tictacArray[2]+" has won");
    }
    else if(tictacArray[0]==tictacArray[4]&&tictacArray[0]==tictacArray[8]&&tictacArray[0]!=""){
      setWinMessage(tictacArray[0]+" has won");
    }
    else if((tictacArray[0]=='cross'||tictacArray[0]=='circle')&&(tictacArray[1]=='cross'||tictacArray[1]=='circle')&&
            (tictacArray[2]=='cross'||tictacArray[2]=='circle')&&(tictacArray[3]=='cross'||tictacArray[3]=='circle')&&
            (tictacArray[4]=='cross'||tictacArray[4]=='circle')&&(tictacArray[5]=='cross'||tictacArray[5]=='circle')&&
            (tictacArray[6]=='cross'||tictacArray[6]=='circle')&&(tictacArray[7]=='cross'||tictacArray[7]=='circle')&&
            (tictacArray[8]=='cross'||tictacArray[8]=='circle')){
        //alert("tie");
       setWinMessage("It's a Tie");
   }
    
  }

  const changeItem = (index) =>{
      if(winMessage){
        return toast("Game is over", {type: "success"})
      }
      if(tictacArray[index]==""){
        tictacArray[index] = isCross ? "cross": "circle"
        setIsCross(!isCross)
      }
      else{
        return toast("This is already Occupied",{type: "error"});
      }
      findWinner()
  }
  return (
    <Container className="p-5">
      <ToastContainer position='bottom-center'></ToastContainer>
      <h1 style={{textAlign: 'center',fontFamily: 'Franklin Gothic',fontStyle: 'italic'}}>Tic Tac Toe</h1>
      <Row>
        <Col md={6} className="offset-md-3">
          {
            winMessage ? (
              <div>
                <h1 className="text-center">
                  {winMessage}
                </h1>
                <Button className="button" onClick={playAgain}>Play Again</Button>
              </div>
              ) : (
                <h1 style={{ textAlign: 'center', fontSize: '25px',fontFamily: 'verdana',padding: '5px'}}>
                  {isCross ? "Player 1's turn": "Player 2's turn"}
                </h1>
              )
          }
          <div className="grid">
            {tictacArray.map((value,index)=>(
              <Card onClick={ () => changeItem(index)}>
                <CardBody className="box">
                  <Icon choice={tictacArray[index]}/>
                </CardBody>
              </Card>
              ))}
          </div>  
        </Col>
      </Row>
    </Container>
  );
}

export default App;
