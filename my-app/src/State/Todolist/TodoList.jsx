import React from "react"

class TodoList extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            list: [],
            item: '',
        }
    }

    handChange = (event) => {
        this.setState = ({
            item: event.target.value
        })
    }
    handAddItem = () => {
        if(item)
    }

    render(){
        return(
            <div>
                <TextField onChange={this.handChange} />
                <button onClick={this.handAddItem}>Add</button>
            </div>

        )
    }
}
export default TodoList