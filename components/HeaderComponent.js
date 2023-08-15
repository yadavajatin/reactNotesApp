const HeaderComponent = ({handleToggleDarkMode}) => {
    return(
        <>
            <div className="header">
                <h1>Notes</h1>
                <button
                    className="note-save"
                    onClick={() => handleToggleDarkMode((previousDarkMode) => !previousDarkMode)}
                >Toggle Mode</button>
            </div>
        </>
    )
}

export default HeaderComponent