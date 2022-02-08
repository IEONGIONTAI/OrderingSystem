import React, { useContext, useEffect } from 'react';
import { Store } from '../Store';
import { listOrders } from '../actions';
import {
  Box,
  Button,
  CircularProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core';
import { useStyles } from '../styles';
import { Alert } from '@material-ui/lab';
import Axios from 'axios';
import { Helmet } from 'react-helmet';
export default function AdminScreen(props) {
  const styles = useStyles();

  const { state, dispatch } = useContext(Store);
  const { orders, loading, error } = state.orderList;
  const setOrderStateHandler = async (order, action) => {
    try {
      await Axios.put('./api/orders/' + order._id, {
        action: action,
      });
      listOrders(dispatch);
    } catch (err) {
      alert(err.message);
    }
  };

  useEffect(() => {
    listOrders(dispatch);
  }, []);

  return (
    <Box className={[styles.root]}>
      <Helmet>
        <title>Admin Orders</title>
      </Helmet>

      <Box className={[styles.main]}>
        {loading ? (
          <CircularProgress />
        ) : error ? (
          <Alert severity="error">{error}</Alert>
        ) : (
          <TableContainer component={Paper}>
            <Table aria-label="Orders">
              <TableHead>
                <TableRow>
                  <TableCell>編號</TableCell>
                  <TableCell align="right">價錢&nbsp;($)</TableCell>
                  <TableCell align="right">數量</TableCell>
                  <TableCell align="right">物品</TableCell>
                  <TableCell align="right">取餐方式</TableCell>
                  <TableCell align="right">付款方式</TableCell>
                  <TableCell align="right">狀態</TableCell>
                  <TableCell align="right">動作</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {orders.map((order) => (
                  <TableRow key={order.name}>
                    <TableCell component="th" scope="row">
                      {order.number}
                    </TableCell>
                    <TableCell align="right">{order.totalPrice}</TableCell>
                    <TableCell align="right">
                      {order.orderItems.length}
                    </TableCell>
                    <TableCell align="right">
                      {order.orderItems.map((item) => (
                        <Box>
                          {item.name} x {item.quantity}
                        </Box>
                      ))}
                    </TableCell>
                    <TableCell align="right">{order.orderType == "Eat in" ? "堂食":"外帶"}</TableCell>
                    <TableCell align="right">{order.paymentType == "Pay here" ? "現場付款" : "現場付款"}</TableCell>
                    <TableCell align="right">
                      {order.inProgress
                        ? '進行中'
                        : order.isReady
                        ? '可送餐'
                        : order.isDelivered
                        ? '已送餐'
                        : '未知'}
                    </TableCell>
                    <TableCell align="right">
                      <Button
                        variant="contained"
                        onClick={() => setOrderStateHandler(order, 'ready')}
                        color="secondary"
                      >
                        準備好了
                      </Button>
                      <p/>
                      <Button
                        color="primary"
                        variant="contained"
                        onClick={() => setOrderStateHandler(order, 'cancel')}
                      >
                        取消訂單
                      </Button>
                      <p/>
                      <Button
                        variant="contained"
                        onClick={() => setOrderStateHandler(order, 'deliver')}
                      >
                        完成
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </Box>
    </Box>
  );
}
