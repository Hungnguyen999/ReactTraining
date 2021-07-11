import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';

// Use param
import { useParams } from 'react-router';
import Products from '../demoData/Products';
import '../styles/detail.scss';
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

function ProductDetail() {
  const classes = useStyles();
  // use param id pass from Components and props
  let { id } = useParams();
  const thisProduct = Products.find(prod => prod.id === id)

  return (
    <>
      <h1 className="product-detail-title">Product Detail page</h1>
      <div className="product-detail">
        <Card className={classes.root}>
          <CardHeader
            avatar={
              <Avatar aria-label="recipe" className={classes.avatar}>
                {thisProduct.avatar}
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">

              </IconButton>
            }
            title={thisProduct.name}
            subheader={thisProduct.position}
          />
          <CardMedia
            className={classes.media}
            image={thisProduct.avatar}
            title={thisProduct.name}
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              {thisProduct.information}
            </Typography>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
export default ProductDetail;