import React from 'react';



class TodoList extends React.Component {

    state = {

        tasks: [
            'Wasif',
            'Ali',
            'Saad',
            'Asad'
        ],
        textDecor: ''
    }

    onChangeValue = event => {
        this.setState({ value: event.target.value });
    };

    onRemoveItem = i => {
        this.setState(state => {
            const list = state.list.filter((item, j) => i !== j);
            return {
                list,
            };
        });
    };

    render() {

        return (
            <div>
                <div className="header">
                    <input placeholder="Task" value={this.state.value} onChange={this.onChangeValue} />
                    <button onClick={() => {
                        this.state.tasks.push(this.state.value);
                        this.setState({ value: '' })
                    }}> Add Task
                    </button>

                </div>
                <ul>
                    {this.state.tasks.map((item, index) => (
                        <li id={index} style={{ textDecoration: this.state.textDecor }}
                            onClick={() =>{ this.setState({ textDecor: 'line-through' });console.log(item)}} key={index}>

                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default TodoList;