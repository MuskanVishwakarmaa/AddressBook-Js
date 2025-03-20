const Contact = require('./addressBookContact');
let addressBook = [];
function addContactToAddressBook(contact) {
    addressBook.push(contact);
}

// Example Usage
let contact = new Contact("Muskan", "Vishwakarma", "123 Main St", "New York", "NY", "10001", "1234567890", "muskan.vishwakarma@gmail.com");
addContactToAddressBook(contact);
console.log(addressBook);