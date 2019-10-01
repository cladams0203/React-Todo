import React from 'react'


class TodoForm extends React.Component {
    constructor() {
        super()
        this.state = ''
    }
    
    render() {
        return (
            <div>
                <form>
                    <input
                    type='text' 
                    name='listItem' 
                    value={this.itemInput}
                     >
                    </input>
                </form>
            </div>
        )
    }
}