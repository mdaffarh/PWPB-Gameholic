import { Container, Row, Col, Card, Image } from "react-bootstrap"
import back4bloodImage from "../asset/best/back4blood.jpg"
import crysis3Image from "../asset/best/crysis3.jpg"
import residentEvil2Image from "../asset/best/residentEvil2.jpg"
import theWalkingDeadImage from "../asset/best/theWalkingDead.jpg"
import thiefImage from "../asset/best/thief.jpg"
import untilDawnImage from "../asset/best/untilDawn.jpg"
const BestGame = () => {
  return (
    <div>
      <Container>
        <br />
        <h1 className="text-white text-center" id="best">
          BEST GAMES
        </h1>
        <br />

        <Row>
          <Col md={4}>
            <Card className="gameImage">
              <Image src={back4bloodImage} alt="Back 4 Blood Game" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">A</Card.Title>
                  <Card.Text className="text-left">Game kotak-kotak</Card.Text>
                  <Card.Text className="text-left">Last Updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="gameImage">
              <Image src={crysis3Image} alt="Crysis 3 Game" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">A</Card.Title>
                  <Card.Text className="text-left">Game kotak-kotak</Card.Text>
                  <Card.Text className="text-left">Last Updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="gameImage">
              <Image src={residentEvil2Image} alt="Resident Evil 2 Game" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">A</Card.Title>
                  <Card.Text className="text-left">Game kotak-kotak</Card.Text>
                  <Card.Text className="text-left">Last Updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="gameImage">
              <Image src={theWalkingDeadImage} alt="The Walking Dead Game" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">A</Card.Title>
                  <Card.Text className="text-left">Game kotak-kotak</Card.Text>
                  <Card.Text className="text-left">Last Updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="gameImage">
              <Image src={thiefImage} alt="Thief Game" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">A</Card.Title>
                  <Card.Text className="text-left">Game kotak-kotak</Card.Text>
                  <Card.Text className="text-left">Last Updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="gameImage">
              <Image src={untilDawnImage} alt="Until Dawn Game" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">A</Card.Title>
                  <Card.Text className="text-left">Game kotak-kotak</Card.Text>
                  <Card.Text className="text-left">Last Updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default BestGame
