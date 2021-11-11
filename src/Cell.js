import React from 'react'

class Cell extends React.Component {

    constructor(props) {
        super()
        this.state = {
            color: props.value
        }
    }

    clicked = () => {
        this.setState({
            color: '#333'
        })
    }

    render() {
        return(
            <div style={{backgroundColor: this.state.color}} onClick={this.clicked} className="cell">

            </div>
        )
    }
}

export default Cell