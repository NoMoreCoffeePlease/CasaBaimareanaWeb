import React, { useState, useEffect } from 'react';
import './FoodModal.css';
import {Link, useHistory} from 'react-router-dom';


export default function FoodHome() {


   
    return <div>
       
      
            <div className='foodInnerModal'> 
                <div className='foodCard'> 
                    <div className='foodHalfCard'>   
                        <h0 className='foodModalTitle'>Meniu</h0>
                        <h0 className='foodModalSubTitle'>Descriere despre bucataria locala. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet dignissim leo.</h0>
                        <Link
                            style={{ textDecoration: "none", color: "black" }}
                            to="/food/menu"
                        > 
                        <button className='foodModalDetailButton' >Galerie foto</button>
                        </Link>
                    </div> 
                '</div>
                <div className='foodCard'>
                <div className='foodHalfCard'>   
                        <h0 className='foodModalTitle'>Sala si terasa</h0>
                        <h0 className='foodModalSubTitle'>Descriere despre bucataria locala. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet dignissim leo.</h0>
                        <Link
                            style={{ textDecoration: "none", color: "black" }}
                            to="/food/event-hall"
                        > 
                        <button className='foodModalDetailButton' ><a href="/food">Galerie foto</a></button>
                        </Link>
                    </div> 
                </div>
                <div className='foodCard'>
                <div className='foodHalfCard'>   
                        <h0 className='foodModalTitle'>Evenimente</h0>
                        <h0 className='foodModalSubTitle'>Descriere despre bucataria locala. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet dignissim leo.</h0>
                        <Link
                            style={{ textDecoration: "none", color: "black" }}
                            to="/food/events"
                        > 
                        <button className='foodModalDetailButton' ><a href="/food">Galerie foto</a></button>
                        </Link>
                    </div> 
                </div>

              </div>
       
        
          
        </div>
       
        
}