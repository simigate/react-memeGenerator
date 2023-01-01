
import '../App.css';
import { useState } from 'react';
import SelectList from './SelectList';
//component used to display all memes from API and returns the selelcted memes URL
const SelectMemes = ({ memes, selectedMemeURL, hideSelectMeme }) => {
    //On submit default return is the url of first meme 
    const [memeURL, SetMemeURL] = useState(memes[0].url)

    //on sumbit of form hide form and return selected meme
    const handleSubmit = (e) => {
        e.preventDefault()
        hideSelectMeme()
        selectedMemeURL(memeURL)
    }
    //on cancel hide form
    const handleAbort = (e) => {
        e.preventDefault()
        hideSelectMeme()
    }
    //function to set status memeURL on change 
    const handleChange = (selectedURL) => {
        SetMemeURL(selectedURL)
        //           display.style.backgroundImage = `url(${memeurl})` 
    }
    return (
        <form className='Select-memes' onSubmit={handleSubmit}  >
            <nav className="Select-navbar">
                <h3 >Select Meme from List:</h3>
            </nav>
            {/* upload memes in select component and return the selected memeurl */}
            <SelectList memes={memes} selectedMemeURL={handleChange} />
            <div className='Select-divBody' id="display" style={{ backgroundImage: `url(${memeURL})` }}></div>
            <div className='Select-divButton'>
                <button className='Select-button' >Submit</button>
                <button className='Select-button' onClick={handleAbort}>Cancel</button>
            </div>
        </form>
    );
}
export default SelectMemes;