import React, { Component } from 'react'
import { Media } from 'reactstrap'
import dishesData from './MenuData'

class MenuUI extends Component {

    constructor() {
        super()
        this.state = {
            dishes: dishesData
        }
    }
    render() {
    
    const menu = this.state.dishes.map((dish) => {

        return (
          <div key={dish.id} className="col-6 col-sm-3 mt-5" style={{display:"inline"}}>
            <Media tag="li" style={{listStyle:"none", width:"9%", fontSize:".2em"}}>
              <Media left middle>
                  <Media object src={dish.image} alt={dish.name} />
              </Media>
              <Media body className="ml-5">
                <Media heading>{dish.name}</Media>
                <p>{dish.description}</p>
              </Media>
            </Media>
          </div>
        );
    });

    return (
        <div className="container">
        <div className="row">
        <Media list>
            {menu}
        </Media>
        </div>
        </div>
    )}

}

export default MenuUI
