export default {
    name: 'contact',
    title: 'Contact',
    type: 'document',
    fields: [{
        name: 'email',
        title: 'Email',
        type: 'string',
    }, {
        name: 'phoneNumber',
        title: 'PhoneNumber',
        description: 'Phone number for contact',
        type: 'string',
    }, {
        name: 'location',
        title: 'Location',
        type: 'string',
    }],
};