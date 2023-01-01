import '../App.css';
import Draggable, { DraggableCore } from 'react-draggable'; // The default
//Component that displays the selelcted meme with the corresponding texts
const Display = ({ topText, bottomText, imgURL }) => {
    return (
        <div className='App-display' >
            <img src={imgURL} className="Display-image" alt="meme" />
            <div className='Display-image' alt="meme" >
                {/* The toptext is made draggable using the Draggable */}
                <Draggable handle=".Display-toptext" bounds={{ left: - 60, top: -30, right: 450, bottom: 335 }} axis="both" >
                    <div >
                        <div className='Display-toptext' >{topText} </div>
                    </div>
                </Draggable>
                {/* The bottomtext is made draggable using the Draggable */}
                <Draggable handle=".Display-bottomtext" bounds={{ left: -200, top: -330, right: 310, bottom: 35 }} axis="both" >
                    <div >
                        <div className='Display-bottomtext' >{bottomText} </div>
                    </div>
                </Draggable>
            </div>


        </div >
    );
}

export default Display;