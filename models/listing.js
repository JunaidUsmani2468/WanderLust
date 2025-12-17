const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Review = require('./review.js');

'https://plus.unsplash.com/premium_photo-1756131938894-83600503ca8b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687';

const defaultUrl = 'https://png.pngtree.com/png-vector/20221125/ourmid/pngtree-no-image-available-icon-flatvector-illustration-picture-coming-creative-vector-png-image_40968940.jpg';

const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    image: {
        url: {
            type: String,
            default: defaultUrl,
        },
        filename: String,
    },
    price: {
        type: Number,
        default: 1,
    },
    location: String,
    country: String,
    reviews: [{
        type: Schema.Types.ObjectId,
        ref: 'Review',
    }],
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    geometry: {
        type: {
            type: String,
            enum: ['Point'],
            required: true
        },
        coordinates: {
            type: [Number],
            required: true
        },
    },
    category: {
        type:String,
        enum: [
            'Trending',
            'Iconic City',
            'Amazing Pools',
            'Beach',
            'Amazing Views',
            'Cabins',
            'Lakefront',
            'Mountain',
            'Castles',
            'Camping',
            'Farms',
            'Arctic',
        ],
        required: true,
    },
});

listingSchema.post('findOneAndDelete', async (listing) => {
    if (listing) {
        await Review.deleteMany({ _id: {$in: listing.reviews }});
    }
})

const Listing = mongoose.model('listing', listingSchema);
module.exports = Listing;