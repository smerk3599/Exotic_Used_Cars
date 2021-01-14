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

  render = () => {
    return(
      <div>
        <h2>Add Car to List</h2>
        <div className="container">
            <form onSubmit={this.handleSubmit}>
              <label htmlFor="year">Year</label>
              <input type="text" id="year" onChange={this.handleChange}/>
              <br/>
              <label htmlFor="make">Make</label>
              <input type="text" id="make" onChange={this.handleChange}/>
              <br/>
              <label htmlFor="model">Model</label>
              <input type="text" id="model" onChange={this.handleChange}/>
              <br/>
              <label htmlFor="price">Price</label>
              <input type="text" id="price" onChange={this.handleChange}/>
              <br/>
              <label htmlFor="image">Image</label>
              <input type="text" id="image" onChange={this.handleChange}/>
              <br/>
              <input className="myButton" type="submit" value="Create Car"/>
            </form>
          </div>
          <h2>List of Vehicles</h2>
          <div className="grid-container">
            {this.state.cars.map((car) => {
              return(
                <div className="grid-item" key={car._id}>
                  <ul>
                    <li>{car.year}</li>
                    <li>{car.make}</li>
                    <li>{car.model}</li>
                  </ul>
                  <img src={car.image} alt={car.name}/>
                  <h3>${car.price}</h3>
                  <footer>
                  <button className="myButton" value={car._id} onClick={this.deleteCar}>DELETE</button>
                    <details>
                    <summary>Edit Vehicle</summary>
                      <form id={car._id} onSubmit={this.updateCar}>
                        <label htmlFor="year">Year</label>
                        <input type="text" id="year" onChange={this.handleChange}/>
                        <br/>
                        <label htmlFor="make">Make</label>
                        <input type="text" id="year" onChange={this.handleChange}/>
                        <br/>
                        <label htmlFor="model">Model</label>
                        <input type="text" id="year" onChange={this.handleChange}/>
                        <br/>
                        <label htmlFor="price">Price</label>
                        <input type="text" id="year" onChange={this.handleChange}/>
                        <br/>
                        <label htmlFor="image">Image</label>
                        <input type="text" id="year" onChange={this.handleChange}/>
                        <br/>
                        <input className="myButton" type="submit" value="Update Car"/>
                      </form>
                    </details>
                  </footer>
                </div>
              )
            })}
          </div>
      </div>
    )
  }
}
ReactDOM.render(<App></App>, document.querySelector('main'))
