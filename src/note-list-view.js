class NoteView {

  constructor(noteList){
    this.noteList = noteList
  }

  noteListHTML() {
    var returnString = ""
    this.noteList.list.forEach((element) => {
      returnString = returnString + (element.text) + " ";
    })
    return "<ul>" + returnString + "</ul>"
  }
}
