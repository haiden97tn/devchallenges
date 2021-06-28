import React, { Component } from 'react';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            count : 1
        }
    }

    componentDidMount(){
        console.log('hello toi bat dau lon len roi !');
    }
    componentDidUpdate(){
        console.log('hello toi bat dau co gia dinh va cong viec on dinh !');
    }
    componentWillUnmount(){
        console.log('xuong ho');
    }
    componentWillMount(){
        console.log('hello minh la mot dua tre');
    }
    // componentWillMout running trước khi render
    // componentdidmount sẽ chạy sau khi render
    // componentdidUpdate sẽ chạy sau khi state được cập nhật
    // componentWillUnmount sẽ chạy khi component bị mất đi 
    // mai cho xin 50 chục
    render() {
        return (
            <div>
                hello world class component
                <button onClick={() => this.setState({count : this.state.count + 1})}>Clicked</button>
            </div>
        );
    }
}

export default App;