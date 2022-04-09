
//when button is clicked, run the addContacts function which accepts the contact info input text as arguments

$('button').click(function () {


    addContacts($('#nameInput').val(), $('#phoneNumberInput').val(), $('#addressInput').val());

})


//addContacts function first tests to make sure input feild are not blank. If they are an alert is given

function addContacts(fullName, phoneNumber, address) {

    if (fullName.length < 1 || phoneNumber.length < 1 || address.length < 1)
        return alert('Please enter Name, Phone Number, and Address feilds')

    //a div is created to contain the new contact info. the name, number, and address info is appended to the new div as h2 & h3's
    //a delete button is also appended which will be hidden by default using css

    var newContact = $('<div></div>')

    $(newContact).append('<h2>' + fullName + '</h2)')
    $(newContact).append('<button class=\'deleteButton\'>&minus;</button>')
    $(newContact).append('<h3>' + phoneNumber + '</h3)')
    $(newContact).append('<h3>' + address + '</h3)')
    $(newContact).append('<hr>')
    $(newContact).addClass('contact')
    //the newContact div is appended to the "contactsList" div created in the html doc
    $('#contactsList').append(newContact)


    //.hover is used to control display of the delete button
    $('.contact').hover(function () {
        $(this).find('.deleteButton').show();
    }, function () {
        $(this).find('.deleteButton').hide();
    });
    //when delete button is clicked, remove its parent (the div it is contained in, aka the newContact)
    $('.deleteButton').click(function () {
        $(this).parent().remove()
    })

}
//searches each div within the contacts list. If the "Value" input fromt the search bar matches text within the div, then the indexOf value will be greater than -1 (if false returns -1)
//when a boolean is placed inside toggle, only elements that return true are shown
//so this will only show divs within the contacts list where the value within the search bar matches text within that div
$('#searchBar').on('keyup', function () {
    var value = $(this).val().toLowerCase();

    $('#contactsList div').each(function () {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    })

})


//the following resources were used, but not explicitly copied
//https://youtu.be/FQwn_yw_1iA
//https://youtu.be/aivI76KQGmQ