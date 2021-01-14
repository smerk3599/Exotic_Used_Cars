class App extends React.Component {
  state = {
    year: '',
    make: '',
    model: '',
    price: '',
    image: '',
    cars:[]
  }

handleChange = (event) => {
  this.setState({
    [event.target.id]: event.target.value
  })
}

handleSubmit = (event) => {
  event.preventDefault();
  axios
    .post('/cars', this.state)
    .then((response) =>
      this.setState({
        cars: response.data,
        year: 1913,
        make: '',
        model: '',
        price: 0,
        image: ''
    })
  )
}

deleteCar = (event) => {
  axios
  .delete('/cars/' + event.target.value)
  .then((response) => {
    this.setState({
      cars: response.data
    })
  })
}

updateCar = (event) => {
  event.preventDefault();
  const id = event.target.id;
  axios
    .put('/cars/' + id, this.state)
    .then((response) => {
      this.setState({
        cars: response.data,
        year: 1913,
        make: '',
        model: '',
        price: 0,
        image: ''
      })
    })
}

componentDidMount = () => {
  axios.get('/cars').then(response => {
    this.setState({
      cars: response.data
    })
  })
}
