import * as React from 'react';
import TaskI from '../interfaces/Task';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import PomodoroButton from './buttons/PomodoroButton';

const styles = {
  card: {
    fontFamily: 'sans-serif',
    minWidth: 200,
    minHeight: 200,
    margin: 10
  },
}

interface TaskProps extends TaskI {
  key: number,
  classes: {
    card: string,
  },
}

interface TaskState {
  running: Boolean,
  startTime: Number,
}

class Task extends React.Component<TaskProps, TaskState> {

  constructor(p: TaskProps, s: {}) {
    super(p, s)
    this.setState({running: true})
  }

  _pomodoroStart() {

  }

  _pomodoroStop() {

  }

  _handlePomodoroClick() {
    const newRunning = !this.state.running
    if (this.state.running) {
      this._pomodoroStop()
    } else {
      this._pomodoroStart()
    }

    this.setState({running: newRunning})
  }

  render() {
    const { classes, name } = this.props;
    return(
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="headline">
            {name}
          </Typography>
          <Typography variant="display1">
            5:30
          </Typography>
          <div>
            <PomodoroButton running={this.state.running} onClickCb={this._handlePomodoroClick}/>
          </div>
        </CardContent>
      </Card>
    )
  }
}

export default withStyles(styles)(Task);