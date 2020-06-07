class App extends React.Component {
    state= {
        nom: "",
        message: ""
    }
    
    Click = e => {
        e.preventDefault()
        console.log(this.state);
    }

    handleChange = e => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    render() {
        return (
        <div className="from">
            <div className="from__">
                <form>
                    <label htmlFor="">
                        <input id="nom" name="user_name" type="text" value={this.state.nom} onChange={this.handleChange}/>
                    </label>
                    <textarea name="mess" id="message" rows="7" value={this.state.message} onChange={this.handleChange}></textarea> <br/>
                    <button onClick={this.Click}>ENVOYER</button>
                </form>
            </div>
        </div>
        )
        
    }
}

ReactDOM.render(<App/>,document.getElementById("app"));