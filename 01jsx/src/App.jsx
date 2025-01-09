import './App.css'

// JSX is a syntax extension for JavaScript that looks like HTML.

// It allows you to write HTML-like code within JavaScript, which React then transforms into JavaScript objects
//---------------------------------------------------------------------

// you can also have a valid JavaScript expression embedded using {<code>} in JSX.

// JSX attributes uses camelCase syntax [e.g. class -> className, onClick, useEffect, useState etc]
// every element must have a closing tag (self closing tags are used for element without content)


function App() {
    
     const element = <h1>Hello Using JSX</h1>
     const name = "Alles"
     const btnLabel = "Click Me"
     const imageUrl = 'https://placehold.co/600x400/EEE/31343C'
  return (
    <>
    <div>
      {element}
      {500-22}
      <h2 className='greeting'>Hallo, {name}</h2>
      <button style={{color: 'gold', backgroundColor: 'aliceblue' }}>{btnLabel}</button>
      <button onClick={()=>alert(`You Clicked Alert Me!`)}>Alert Me!</button>
    </div>
    <img src={imageUrl} alt="PlaceHolder" />
    </>
  )
}

export default App
