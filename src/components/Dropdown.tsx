
interface Props {
  fiatNames: string[];
  filterByFiat: (fiat : string) => void;
  displayFiatName: string;
  isDropDownOpen: boolean;
  setIsDropDownOpen: any;
}

const Dropdown: React.FC<Props> = ({ fiatNames, filterByFiat,	displayFiatName,  isDropDownOpen, setIsDropDownOpen }) => {

  return (
    <div className={"relative"}>
      <button 
        data-tested="dropdown-btn"
        className="rounded opacity-70 bg-gradient-to-r from-style_green to-style_blue p-3 text-white w-72 h-11 mt-6 drop-shadow-lg"
        onClick={() => {
          setIsDropDownOpen(!isDropDownOpen)
        }}
        >Filter By Fiat Currency: {displayFiatName}▼</button>
      <div className={isDropDownOpen ? "absolute border overflow-auto h-60" : "absolute overflow-auto h-60"}>
        <ul 
          className="overflow-auto"
        >
        {isDropDownOpen && (
          <>
            {fiatNames.map((fiat, idx) => {
              return (
                <li
                  className="block bg-white py-3 px-5 w-72 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white text-gray-900"
                  data-tested={`drop${fiat}${idx}`}
                  key={`drop${fiat}${idx}`}
                  onClick={() => {
                    filterByFiat(fiat);
                  }}
                >
                  {fiat}
                </li>
              )
            })}
          </>
        )}
        </ul>
      </div>
    </div>
  )
}

export default Dropdown;