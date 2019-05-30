import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import AppAppBar from "./modules/views/AppAppBar";
import AppFooter from "./modules/views/AppFooter";
import Link from '@material-ui/core/Link';
import Button from './modules/components/Button';
import LayoutBody from './modules/components/LayoutBody';
import compose from 'recompose/compose';
import withRoot from './modules/withRoot';

const styles = theme => ({
    selected: {
      border: '3px solid grey',
    },
    imageWrap: {
      width: '50%',
      display: 'inline-block',
    },
    itemWrap: {
      padding: '32px',
      textAlign: 'center',
      margin: '10 auto',
      width: '100%',
    },
    root: {
        flexGrow: 1,
        textAlign: 'center',
    },
    paper: {
        padding: theme.spacing.unit * 2,
        width: '100%',
        maxWidth: 500,
        display: 'inline-block',
        marginBottom: theme.spacing.unit * 2,
        marginRight: 200,
    },
    image: {
        width: 200,
        height: 200,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
    button: {
      marginTop: theme.spacing.unit * 8,
      marginLeft: '45%',
    },
});

class Detail extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired,
    classes: PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props);

    this.state = {
      selectedItems: [],
    };

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
        src: "https://scontent-bru2-1.cdninstagram.com/vp/5bf7385370781607d54f462f61a7f323/5D42373C/t51.2885-15/e35/43779570_2179531645706338_2301137378619686912_n.jpg?_nc_ht=scontent-bru2-1.cdninstagram.com&se=8&ig_cache_key=MTkwMDE0NzYwODQ1OTExOTg5Mw%3D%3D.2",
        title : "단아한 카페",
        location : "강남점",
        categroy : "cafe",
      },
      {
        id: 2,
        name: 'test2',
        src: "http://static.hubzum.zumst.com/hubzum/2018/04/24/11/fab7ab95b47a497b8c96d53d2967c36d.jpg",
        title : "카페 드로잉",
        location : "강남점",
        categroy : "cafe",
      },
      {
        id: 3,
        name: 'test3',
        src: "https://post-phinf.pstatic.net/MjAxNzExMDJfOTYg/MDAxNTA5NjMyODE0MTkx.qZW7YB2bW2R87qcsMkc26mc3pyA36mlxdWMPm3I8Oxwg.AZfAG2sUG5ezWaCgLqF7jHRYvkqp93q1kLQaOdTQ0iwg.JPEG/IMG_1682.jpg?type=w1200",
        title : "레드 와인 카페",
        location : "강남점",
        categroy : "cafe",
      },
      {
        id: 4,
        name: 'test1',
        src: "https://scontent-lht6-1.cdninstagram.com/vp/03fae84bcdb9dd0cd208a04b246b756e/5D7545F7/t51.2885-15/e35/54510891_307696103499518_2815426421476648314_n.jpg?_nc_ht=scontent-lht6-1.cdninstagram.com&se=7&ig_cache_key=MjAxMTQ5ODEyMTUyODY3OTY4MA%3D%3D.2",
        title : "단아한 카페",
        location : "강남점",
        categroy : "cafe",
      },
      {
        id: 5,
        name: 'test2',
        src: "http://interiorconsumer.org/wp-content/uploads/2017/08/interiorconsumer_interiorprice_magazine_trendycafe_01-600x394.jpg",
        title : "단아한 카페",
        location : "강남점",
        categroy : "cafe",
      },
      {
        id: 6,
        name: 'test3',
        src: "http://www.thevintagecafe.net/graphics/VintageCafeVCFB600x320.jpg",
        title : "단아한 카페",
        location : "강남점",
        categroy : "cafe",
      },
      {
        id: 7,
        name: 'test1',
        src: "https://scontent-dfw5-1.cdninstagram.com/vp/c97b9e114227a3a08016c00b2d41753a/5D692F3F/t51.2885-15/e35/56957825_852348271781093_5316492096318460168_n.jpg?_nc_ht=scontent-dfw5-1.cdninstagram.com",
        title : "단아한 카페",
        location : "강남점",
        categroy : "cafe",
      },
      {
        id: 8,
        name: 'test2',
        src: "https://cafehollander.com/wp-content/uploads/2016/03/cafehollander_06-8.jpg",
        title : "단아한 카페",
        location : "강남점",
        categroy : "cafe",
      },
      {
        id: 9,
        name: 'test3',
        src: 'https://dummyimage.com/600x400/e8e8e8/fff',
        title : "단아한 카페",
        location : "강남점",
        categroy : "cafe",
      },
      {
        id: 10,
        name: 'test1',
        src: 'https://dummyimage.com/600x400/ba88ba/fff',
        title : "단아한 카페",
        location : "강남점",
        categroy : "cafe",
      },
      {
        id: 11,
        name: 'test2',
        src: 'https://dummyimage.com/600x400/f1677d/fff',
        title : "단아한 카페",
        location : "강남점",
        categroy : "cafe",
      },
      {
        id: 12,
        name: 'test3',
        src: 'https://dummyimage.com/600x400/e8e8e8/fff',
        title : "단아한 카페",
        location : "강남점",
        categroy : "cafe",
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
            <Paper className={classes.paper}>
        <Grid container spacing={16}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt={item.name} src={item.src} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={16}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  {item.title}
                </Typography>
                <Typography gutterBottom>{item.location}</Typography>
                <Typography color="textSecondary">{item.categroy}</Typography>
              </Grid>
              <Grid item>
                <Typography style={{ cursor: 'pointer' }}>상세보기</Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">★★★★★</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
      </div>
          ))}

          {items.map(item => (
            <div
              key={item.id}
              className={`${classes.imageWrap} ${selectedItems.indexOf(item.id) > -1 ? classes.selected : ''}`}
              data-id={item.id}
              onClick={this.handleOnClick}
            >
            <Paper className={classes.paper}>
        <Grid container spacing={16}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src="https://scontent-bru2-1.cdninstagram.com/vp/5bf7385370781607d54f462f61a7f323/5D42373C/t51.2885-15/e35/43779570_2179531645706338_2301137378619686912_n.jpg?_nc_ht=scontent-bru2-1.cdninstagram.com&se=8&ig_cache_key=MTkwMDE0NzYwODQ1OTExOTg5Mw%3D%3D.2" />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={16}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  {classes.title}
                </Typography>
                <Typography gutterBottom>{classes.location}</Typography>
                <Typography color="textSecondary">{classes.categroy}</Typography>
              </Grid>
              <Grid item>
                <Typography style={{ cursor: 'pointer' }}>상세보기</Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">★★★★★</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
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
  )(Detail);
