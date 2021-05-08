import axios from 'axios';
import Global from '../constants/Global';


export const getCategories = () => {
  return new Promise((resolve, reject) => {
    let REQUEST_URL = Global.BASE_URL + 'categories';
    axios
      .get(REQUEST_URL)
      .then((response) => {
        resolve(response.data);
      })
      .catch((err) => {
        reject(null);
        //console.warn(err);
      });
  });
};

export const getProducts = () => {
  return new Promise((resolve, reject) => {
    let REQUEST_URL = Global.BASE_URL + 'products';
    axios
      .get(REQUEST_URL)
      .then((response) => {
        resolve(response.data);
      })
      .catch((err) => {
        reject(null);
        //console.warn(err);
      });
  });
};

export const getProductById = ({ id = null }) => {
  return new Promise((resolve, reject) => {
    let REQUEST_URL = Global.BASE_URL + 'products/' + id;
    axios
      .get(REQUEST_URL)
      .then((response) => {
        resolve(response.data);
      })
      .catch((err) => {
        reject(null);
        //console.warn(err);
      });
  });
};

export const deleteProductById = ({ id = null }) => {
  return new Promise((resolve, reject) => {
    let REQUEST_URL = Global.BASE_URL + 'products/' + id;
    axios
      .delete(REQUEST_URL)
      .then((response) => {
        resolve(response.data);
      })
      .catch((err) => {
        reject(null);
        //console.warn(err);
      });
  });
};


export const addCategories = ({ body = null }) => {
  return new Promise((resolve, reject) => {
    let REQUEST_URL = Global.BASE_URL + 'categories';
    axios
      .post(REQUEST_URL, body)
      .then((response) => {
        resolve(response.data);
      })
      .catch((err) => {
        reject(null);
        //console.warn(err);
      });
  });
};

export const updateCategories = ({ body = null }) => {
  return new Promise((resolve, reject) => {
    let REQUEST_URL = Global.BASE_URL + 'categories';
    axios
      .put(REQUEST_URL, body)
      .then((response) => {
        resolve(response.data);
      })
      .catch((err) => {
        reject(null);
        //console.warn(err);
      });
  });
};

export const deleteCategoryById = ({ id = null }) => {
  return new Promise((resolve, reject) => {
    let REQUEST_URL = Global.BASE_URL + 'categories/' + id;
    axios
      .delete(REQUEST_URL)
      .then((response) => {
        resolve(response.data);
      })
      .catch((err) => {
        reject(null);
        //console.warn(err);
      });
  });
};

export const getOrders = () => {
  return new Promise((resolve, reject) => {
    let REQUEST_URL = Global.BASE_URL + 'orders';
    axios
      .get(REQUEST_URL)
      .then((response) => {
        resolve(response.data);
      })
      .catch((err) => {
        reject(null);
        //console.warn(err);
      });
  });
};
