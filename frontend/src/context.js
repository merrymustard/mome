import React, {
  Component,
  createContext
} from "react";
import MY_SERVICE from "./services/index";
import Swal from "sweetalert2";

export const MyContext = createContext();

class MyProvider extends Component {
  state = {
    loggedUser: false,
    formSignup: {
      username: "",
      name: "",
      lastname: "",
      country: "",
      gender: "",
      password: "",
      email: ""
    },
    loginForm: {
      username: "",
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
    checked: false
  };
  componentDidMount() {
    if (document.cookie) {
      MY_SERVICE.getUser()
        .then(({
          data
        }) => {
          this.setState({
            loggedUser: true,
            user: data.user
          });
          Swal.fire(`Welcome back ${data.user.name} `, "", "success");
        })
        .catch(err => console.log(err));
    }
  }

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
    const {
      data
    } = await MY_SERVICE.signup(this.state.formSignup);
    console.log(data)
    Swal.fire(`Welcome ${data.user.name}`, "User created", "success");
  };

  handleStockInput = e => {
    const a = e.target.name;
    const list = this.state.newProduct.a;
    list.push(e.target.value);
    const addStock = {}
    addStock[a] = list
    this.setState({
      newProduct: addStock
    })
  }

  addProduct = async e => {
    e.preventDefault();
    const {newProduct} = this.state
    console.log(this.state.newProduct)
    const {
      data
    } = await MY_SERVICE.addproduct({newProduct})
    console.log(data)
    // Swal.fire(`Success`, `New Product Created ${data.product.name}`, "success")
  }

  addStockForm = e => {
    e.preventDefault();
    this.setState(prevState => {
      return {
        ...prevState,
        stockInputs: [...prevState.stockInputs, prevState.stockInputs.length + 1]        
      }
    })
  }


  handleLogin = (e, cb) => {
    e.preventDefault();
    MY_SERVICE.login(this.state.loginForm)
      .then(({
        data
      }) => {
        console.log(data)
        this.setState({
          loggedUser: true,
          user: data.user
        })
        cb()
      })
      .catch(err => {
        Swal.fire(`Quien sabe que paso`, '☠️', 'error')
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
    this.setState({ checked: event.target.checked })
  }


  render() {
    console.log(this.state)
    return ( <MyContext.Provider value = {
        {          
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
          handleCheckboxChange: this.handleCheckboxChange
          // user: this.state.user,
        }
      } >
      {
        this.props.children
      } 
      </MyContext.Provider>
    );
  }
}

export default MyProvider;