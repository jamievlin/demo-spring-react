import * as React from 'react';

interface Props {
    name: string
}

interface State {
    recvText?: string
}

class App extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            recvText: undefined
        }
    }

    componentDidMount() {
        fetch('http://localhost:8080/api/v1/text').then(
            ret => ret.text()).then(txt => {
            this.setState({recvText: txt});
        });
    }

    renderRecvText: () => JSX.Element = () => {
        return this.state.recvText === undefined ?
            <></> :
            <h2>state: {this.state.recvText}</h2>;
    }

    render() {
        const { name } = this.props;
        return (
            <>
                <h1>
                    Hello {name}
                </h1>
                { this.renderRecvText() }
            </>
        );
    }
}

export default App;
