class Contact {
    constructor(firstName, lastName, address, city, state, zip, phoneNumber, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }

    toString() {
        return `Name: ${this.firstName} ${this.lastName}\nAddress: ${this.address}, ${this.city}, ${this.state} ${this.zip}\nPhone: ${this.phoneNumber}\nEmail: ${this.email}`;
    }
}

// Exporting the Contact class properly
module.exports = Contact;

// Example Usage
let contact = new Contact("Muskan", "Vishwakarma", "123 Main St", "New York", "NY", "10001", "1234567890", "muskan.vishwakarma@gmail.com");
console.log(contact.toString());