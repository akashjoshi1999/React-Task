import { Component } from "react";


class ClassBaseComp extends Component {

    // const useLocalStorageState = () => {
    //     componentDidMount() {
    //         this.setState({ name: localStorage.getItem('name1') || "" });
    //     }

    //     componentDidUpdate() {
    //         localStorage.setItem('name1', this.state.name)
    //     }

    //     return [this.state, this.setState];
    // }

    constructor() {
        super();
        this.state = { data: "" };
        // this.handleChange = this.handleChange.bind(this);
    }

    // handleChange(e) {
    //     this.setState({ data: e.target.value });
    // }

    componentDidMount() {
        this.setState({ data: localStorage.getItem('name1') || "" });
    }

    componentDidUpdate() {
        localStorage.setItem('name1', this.state.data)
    }

    // const[name, setName] = useLocalStorageState('name1');

    render() {
        return (
            <div>
                <input type="text" value={this.state.data}
                 onChange={(e) => this.setState({ data: e.target.value })} /><br />
                {this.state.data ? <p>Hello {this.state.data}</p> : "please enter the name"}
            </div>
        )
    }
}

export default ClassBaseComp