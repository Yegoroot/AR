import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
// import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

import PaperTense from 'components/paperTense'

const styles = theme => ({
    root: {
        width: '100%',
        // padding: 14,
        ...theme.typography.body1,
        //             ...theme.typography.h1,
    },
    // content: {
    //     alignItems: 'center',

    // },
    secondaryHeading: {
        // color: theme.palette.text.secondary,
        fontSize: 45,
        padding: 20,
        '@media (max-width: 540px)': {
            fontSize: 30,
            padding: 10,
        },
        marginLeft: 'auto',
        lineHeight: 1,
    },
    ExpansionPanelDetails: {
        padding: '8px 0px 0px',
        display: 'flex',
        flexWrap: 'wrap',
    },
})

class ControlledExpansionPanels extends React.Component {
    state = {
        expanded: this.props.templates[0].id,
    }

    handleChange = panel => (event, expanded) => {
        this.setState({
            expanded: expanded ? panel : false,
        })
    }

    render() {
        const { classes, templates } = this.props
        const { expanded } = this.state
        // console.log(templates);

        return (
            <div className={classes.root}>
                {templates.map((template, index) => (
                    <ExpansionPanel
                        key={template.id}
                        expanded={expanded === template.id}
                        onChange={this.handleChange(template.id)}>
                        <ExpansionPanelSummary
                            classes={{
                                content: classes.content,
                            }}
                            expandIcon={<ExpandMoreIcon />}>
                            <div dir="rtl" lang="ar" className={classes.secondaryHeading}>
                                {template.name}
                            </div>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails className={classes.ExpansionPanelDetails} dir="rtl" lang="ar">
                            <PaperTense data={template.content} />
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                ))}
            </div>
        )
    }
}

ControlledExpansionPanels.propTypes = {
    classes: PropTypes.object.isRequired,
    templates: PropTypes.array.isRequired,
}

export default withStyles(styles)(ControlledExpansionPanels)
