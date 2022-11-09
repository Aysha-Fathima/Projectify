/*
const { MongoClient } = require('mongodb')

let dbConnection

module.exports = {
    connectToDb: (cb) => {
        MongoClient.connect('mongodb+srv://Projectify22:Fz48SVSVbQSX3cvS@mini-pastebin.9lppnzf.mongodb.net/?retryWrites=true&w=majority')
         .then((client) => {
            dbConnection = client.db()
            return cb()
         })
         .catch(err => {
            console.log(err)
            return cb(err)
         })
    },
    getDb: () => dbConnection
}
*/