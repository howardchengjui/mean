$(document).ready(function () {
    $('button').click(function () {
        console.log("getting information");
        $.get("https://api.github.com/users/howardchengjui", displayName)
        // Notice that displayName is a function that takes in 1 parameter (this is the data that comes back from the API)
        function displayName(data) {
            var Name=data.id;
            console.log(data.id);
            $('p').html(Name);
        }
    
})
})