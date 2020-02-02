
const admin = require('firebase-admin')
const { Router } = require('express');

const router = Router();


// var serviceAccount = require(process.env.GOOGLE_APPLICATIONS_CREDENTIALS);
// var serviceAccount = require('../../ulima-sw2-analitica-firebase-adminsdk-iaf41-da55534555.json');
var serviceAccount = require('../../ulima-sw2-analitica-firebase-adminsdk-iaf41-da55534555.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://ulima-sw2-analitica.firebaseio.com/'
});

const db = admin.database();

router.get('/', (req, res) => {
    db.ref('analytics').once('value', (snapshot) => {
        const data = snapshot.val();
        res.render('index', { analytics: data });


    });
    
    // db.ref('contacts').once('value', (snapshot) => {
    //     data = snapshot.val();
    //     res.render('index', { contacts: data })
    // });
})


router.post('/new-data', (req, res) => {
    const newData = {
        location: req.body.location,
        water: req.body.water,
        electicity: req.body.electicity
    }
    db.ref('analytics').push(newData);
    res.redirect('/');
});

// router.post('/new-contact', (req, res) => {
//     const newContact = {
//         firstname: req.body.firstname,
//         lastname: req.body.lastname,
//         email: req.body.email,
//         phone: req.body.phone
//     }
//     db.ref('contacts').push(newContact);
//     res.redirect('/');
// });

// router.get('/delete-contact/:id', (req, res) => {
//     db.ref('contacts/' + req.params.id).remove();
//     res.redirect('/');
// });

module.exports = router;