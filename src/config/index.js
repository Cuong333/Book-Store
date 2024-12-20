const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb+srv://cuong:<db_password>@atlascluster.43xuzhs.mongodb.net/?retryWrites=true&w=majority&appName=AtlasCluster', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        });
        console.log('Connect successfully!!!');
    } catch (error) {
        console.log('Connect failure!!!');
    }
}

module.exports = { connect };