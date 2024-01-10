class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            userType: 'student', // Default to student
            isAuthenticated: false,
        };
    }

    handleInputChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleLogin = () => {
        const { username, password, userType } = this.state;

        // Simulate authentication (in a real app, this would be done on a server)
        if (username === 'admin' && password === 'adminPassword' && userType === 'admin') {
            this.setState({ isAuthenticated: true });
            alert('Admin login successful!');
        } else if (username === 'student' && password === 'studentPassword' && userType === 'student') {
            this.setState({ isAuthenticated: true });
            alert('Student login successful!');
        } else {
            this.setState({ isAuthenticated: false });
            alert('Login failed. Check your credentials.');
        }
    };

    render() {
        const { isAuthenticated } = this.state;

        return (
            <div>
                <header>
                    <h1>School Website</h1>
                </header>
                <div className="container">
                    {isAuthenticated ? (
                        <div>
                            <h2>Welcome!</h2>
                            {/* Content for authenticated users */}
                        </div>
                    ) : (
                        <form>
                            <label>
                                Username:
                                <input type="text" name="username" onChange={this.handleInputChange} />
                            </label>
                            <label>
                                Password:
                                <input type="password" name="password" onChange={this.handleInputChange} />
                            </label>
                            <label>
                                User Type:
                                <select name="userType" onChange={this.handleInputChange}>
                                    <option value="student">Student</option>
                                    <option value="admin">Admin</option>
                                </select>
                            </label>
                            <button type="button" onClick={this.handleLogin}>
                                Login
                            </button>
                        </form>
                    )}
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
