import './App.css'

/* // JSX is a syntax extension for JavaScript that looks like HTML.

// It allows you to write HTML-like code within JavaScript, which React then transforms into JavaScript objects
//---------------------------------------------------------------------

// you can also have a valid JavaScript expression embedded using {<code>} in JSX.

// JSX attributes uses camelCase syntax [e.g. class -> className, onClick, useEffect, useState etc]
// every element must have a closing tag (self closing tags are used for element without content) */

//-------------------------Conditional Rendering--------------------
// There are multiple ways, If-Else statement, ternary operator etc

//-------------------------JSX and Functions -------------------
//Jsx allows you to create functions dynamically to generate elements or components
// useful to encapsulate logic in components and use in multiple occasions



    //------------------- JSX and Functions ------------------------
    
    function WelcomeMessage(name) {
      return <h2>Hello, {name}</h2>;
    }

    function greeting(isMorning){
      if(isMorning){
        return <h3>Good, Morning!</h3>;
      }else{
        return <h3>Good, Evening!</h3>;
      }
    }

    function alertBox(message) {
      return <div className='alert'>{message}</div>;
    }

    function showAlert(condition, message) {
      if (condition) {
        // return <div>{alertBox(message)}</div>;
        return alertBox(message)
      }else {
        return null;
      }
    }

function App() {
    
/*      const element = <h1>Hello Using JSX</h1>
     const name = "Alles"
     const btnLabel = "Click Me"
     const imageUrl = 'https://placehold.co/600x400/EEE/31343C' */
    //-------------------Conditional Rendering ---------------

    // const isLoggedIn = true;
    //If-Else
/*     if (isLoggedIn){
      return <h1>User Is Logged In!</h1>
    }else
    {
      return <h1>User Is Not Logged In!</h1>
    } */

/*       // Ternary Operator
      const element = <h1>{isLoggedIn ? "Welcome Back!" : "Please Login!!" }</h1>

    return(element) */
      
/*     //And (&&) Operator
      // when && is used the left hand side will evaluate first and if it is true it evaluates the right hand side.
      const messages = ["Hi", "HELLO WORLD", 300];
      return(
        <div>
          {messages.length > 0 && <h2>You have {messages.length} unread messages</h2>}
        </div>
      ) */

  /* return (
    <>
    {/* <div>
      {element}
      {500-22}
      <h2 className='greeting'>Hallo, {name}</h2>
      <button style={{color: 'gold', backgroundColor: 'aliceblue' }}>{btnLabel}</button>
      <button onClick={()=>alert(`You Clicked Alert Me!`)}>Alert Me!</button>
    </div>
    <img src={imageUrl} alt="PlaceHolder" />}
    

    </>
  ) */

      //------------------- JSX and Functions ------------------------

      const now = new Date();
      const isMorning = now.getHours() < 12 ;
      //----------------- comments in JS -----------------
      // This is a comment
      /* This
        IS
        A Comment */

  return (
    <div>
      <h1>Hello, Alles!</h1>
      {/* <h2>Hallo, Zusamen</h2> */}
      {WelcomeMessage("Menschen")}
      {WelcomeMessage("Zusamen")}
      {WelcomeMessage("Leute")}

      {greeting(isMorning)}

      {showAlert(true, "This is important Message!!")}

    {/* This is a comment in JSX */}
    
    {/* This is 
      a multiline comment
      in JSX */}

    </div>
  )



  }

export default App
