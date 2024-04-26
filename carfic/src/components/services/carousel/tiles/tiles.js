import React from 'react';
import './tiles.css';
import brakes from '../../../../assets/image/fic/69.jpeg';
import spares from '../../../../assets/image/fic/78.jpeg';
import engine from '../../../../assets/image/fic/28.jpeg';


const Tiles = () => {
    return (
       <div className="image-tiles">
         <div className="tile">
           <img style={{height: '500px', objectFit: 'cover', fontWeight:'bold'}} src={brakes} alt="brakes" />
           <h3>Brakes & Suspension</h3>
         </div>
         <div className="tile">
           <img style={{height: '500px', objectFit: 'cover', fontWeight:'bold'}} src={spares} alt="Placeholder" />
           <h3> Auto Parts Sales</h3>
         </div>
         <div className="tile">
           <img style={{height: '500px', objectFit: 'cover', fontWeight:'bold'}} src={engine} alt="Placeholder" />
           <h3>Transmission Repairs</h3>
         </div>
       </div>
    );
}
export default Tiles;
