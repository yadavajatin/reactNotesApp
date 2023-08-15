import NoteComponent from './NoteComponent';
import AddNoteComponent from './AddNoteComponent';

const NoteListComponent = ({notes, handleAddNote, handleDeleteNote}) => {
    return (
        <>
            <div className="note-list">
                {notes.map((note) => {
                    return (
                        <NoteComponent
                            id={note.id}
                            text={note.text}
                            date={note.date}
                            handleDeleteNote={handleDeleteNote}
                        />

                    )
                })}
                <AddNoteComponent
                    handleAddNote={handleAddNote}

                />
            </div>
        </>
    )
}

export default NoteListComponent