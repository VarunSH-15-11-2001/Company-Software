import React from "react";
import fromHere from "./Floor.module.css";


const Floor = (props) => {
    let floorNumber = 1;
    let styles;
    if(floorNumber===1) {styles = fromHere.floor1 + " " + fromHere.gren}
    else { styles = fromHere.floor2}


    return ( 
        <div >

            <table className={styles}>
                <tr>
                    <td>Room 1</td>
                </tr>
            </table>

        </div>
    );
};

export default Floor;
