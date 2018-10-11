import * as React from 'react';
import TimerButtonI from '../../interfaces/TimerButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import { Mutation } from 'react-apollo';
import TOGGLE_MANUAL_ENTRY from '../../graphql/mutations/toggleManualEntry'

const ManualEntryButton: React.SFC<TimerButtonI> = ({taskId}) => {
  return(
    <Mutation mutation={TOGGLE_MANUAL_ENTRY} variables={{taskId}}>
      {toggleManualEntry => (
        <div onClick={() => {toggleManualEntry()}}>
          <Tooltip title="Manual Entry">
            <IconButton>
              <FontAwesomeIcon
                icon="pencil-alt"
              />
            </IconButton>
          </Tooltip>
        </div>
      )}
    </Mutation>
  )
}

export default ManualEntryButton;
