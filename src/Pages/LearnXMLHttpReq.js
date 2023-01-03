import React, { Component } from 'react'

export default class LearnXMLHttpReq extends Component {
    constructor() {
        super()
    }
    componentWillMount() {
        this.getData()
    }

    getData() {
        var xhr = new XMLHttpRequest(); // create a new XMLHttpRequest

        xhr.addEventListener('load', () => { // get a callback when the server responds
            console.log("-----OUTPUT HERE--->>",xhr.responseText); // update the state of the component with the result here
        })

        xhr.open('GET', 'http://localhost:3000/'); // open the request with the verb and the url
        xhr.send(); // send the request
    }

    render() {
        return (
            <div>
                <p>Hello World 123</p>
            </div>
        )
    }
}
