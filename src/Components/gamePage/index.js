import {Component} from 'react'
import './index.css'
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import {
  RulesContainer,
  Container,
  RulesButton,
  Button,
  Heading,
  Para,
} from '../styledComponents'

class GameHomePage extends Component {
  state = {
    score: 0,
    isResultsShows: false,
    result: '',
    user1Choice: '',
    user2Choice: '',
  }

  user1ChoiceClick = event => {
    const {choicesList} = this.props
    const {score} = this.state
    const random = Math.floor(Math.random() * choicesList.length)
    const opponent = choicesList[random]
    let gameResult
    let gameScore
    if (event.id === 'ROCK' && opponent.id === 'SCISSORS') {
      gameResult = 'YOU WON'
    } else if (event.id === 'ROCK' && opponent.id === 'PAPER') {
      gameResult = 'YOU LOSE'
    } else if (event.id === 'PAPER' && opponent.id === 'ROCK') {
      gameResult = 'YOU WON'
    } else if (event.id === 'PAPER' && opponent.id === 'SCISSORS') {
      gameResult = 'YOU LOSE'
    } else if (event.id === 'SCISSORS' && opponent.id === 'PAPER') {
      gameResult = 'YOU WON'
    } else if (event.id === 'SCISSORS' && opponent.id === 'ROCK') {
      gameResult = 'YOU LOSE'
    } else {
      gameResult = 'IT IS DRAW'
    }
    if (gameResult === 'YOU WON') {
      gameScore = score + 1
    } else if (gameResult === 'YOU LOSE') {
      gameScore = score - 1
    } else {
      gameScore = score
    }
    this.setState({
      user1Choice: event.imageUrl,
      user2Choice: opponent.imageUrl,
      isResultsShows: true,
      result: gameResult,
      score: gameScore,
    })
  }

  onPlayAgainClick = () => {
    this.setState({
      isResultsShows: false,
      user1Choice: '',
      user2Choice: '',
      result: '',
    })
  }

  onIncrement = () => {
    this.setState(prevState => ({score: prevState.score + 1}))
  }

  render() {
    const {choicesList} = this.props
    const {score, isResultsShows, result, user1Choice, user2Choice} = this.state
    return (
      <div className="game-page-bg-container">
        <div>
          <div className="game-choices-text-score-container">
            <div className="game-choices-text-container">
              <h1>
                Rock
                <br /> Paper <br /> Scissors
              </h1>
            </div>
            <div className="score-container">
              <p className="score-text">Score</p>
              <Para cl="#223a5f" size="20px" ma="2px">
                {score}
              </Para>
            </div>
          </div>
          {isResultsShows ? (
            <Container display="column" justifyContent="center">
              <Container mb="10px" display="row" justifyContent="center">
                <Container display="column">
                  <Heading size="20px">You</Heading>
                  <img
                    src={user1Choice}
                    alt="your choice"
                    className="choice-image"
                  />
                </Container>
                <Container display="column">
                  <Heading size="20px">Opponent</Heading>
                  <img
                    src={user2Choice}
                    alt="opponent choice"
                    className="choice-image"
                  />
                </Container>
              </Container>
              <Para cl="white" size="25px">
                {result}
              </Para>
              <RulesButton radius="10px" onClick={this.onPlayAgainClick}>
                PLAY AGAIN
              </RulesButton>
            </Container>
          ) : (
            <div className="game-page-choices-container">
              <ul className="game-page-choices-ul-container">
                <li className="game-page-choice">
                  <button
                    data-testid="rockButton"
                    type="button"
                    onClick={() => this.user1ChoiceClick(choicesList[0])}
                  >
                    <img
                      src={choicesList[0].imageUrl}
                      alt={choicesList[0].id}
                      className="choice-image"
                    />
                  </button>
                </li>
                <li className="game-page-choice">
                  <button
                    data-testid="scissorsButton"
                    type="button"
                    onClick={() => this.user1ChoiceClick(choicesList[1])}
                  >
                    <img
                      src={choicesList[1].imageUrl}
                      alt={choicesList[1].id}
                      className="choice-image"
                    />
                  </button>
                </li>
                <li className="game-page-choice">
                  <button
                    data-testid="paperButton"
                    type="button"
                    onClick={() => this.user1ChoiceClick(choicesList[2])}
                  >
                    <img
                      src={choicesList[2].imageUrl}
                      alt={choicesList[2].id}
                      className="choice-image"
                    />
                  </button>
                </li>
              </ul>
            </div>
          )}
          <Container justifyContent="flex-end">
            <Popup
              trigger={
                <RulesButton radius="7px" type="button" className="button">
                  Rules
                </RulesButton>
              }
              modal
            >
              {close => (
                <Container justifyContent="center">
                  <RulesContainer>
                    <Container justifyContent="flex-end">
                      <Button mb="10px" type="button" onClick={close}>
                        <RiCloseLine className="close-icon" />
                      </Button>
                    </Container>
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                      alt="rules"
                      className="rules-img"
                    />
                  </RulesContainer>
                </Container>
              )}
            </Popup>
          </Container>
        </div>
      </div>
    )
  }
}

export default GameHomePage
