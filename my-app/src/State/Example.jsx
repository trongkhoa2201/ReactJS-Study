import React from "react";

class Example extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            counter: 1,
            data: [2,3,4],
            isShown: true
        }
    }
    increment = () => {
        const myState = {...this.state} //lay tat ca value state goc
        myState.counter = myState.counter + 1
        myState.data.concat(1)

        this.setState({
            counter: myState.counter,
            data: myState.data
        })
    }

    toggle = () => {
        let{isShown} = {...this.state}
        isShown = !isShown
        this.setState({
            isShown
        })
    }

    render(){
        const { counter, data, isShown} = this.state
        return(
            <>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.toggle}>Toggle</button>
            </>
        )
    }
}
export default Example