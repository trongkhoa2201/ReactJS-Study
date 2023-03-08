import { Component } from "react";

class HideComponent extends Component{
    componentWillUnmount() {
        alert('The component is going to be unmounted');
      }
     
      render() {
        return <h1>Hello Word!!!</h1>;
      }
}
export default HideComponent