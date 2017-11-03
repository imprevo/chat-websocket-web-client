import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {inject, observer, PropTypes as MobxPropTypes} from 'mobx-react';
import {withStyles} from 'material-ui/styles';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';

const styles = (theme) => ({
    root: {
    },
});

class GameItem extends Component {
    static propTypes = {
        classes: PropTypes.object.isRequired,
        gameModel: MobxPropTypes.observableObject.isRequired,
    };

    increase = () => {
        this.props.gameModel.increase();
    }

    render() {
        const {classes, gameModel} = this.props;

        return (
            <Card className={classes.root}>
                <CardContent>
                    <Typography type="headline" component="h2">
                        {gameModel.name}
                    </Typography>
                    <Typography type="body1">
                        count: {gameModel.count}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button raised color="primary" onClick={this.increase}>
                        add
                    </Button>
                </CardActions>
            </Card>
        );
    }
}

export default (withStyles(styles))(inject()(observer(GameItem)));