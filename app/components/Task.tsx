import * as React from 'react';
import TaskI from '../interfaces/Task';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import ManualEntryButton from './buttons/ManualEntryButton';

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

const Task: React.SFC<TaskProps> = (props) => {
  const { id, classes } = props;
  
  return(
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="headline">
          {props.name}
        </Typography>
        <Typography variant="display1">
          5:30
        </Typography>
        <div>
          <ManualEntryButton taskId={id}/>
        </div>
      </CardContent>
    </Card>
  )
}

export default withStyles(styles)(Task);