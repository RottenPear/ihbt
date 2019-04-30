import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import LayoutBody from '../components/LayoutBody';
import Typography from '../components/Typography';

const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 8,
    marginBottom: theme.spacing.unit * 4,
  },
  images: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexWrap: 'wrap',
  },
  imageWrapper: {
    position: 'relative',
    display: 'block',
    padding: 0,
    borderRadius: 0,
    height: '40vh',
    [theme.breakpoints.down('sm')]: {
      width: '100% !important',
      height: 100,
    },
    '&:hover': {
      zIndex: 1,
    },
    '&:hover $imageBackdrop': {
      opacity: 0.15,
    },
    '&:hover $imageMarked': {
      opacity: 0,
    },
    '&:hover $imageTitle': {
      border: '4px solid currentColor',
    },
  },
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    background: theme.palette.common.black,
    opacity: 0.5,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 4}px ${theme.spacing.unit + 6}px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
});

function ProductCategories(props) {
  const { classes } = props;

  const images = [
    {
      url:
        'http://cfile204.uf.daum.net/image/226985475284ABCE033773',
      title: 'Other places',
      width: '40%',
    },
    {
      url:
      'https://pbs.twimg.com/media/Df-OGBtUwAczte0.jpg:large',
      title: 'Exihibition',
      width: '20%',
    },
    {
      url:
      'http://www.amanogroup.de/wp-content/uploads/2015/08/0211.jpg',
      title: 'Bar',
      width: '40%',
    },
    {
      url:
        'http://img.hani.co.kr/imgdb/resize/2012/1206/1354700095_00452557905_20121206.JPG',
      title: 'Club',
      width: '38%',
    },
    {
      url:
        'https://scontent-atl3-1.cdninstagram.com/vp/801d24b238952df9521c590ddd0557f9/5D3DD37A/t51.2885-15/e35/51174884_2187381747990416_997309443717798787_n.jpg?_nc_ht=scontent-atl3-1.cdninstagram.com',
      title: 'Cafe',
      width: '38%',
    },
    {
      url:
        'https://scontent-yyz1-1.cdninstagram.com/vp/c030ea6206ac380771aaaf41c30aec4d/5D40DD73/t51.2885-15/e35/40194572_2161212164136578_7452936496285572465_n.jpg?_nc_ht=scontent-yyz1-1.cdninstagram.com',
      title: 'Indoor',
      width: '24%',
    },
    {
      url:
        'https://t1.daumcdn.net/cfile/tistory/215B394D53B6100602',
      title: 'Walking',
      width: '40%',
    },
    {
      url:
        'https://t1.daumcdn.net/cfile/tistory/244CE24556B5642E36',
      title: 'Restaurant',
      width: '20%',
    },
    {
      url:
        'https://www.iartseoul.com/wp-content/uploads/2018/11/The-Color-Run.jpg',
      title: 'Festival',
      width: '40%',
    },
  ];

  return (
    <LayoutBody className={classes.root} component="section" width="large">
      <Typography variant="h4" marked="center" align="center" component="h2">
        For all tastes and all desires
      </Typography>
      <div className={classes.images}>
        {images.map(image => (
          <ButtonBase
            key={image.title}
            className={classes.imageWrapper}
            style={{
              width: image.width,
            }}
          >
            <div
              className={classes.imageSrc}
              style={{
                backgroundImage: `url(${image.url})`,
              }}
            />
            <div className={classes.imageBackdrop} />
            <div className={classes.imageButton}>
              <Typography
                component="h3"
                variant="h6"
                color="inherit"
                className={classes.imageTitle}
              >
                {image.title}
                <div className={classes.imageMarked} />
              </Typography>
            </div>
          </ButtonBase>
        ))}
      </div>
    </LayoutBody>
  );
}

ProductCategories.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductCategories);
