import * as React from "react";
import { Button, CssBaseline, Grid, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core";

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
                <CssBaseline />
                <Grid container={true} spacing={24}>
                    <Grid item={true} xs={12}>
                        <Typography variant="title" gutterBottom={true}>
                            {message}
                        </Typography>
                        <input type="text" value={message} onChange={this.onTextChange} />
                    </Grid>
                    <Grid item={true} xs={12}>
                        <div>lastUpdate: {now}</div>
                    </Grid>
                    <Grid item={true} xs={12}>
                        <Button variant="contained" color="primary" onClick={this.onClick}>
                            Reload
                        </Button>
                    </Grid>
                </Grid>
            </>
        );
    }
}

const styles = (theme: any) => ({
    root: {
        flexGrow: 1,
    },
});

export default withStyles(styles)(App);
