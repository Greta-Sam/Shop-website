const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());


// database for trees
let trees = [
    {
        id: "1",
        title: "Two Sides",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        size: "Dydis: 30cm x 40cm",
        weight: "Svoris: 400g",
        price: "Kaina: 55.00€",
        image1: "/images/trees/medis1-1.jpg",
        pictures: [
            { image: "/images/trees/medis1-1.jpg",},
            {image:"/images/trees/medis1-2.jpg",},
            {image:"/images/trees/medis1-3.jpg",},
            { image: "/images/trees/medis1-4.jpg",},
        ]
    },
    {
        id: "2",
        title: "Two Sides",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        size: "Dydis: 30cm x 40cm",
        weight: "Svoris: 500g",
        price: "Kaina: 55.00€",
        image1: "/images/trees/medis2-1.jpg",
        pictures: [
            { image: "/images/trees/medis2-1.jpg",},
            {image:"/images/trees/medis2-2.jpg",},
            {image:"/images/trees/medis2-3.jpg",},
            { image: "/images/trees/medis2-4.jpg",},
        ]
    },
    {
        id: "3",
        title: "Two Sides",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        size: "Dydis: 30cm x 40cm",
        weight: "Svoris: 400g",
        price: "Kaina: 55.00€",
        image1: "/images/trees/medis3-1.jpg",
        pictures: [
            { image: "/images/trees/medis3-1.jpg",},
            {image:"/images/trees/medis3-2.jpg",},
            {image:"/images/trees/medis3-3.jpg",},
            { image: "/images/trees/medis3-6.jpg",},
        ]
    },
    {
        id: "4",
        title: "Two Sides",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        size: "Dydis: 30cm x 40cm",
        weight: "Svoris: 400g",
        price: "Kaina: 45.00€",
        image1: "/images/trees/medis4-1.jpg",
        pictures: [
            { image: "/images/trees/medis4-1.jpg",},
            {image:"/images/trees/medis4-2.jpg",},
            {image:"/images/trees/medis4-3.jpg",},
            {image:"/images/trees/medis4-4.jpg",},
        ]
    },
    {
        id: "5",
        title: "Two Sides",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        size: "Dydis: 30cm x 40cm",
        weight: "Svoris: 800g",
        price: "Kaina: 65.00€",
        image1: "/images/trees/medis5-1.jpg",
        pictures: [
            { image: "/images/trees/medis5-1.jpg",},
            {image:"/images/trees/medis5-2.jpg",},
            {image:"/images/trees/medis5-3.jpg",},
            { image: "/images/trees/medis5-4.jpg",},
        ]
    },
];
app.get('/api/trees', (req, res) => {
    res.json(trees);
});

app.get('/api/trees/:id', (req, res) => {
    const tree = trees.filter(item => item.id === req.params.id)
    res.json(tree[0]);
});


// database for bracelets
let bracelets = [
    {
        id: "1",
        title: "Red Set",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        braceletSize: "Apyrankių dydžiai nuo 14cm iki 22cm",
        price: "Kaina: 10.00€",
        image1: "/images/bracelets/apyranke1-1.jpg",
        pictures: [
            { image: "/images/bracelets/apyranke1-1.jpg",},
            {image:"/images/bracelets/apyranke1-2.jpg",},
            {image:"/images/bracelets/apyranke1-3.jpg",},
        ]
    },
    {
        id: "2",
        title: "Bracelets",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        braceletSize: "Apyrankių dydžiai nuo 14cm iki 22cm",
        price: "Kaina: 10.00€",
        image1: "/images/bracelets/apyranke2-1.jpg",
        pictures: [
            { image: "/images/bracelets/apyranke2-1.jpg",},
            {image:"/images/bracelets/apyranke2-2.jpg",},
            {image:"/images/bracelets/apyranke2-3.jpg",},
        ]
    },
    {
        id: "3",
        title: "Bracelets",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        braceletSize: "Apyrankių dydžiai nuo 14cm iki 22cm",
        price: "Kaina: 10.00€",
        image1: "/images/bracelets/apyranke3-1.jpg",
        pictures: [
            { image: "/images/bracelets/apyranke3-1.jpg",},
            {image:"/images/bracelets/apyranke3-2.jpg",},
            {image:"/images/bracelets/apyranke3-3.jpg",},
        ]
    },
    {
        id: "4",
        title: "Bracelets",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        braceletSize: "Apyrankių dydžiai nuo 14cm iki 22cm",
        price: "Kaina: 10.00€",
        image1: "/images/bracelets/apyranke4-1.jpg",
        pictures: [
            { image: "/images/bracelets/apyranke4-1.jpg",},
            {image:"/images/bracelets/apyranke4-2.jpg",},
            {image:"/images/bracelets/apyranke4-3.jpg",},
        ]
    },
    {
        id: "5",
        title: "Bracelets",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        braceletSize: "Apyrankių dydžiai nuo 14cm iki 22cm",
        price: "Kaina: 10.00€",
        image1: "/images/bracelets/apyranke5-1.jpg",
        pictures: [
            { image: "/images/bracelets/apyranke5-1.jpg",},
            {image:"/images/bracelets/apyranke5-2.jpg",},
            {image:"/images/bracelets/apyranke5-3.jpg",},
        ]
    },
    {
        id: "6",
        title: "Bracelets",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        braceletSize: "Apyrankių dydžiai nuo 14cm iki 22cm",
        price: "Kaina: 10.00€",
        image1: "/images/bracelets/apyranke6-1.jpg",
        pictures: [
            { image: "/images/bracelets/apyranke6-1.jpg",},
            {image:"/images/bracelets/apyranke6-2.jpg",},
            {image:"/images/bracelets/apyranke6-3.jpg",},
        ]
    },
    {
        id: "7",
        title: "Bracelets",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        braceletSize: "Apyrankių dydžiai nuo 14cm iki 22cm",
        price: "Kaina: 10.00€",
        image1: "/images/bracelets/apyranke7-1.jpg",
        pictures: [
            { image: "/images/bracelets/apyranke7-1.jpg",},
            {image:"/images/bracelets/apyranke7-2.jpg",},
            {image:"/images/bracelets/apyranke7-3.jpg",},
        ]
    },
    {
        id: "8",
        title: "Bracelets",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        braceletSize: "Apyrankių dydžiai nuo 14cm iki 22cm",
        price: "Kaina: 10.00€",
        image1: "/images/bracelets/apyranke8-1.jpg",
        pictures: [
            { image: "/images/bracelets/apyranke8-1.jpg",},
            {image:"/images/bracelets/apyranke8-2.jpg",},
            {image:"/images/bracelets/apyranke8-3.jpg",},
        ]
    },
    {
        id: "9",
        title: "Bracelets",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        braceletSize: "Apyrankių dydžiai nuo 14cm iki 22cm",
        price: "Kaina: 10.00€",
        image1: "/images/bracelets/apyranke9-1.jpg",
        pictures: [
            { image: "/images/bracelets/apyranke9-1.jpg",},
            {image:"/images/bracelets/apyranke9-2.jpg",},
            {image:"/images/bracelets/apyranke9-3.jpg",},
        ]
    },
    {
        id: "10",
        title: "Bracelets",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        braceletSize: "Apyrankių dydžiai nuo 14cm iki 22cm",
        price: "Kaina: 10.00€",
        image1: "/images/bracelets/apyranke10-1.jpg",
        pictures: [
            { image: "/images/bracelets/apyranke10-1.jpg",},
            {image:"/images/bracelets/apyranke10-2.jpg",},
            {image:"/images/bracelets/apyranke10-3.jpg",},
        ]
    },
    {
        id: "11",
        title: "Bracelets",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        braceletSize: "Apyrankių dydžiai nuo 14cm iki 22cm",
        price: "Kaina: 10.00€",
        image1: "/images/bracelets/apyranke11-1.jpg",
        pictures: [
            { image: "/images/bracelets/apyranke11-1.jpg",},
            {image:"/images/bracelets/apyranke11-2.jpg",},
            {image:"/images/bracelets/apyranke11-3.jpg",},
        ]
    },
    {
        id: "12",
        title: "Bracelets",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        braceletSize: "Apyrankių dydžiai nuo 14cm iki 22cm",
        price: "Kaina: 10.00€",
        image1: "/images/bracelets/apyranke12-1.jpg",
        pictures: [
            { image: "/images/bracelets/apyranke12-1.jpg",},
            {image:"/images/bracelets/apyranke12-2.jpg",},
            {image:"/images/bracelets/apyranke12-3.jpg",},
        ]
    },
]

app.get('/api/bracelets', (req, res) => {
    res.json(bracelets);
});

app.get('/api/bracelets/:id', (req, res) => {
    const bracelet = bracelets.filter(item => item.id === req.params.id)
    res.json(bracelet[0]);
});


// database for sets
let sets = [
    {
        id: "1",
        title: "Red Set",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        necklaceSize: "Pakabučio ilgis 45cm",
        braceletSize: "Apyrankių dydžiai nuo 14cm iki 22cm",
        price: "Kaina: 40.00€",
        image1: "/images/sets/rinkinys1-1.jpg",
        pictures: [
            { image: "/images/sets/rinkinys1-1.jpg",},
            {image:"/images/sets/rinkinys1-2.jpg",},
        ]
    },
    {
        id: "2",
        title: "Green Set",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        necklaceSize: "Pakabučio ilgis 45cm",
        braceletSize: "Apyrankių dydžiai nuo 14cm iki 22cm",
        price: "Kaina: 40.00€",
        image1: "/images/sets/rinkinys2-1.jpg",
        pictures: [
            { image: "/images/sets/rinkinys2-1.jpg",},
            {image:"/images/sets/rinkinys2-2.jpg",},
            {image:"/images/sets/rinkinys2-3.jpg",},
           
        
        ]
        
    },
    {
        id: "3",
        title: "Blue Set",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        necklaceSize: "Pakabučio ilgis 45cm",
        braceletSize: "Apyrankių dydžiai nuo 14cm iki 22cm",
        price: "Kaina: 35.00€",
        image1: "/images/sets/rinkinys3-1.jpg",
        pictures: [
            {image:"/images/sets/rinkinys3-2.jpg",},
            {image:"/images/sets/rinkinys3-3.jpg",},
            {image:"/images/sets/rinkinys3-4.jpg",},
        
        ]
        
    },
    {
        id: "4",
        title: "Purple Set",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        necklaceSize: "Pakabučio ilgis 45cm",
        braceletSize: "Apyrankių dydžiai nuo 14cm iki 22cm",
        price: "Kaina: 40.00€",
        image1: "/images/sets/rinkinys4-1.jpg",
        pictures: [
            { image: "/images/sets/rinkinys4-1.jpg",},
            {image:"/images/sets/rinkinys4-2.jpg",},
            {image:"/images/sets/rinkinys4-3.jpg",},        
        ]
        
    },
    {
        id: "5",
        title: "White Set",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        necklaceSize: "Pakabučio ilgis 45cm",
        braceletSize: "Apyrankių dydžiai nuo 14cm iki 22cm",
        price: "Kaina: 30.00€",
        image1: "/images/sets/rinkinys5-1.jpg",
        pictures: [
            { image: "/images/sets/rinkinys5-1.jpg",},
            {image:"/images/sets/rinkinys5-2.jpg",},
            {image:"/images/sets/rinkinys5-3.jpg",},        
        ]
        
    },
]
app.get('/api/sets', (req, res) => {
    res.json(sets);
});

app.get('/api/sets/:id', (req, res) => {
    const set = sets.filter(item => item.id === req.params.id)
    res.json(set[0]);
});


// database for necklaces
let necklaces = [
    {
        id: "1",
        title: "Red Set",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        necklaceSize: "Pakabučio ilgis 45cm",
        price: "Kaina: 30.00€",
        image1: "/images/necklaces/pakabutis1-1.jpg",
        pictures: [
            { image: "/images/necklaces/pakabutis1-1.jpg",},
            { image: "/images/necklaces/pakabutis1-2.jpg",},
            { image: "/images/necklaces/pakabutis1-3.jpg",},
            { image: "/images/necklaces/pakabutis1-4.jpg",},
        ]
    },
    {
        id: "2",
        title: "Red Set",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        necklaceSize: "Pakabučio ilgis 45cm",
        price: "Kaina: 30.00€",
        image1: "/images/necklaces/pakabutis2-1.jpg",
        pictures: [
            { image: "/images/necklaces/pakabutis2-1.jpg",},
            { image: "/images/necklaces/pakabutis2-2.jpg",},
            { image: "/images/necklaces/pakabutis2-3.jpg",},
            { image: "/images/necklaces/pakabutis2-4.jpg",},
        ]
    },
    {
        id: "3",
        title: "Red Set",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        necklaceSize: "Pakabučio ilgis 45cm",
        price: "Kaina: 30.00€",
        image1: "/images/necklaces/pakabutis3-1.jpg",
        pictures: [
            { image: "/images/necklaces/pakabutis3-1.jpg",},
            { image: "/images/necklaces/pakabutis3-2.jpg",},
            { image: "/images/necklaces/pakabutis3-3.jpg",},
            { image: "/images/necklaces/pakabutis3-4.jpg",},
        ]
    },
    {
        id: "4",
        title: "Red Set",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        necklaceSize: "Pakabučio ilgis 45cm",
        price: "Kaina: 30.00€",
        image1: "/images/necklaces/pakabutis4-1.jpg",
        pictures: [
            { image: "/images/necklaces/pakabutis4-1.jpg",},
            { image: "/images/necklaces/pakabutis4-2.jpg",},
            { image: "/images/necklaces/pakabutis4-3.jpg",},
            { image: "/images/necklaces/pakabutis4-4.jpg",},
        ]
    },
    {
        id: "5",
        title: "Red Set",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        necklaceSize: "Pakabučio ilgis 45cm",
        price: "Kaina: 30.00€",
        image1: "/images/necklaces/pakabutis5-1.jpg",
        pictures: [
            { image: "/images/necklaces/pakabutis5-1.jpg",},
            { image: "/images/necklaces/pakabutis5-2.jpg",},
            { image: "/images/necklaces/pakabutis5-3.jpg",},
            { image: "/images/necklaces/pakabutis5-4.jpg",},
        ]
    },
    {
        id: "6",
        title: "Red Set",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        necklaceSize: "Pakabučio ilgis 45cm",
        price: "Kaina: 30.00€",
        image1: "/images/necklaces/pakabutis6-1.jpg",
        pictures: [
            { image: "/images/necklaces/pakabutis6-1.jpg",},
            { image: "/images/necklaces/pakabutis6-2.jpg",},
            { image: "/images/necklaces/pakabutis6-3.jpg",},
            { image: "/images/necklaces/pakabutis6-4.jpg",},
        ]
    },
    {
        id: "7",
        title: "Red Set",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        necklaceSize: "Pakabučio ilgis 45cm",
        price: "Kaina: 30.00€",
        image1: "/images/necklaces/pakabutis7-1.jpg",
        pictures: [
            { image: "/images/necklaces/pakabutis7-1.jpg",},
            { image: "/images/necklaces/pakabutis7-2.jpg",},
            { image: "/images/necklaces/pakabutis7-3.jpg",},
            { image: "/images/necklaces/pakabutis7-4.jpg",},
        ]
    },
]
app.get('/api/necklaces', (req, res) => {
    res.json(necklaces);
});

app.get('/api/necklaces/:id', (req, res) => {
    const necklace = necklaces.filter(item => item.id === req.params.id)
    res.json(necklace[0]);
});



app.listen(process.env.PORT, () => console.log(`Server is running on port: ${process.env.PORT}`));