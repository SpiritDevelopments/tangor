import React, { useState, useMemo } from 'react'
// import TinderCard from '../react-tinder-card/index'
import TinderCard from 'react-tinder-card'
// import Countdown from 'react-countdown'

const db = [
  {
    no: 'Q05',
    ex: '攻撃者が攻撃対象者のコンピュータに侵入した後に用いるツールを集めたパッケージ',
    ans: 'rootkit',
    url: './img/paper.png'
  },
  {
    no: 'Q04',
    ex: '攻撃対象のユーザがよく利用するWebサイトを不正に改ざんすることで、ウイルスに感染させようとする攻撃',
    ans: '水飲み場型攻撃',
    url: './img/paper.png'
  },
  {
    no: 'Q03',
    ex: '特定の企業などの組織を狙った攻撃。関係者を装ってウイルスメールを送付するなどして相手のPCをウイルスに感染させる。',
    ans: '標的型攻撃',
    url: './img/paper.png'
  },
  {
    no: 'Q02',
    ex: '適当な文字列を組み合わせて力任せにログインの試行を繰り返す攻撃',
    ans: 'ブルートフォース攻撃',
    url: './img/paper.png'
  },
  {
    no: 'Q01',
    ex: '不正なSQLを投入することで、通常はアクセスできないデータにアクセスしたり更新したりする攻撃',
    ans: 'SQLインジェクション',
    url: './img/paper.png'
  }
]

function Janre(props){
  
}

const alreadyRemoved = []
let charactersState = db // This fixes issues with updating characters state forcing it to use the current state and not the state that was active when the card was created.

function Card () {
  const [characters, setCharacters] = useState(db)
  const [lastDirection, setLastDirection] = useState()

  const childRefs = useMemo(() => Array(db.length).fill(0).map(i => React.createRef()), [])

  const swiped = (direction, nameToDelete) => {
    console.log('removing: ' + nameToDelete)
    setLastDirection(direction)
    alreadyRemoved.push(nameToDelete)
  }

  const outOfFrame = (name) => {
    console.log(name + ' left the screen!')
    charactersState = charactersState.filter(character => character.no !== name)
    setCharacters(charactersState)
  }

  const swipe = (dir) => {
    const cardsLeft = characters.filter(person => !alreadyRemoved.includes(person.no))
    if (cardsLeft.length) {
      const toBeRemoved = cardsLeft[cardsLeft.length - 1].no // Find the card object to be removed
      const index = db.map(person => person.no).indexOf(toBeRemoved) // Find the index of which to make the reference to
      alreadyRemoved.push(toBeRemoved) // Make sure the next card gets removed next time if this card do not have time to exit the screen
      childRefs[index].current.swipe(dir) // Swipe the card!
    }
  }

//   const timer = () =>{
//     var time = Date.now() +5000;
//     return time;
//   }

  return (
    <div className='app'>
    <div>
      <link href='https://fonts.googleapis.com/css?family=Damion&display=swap' rel='stylesheet' />
      <link href='https://fonts.googleapis.com/css?family=Alatsi&display=swap' rel='stylesheet' />
      <h1>SC</h1>
      <div className='cardContainer'>
        {characters.map((character, index) =>
          <TinderCard ref={childRefs[index]} className='swipe' key={character.no} onSwipe={(dir) => swiped(dir, character.name)} onCardLeftScreen={() => outOfFrame(character.name)}>
            <div style={{ backgroundImage: 'url(' + character.url + ')' }} className='card'>
              <h3>{character.no}</h3>
              <h3 className='ex'>{character.ex}</h3>
              <h3 className='ans'>{character.ans}</h3>
              
            </div>
          </TinderCard>
        )}
      </div>
      <div>
        {/* <h2><Countdown date={Date.now() + 5000} /></h2> */}
      </div>
      <div className='buttons'>
        <button onClick={() => swipe('left')}>⇦ まだ</button>
        <button onClick={() => swipe('right')}>覚えた ⇨</button>
      </div>
      {/* {lastDirection ? <h2 key={lastDirection} className='infoText'>{lastDirection}</h2> : <h2 className='infoText'></h2>} */}
    </div>
    </div>
  )
}

export default Card