import PropTypes from 'prop-types';
import '../index.css';
//Selelct component which has memes in list and return url of selected meme 
const SelectList = ({ memes, selectedMemeURL }) => {
    const handleChange = (e) => {
        selectedMemeURL(e.target.value)
    }
    const listItems = <select className='Select-select'
        onChange={handleChange}> {memes.map((meme, index) => <option key={index} value={meme.url}>{meme.name}</option>)}</select >

    return (
        <div >
            {listItems}
        </div>
    );
}
SelectList.defaultProps = {
    listContent: [],
}
SelectList.protoTypes = {
    listContent: PropTypes.string.isRequired,
}
export default SelectList;