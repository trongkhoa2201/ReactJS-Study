import { Component } from "react";

class ChangeBackground extends Component {
    constructor(props){
        super(props)

        this.state ={
            color:'black'
        }
    }

    componentDidMount() {
        setTimeout(() => {
          this.setState({ color: 'pink' });
        }, 2000);
      }
    
    render(){
        return(
            <div style={{background: this.state.color, width: 400, height: 80,paddingTop: 20,margin: "auto"}}>               
            </div>
        )
    }
}
export default ChangeBackground