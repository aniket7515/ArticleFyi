import React from 'react'
import bread from "../img/f14.png"
import '../components/Cards.css'
const Cards = ({text,Images}) => {
    return (
        <div>
            
             
              <div className="single-post-wrap style-white">
                    <div className="thumb">
                        <img src={Images} alt="img"/>
                        <a className="tag-base tag-blue" href="#">Tech</a>
                    </div>
                    <div className="details">
                        <h6 className="title"><a href="#">{text}</a></h6>
                        <div className="post-meta-single mt-3">
                            <ul>
                                <li><i className="fa fa-clock-o"></i>08.22.2021</li>
                            </ul>
                        </div>
                    </div>
              </div>

             
                
            
        </div>
    )
}

export default Cards
