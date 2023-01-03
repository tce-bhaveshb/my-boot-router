function LearnFetch() {

  var jsonData = {
    "users": [
      {
        "name": "alan",
        "age": 23,
        "username": "aturing"
      },
      {
        "name": "john",
        "age": 29,
        "username": "__john__"
      }
    ]
  }

  function handleClick() {

    // Send data to the backend via POST
    fetch('http://localhost:8080/', {  // Enter your IP address here

      method: 'POST',
      mode: 'cors',
      body: JSON.stringify(jsonData) // body data type must match "Content-Type" header

    })

  }

  return (
    <>
      <div onClick={handleClick} style={{
        textAlign: 'center',
        width: '100px',
        border: '1px solid gray',
        borderRadius: '5px'
      }}>
        Send data to backend
      </div>
      <br/>
      <b>*There is problem with Fetch..... Solve it.</b>
    </>
  );

}

//  export { LearnFetch };

export default LearnFetch