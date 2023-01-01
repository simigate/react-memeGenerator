import PropTypes from 'prop-types';
import '../App.css';
import Display from './Display';
import SelectMemes from './SelectMemes';
import { useState, useRef, useEffect } from "react";
//component to create meme
const Create = () => {
    const [memeText, setMemeText] = useState({ topText: 'Top Text', bottomText: 'Bottom Text' });
    const [imgURL, setImageURL] = useState('');
    //state storing mems from API
    const [memes, setMemes] = useState([]);
    //state that decides whether to update memes from API
    const [updateMemes, setUpdateMemes] = useState(true)
    //state that decides whether to show/hide the form to select memes from API
    const [showSelectMemes, setShowSelectMemes] = useState(false)
    //state that decides whether to choose meme from local machine or API
    const [showLocal, setShowLocal] = useState(false);
    const inputImageFile = useRef(null);
    console.log(showLocal)
    useEffect(() => {
        //getting memes from online upload loading
        getAPImemes()
    }, [updateMemes])
    //function to show choose meme from local or API based on showLocal status
    const handleClickGetMemes = () => {
        if (showLocal) {
            handleShowLocal()
        }
        else {
            setUpdateMemes(true);
            setShowSelectMemes(true);
        }
    }
    //function to get the 100 memes from API and se the first image as default meme
    const getAPImemes = () => {
        fetch("https://api.imgflip.com/get_memes")
            .then((result) => result.json())
            .then((data) => {
                setMemes(data.data.memes);
                setImageURL(data.data.memes[0].url)
            });
    }
    //function to select the meme from local machine
    const getLocalMeme = (e) => {
        const { files } = e.target;
        if (files && files.length) {
            const filename = files[0].name;
            var parts = filename.split(".");
            const fileType = parts[parts.length - 1];
            let value = URL.createObjectURL(files[0]);
            console.log(filename)
            setImageURL(value)
        }
    }
    //function to open file explorer
    const handleShowLocal = () => {
        inputImageFile.current.click();
    }
    //function to show SelectMemes form to select a meme from API
    const handleShowSelectMeme = () => {

        return <SelectMemes memes={memes} selectedMemeURL={(url) => setImageURL(url)} hideSelectMeme={handleHideSelectMeme} />
    }
    //function to close the SelectMemes form
    const handleHideSelectMeme = () => {
        setShowSelectMemes(false);
    }
    //function to handle change of values of elements
    const handleChangeText = async (e) => {
        const { name, value } = e.target;
        setMemeText((prevStat) => {
            return { ...prevStat, [name]: value }
        });
    };

    return (
        <div className="App-create">
            <div className="Create-text">
                <input type="text" name="topText" onChange={(e) => handleChangeText(e)} value={memeText.topText} />
                <input type="text" name="bottomText" onChange={(e) => handleChangeText(e)} value={memeText.bottomText} />
            </div>
            <div className='Create-image'>
                <input
                    type="file"
                    style={{ display: "none" }}
                    accept="image/*"
                    ref={inputImageFile}
                    onChange={getLocalMeme}
                />
                <button className='Create-button' onClick={handleClickGetMemes}>
                    Get a new meme image</button>
                <label className='Create-label'>API</label>
                < input id='switch' type="checkbox" checked={showLocal} onChange={() => { setShowLocal((prevStat) => { return !prevStat }) }} />
                <label className='Create-switch' htmlFor="switch" ></label>
                <label className='Create-label'>Local</label>
            </div>
            {/* component that displays the meme */}
            <Display topText={memeText.topText} bottomText={memeText.bottomText} imgURL={imgURL} />
            {updateMemes ? setUpdateMemes(false) : null}
            {showSelectMemes && handleShowSelectMeme()}
        </div >
    );
}

export default Create;