export function Journal(title, body) {
    this.title = title;
    this.body = body;
}

Journal.prototype.wordCount = function() {
    let bodyArray = this.body.split(" ");
    return bodyArray.length + 1;
}

let newEntry = new Journal();

export function Notebook() {
  this.notebook = {};
  this.currentId = 0;
}

Notebook.prototype.addJournalEntry = function(journalObj) {
    journalObj.id = this.assignId();
    this.notebook[journalObj.id] = journalObj;
};

Notebook.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
};

Notebook.prototype.findJournalEntry = function(id){
if (this.notebook[id] != undefined){
        return this.notebook[id];
    }
    return false;
}