class NoteView {

  constructor(noteList){
    this.noteList = noteList
  }

  noteListHTML() {
    var returnString = ""
    this.noteList.list.forEach((element) => {
      returnString = returnString + "<li><div>" + (element.text) + "</div></li>";
    })
    return "<ul>" + returnString + "</ul>"
  }
}
