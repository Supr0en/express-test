'use strict';

const path = require('path');

const express = require('express');
const app = express();

const {port,host}=require('./config.json');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'sivumallit'));

const valikkopolku=path.join(__dirname,'valikko.html');
const lomakepolku=path.join(__dirname,'lomake.html');

app.use(express.urlencoded({extended:false}));

app.get('/', (req,res)=>res.sendFile(valikkopolku));
app.get('/henkilolomake', (req,res)=>res.sendFile(lomakepolku));
app.post('/henkilotiedot',(req,res)=>
    res.render('henkilosivu',{henkilo:req.body}));
app.get('/lista', (req,res)=>res.render('listasivu',{
    otsikko:'nimilista',
    aihe:'nimet',
    taulukko:['Leila','Matti','Pirkko']
}));
app.get('/tyhjalista', (req, res) => res.render('listasivu', {
    otsikko: 'lista',
    aihe: 'nimet',
    taulukko: []
}));


app.listen(port, host, ()=>console.log(`${host}:${port} palvelee...`));
