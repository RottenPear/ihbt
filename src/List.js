import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import withRoot from './modules/withRoot';
import compose from 'recompose/compose';
import { withStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import LayoutBody from './modules/components/LayoutBody';
import Button from './modules/components/Button';
import AppFooter from './modules/views/AppFooter';
import AppAppBar from './modules/views/AppAppBar';


const styles = theme => ({
  selected: {
    border: '5px solid pink',
  },
  imageWrap: {
    width: '33%',
    display: 'inline-block',
  },
  image: {
    width: '100%',
  },
  itemWrap: {
    padding: '32px',
    textAlign: 'center',
    margin: '0 auto',
    width: '80%',
  },
  button: {
    marginTop: theme.spacing.unit * 8,
    marginLeft: 900,
  },
});

class List extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired,
    classes: PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props);

    this.state = {
      selectedItems: [],
    }
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick(e) {
    const { selectedItems } = this.state;
    const id = parseInt(e.currentTarget.dataset.id, 10);
    const itemIndex = selectedItems.indexOf(id);
    if (itemIndex === -1) {
      selectedItems.push(id);
      this.setState({ selectedItems });
    } else {
      selectedItems.splice(itemIndex, 1);
      this.setState({ selectedItems });
    }
  }

  render() {
    // const { items } = this.props;
    const items = [
      {
        id: 1,
        name: 'test1',
        src: 'https://dummyimage.com/600x400/ba88ba/fff',
      },
      {
        id: 2,
        name: 'test2',
        src: 'https://dummyimage.com/600x400/f1677d/fff',
      },
      {
        id: 3,
        name: 'test3',
        src: 'https://dummyimage.com/600x400/e8e8e8/fff',
      },
      {
        id: 4,
        name: 'test1',
        src: 'https://dummyimage.com/600x400/ba88ba/fff',
      },
      {
        id: 5,
        name: 'test2',
        src: 'https://dummyimage.com/600x400/f1677d/fff',
      },
      {
        id: 6,
        name: 'test3',
        src: 'https://dummyimage.com/600x400/e8e8e8/fff',
      },
      {
        id: 7,
        name: 'test1',
        src: 'https://dummyimage.com/600x400/ba88ba/fff',
      },
      {
        id: 8,
        name: 'test2',
        src: 'https://dummyimage.com/600x400/f1677d/fff',
      },
      {
        id: 9,
        name: 'test3',
        src: 'https://dummyimage.com/600x400/e8e8e8/fff',
      },
      {
        id: 10,
        name: 'test1',
        src: 'https://dummyimage.com/600x400/ba88ba/fff',
      },
      {
        id: 11,
        name: 'test2',
        src: 'https://dummyimage.com/600x400/f1677d/fff',
      },
      {
        id: 12,
        name: 'test3',
        src: 'https://dummyimage.com/600x400/e8e8e8/fff',
      },
      
    ];
    const { selectedItems } = this.state;
    const { classes } = this.props;

    return (
      <Fragment>
        <LayoutBody className={classes.layoutBody} width="large">
        <AppAppBar />
        <div className={classes.itemWrap}>
          {items.map(item => (
            <div
              key={item.id}
              className={`${classes.imageWrap} ${selectedItems.indexOf(item.id) > -1 ? classes.selected : ''}`}
              data-id={item.id}
              onClick={this.handleOnClick}
            >
              <img className={classes.image} src={item.src} alt={item.name} />
            </div>
          ))}

          {items.map(item => (
            <div
              key={item.id}
              className={`${classes.imageWrap} ${selectedItems.indexOf(item.id) > -1 ? classes.selected : ''}`}
              data-id={item.id}
              onClick={this.handleOnClick}
            >
              <img className={classes.image} src={item.src} alt={item.name} />
            </div>
          ))}
        </div>
     
        <Button
          color="secondary"
          size="large"
          variant="contained"
          className={classes.button}
          component={linkProps => (
            <Link {...linkProps} href="/detail" variant="button" />
          )}
        >
          DONE
          </Button>
        </LayoutBody>      
        <AppFooter />
      </Fragment>
  );
}
}

export default compose(
  withRoot,
  withStyles(styles),
)(List);