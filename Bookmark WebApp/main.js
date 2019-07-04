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

    e.preventDefault();
}
