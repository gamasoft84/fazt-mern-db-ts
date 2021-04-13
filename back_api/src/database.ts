import mongoose, {ConnectOptions} from 'mongoose';

(async () => {

    try {
        const mongooseOptions: ConnectOptions = {
            useUnifiedTopology:true,
            useNewUrlParser:true
        }
        const db = await mongoose.connect('mongodb://localhost/mern-db-ts', mongooseOptions );
        console.log('Database is connected:', db.connection.name);
    } catch (error) {
        console.error();
    }

})();


