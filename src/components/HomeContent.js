import { FaChevronDown } from "react-icons/fa";
import { useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";


const HomeContent = ({countries, dark, setDark, isDark, setIsDark, handleTheme}) => {

    const [drop, setDrop] = useState(false)
    const [theme, setTheme] = useState('light')
    const handleDropBox = () => {
        if (drop === false) {
            setDrop(true)
        } else {
            setDrop(false)
        }
    }

    const countryItems = countries.slice(0,8).map((country, index) => (
        <li key={index} className={`countryCard ${theme}`}>
          <div className="imgHolder">
            <img src={country.flags.png} alt={`${country.name.common} flag`} width="30" />
          </div>
          <div className="infoHolder">
            <p><strong>Name:</strong> {country.name.common}</p>
            <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
            <p><strong>Region:</strong> {country.region}</p>
            <p><strong>Capital:</strong> {country.capital ? country.capital[0] : "N/A"}</p>
          </div>
        </li>
    ));

    useEffect(() => {
        if (dark === 1) {
            setTheme('dark');
          
        } else {
            setTheme('light');
        }
    }, [dark]);


    return ( 
        <main className={`mainContent ${theme}`}>
            <div className="searchAndFilter">
                <div className="search">
                    <IoIosSearch className={`searchIcon  ${theme}`}/>
                    <input type="text" className={`searchInp  ${theme}`} placeholder="Search for country"/>
                </div>
                <div className={`filter ${theme}`}>
                    <span>Dilter by Region</span>
                    <FaChevronDown className='dropIcon' onClick={handleDropBox} />
                </div>
                {drop? ( <div>dd</div> ): ''}
                <ul>
                    {countryItems}
                </ul>
            </div>
        </main>
    );
}
 
export default HomeContent;