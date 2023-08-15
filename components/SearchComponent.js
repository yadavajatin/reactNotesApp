import SearchIcon from '@mui/icons-material/Search';


const SearchComponent = ({handleSearchNote}) => {

    return (
        <>
            <div className="search">
                <SearchIcon/>
                <input
                    type="text"
                    className="search__bar"
                    placeholder="type to search"
                    onChange={
                        (e) => {
                            handleSearchNote(e.target.value)
                        }
                    }
                />
            </div>
        </>
    )
}

export default SearchComponent