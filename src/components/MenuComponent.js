import React, { Component } from "react"
import dishesData from './MenuData'
// import MenuUI from './MenuUI'

class MenuComponent extends Component {

  constructor() {
    super()
    this.state = {
      dishes: dishesData
    }
  }

  render() {

    const dishesAvailable = this.state.dishes.map(dish => {

      return (
        <div key={dish.key} className="dish">

          <div id="img">
            <img src={dish.image} alt="Dishes" />
          </div>

          <div className="desc">
            <h6>{dish.name}</h6>
            <small>Price: {dish.price}</small>
            {dish.description.length >= 65 ?
              <p>
                {dish.description.slice(0, 60)} <a href="#" target="_blank">...more</a>
              </p> :
              <p>
                {dish.description} <a href="#" target="_blank">...more</a>
              </p>}
          </div>

        </div>
      )
    })

    return (
      <div className="dishContainer">
        {dishesAvailable}
      </div>
    )

  }
}

export default MenuComponent;