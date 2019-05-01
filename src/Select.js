import withRoot from './modules/withRoot';
// --- Post bootstrap -----
import React from 'react';
import AppFooter from './modules/views/AppFooter';
import AppAppBar from './modules/views/AppAppBar';
import Grid from "@material-ui/core/Grid";

function Select() {
    return (
        <React.Fragment>
            <AppAppBar />
            <div>
                <Grid container spacing={32}>
                    <Grid item xs={4}>
                        <img
                            alt="post"
                            style={{ width: '100%' }}
                            src="https://via.placeholder.com/500/f5f5f5"
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <img
                            alt="post"
                            style={{ width: '100%' }}
                            src="https://via.placeholder.com/500/f5f5f5"
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <img
                            alt="post"
                            style={{ width: '100%' }}
                            src="https://via.placeholder.com/500/f5f5f5"
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <img
                            alt="post"
                            style={{ width: '100%' }}
                            src="https://via.placeholder.com/500/f5f5f5"
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <img
                            alt="post"
                            style={{ width: '100%' }}
                            src="https://via.placeholder.com/500/f5f5f5"
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <img
                            alt="post"
                            style={{ width: '100%' }}
                            src="https://via.placeholder.com/500/f5f5f5"
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <img
                            alt="post"
                            style={{ width: '100%' }}
                            src="https://via.placeholder.com/500/f5f5f5"
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <img
                            alt="post"
                            style={{ width: '100%' }}
                            src="https://via.placeholder.com/500/f5f5f5"
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <img
                            alt="post"
                            style={{ width: '100%' }}
                            src="https://via.placeholder.com/500/f5f5f5"
                        />
                    </Grid>
                </Grid>
            </div>
            <AppFooter />
        </React.Fragment>
    );
}

export default withRoot(Select);
