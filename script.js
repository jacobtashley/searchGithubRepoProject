"use strict";

submitForm();

function submitForm(){
    $('form').submit(function(event){
        event.preventDefault();
        getUserRepos();
    });
};

function getUserRepos(){
    var insertText = $('.inputBox').val();
    
    fetch(`https://api.github.com/users/${insertText}/repos`)
        .then(response => response.json())
        .then(response => {
            console.log(response) 
            displayResults(response)
        });

};

function displayResults(response){
    $('#results-list').empty();

    for(let i = 0; i < response.length; i++){
        $('#results-list').append(
            `<li>
            <a href="${response[i].html_url} _blank">${response[i].name}
            </li>`
        )
    };

    $('#results').removeClass('hidden');
};