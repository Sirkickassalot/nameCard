import './App.css';
import styled from 'styled-components';
function App() {
  return (
    
    <Wrapper>
      <Card>
        <Photo/>
        <Background/>
        <PersonalDetails>
          <Name>Isaac De La Cruz</Name>
          <Location>Los Angeles</Location>
        </PersonalDetails>
        <Numbers>
          <Numbersbox1>
            <Amount>626k</Amount>
            <Followers>Followers</Followers>
          </Numbersbox1>
          <Numbersbox2>
            <Amount2>678k</Amount2>
            <Likes>Likes</Likes>
          </Numbersbox2>
          <Numbersbox3>
            <Amount3>960</Amount3>
            <Photos>Photos</Photos>
          </Numbersbox3>
        </Numbers>
      </Card>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
background: rgb(2,0,36);
background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(121,9,9,1) 35%, rgba(0,212,255,1) 100%);
width:100vw;
height:100vh;
display: flex;
justify-content: center;
align-items:center;

`
const Card = styled.div`
  width: 400px;
  height: 400px;
  background-color: pink;
  border-radius: 15px;
  position: relative;

`
const Background = styled.div`
  background-image: url("https://images.unsplash.com/photo-1464802686167-b939a6910659?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1933&q=80");
  width: 400px;
  height: 135px;
  background-color:white;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
`

const Photo = styled.div`
  background-image: url("https://media-exp1.licdn.com/dms/image/C5603AQGjSDMn4c7pxA/profile-displayphoto-shrink_200_200/0/1587581589184?e=1634169600&v=beta&t=VrvkVaXIrRp3eaZKhVMdTS2JQuQcFnC5dH8VGX2LMq4");
  background-size: contain;
  height: 95px;
  width: 95px;
  border-radius: 50%;
  position: absolute;
  margin-left: 145px;
  margin-top: 80px;
`

const PersonalDetails = styled.div`
  width: 400px;
  height: 135px;
  background-color:white;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 30px;
`
const Name = styled.div`
 font-size: 35px;
`
const Location = styled.div`
 font-size: 20px;
 margin-top: 5px;
`


const Numbers = styled.div`
width: 400px;
height: 135px;
background-color:white;
border-radius: 0 0 15px 15px;
display:flex;
justify-content: space-around;
align-items: center;
border-top: 2px solid grey;
`
const Numbersbox1 = styled.div`


`
const Amount = styled.div`
font-size: 28px;
`
const Followers = styled.div`
font-size: 15px;
`
const Numbersbox2 = styled.div`


`
const Amount2 = styled.div`
font-size: 28px;
`
const Likes = styled.div`
font-size: 15px;
text-align: center;
`
const Numbersbox3 = styled.div`


`
const Amount3 = styled.div`
font-size: 28px;
`
const Photos = styled.div`
font-size: 15px;
`