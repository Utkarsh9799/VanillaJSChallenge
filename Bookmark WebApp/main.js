// Event listener for submit form 
document.getElementById('myForm').addEventListener('submit', saveBookmark);

function saveBookmark(e)
{
    // Retrieving form values
    var name = document.getElementById('siteName').value;
    var url = document.getElementById('siteUrl').value;

    var bookmark = {
        name: name,
        url: url
    }
    
    // Checking if bookmarks are already present or not
    if(localStorage.getItem('bookmarks') === null)
    {
        // Initialising boomarks array 
        var bookmarks = [];
        // Adding to bookmarks array
        bookmarks.push(bookmark);
        // Setting to local storage
        localStorage.setItem('bookmarks',JSON.stringify(bookmarks));
    }
    else
    {
        // Fetching existing bookmarks in Json form
        var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
        // Adding the new bookmark to it
        bookmarks.push(bookmark);
        // Setting back to local storage
        localStorage.setItem('bookmarks',JSON.stringify(bookmarks));
    }

    e.preventDefault();
}

// Displaying bookmarks
function displayBookmark()
{
    // Fetching existing bookmarks in Json form
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    var bookmarkDisplay = document.getElementById('bookmarkDisplay');
    
    // Displaying bookmarks
    bookmarkDisplay.innerHTML = '';
    for(var i = 0;i < bookmarks.length; i++)
    {
        var name = bookmarks[i].name;
        var url = bookmarks[i].url;

        bookmarkDisplay.innerHTML += '<div class="card bg-light text-dark card-body">' +
                                        '<h3>' + name + 
                                        '<a class="btn btn-info" target="_blank" ' + 
                                        'href="' + url + '">Visit</a> ' + 
                                        '<a onclick="removeBookmark(\''+url+'\')" '+ 'class="btn btn-danger"' + 
                                        'target="_blank" ' + 'href="#">Delete</a> ' + 
                                        '</h3>' +
                                     '</div>';
    }

}