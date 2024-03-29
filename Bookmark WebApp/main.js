// Event listener for submit form 
document.getElementById('myForm').addEventListener('submit', saveBookmark);

function saveBookmark(e)
{
    // Retrieving form values
    var name = document.getElementById('siteName').value;
    var url = document.getElementById('siteUrl').value;

    if(!validate(name,url))
    {
        return false;
    }

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

    // Clearing inputs after successful submission
    document.getElementById('myForm').reset();

    displayBookmark();

    e.preventDefault();
}

// Deleting bookmarks
function removeBookmark(url) 
{
    // Retrieving bookmarks from local storage
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks')); 
    // Looping through bookmarks
    for(var i=0; i<bookmarks.length; i++)
    {
        if(bookmarks[i].url == url)
        {
            bookmarks.splice(i,1);
        }
    }
    // Re setting bookmarks after deletion
    localStorage.setItem('bookmarks',JSON.stringify(bookmarks));

    // Displaying updated bookmarks
    displayBookmark();
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
                                        ' <a class="btn btn-info" target="_blank" ' + 
                                        'href="' + url + '">Visit</a> ' + 
                                        '<a onclick="removeBookmark(\''+url+'\')" '+ 'class="btn btn-danger"' + 
                                        'href="">Delete</a> ' + 
                                        '</h3>' +
                                     '</div>';
    }

}

// Validations
function validate(name,url)
{
    // To not accept the empty fields in form input
    if(!name || !url)
    {
        alert('Please fill the required fields!');
        return false;
    }

    // To only accept a url in url field
    var expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
    var regex = new RegExp(expression);

    if(!url.match(regex))
    {
        alert('Enter a valid url!');
        return false;
    }

    return  true;
}