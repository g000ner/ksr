// import s from "./s.module.css"
// import { SearchOutlined } from '@ant-design/icons';


// export const SearchBar  = () => {
//     return (
//       <div>
//         <div className={s.searchBarBar} type="search">
//           <input  placeholder="Поиск..."/>
//           <button> <SearchOutlined /> </button>
//         </div>
//       </div>
//     );
//   };
  
// export default SearchBar;

import s from "./s.module.css"
import { SearchOutlined } from '@ant-design/icons';
import { useDetectOutsideClick } from "./useDetectOutsideClick";
import React, { useRef } from "react";


export const SearchBar  = (props) => {
  const dropdownRef = useRef(null);
    const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
    const onClick = () => setIsActive(!isActive);

    return (
      <div>
        <div className={s.searchBarBar} type="search">
          <input  placeholder="Поиск..." {...props} />
          <button onClick={onClick}> <SearchOutlined /> </button>
        </div>
      </div>
    );
  };
  
export default SearchBar;