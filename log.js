document.addEventListener("DOMContentLoaded", function () {
    const noteInput = document.getElementById("noteInput");
    const addNoteButton = document.getElementById("addNote");
    const noteList = document.getElementById("noteList");

    // Function to create a new note item
    function createNoteItem(text) {
        const noteItem = document.createElement("div");
        noteItem.classList.add("note-item");
        noteItem.textContent = text;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", function () {
            noteItem.remove();
            saveNotesToLocalStorage();
        });

        noteItem.appendChild(deleteButton);
        return noteItem;
    }

    // Function to load notes from local storage
    function loadNotesFromLocalStorage() {
        const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
        savedNotes.forEach(function (noteText) {
            const noteItem = createNoteItem(noteText);
            noteList.appendChild(noteItem);
        });
    }

    // Function to save notes to local storage
    function saveNotesToLocalStorage() {
        const notes = Array.from(noteList.querySelectorAll(".note-item")).map(function (noteItem) {
            return noteItem.textContent;
        });
        localStorage.setItem("notes", JSON.stringify(notes));
    }

    // Add a note
    addNoteButton.addEventListener("click", function () {
        const noteText = noteInput.value.trim();
        if (noteText) {
            const noteItem = createNoteItem(noteText);
            noteList.appendChild(noteItem);
            noteInput.value = "";
            saveNotesToLocalStorage();
        }
    });

    // Load notes and tasks from local storage on page load
    loadNotesFromLocalStorage();

});