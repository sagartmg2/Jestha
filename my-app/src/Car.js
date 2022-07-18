import React, { Component } from 'react'
export default class Car extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            title: "",
            mounted_status: false
        }

        this.increment = this.increment.bind(this)
    }

    handleSubmit(event) {
        console.log(event)

        console.log(event.target.username);

        console.log("submitted")
    }

    changeHandler() {

    }
    //  controlled vs uncontrolled inputs

    increment() {
        console.log("increment");
        // this.state.count = "adasdfa"

        // this.setState({
        //     count: ++this.state.count
        // })

        this.setState((prevState) => {
            return { count: ++prevState.count }
        })

    }


    // LIFECYLCEL methods
    componentDidMount() {
        console.log("ddimount");
        // api  fetching

        // api call
        //  => when response comes , we have to change our state value

        // componet  still mounted{
        // => change the state 
        // } 

        // => memory leak 
    }

    componentDidUpdate() {
        console.log("did update");

        // this.state.count

    }

    componentWillUnmount() {
        // cleaning.

        // componet  still mounted{

        // } 
    }

    render() {
        console.log("rendering");
        return (
            <>
                <h1>{this.state.count}</h1>
                <button onClick={this.increment}> increment</button>
                <form onSubmit={this.handleSubmit}>
                    <div>Car   {this.props.name}</div>
                    {/* <button type='button' >add fields </button> */}
                    <input type="text" name="username" value="random value" onChange={this.changeHandler} />
                    <input type="text" name="password" value="password value" onChange={this.changeHandler} />
                    <button type='submit' >add fields </button>
                </form>
            </>
        )
    }
}
