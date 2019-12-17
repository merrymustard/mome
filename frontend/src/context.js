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
      quantity: 0,
      size: ""
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
    carousel: 0,
    wishListProds:[],
    totalValueCart:0,
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
  // componentDidUpdate(prevState, prevProps) {
  //   if (prevState.Cart.length != this.state.Cart.length){
      
  //     const reducer = (accumulator, currentValue) => accumulator + currentValue;
  //     const productsArray = this.state.Cart.map(e => ({
  //       prod: { product: e.id, quantity: e.quantity }
  //     }));
  //     const totalValue = productsArray
  //       .map(e => e.quantity * e.price)
  //       .reduce(reducer);
  //     this.setState({totalValueCart:totalValue})
  //   }
  // }
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
    console.log(a)
    const key = e.target.name;
    a[key] = e.target.value;
    this.setState({
      obj: a
    });
  };
  handleSize = async (e) =>{
    console.log(e.target.value, 'hey')
    await this.setState({newCartProduct:{...this.state.newCartProduct, size:e.target.value}})
    console.log(this.state.newCartProduct.size)
    console.log(this.state.newCartProduct)
  }

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
  handleProductQty = a =>{
    console.log(this.state.newCartProduct.quantity)
    let x = this.state.newCartProduct.quantity
    if(a) {x++; console.log('hey'); this.setState({newCartProduct:{...this.state.newCartProduct,quantity:x}})}
    if(!a){x--; console.log('ho'); this.setState({newCartProduct:{...this.state.newCartProduct,quantity:x}})}
    console.log(x)
    console.log(this.state.newCartProduct)
  }

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
    this.props.history.push("/"); // ESTO NO FUNCIONA!!!!
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
    const usr = await MY_SERVICE.deleteProduct(e.target.id);
    this.setState({wishListProds:usr.wishList})
  };


  addProductToWishlist = async e =>{
    
    const usr = await MY_SERVICE.addProductToWishlist(e.target.id)
    this.setState({wishListProds:usr.wishList})
  }
  deleteProductFromWishlist = async e => {
    const  { newlist } = await MY_SERVICE.deleteProductFromWishlist(e.target.id);
    this.setState({wishListProds:newlist.usr.wishList})
  };
  getProducts = async () => {
    const {data} = await MY_SERVICE.getProducts();
    this.setState({ productFeed: data.products });
  };
  getProductDetail = async (e, cb) => {
    // LA CARD DEL PRODUCTO TIENE QUE TENER EL ONCLICK CON ESTA FUNCIÓN Y TIENE QUE TENER EL ID CON EL ID DEL PRODUCTO EN CUESTIÓN
    const {data} = await MY_SERVICE.productDetail("5df017ed70fca855aae1cded");
    this.setState({ productDetail: data.product });
  };
  // ESTA BELLEZZA VA EN EL SUBMIT BUTTON DE ADD TO CART, EN LOS INPUTS DE LOS PRODUCTOS TIENE QUE IR EL HANDLEINPUT RECIBIENDO COMO SEGUNDO PARAMETRO "newCartProduct" PARA QUE LO AÑADA A ESE FORM
  addProductToCart = async () => {
    const productId = "5df017ed70fca855aae1cded"
    const cart = this.state.Cart
    const {data} = await MY_SERVICE.productDetail(productId)
    console.log(data)
    console.log(this.state.newCartProduct)
    data.product.quantity = this.state.newCartProduct.quantity
    data.product.size = this.state.newCartProduct.size
    cart.push(data.product)
    this.setState({ Cart: cart });
    console.log(this.state.Cart)
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    const productsArray = this.state.Cart.map(e => ({
        prod: { product: e.id, quantity: e.quantity }
      }));
    const totalValue = productsArray
      .map(e => e.quantity * e.price)
      .reduce(reducer);
    this.setState({totalValueCart:totalValue})
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

  render() {;
    console.log(this.state.newCartProduct)
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
          addProductToWishlist: this.addProductToWishlist,
          getProducts: this.getProducts,
          getProductDetail: this.getProductDetail,
          addProductToCart: this.addProductToCart,
          submitOrder: this.submitOrder,
          open: this.state.open,
          newCartProduct: this.state.newCartProduct,
          createdOrder: this.state.createdOrder,
          productFeed: this.state.productFeed,
          productDetail: this.state.productDetail,
          Cart: this.state.Cart,
          wishListProds: this.state.wishListProds,
          handleProductQty: this.handleProductQty,
          handleSize: this.handleSize,
          totalValueCart: this.totalValueCart

          // user: this.state.user,
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

export default MyProvider;
