let addressBook = require('./addContact');
function deleteContactByName(name) {
    addressBook = addressBook.filter(contact => contact.firstName !== name && contact.lastName !== name);
}

// Example Usage
deleteContactByName("Muskan");
console.log(addressBook);