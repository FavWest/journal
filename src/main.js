import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import $ from 'jquery';
import { Journal } from './journal.js';
import { Notebook } from './journal.js'

function attachContactListeners(notebook) {
  $("ul#entry-list").on("click", "li", function() {
    console.log("The id of this <li> is " + this.id + ".");
    console.log(showJournalEntry(notebook, this.id));
    $(this).html(`<p>${notebook.notebook[this.id]["title"]}</p><p>${notebook.notebook[this.id]["body"]}</p>`);
  });
}

function showJournalEntry(notebook, currentId){
    const entry = notebook.findJournalEntry(currentId);
    console.log(entry);
}

$(document).ready(function(){
  const notebook = new Notebook();
  attachContactListeners(notebook);
    $('form').submit(function(event){
        event.preventDefault();

        const titleEntry = $("#title").val();
        const bodyEntry = $("#body").val();

        const newEntry = new Journal(titleEntry, bodyEntry);
        notebook.addJournalEntry(newEntry);
        showJournalEntry(notebook, notebook.currentId);
        $("#entry-list").append('<li id="'+notebook.currentId+'">'+titleEntry+'</li>');
    });
});