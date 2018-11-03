import * as React from "react";
import * as ReactDOM from "react-dom";

interface IAppProps {
    message: string;
}

interface IAppState {
    message: string;
    now: string;
}

class App extends React.Component<IAppProps, IAppState> {
    public constructor(props: IAppProps) {
        super(props);
        this.state = this.getInitialState(this.props);
    }

    public onClick = () => {
        this.setState({
            ...this.state,
            now: new Date().toISOString(),
        });
    };

    public onTextChange = (event: any) => {
        this.setState({
            ...this.state,
            message: event.target.value,
        });
    };

    public render() {
        const { message, now } = this.state;
        return (
            <>
                <div>{message}</div>
                <input type="text" value={message} onChange={this.onTextChange} />
                <div>lastUpdate: {now}</div>
                <button onClick={this.onClick}>Reload</button>
            </>
        );
    }

    protected getInitialState(props: IAppProps): IAppState {
        const { message } = props;
        const now = new Date().toISOString();
        return {
            message,
            now,
        };
    }
}

const element = (
    <>
        <App message="Hello" />
    </>
);
const container = document.getElementById("root") as HTMLElement;
ReactDOM.render(element, container);
