// Define the schema for the invoice
const mongoose=require('mongoose')

const InvoiceSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide name']
    },
    email: {
        type: String,
        required: [true, 'Please provide email'],
        match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            'Please provide a valid email',
        ],
    },
    date: {
        type: Date,
        required: true
    },
    members:{
        type:Number,
        required: true
    },
    // Additional fields can be added here as needed
});

// Create a virtual property for the QR code URL
// InvoiceSchema.virtual('qrCodeUrl').get(function() {
//     return `https://api.qrserver.com/v1/create-qr-code/?data=${this.registrationNumber}&size=200x200`;
// });

// Compile the schema into a model
const Invoice = mongoose.model('Invoice', InvoiceSchema);

// Export the model for use in other parts of the application
module.exports = Invoice;

