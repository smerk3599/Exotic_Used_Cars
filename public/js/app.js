





































































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
              <input className="myButton" type="submit" value="Create Animal"/>
            </form>
          </div>
          <h2>List of Vehicles</h2>
          <div className="grid-container">
            {this.state.cars.map((car) => {
              return(
                <div className="grid-item" key={car._id}>
                  <ul>
                    <li>{this.year}</li>
                    <li>{this.make}</li>
                    <li>{this.model}</li>
                  </ul>
                  <img src={car.image} alt={car.name}/>
                  <h3>{this.price}</h3>
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
