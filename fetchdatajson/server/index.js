const express = require('express');
const app = express();
const cors = require('cors');
var fs = require('fs');
app.use(express.json());

app.use(cors());
app.get('/', (req, res) => {
    console.log("server running")
})

app.post('/addusers', (req, res) => {

    const name = req.body.name;
    const username = req.body.username;
    const website = req.body.website;
    const email = req.body.email;
    const phone = req.body.phone;
    const street = req.body.street;
    const suite = req.body.suite;
    const city = req.body.city;
    const zipcode = req.body.zipcode;
    const lat = req.body.lat;
    const lng = req.body.lng;
    const compnayName = req.body.compnayName;
    const catchPhrase = req.body.catchPhrase;
    const bs = req.body.bs;
    fs.readFile('db.json', 'utf8', function (err, data) {
        var obj = JSON.parse(data);
        let newobj = {
            "id": Math.random().toString(36).substr(2, 9),
            "name": name,
            "username": username,
            "email": email,
            "address": {
                "street": street,
                "suite": suite,
                "city": city,
                "zipcode": zipcode,
                "geo": {
                    "lat": lat,
                    "lng": lng,
                }
            },
            "phone": phone,
            "website": website,
            "company": {
                "compnayName": compnayName,
                "catchPhrase": catchPhrase,
                "bs": bs
            }
        }
        obj["users"].push(newobj);
        var strNotes = JSON.stringify(obj, null, 2);
        fs.writeFile('db.json', strNotes, function (err) {
            if (err) return console.log(err);
            console.log('done');
        });

    })
})

app.post('/addposts', (req, res) => {
    const title = req.body.title;
    const body = req.body.body;
    fs.readFile('db.json', 'utf8', function (err, data) {
        var obj = JSON.parse(data);
        let newobj = {
            "userId": 1,
            "id": Math.random().toString(36).substr(2, 9),
            "title": title,
            "body": body
        }
        obj["posts"].push(newobj);
        var strNotes = JSON.stringify(obj, null, 2);
        fs.writeFile('db.json', strNotes, function (err) {
            if (err) return console.log(err);
            console.log('done');
        });

    })
})

app.post('/delete_post', (req, res) => {
    const post_id = req.body.postId;
    const data = fs.readFileSync('db.json');
    const obj = JSON.parse(data);
    const posts = obj["posts"]; 
    obj["posts"] = posts.filter((item) => item.id !== post_id);
    fs.writeFileSync('db.json', JSON.stringify(obj, null, 2));
})

app.post('/delete_user', (req, res) => {
    const user_id = req.body.userId;
    const data = fs.readFileSync('db.json');
    const obj = JSON.parse(data);
    const users = obj["users"];
    obj["users"] = users.filter((item) => item.id !== user_id);
    fs.writeFileSync('db.json', JSON.stringify(obj, null, 2));
})


app.post('/editusers', (req, res) => {

    const id = req.body.id;
    const name = req.body.name;
    const username = req.body.username;
    const website = req.body.website;
    const email = req.body.email;
    const phone = req.body.phone;
    const street = req.body.street;
    const suite = req.body.suite;
    const city = req.body.city;
    const zipcode = req.body.zipcode;
    const lat = req.body.lat;
    const lng = req.body.lng;
    const compnayName = req.body.compnayName;
    const catchPhrase = req.body.catchPhrase;
    const bs = req.body.bs;
    fs.readFile('db.json', 'utf8', function (err, data) {
        var obj = JSON.parse(data);
        obj['users'][id].id = id;
        obj['users'][id].name = name
        obj['users'][id].username = username
        obj['users'][id].email = email
        obj['users'][id].address.street = street
        obj['users'][id].address.suite = suite
        obj['users'][id].address.city = city
        obj['users'][id].address.zipcode = zipcode
        obj['users'][id].address.geo.lat = lat
        obj['users'][id].address.geo.lng = lng
        obj['users'][id].phone = phone
        obj['users'][id].website = website
        obj['users'][id].company.compnayName = compnayName
        obj['users'][id].company.catchPhrase = catchPhrase
        obj['users'][id].company.bs = bs
        var strNotes = JSON.stringify(obj, null, 2);
        fs.writeFile('db.json', strNotes, function (err) {
            if (err) return console.log(err);
            console.log('done');
        });

    })
})

app.post('/editposts', (req, res) => {

    const id = req.body.id;
    const body = req.body.body;
    const title = req.body.title;
    fs.readFile('db.json', 'utf8', function (err, data) {
        var obj = JSON.parse(data);
        obj['posts'][id].id = id;
        obj['posts'][id].body = body
        obj['posts'][id].title = title
        var strNotes = JSON.stringify(obj, null, 2);
        fs.writeFile('db.json', strNotes, function (err) {
            if (err) return console.log(err);
            console.log('done');
        });

    })
})

app.listen(3007, () => { console.log("server running...") })