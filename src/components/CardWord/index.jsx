import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Tooltip from '@material-ui/core/Tooltip'
import Button from '@material-ui/core/Button'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'

const useStyles = makeStyles({
  card: {
    display: 'inline-block',
    color: '#3C4858',
  },

  name: {
    fontSize: 60,
    fontWeight: 'bold',
    // font-family: inherit;
  },
  pos: {
    marginBottom: 8,
    color: 'rgba(0, 0, 0, 0.54)',
    display: 'block',
    fontSize: 15,
  },
  button: {
    fontSize: 15,
    textAlign: 'right',
    lineHeight: 1.7,
    marginRight: -8,
    textTransform: 'capitalize',
  },
  tooltip: {
    fontSize: 14,
    lineHeight: 1.5,
    padding: 6,
  },
})

export default function CardWord({ data }) {
  const classes = useStyles()

  const [open, setOpen] = React.useState(false)

  function handleTooltipToggle() {
    setOpen(!open)
  }
  function handleTooltipClose() {
    setOpen(false)
  }

  return (
    <Card className={classes.card}>
      <CardContent>
        <h4 className={classes.name}>{data.name}</h4>
        <span className={classes.pos} color="textSecondary">
          {data.transliteration}
        </span>
        <ClickAwayListener onClickAway={handleTooltipClose}>
          <div>
            <Tooltip
              PopperProps={{
                disablePortal: true,
              }}
              onClose={handleTooltipClose}
              open={open}
              disableFocusListener
              disableHoverListener
              disableTouchListener
              title={
                <React.Fragment>
                  <span className={classes.tooltip}> {data.desc}</span>
                </React.Fragment>
              }
              placement="top-end"
            >
              <Button onClick={handleTooltipToggle} className={classes.button}>
                {data.translate}
              </Button>
            </Tooltip>
          </div>
        </ClickAwayListener>
      </CardContent>
    </Card>
  )
}
