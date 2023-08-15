import DeleteIcon from '@mui/icons-material/Delete';
const NoteComponent = ({id, text, date, handleDeleteNote}) => {
    return(
        <>
            <div className="note">
                <span>{text}</span>
                <div className="note__footer">
                    <small className="note__footer-date">{date}</small>
                    <DeleteIcon
                        fontSize="medium"
                        className="note__footer-delteButton"
                        onClick={
                            () => {
                                handleDeleteNote(id)
                            }
                        }
                    />
                </div>
            </div>
        </>
    )
}

export default NoteComponent