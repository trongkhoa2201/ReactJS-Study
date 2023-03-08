import { Component } from "react";

class Collapse extends Component{
    constructor(props){
        super(props)

        this.state = {
            isExpand: false
        }
    }

    handleShowIntro = () => {
        this.setState({
            isExpand: true
            }
        )
    }
    handleCloseIntro = () => {
        this.setState({
            isExpand: false
            }
        )
    }

    render(){
        const {isExpand} = this.state
        if(isExpand) return(
        <div>
            <h1 style={{background: 'green', width: '100%', height: 80, margin: 0}}>Conditional Rendering</h1> 
            <button onClick={this.handleCloseIntro} style={{marginTop: 20}}>Close</button> 
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p> 
        </div>         
        )       
        else{
           return <button onClick={this.handleShowIntro} style={{marginTop: 20}}>Open</button>
        }       
    }
}
export default Collapse