import { Component } from "react";
// import unchecked from './add-button.png';
// import checked from './foursquare-check-in.png';
import star from './star-web.png';

export class List extends Component {
    state = {
        inputValue: '',
        toDoList: [],
        // icon: unchecked
    }

    onChangeEvent(e) {
        this.setState({inputValue: e});
        // console.log(this.state.inputValue)
    }

    addItem(input) {
        if (input !== '') {
            let listArray = this.state.toDoList;
            listArray.push(input);
            this.setState({toDoList: listArray, inputValue: ''});
            console.log(this.state.toDoList)
        }
    }

    crossWord(event) {
        const li = event.target;
        li.classList.toggle('crossed');
        // img.classList.toggle('imageColor')
    }

    deleteList() {
        let listArray = this.state.toDoList;
        listArray = [];
        this.setState({toDoList: listArray});
    }

    onFormSubmit(e) {
        e.preventDefault();
    }

    render() {
        return(
            <div className="formContainer">
                <form className="formContainer" onSubmit={this.onFormSubmit}>
                    <div className="inputContainer">
                    <input type="text" 
                    placeholder="write something..."
                    onChange={(e) => this.onChangeEvent(e.target.value)}
                    value={this.state.inputValue}
                    />
                    <button className="addBtn btn" onClick={() => this.addItem(this.state.inputValue)}>Add</button>
                    </div>
                    <ul>
                        {this.state.toDoList.map((item,index) => (
                            <li key={index} onClick={this.crossWord}>
                                <img className="itemImage" src={star} alt="item" width={40}/>
                                {item}
                            </li>
                        ))}
                    </ul>
                    <div className="formContainer">
                        <button className="btn delBtn" onClick={() => this.deleteList()}>Delete</button>
                    </div>
                </form>
            </div>
        )
    }
}