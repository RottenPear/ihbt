import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import rp from 'request-promise';

import withRoot from './modules/withRoot';
import compose from 'recompose/compose';
import { withStyles } from '@material-ui/core/styles';
import LayoutBody from './modules/components/LayoutBody';
import AppFooter from './modules/views/AppFooter';
import AppAppBar from './modules/views/AppAppBar';

const styles = theme => ({
  selected: {
    border: '2px solid #f1677d',
  },
  imageWrap: {
    height: '200px',
    overflow: 'hidden',
    width: '33%',
    display: 'inline-block',
    backgroundSize: 'cover',
    verticalAlign: 'bottom',
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
  btn: {
    cursor: 'pointer',
    backgroundColor: '#f1677d',
    border: 'none',
    padding: '16px 32px',
    color: '#fff',
  },
  btnDone: {
    marginLeft: '8px',
  },
  btnWrap: {
    marginTop: '16px',
    textAlign: 'right',
  },
  detailWrap: {
    padding: '8px',
    display: 'inline-block',
    width: '50%',
  },
  detail: {
    borderRadius: '8px',
    border: '1px solid #bbb',
    padding: '8px',
  },
  detailImg: {
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '320px',
    width: '100%',
  },
  detailName: {
    fontSize: '18px',
    marginTop: '16px',
    marginBottom: '8px',
  },
  detailShow: {
    color: '#f1677d',
    textDecoration: 'none',
  }
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
      details: [],
      isDetailShow: false,
      venues: null,
    };

    this.handleOnClick = this.handleOnClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fetchNext = this.fetchNext.bind(this);
  }

  componentDidMount() {
    this.fetchNext();
  }

  handleOnClick(e) {
    const { selectedItems, details } = this.state;
    const id = parseInt(e.currentTarget.dataset.id, 10);
    const { postUrl, photoUrl, name } = e.currentTarget.dataset;
    const selectedItem = {
      id,
      postUrl,
      photoUrl,
      name,
    }
    const itemIndex = selectedItems.indexOf(id);
    if (itemIndex === -1) {
      selectedItems.push(id);
      details.push(selectedItem);
      this.setState({ selectedItems, details });
    } else {
      details.splice(itemIndex, 1);
      selectedItems.splice(itemIndex, 1);
      this.setState({ selectedItems, details });
    }
  }

  handleSubmit() {
    const { selectedItems, isDetailShow } = this.state;
    if (selectedItems.length === 0) {
      alert('사진을 1장 이상 선택해주세요.');
      return;
    }
    this.setState({ isDetailShow: true });
  }

  fetchNext(uri = 'http://ec95e3e6.ngrok.io/api/venues/?limit=9') {
    const { venues } = this.state;
    const options = {
      method: 'GET',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
      },
      uri: venues ? venues.next : uri,
    };
    rp(options)
      .then((result) => { this.setState({ venues: JSON.parse(result) }); });
  }

  render() {
    const { venues, isDetailShow, details } = this.state;
    const { selectedItems } = this.state;
    const { classes } = this.props;
    return (
      <Fragment>
        <LayoutBody className={classes.layoutBody} width="large">
        <AppAppBar />
        {venues && !isDetailShow && (
          <div className={classes.itemWrap}>
            {venues.results.map(item => (
              <div
                key={item.id}
                className={`${classes.imageWrap} ${selectedItems.indexOf(item.id) > -1 ? classes.selected : ''}`}
                data-id={item.id}
                data-photo-url={item.photo_url}
                data-post-url={item.post_url}
                data-name={item.venue_tag}
                onClick={this.handleOnClick}
                style={{
                  'backgroundImage': `url('${item.photo_url}')`
                }}
              >
              </div>
            ))}
            <div className={classes.btnWrap}>
              <button
                className={classes.btn}
                onClick={this.fetchNext}
              >
                NEXT
              </button>
              <button
                className={`${classes.btn} ${classes.btnDone}`}
                onClick={this.handleSubmit}
              >
                DONE
              </button>
            </div>
          </div>
        )}
        {isDetailShow && (
          <Fragment>
            {details.map(detail => (
              <div className={classes.detailWrap}>
                <div
                  key={`detail-${detail.id}`}
                  className={classes.detail}
                >
                  <div
                    className={classes.detailImg}
                    style={{
                      'backgroundImage': `url('${detail.photoUrl}')`
                    }}
                  />
                  <div>
                    <p className={classes.detailName}>{detail.name}</p>
                    <a className={classes.detailShow} href={detail.postUrl} target="_black">show detail</a>
                  </div>
                </div>
              </div>
            ))}
          </Fragment>
        )}
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