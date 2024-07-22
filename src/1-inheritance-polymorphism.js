//q3: create 2+ properties and 3+ methods
class Phone {
  constructor(phoneNumber) {
    this.phoneNumber = phoneNumber;
    this.contacts = [];
  }
  makeCall(callContact) { //given a name or number
    const validContact = this.contacts.find(({ name, phoneNumber }) => name === callContact || phoneNumber === callContact); //destructuring
    if (validContact) {
      return `Calling ${validContact.name}...`;
    } else if (callContact.length === 10) {
      return `Calling ${callContact}...`;
    } else {
      return 'Invalid';
    }
  }
  addContact(newContact) { //newContact obj = { name, phoneNumber }
    if (!newContact.name || !newContact.phoneNumber || newContact.phoneNumber.length !== 10) return "Invalid";
    this.contacts.push(newContact);
    return `${newContact.name} added.`;
  }
  removeContact(contactName) {
    const findContact = this.contacts.findIndex(({ name }) => name === contactName);
    if (findContact === -1) {
      return 'Contact not found.';
    }
    else {
      this.contacts.splice(findContact, 1);
      return `${contactName} removed.`;
    }
  }
};

//q4: create 2+ properties and 1+ method
class AppleIPhone extends Phone { //made AppleIphone a subclass of Phone
  constructor(phoneNumber, model) {
    super(phoneNumber);
    this.model = model;
  }
  sendIMessage(device, msg) {
    if (device instanceof AppleIPhone) return `Message: ${msg} - sent from ${this.model}`;
    return 'Message could not be sent.';
  }
};

module.exports = {
  Phone,
  AppleIPhone,
};
