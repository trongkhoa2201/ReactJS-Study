import { Component } from "react";
import HideComponent from "./HideComponent";

class Hide extends Component{
    constructor(props){
        super(props)

        this.state = {
            display: true
        }
    }

    delete = () => {
        this.setState({ display: false})
    }
    
    render(){
        let comp
        if (this.state.display) {
            comp = <HideComponent />;
            return(
                <div style={{ textAlign: 'center' }}>
                    {comp}
                    <button onClick={this.delete}>Delete the Comment</button>
                </div>
            )
        }
    }
}
export default Hide