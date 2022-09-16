import express from 'express';
import { MongoClient, ObjectID } from "mongodb";
import { User } from './model/user';
import bodyParser from 'body-parser'


const app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
const port = 3000;

const uri = "mongodb+srv://user1:coupDeMain@cluster0.l3r5gkr.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);


client.connect((err) => {

  if (err) {
    console.error(err)
  }

  console.log("Connected !")

  const database = client.db("coupDeMain")


  // database.dropCollection("users")
  // database.dropCollection("services")
  // database.dropCollection("exchanges")

  const usersCollection = database.collection("users")
  const servicesCollection = database.collection("services")
  const exchangesCollection = database.collection("exchanges")

  usersCollection.deleteMany({})
  servicesCollection.deleteMany({})
  exchangesCollection.deleteMany({})

  usersCollection.insertOne(new User(
    "Je suis ponctuel, sérieux, j'aime réparer des ordinateurs et rendre service",
    "Jojo",
    "Dupont",
    "04/02/1995",
    "9 Rue de Cucugnan",
    "jojo.dupont@mail.fr",
    "06 48 47 45 41"))
    .then((err) => console.error(err))

  usersCollection.insertOne(new User(
    "Je suis ponctuel, sérieux, j'aime réparer des ordinateurs et rendre service",
    "Juju",
    "Dupond",
    "04/02/1994",
    "9 Rue de Cogno",
    "jojo.dupont@mail.fr",
    "06 48 42 45 41"))
    .then((err) => console.error(err))

  usersCollection.insertOne(new User(
    "Je suis ponctuel, sérieux, j'aime réparer des ordinateurs et rendre service",
    "Jiji",
    "Dupont",
    "04/02/1996",
    "9 Rue de Cucu",
    "jojo.dupont@mail.fr",
    "06 49 49 45 41"))
    .then((err) => console.error(err))


  app.get('/', (req, res) => {
    res.send('Default');
  });

  // ========== USER =========
  app.get('/user', (req, res) => {
    let criteria = {}
    console.log("received a find user with following filters : " + JSON.stringify(req.body))
    if (req.body !== undefined) {
      criteria = req.body
    }

    usersCollection.find(criteria).toArray((err, result) => {
      if (err) {
        console.log(err)
      }
      console.log("Found folliwing result ids : " + result.map((value) => value._id.toString()))
      res.send(result);
    })

  });

  app.post('/user', (req, res) => {
    const user = <User>(req.body)
    usersCollection.insertOne(user).then((value) => {
      console.log("User " + JSON.stringify(value) + " inserted in db")
      res.send("User " + JSON.stringify(value) + " inserted in db")
    })
  })

  app.put('/user', (req, res) => {
    let filters = req.body.filters
    if (Object.keys(filters).includes("_id")) {
      filters["_id"] = new ObjectID(filters["_id"])
    }
    const update = req.body.update
    usersCollection.updateOne(filters, update)
  });

  app.delete('/user', (req, res) => {
    res.send('Hellu!');
  });


  // ========== SERVICE =========
  app.get('/service', (req, res) => {
    res.send('Hellu!');
  });

  app.post('/service', (req, res) => {
    res.send('Hellu!');
  });

  app.put('/service', (req, res) => {
    res.send('Hellu!');
  });

  app.delete('/service', (req, res) => {
    res.send('Hellu!');
  });



  app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
  });

  // perform actions on the collection object
  // client.close();
});
