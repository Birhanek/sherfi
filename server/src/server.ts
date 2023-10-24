import errorHandler from "errorhandler";
import mongoose from "mongoose";

import app from "./app";
import { MONGODB_URL } from "./utils/secrets";
import logger from "./utils/logger";

const mongo_url = MONGODB_URL

mongoose.connect(mongo_url).then(()=>{
    logger.info('Successfully connected to the database')
}).catch((err:Error) => {
    console.log('MongoDB connection error. Please make sure MongoDB is running. ' + err)
    process.exit(1)
})

/**
 * Error Handler. Provides error handing middleware
   only use in development
 */

if(process.env['NODE_ENV'] === 'development'){
    app.use(errorHandler())
}

// Start Express server

app.listen(app.get('port'), ()=>{
    console.log(`App is running at http://localhost:%d in %s mode`,app.get('port'),app.get('env'))
    console.log('  Press CTRL-C to stop\n')
})