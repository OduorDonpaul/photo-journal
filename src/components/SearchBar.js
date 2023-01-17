import React, {usestate} from 'react';

const barStyle = {
    width:"40%",
    height:"1.5em",
    borderRadius:"1em",
    border:"none",
    fontSize:"1em",
    textAlign:"center"
};

const SearchBar = () => {

    //const [searchInput, setSearchInput] = usestate("");

    //const handleChange = (e) => {
      // e.preventDefault();
     //  setSearchInput(e.target.value);
  //  }
    return(
          
        <div style={{width:"100%", textAlign:"center"}}>    
            <input 
                style={barStyle}
                type="text"
                placeholder={"Search here"}
              
                />
        </div>
    )
    
};

export default SearchBar;
