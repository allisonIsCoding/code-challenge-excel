//importing the database via pool from models/sqlModel
const db = require('../models/sqlModel');

const clientController = {};

clientController.getClient1240 = (req, res, next) => {
  const client1240Domestic = `SELECT start_weight, end_weight, zone, rate FROM  rates WHERE client_id = 1240 AND locale = 'domestic' AND shipping_speed = 'standard' ORDER BY start_weight ASC, end_weight ASC, zone ASC`;
  
  (async () => {
    const { rows } = await db.query(client1240Domestic);
    res.locals.client1240 = rows;
    return next();
  })().catch(err => {
    next({
      log: 'There\'s an error in the domestic query for client 1240',
      status: 400,
      message: { err: 'An error occured in the domestic query for client 1240' },
    })
  })
};


module.exports = clientController;