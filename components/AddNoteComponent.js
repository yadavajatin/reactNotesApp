import {useState} from "react"
const AddNoteComponent = ({handleAddNote}) => {
    const [noteText, setNoteText] = useState("")

    const characterLimit = 200
    const handleChange = (e) => {
        if(characterLimit - e.target.value.length >= 0){ //if our character limit is greater
            setNoteText(e.target.value)                  //then or equal to 0 then setNoteText
                                                         //keep updating the text area and if our
        }                                                //length is get into minus it will skip
                                                         //setNoteText function and stopped updating

    }

    const handleSaveNote = () => {
        if(noteText.trim().length > 0){
            handleAddNote(noteText)
            setNoteText("")
        }

    }
    return (
        <>
            <div className="note new-note">
                <textarea
                    name=""
                    id=""
                    cols="10"
                    rows="8"
                    placeholder="type to add note"
                    value={noteText}
                    onChange={handleChange}>
                </textarea>

                <div className="note__footer">
                    <small>{characterLimit - noteText.length}</small>
                    <button
                        className="note-save"
                        onClick={handleSaveNote}
                    > Save </button>
                </div>
            </div>
        </>
    )
}

export default AddNoteComponent