import {useState, useEffect} from "react";
import {nanoid} from 'nanoid';
import NoteListComponent from "./NoteListComponent";
import SearchComponent from "./SearchComponent";
import HeaderComponent from "./HeaderComponent";

const BodyComponent = () => {
    const [notes, setNotes] = useState([])
    const [searchText, setSearchText] = useState("")
    const [darkMode, setDarkMode] = useState(false)

    useEffect(()=>{
        const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data'))
        if (savedNotes){
            setNotes(savedNotes)
        }
    }, [])

    useEffect(
        () => {
            localStorage.setItem('react-notes-app-data', JSON.stringify(notes))
        }, [notes]
    )

    const addNote = (text) => {
        const date = new Date();
        const newNote = {
            id: nanoid(),
            text: text,
            date: date.toLocaleDateString(),
        }
        const newNotes = [...notes, newNote]
        console.log(newNote.id)
        setNotes(newNotes)
    }

    const deleteNote = (id) => {
        const newNotes = notes.filter((note) => note.id !== id)
        setNotes(newNotes)
    }

    return (
        <>
           <div className={`${darkMode && 'dark-mode'}`}>  {/*it says that if dark mode is true then add the string dark-mode which is also our class*/}
                <div className="container">
                    <HeaderComponent handleToggleDarkMode={setDarkMode}/>
                    <SearchComponent handleSearchNote={setSearchText}/>
                    <NoteListComponent
                        notes={notes.filter(
                            (note) => note.text.toLowerCase().includes(searchText)
                        )}
                        handleAddNote={addNote}
                        handleDeleteNote={deleteNote}
                    />
                </div>
            </div>


        </>
    );
};

export default BodyComponent;
