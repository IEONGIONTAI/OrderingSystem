import React, { useContext, useEffect, useState } from 'react';
import { Store } from '../Store';
import {
  addToOrder,
  clearOrder,
  listCategories,
  listProducts,
  removeFromOrder,
} from '../actions';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  CircularProgress,
  Dialog,
  DialogTitle,
  Grid,
  List,
  ListItem,
  Slide,
  TextField,
  Typography,
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { Alert } from '@material-ui/lab';
import { useStyles } from '../styles';
import Logo from '../components/Logo';
export default function OrderScreen(props) {
  const styles = useStyles();
  const { state, dispatch } = useContext(Store);
  const { categories, loading, error } = state.categoryList;
  const {
    products,
    loading: loadingProducts,
    error: errorProducts,
  } = state.productList;
  const {
    orderItems,
    itemsCount,
    totalPrice,
    taxPrice,
    orderType,
  } = state.order;

  const [categoryName, setCategoryName] = useState('');

  const [quantity, setQuantity] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const [product, setProduct] = useState({});
  const closeHandler = () => {
    setIsOpen(false);
  };
  const productClickHandler = (p) => {
    setProduct(p);
    setIsOpen(true);
  };
  const addToOrderHandler = () => {
    addToOrder(dispatch, { ...product, quantity });
    setIsOpen(false);
  };
  const cancelOrRemoveFromOrder = () => {
    removeFromOrder(dispatch, product);
    setIsOpen(false);
  };
  const previewOrderHandler = () => {
    props.history.push(`/review`);
  };
  useEffect(() => {
    if (!categories) {
      listCategories(dispatch);
    } else {
      listProducts(dispatch, categoryName);
    }
  }, [categories, categoryName]);

  const categoryClickHandler = (name) => {
    setCategoryName(name);
    listProducts(dispatch, categoryName);
  };

  return (
    <Box className={styles.root} >
      <Box className={styles.main}>
        <Dialog
          onClose={closeHandler}
          aria-labelledby="max-width-dialog-title"
          open={isOpen}
          fullWidth={true}
          maxWidth="sm"
        >
          <DialogTitle className={styles.center}>
            ?????? {product.name} ????????????
          </DialogTitle>
          <Box className={[styles.row, styles.center]}>
            <Button
              variant="contained"
              color="primary"
              disabled={quantity === 1}
              onClick={(e) => quantity > 1 && setQuantity(quantity - 1)}
            >
              <RemoveIcon />
            </Button>
            <TextField
              inputProps={{ className: styles.largeInput }}
              InputProps={{
                bar: true,
                inputProps: {
                  className: styles.largeInput,
                },
              }}
              className={styles.largeNumber}
              type="number"
              variant="filled"
              min={1}
              value={quantity}
            />
            <Button
              variant="contained"
              color="primary"
              onClick={(e) => setQuantity(quantity + 1)}
            >
              <AddIcon />
            </Button>
          </Box>
          <Box className={[styles.row, styles.around]}>
            <Button
              onClick={cancelOrRemoveFromOrder}
              variant="contained"
              color="primary"
              size="large"
              className={styles.largeButton}
            >
              {orderItems.find((x) => x.name === product.name)
                ? '???????????????'
                : '??????'}
            </Button>

            <Button
              onClick={addToOrderHandler}
              variant="contained"
              color="primary"
              size="large"
              className={styles.largeButton}
            >
              ???????????????
            </Button>
          </Box>
        </Dialog>

        <Grid>
            <List>
              {loading ? (
                <CircularProgress />
              ) : error ? (
                <Alert severity="error">{error}</Alert>
              ) : (
                <>
                  <ListItem  button onClick={() => categoryClickHandler('')}>
                    <Logo></Logo>
                    <Typography variant="h2">????????????</Typography>
                  </ListItem>
                  {categories.map((category) => (
                    <ListItem
                      key={category.name}
                      button
                      onClick={() => categoryClickHandler(category.name)}
                      className={styles.center}
                    > 
                    <Card className={styles.fullButton}><Typography variant="h5" className={styles.name_1}>{category.name}</Typography></Card>
                      
                    </ListItem>
                  ))}
                </>
              )}
            </List>
          <Grid >
            <Typography
                gutterBottom
                className={styles.title}
                variant="h2"
                component="h2"
              >
                {categoryName || '????????????'}
              </Typography>
            <Grid container spacing={1}  alignItems="stretch">
              {loadingProducts ? (
                <CircularProgress />
              ) : errorProducts ? (
                <Alert severity="error">{errorProducts}</Alert>
              ) : (
                products.map((product) => (
                  <Slide key={product.name} direction="up" in={true}>
                    <Grid item xs={true}> 
                      <Card
                        className={[styles.card_1, styles.space]}
                        onClick={() => productClickHandler(product)}
                      >
                        <CardActionArea>
                          <CardMedia
                            component="img"
                            alt={product.name}
                            image={product.image}
                          />
                          <CardContent>
                            <Typography
                              gutterBottom
                              variant="body2"
                              color="textPrimary"
                              component=""
                            >
                              {product.name}
                            </Typography>
                            <Box className={styles.cardFooter}>
                              <Typography
                                variant="body2"
                                color="textSecondary"
                                component="p"
                              >
                              </Typography>
                              <Typography
                                variant="body2"
                                color="textPrimary"
                                component="p"
                              >
                                ${product.price}
                              </Typography>
                            </Box>
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    </Grid>
                  </Slide>
                ))
              )}
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Box>
        <Box>
          <Box className={[styles.bordered, styles.space]} variant="h1" component="h1">
            ???????????? - {orderType === "Eat in" ? "??????" : "??????"} | ??????: ${totalPrice} |
            ?????????: {itemsCount}???
          </Box>
          <Box className={[styles.row, styles.around]}>
            <Button
              onClick={() => {
                clearOrder(dispatch);
                props.history.push(`/`);
              }}
              variant="contained"
              color="primary"
              className={styles.largeButton}
            >
              ????????????
            </Button>

            <Button
              onClick={previewOrderHandler}
              variant="contained"
              color="primary"
              disabled={orderItems.length === 0}
              className={styles.largeButton}
            >
              ?????????
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
