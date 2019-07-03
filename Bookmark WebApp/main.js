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
    

    e.preventDefault();
}
