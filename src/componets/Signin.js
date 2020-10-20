import React, { Component} from 'react'



class Signin extends Component {
    state = {
        email: '',
        password: '',
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }

    render() {

    return (
        <div className="container">
            <form onSubmit={this.handleSubmit} className="white">
                <h2 className="grey-text">Sign In</h2>
                <div className="input-field">
                    <label htmlFor="password">
                        Email<br/>
                        </label>
                        <input className="input" type="email" id="email" onChange={this.handleChange} />
                </div>

                <div className="input-field">
                    <label htmlFor="password">
                        Password<br/>
                        </label>
                        <input className="input" type="password" id="password" onChange={this.handleChange} />
                </div>

                <div className="input-field">
                    <button className="input-btn">Login</button>
                </div>
            </form>
        </div>
    )
}
}

export default Signin