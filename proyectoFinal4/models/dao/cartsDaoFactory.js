import config from '../../config/config.js';
import CartsMemDao from './cartsMemDao.js';
import CartsFileDao from './cartsFileDao.js';
import CartsMongoDao from './cartsMongoDao.js';

class ProductsDaoFactory {
  static getProductsDao() {
    console.log("DAO_Target:", config.dao.target);
    switch (config.dao.target) {
      case "file":
        return CartsFileDao.getInstance();
      case "mongo":
      return CartsMongoDao.getInstance();
      default:
        return CartsMemDao.getInstance();
    }
  }
}

export default ProductsDaoFactory;
