import React, { Component } from 'react';

import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';

import WelcomeDialog from '../dialogs/WelcomeDialog/WelcomeDialog';
import AlertDialog from '../dialogs/AlertDialog/AlertDialog';

import PropTypes from 'prop-types';

class DialogHost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      welcomeDialog: {
        open: false
      },

      aDialog: {
        open: false
      },

      anotherDialog: {
        open: false
      }
    };
  }

  openDialog = (dialogKey) => {

    // Retrieve the dialog with the specified key
    const dialog = this.state[dialogKey];

    // Make sure the dialog exists and is valid
    if (!dialog || dialog.open === undefined || null) {
      return;
    }

    dialog.open = true;

    this.setState({ dialog });
  };

  closeDialog = (dialogKey) => {

    // Retrieve the dialog with the specified key
    const dialog = this.state[dialogKey];

    // Make sure the dialog exists and is valid
    if (!dialog || dialog.open === undefined || null) {
      return;
    }

    dialog.open = false;

    this.setState({ dialog });
  };

  render() {
    // Properties
    const {
      parameters,
      eventHandlers
    } = this.props;

    // Dialogs
    const {
      welcomeDialog,
      aDialog,
      anotherDialog
    } = this.state;

    return (
      <React.Fragment>
        <Button onClick={() => this.openDialog('aDialog')}>Open "aDialog" Dialog</Button>
        <Button onClick={() => this.openDialog('anotherDialog')}>Open "anotherDialog" Dialog</Button>

        <AlertDialog
          open={aDialog.open}

          title="A dialog"
          contentText="This is a dialog"

          onClose={() => this.closeDialog('aDialog')}
        />

        <Hidden xsDown>
          <WelcomeDialog
            open={welcomeDialog.open}

            {...parameters.welcomeDialog}

            onClose={() => this.closeDialog('welcomeDialog')}

            onCancelClick={() => this.closeDialog('welcomeDialog')}

            {...eventHandlers.welcomeDialog}
          />

          <AlertDialog
            open={anotherDialog.open}

            title="Another dialog"
            contentText="This is another dialog"

            onClose={() => this.closeDialog('anotherDialog')}
          />
        </Hidden>

        <Hidden smUp>
          <WelcomeDialog
            fullScreen
            open={welcomeDialog.open}

            {...parameters.welcomeDialog}

            onClose={() => this.closeDialog('welcomeDialog')}

            onCancelClick={() => this.closeDialog('welcomeDialog')}

            {...eventHandlers.welcomeDialog}
          />

          <AlertDialog
            fullScreen
            open={anotherDialog.open}

            title="Another dialog"
            contentText="This is another dialog"

            onClose={() => this.closeDialog('anotherDialog')}
          />
        </Hidden>
      </React.Fragment>
    );
  }
}

DialogHost.propTypes = {};

export default DialogHost;