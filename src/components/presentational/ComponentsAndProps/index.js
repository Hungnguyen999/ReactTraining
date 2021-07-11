import React from 'react';
import Welcome from './parts/Welcome';
import './styles/welcome.scss';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Products from './demoData/Products';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '36ch',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
  avatar: {
    borderRadius: '20px',
  }
}));

function ComponentAndProps() {
  const classes = useStyles();
  const [spacing, setSpacing] = React.useState(2);

  return (
    <>
      <div className="component-props-title">
        <Welcome name="Passsing props data to detail" />
      </div>
      <div className="components-props">
        {Products.map((item) =>
          // Pass product id parameter to detail page
          <Link to={`/components-props/${item.id}`} className="components-props__item">
            <List className={classes.root}>
              <ListItem alignItems="flex-start">
                <ListItemAvatar className={classes.avatar}>
                  <Avatar alt="Remy Sharp" src={item.avatar} />
                </ListItemAvatar>
                <ListItemText
                  primary={item.position}
                  secondary={
                    <Grid container className={classes.root} spacing={2}>
                      <Grid item xs={12}>
                        <Grid container justify="center" spacing={spacing}>
                          <React.Fragment>
                            <Typography
                              component="span"
                              variant="body2"
                              className={classes.inline}
                              color="textPrimary"
                              xs={12}
                            >
                              {item.name}
                            </Typography>

                            {item.information}
                          </React.Fragment>
                        </Grid>
                      </Grid>
                    </Grid>

                  }
                />

              </ListItem>
              <Button variant="outlined" color="primary">
                Xem chi tiet
              </Button>
              <Divider variant="inset" component="li" />
            </List>

          </Link>
        )}
      </div>
    </>
  )
}
export default ComponentAndProps;