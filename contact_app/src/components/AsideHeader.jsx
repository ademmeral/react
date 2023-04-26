import { useContext, useEffect, useMemo, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { PeopleContext } from '../contexts/people';

const AsideHeader = () => {
    const {people, setSearch, backup} = useContext(PeopleContext);

    const [query, setQuery] = useState('');

    function handleSearch(e){
        setQuery(e.target.value);
    };

    useMemo(() => {
        if (query && !query.startsWith(' ')) {
            const filtered = people.filter( (obj, i, arr) => obj.email.includes(query) );
            setSearch([...filtered]);
            console.log(filtered)
        } else setSearch([...backup]);
    }, [query]);

    return (
        <header className="aside__header flex gap-sm pad-m">
            <div className="search pos-rel ow-h">
                <input 
                    type="text" 
                    placeholder="Search by email" 
                    className='pad-sm' 
                    onChange={handleSearch} 
                    value={query}
                />
                <FaSearch className='muted pos-abs' />
            </div>
            <Link to={"/add"} className='btn new click-shadow cp'>New</Link>
        </header>
    )
};
export default AsideHeader;