import React from 'react'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'

import Tooltip from '@material-ui/core/Tooltip'
import Popover from '@material-ui/core/Popover'
// @material-ui/icons

// core components
import GridContainer from 'components/Grid/GridContainer.jsx'
import GridItem from 'components/Grid/GridItem.jsx'
import Button from 'components/CustomButtons/Button.jsx'
import javascriptStyles from 'assets/jss/material-kit-react/views/componentsSections/javascriptStyles.jsx'

class SectionJavascript extends React.Component {
  anchorElLeft = null
  anchorElTop = null
  anchorElBottom = null
  anchorElRight = null
  constructor(props) {
    super(props)
    this.state = {
      classicModal: false,
      openLeft: false,
      openTop: false,
      openBottom: false,
      openRight: false,
    }
  }
  handleClickOpen(modal) {
    var x = []
    x[modal] = true
    this.setState(x)
  }
  handleClose(modal) {
    var x = []
    x[modal] = false
    this.setState(x)
  }
  handleClosePopover(state) {
    this.setState({
      [state]: false,
    })
  }
  handleClickButton(state) {
    this.setState({
      [state]: true,
    })
  }
  render() {
    const { classes } = this.props
    return (
      <div className={classes.section}>
        <div className={classes.container}>
          <div className={classes.title}>
            <h2>Javascript components</h2>
          </div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <div className={classes.title}>
                <h3>Popovers</h3>
              </div>
              <Button
                buttonRef={node => {
                  this.anchorElLeft = node
                }}
                onClick={() => this.handleClickButton('openLeft')}
              >
                On left
              </Button>
              <Popover
                classes={{
                  paper: classes.popover,
                }}
                open={this.state.openLeft}
                anchorEl={this.anchorElLeft}
                anchorReference={'anchorEl'}
                onClose={() => this.handleClosePopover('openLeft')}
                anchorOrigin={{
                  vertical: 'center',
                  horizontal: 'left',
                }}
                transformOrigin={{
                  vertical: 'center',
                  horizontal: 'right',
                }}
              >
                <h3 className={classes.popoverHeader}>Popover on left</h3>
                <div className={classes.popoverBody}>
                  Here will be some very useful information about his popover.
                  Here will be some very useful information about his popover.
                </div>
              </Popover>
              <Button
                buttonRef={node => {
                  this.anchorElTop = node
                }}
                onClick={() => this.handleClickButton('openTop')}
              >
                On top
              </Button>
              <Popover
                classes={{
                  paper: classes.popover,
                }}
                open={this.state.openTop}
                anchorEl={this.anchorElTop}
                anchorReference={'anchorEl'}
                onClose={() => this.handleClosePopover('openTop')}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'center',
                }}
                transformOrigin={{
                  vertical: 'bottom',
                  horizontal: 'center',
                }}
              >
                <h3 className={classes.popoverHeader}>Popover on top</h3>
                <div className={classes.popoverBody}>
                  Here will be some very useful information about his popover.
                </div>
              </Popover>
              <Button
                buttonRef={node => {
                  this.anchorElBottom = node
                }}
                onClick={() => this.handleClickButton('openBottom')}
              >
                On bottom
              </Button>
              <Popover
                classes={{
                  paper: classes.popover,
                }}
                open={this.state.openBottom}
                anchorEl={this.anchorElBottom}
                anchorReference={'anchorEl'}
                onClose={() => this.handleClosePopover('openBottom')}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'center',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'center',
                }}
              >
                <h3 className={classes.popoverHeader}>Popover on bottom</h3>
                <div className={classes.popoverBody}>
                  Here will be some very useful information about his popover.
                </div>
              </Popover>
              <Button
                buttonRef={node => {
                  this.anchorElRight = node
                }}
                onClick={() => this.handleClickButton('openRight')}
              >
                On right
              </Button>
              <Popover
                classes={{
                  paper: classes.popover,
                }}
                open={this.state.openRight}
                anchorEl={this.anchorElRight}
                anchorReference={'anchorEl'}
                onClose={() => this.handleClosePopover('openRight')}
                anchorOrigin={{
                  vertical: 'center',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'center',
                  horizontal: 'left',
                }}
              >
                <h3 className={classes.popoverHeader}>Popover on right</h3>
                <div className={classes.popoverBody}>
                  Here will be some very useful information about his popover.
                </div>
              </Popover>
              <br />
              <br />
              <div className={classes.title}>
                <h3>Tooltips</h3>
              </div>
              <Tooltip
                id="tooltip-left"
                title="Tooltip on left"
                placement="left"
                classes={{ tooltip: classes.tooltip }}
              >
                <Button>On left</Button>
              </Tooltip>
              <Tooltip
                id="tooltip-top"
                title="Tooltip on top"
                placement="top"
                classes={{ tooltip: classes.tooltip }}
              >
                <Button>On top</Button>
              </Tooltip>
              <Tooltip
                id="tooltip-bottom"
                title="Tooltip on bottom"
                placement="bottom"
                classes={{ tooltip: classes.tooltip }}
              >
                <Button>On bottom</Button>
              </Tooltip>
              <Tooltip
                id="tooltip-right"
                title="Tooltip on right"
                placement="right"
                classes={{ tooltip: classes.tooltip }}
              >
                <Button>On right</Button>
              </Tooltip>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    )
  }
}

export default withStyles(javascriptStyles)(SectionJavascript)
