import * as React from "react";

export interface IAppProps {
    message: string;
}

export interface IAppState {
    message: string;
    now: string;
}

export class App extends React.Component<IAppProps, IAppState> {
    protected static getInitialState(props: IAppProps): IAppState {
        const { message } = props;
        const now = new Date().toISOString();
        return {
            message,
            now,
        };
    }

    public constructor(props: IAppProps) {
        super(props);
        this.state = App.getInitialState(this.props);
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
}
