import One from "./One";

function App() {

  const username = "Someonne"

  return (
    // <h1>Hello World In VITE</h1>
    // can only export a single element
    // You can export multiple elements using div or using fragment (empty element) <>.

    <>
      <h1>Hello World, Hello: {username}</h1>
      <One />
      <p>Test Paragraph</p>
    </>
  );
}

export default App;
