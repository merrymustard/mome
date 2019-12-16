import React, { Component, createContext } from "react";
import MY_SERVICE from "./services/index";
import Swal from "sweetalert2";

export const MyContext = createContext();

class MyProvider extends Component {
  state = {
    loggedUser: false,
    formSignup: {
      name: "",
      lastname: "",
      country: "",
      gender: "",
      password: "",
      email: ""
    },
    newCartProduct: {
      id: String,
      price: Number,
      quantity: Number
    },
    createdOrder: {},
    loginForm: {
      email: "",
      password: ""
    },
    stockInputs: [0],
    user: {},
    newProduct: {
      name: "",
      brand: "",
      caption: "",
      price: 0,
      color: [],
      size: [],
      quantity: [],
      details: "",
      image: [],
      category: "",
      subcategory: ""
    },
    productFeed: [],
    checked: false,
    productDetail: {},
    open: false,
    Cart: [],
    carousel: 0
  };

  componentDidMount() {
    if (document.cookie) {
      MY_SERVICE.getUser()
        .then(({ data }) => {
          this.setState({
            loggedUser: true,
            user: data.user
          });
          Swal.fire(`Welcome back ${data.user.name} `, "", "success");
        })
        .catch(err => console.log(err));
    }
  }
  handleRadio = e => {
    const genderValue = e.target.innerText;
    if (genderValue === "Mujer") {
      this.setState({
        formSignup: { ...this.state.formSignup, gender: "Mujer" }
      });
    } else {
      this.setState({
        formSignup: { ...this.state.formSignup, gender: "Hombre" }
      });
    }
  };

  handleInput = (e, obj) => {
    const a = this.state[obj];
    const key = e.target.name;
    a[key] = e.target.value;
    this.setState({
      obj: a
    });
  };

  handleSignup = async e => {
    e.preventDefault();
    const { data } = await MY_SERVICE.signup(this.state.formSignup);
    console.log(data);
    Swal.fire(`Welcome ${data.user.name}`, "User created", "success");
  };

  handleStockInput = e => {
    const a = e.target.name;
    const list = this.state.newProduct.a;
    list.push(e.target.value);
    const addStock = {};
    addStock[a] = list;
    this.setState({
      newProduct: addStock
    });
  };

  addProduct = async e => {
    e.preventDefault();
    const { newProduct } = this.state;
    console.log(this.state.newProduct);
    const { data } = await MY_SERVICE.addproduct({ newProduct });
    console.log(data);
    // Swal.fire(`Success`, `New Product Created ${data.product.name}`, "success")
  };

  addStockForm = e => {
    e.preventDefault();
    this.setState(prevState => {
      return {
        ...prevState,
        stockInputs: [
          ...prevState.stockInputs,
          prevState.stockInputs.length + 1
        ]
      };
    });
  };

  handleLogin = (e, cb) => {
    e.preventDefault();
    MY_SERVICE.login(this.state.loginForm)
      .then(({ data }) => {
        console.log(data);
        this.setState({
          loggedUser: true,
          user: data.user
        });
        cb();
      })
      .catch(err => {
        Swal.fire(`Quien sabe que paso`, "☠️", "error");
      });
  };

  handleLogout = async cb => {
    await MY_SERVICE.logout();

    window.localStorage.clear();
    this.setState({
      loggedUser: false,
      user: {}
    });
    cb();
  };

  handleCheckboxChange = event => {
    this.setState({ checked: event.target.checked });
  };

  // side menu
  toggleMenu = e => {
    const menuname = e.target.name;
    if (this.state.open) {
      this.setState({ open: false });
    } else {
      this.setState({ open: true });
    }
  };


  
  deleteProduct = async e => {
    // HAY QUE PONER EN EL ID DEL BOTÓN EL ID DEL PRODUCTO A ELIMINAR
    //HAY QUE HACER UN COMPONENT DID CHANGE PARA REFRESCAR LA PÁGINA Y ACTUALIZARLA
    await MY_SERVICE.deleteProduct(e.target.id);
  };
  deleteProductFromWishlist = async e => {
    await MY_SERVICE.deleteProductFromWishlist(e.target.id);
  };
  getProducts = async () => {
    const prods = await MY_SERVICE.getProducts();
    this.setState({ productFeed: prods });
  };
  getProductDetail = async e => {
    // LA CARD DEL PRODUCTO TIENE QUE TENER EL ONCLICK CON ESTA FUNCIÓN Y TIENE QUE TENER EL ID CON EL ID DEL PRODUCTO EN CUESTIÓN
    const product = await MY_SERVICE.productDetail(e.target.id);
    this.setState({ productDetail: product });
  };
  // ESTA BELLEZZA VA EN EL SUBMIT BUTTON DE ADD TO CART, EN LOS INPUTS DE LOS PRODUCTOS TIENE QUE IR EL HANDLEINPUT RECIBIENDO COMO SEGUNDO PARAMETRO "newCartProduct" PARA QUE LO AÑADA A ESE FORM
  addProductToCart = () => {
    const prod = this.state.newCartProduct;
    const cart = this.state.Cart.push(prod);
    this.setState({ Cart: cart });
  };
  // CONFIRMACIÓN DE LA ORDEN
  submitOrder = async () => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    const productsArray = this.state.Cart.map(e => ({
      prod: { product: e.id, quantity: e.quantity }
    }));
    const totalValue = productsArray
      .map(e => e.quantity * e.price)
      .reduce(reducer);
    const newOrd = { products: productsArray, total: totalValue };
    const { data } = await MY_SERVICE.createOrder(newOrd);
    this.setState({ createdOrder: data.newOrder });
  };

  nextCarousel = step => {
    const { carousel } = this.state;
    if (step === "left") {
      if (this.state.carousel === 0) {
        return this.setState({ carousel: 3 });
      }
      return this.setState({ carousel: carousel - 1 });
    } else {
      if (this.state.carousel === 3) {
        return this.setState({ carousel: 0 });
      }
      return this.setState({ carousel: carousel + 1 });
    }
  };

  render() {
    console.log(this.state);
    return (
      <MyContext.Provider
        value={{
          state: this.state,
          loggedUser: this.state.loggedUser,
          formSignup: this.state.formSignup,
          loginForm: this.state.loginForm,
          handleInput: this.handleInput,
          handleSignup: this.handleSignup,
          handleLogin: this.handleLogin,
          handleLogout: this.handleLogout,
          addStockForm: this.addStockForm,
          newProduct: this.state.newProduct,
          addProduct: this.addProduct,
          stockInputs: this.state.stockInputs,
          checked: this.state.checked,
          handleCheckboxChange: this.handleCheckboxChange,
          switchOpen: this.switchOpen,
          switchClose: this.switchClose,
          toggleMenu: this.toggleMenu,
          handleRadio: this.handleRadio,
          deleteProduct: this.deleteProduct,
          deleteProductFromWishlist: this.deleteProductFromWishlist,
          getProducts: this.getProducts,
          getProductDetail: this.getProductDetail,
          addProductToCart: this.addProductToCart,
          submitOrder: this.submitOrder,
          open: this.state.open,
          newCartProduct: this.state.newCartProduct,
          createdOrder: this.state.createdOrder,
          productFeed: this.state.productFeed,
          productDetail: this.state.productDetail,
          Cart: this.state.Cart

          // user: this.state.user,
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

export default MyProvider;
