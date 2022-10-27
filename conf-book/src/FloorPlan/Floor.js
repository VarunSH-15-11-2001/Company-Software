import React from "react";
import fromHere from "./Floor.module.css";
import Indx from "./index";


const Floor = (props) => {
    let floorNumber = 2;
    let styles;
    if(floorNumber===1) {styles = fromHere.floor1 + " " + fromHere.gren}
    else { styles = fromHere.floor2}


    return ( 
        <div >

            {/* <table className={styles}>
                <tr>
                    <td>Room 1</td>
                </tr>
                <tr>
                    <td> Temp</td>
                    <td> Temp</td>
                </tr>
                <tr>
                    <td>Temp</td>
                    <td>Temp</td>
                </tr>
            </table> */}

            <Indx />

            

        </div>
    );
};

export default Floor;
