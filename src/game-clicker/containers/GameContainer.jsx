import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {inject, observer, PropTypes as MobxPropTypes} from 'mobx-react';
import {withStyles} from 'material-ui/styles';
import { GridList, GridListTile } from 'material-ui/GridList';
import Subheader from 'material-ui/List/ListSubheader';
import GameItem from './GameItemContainer';

const styles = (theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        background: theme.palette.background.paper,
    },
    gridList: {
        width: '100%',
        height: '100%',
    },
});

class GameContainer extends Component {
    static propTypes = {
        classes: PropTypes.object.isRequired,
        gameStore: MobxPropTypes.observableObject.isRequired,
   };

    increase = () => {
        this.props.gameStore.increase();
    }

    render() {
        const {classes, gameStore} = this.props;

        return (
            <div className={classes.root}>
                <GridList cellHeight={180} className={classes.gridList}>
                    <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                        <Subheader>Clicker</Subheader>
                    </GridListTile>

                    {gameStore.list.map((item, key) => (<GameItem key={key} gameModel={item} />))}
                </GridList>
            </div>
        );
    }
}

function mapStoresToProps({gameStore}) {
    return {
        gameStore,
    };
}

export default (withStyles(styles))(inject(mapStoresToProps)(observer(GameContainer)));