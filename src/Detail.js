import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import AppAppBar from "./modules/views/AppAppBar";
import AppFooter from "./modules/views/AppFooter";

const styles = theme => ({
    root: {
        flexGrow: 1,
        textAlign: 'center',
      
    },
    
    paper: {
        padding: theme.spacing.unit * 2,
        width: '50%',
        maxWidth: 500,
        display: 'inline-block',
        marginBottom: theme.spacing.unit * 2,
        marginRight: 100,
        marginLeft: 100,
    },
    image: {
        width: 250,
        height: 250,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
});

function Detail(props) {
    const { classes } = props;
    return (
        <React.Fragment>
            <AppAppBar />
            <div className={classes.root}>
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
                  단아한 카페
                </Typography>
                <Typography gutterBottom>아주대점</Typography>
                <Typography color="textSecondary">cafe</Typography>
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


      <Paper className={classes.paper}>
        <Grid container spacing={16}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src="http://static.hubzum.zumst.com/hubzum/2018/04/24/11/fab7ab95b47a497b8c96d53d2967c36d.jpg"/>
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={16}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  카페드로잉
                </Typography>
                <Typography gutterBottom>광교점</Typography>
                <Typography color="textSecondary">cafe</Typography>
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

      <Paper className={classes.paper}>
        <Grid container spacing={16}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src="https://post-phinf.pstatic.net/MjAxNzExMDJfOTYg/MDAxNTA5NjMyODE0MTkx.qZW7YB2bW2R87qcsMkc26mc3pyA36mlxdWMPm3I8Oxwg.AZfAG2sUG5ezWaCgLqF7jHRYvkqp93q1kLQaOdTQ0iwg.JPEG/IMG_1682.jpg?type=w1200" />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={16}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  twosome place
                </Typography>
                <Typography gutterBottom>아주대점</Typography>
                <Typography color="textSecondary">cafe</Typography>
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

      <Paper className={classes.paper}>
        <Grid container spacing={16}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src="https://scontent-lht6-1.cdninstagram.com/vp/03fae84bcdb9dd0cd208a04b246b756e/5D7545F7/t51.2885-15/e35/54510891_307696103499518_2815426421476648314_n.jpg?_nc_ht=scontent-lht6-1.cdninstagram.com&se=7&ig_cache_key=MjAxMTQ5ODEyMTUyODY3OTY4MA%3D%3D.2" />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={16}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  starbucks
                </Typography>
                <Typography gutterBottom>아주대점</Typography>
                <Typography color="textSecondary">cafe</Typography>
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



      <Paper className={classes.paper}>
        <Grid container spacing={16}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src="http://interiorconsumer.org/wp-content/uploads/2017/08/interiorconsumer_interiorprice_magazine_trendycafe_01-600x394.jpg"/>
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={16}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  black russian
                </Typography>
                <Typography gutterBottom>아주대점</Typography>
                <Typography color="textSecondary">cafe</Typography>
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

      <Paper className={classes.paper}>
        <Grid container spacing={16}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src="http://www.thevintagecafe.net/graphics/VintageCafeVCFB600x320.jpg"/>
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={16}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  커피나무
                </Typography>
                <Typography gutterBottom>아주대점</Typography>
                <Typography color="textSecondary">cafe</Typography>
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


      <Paper className={classes.paper}>
        <Grid container spacing={16}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src="https://scontent-dfw5-1.cdninstagram.com/vp/c97b9e114227a3a08016c00b2d41753a/5D692F3F/t51.2885-15/e35/56957825_852348271781093_5316492096318460168_n.jpg?_nc_ht=scontent-dfw5-1.cdninstagram.com"/>
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={16}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  커피볶는수
                </Typography>
                <Typography gutterBottom>아주대점</Typography>
                <Typography color="textSecondary">cafe</Typography>
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

      
      <Paper className={classes.paper}>
        <Grid container spacing={16}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src="https://cafehollander.com/wp-content/uploads/2016/03/cafehollander_06-8.jpg"/>
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={16}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  cozy
                </Typography>
                <Typography gutterBottom>아주대점</Typography>
                <Typography color="textSecondary">cafe</Typography>
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
        </React.Fragment>
    );
}

Detail.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Detail);