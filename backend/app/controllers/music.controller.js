const db = require("../models");
const bcrypt = require("bcryptjs");
const moment = require('moment');
const momentTz = require("moment-timezone");
const Sequelize = require('sequelize');
const rootPath = require("../utility/path");
const fs = require('fs');
const path = require('path');
const pdfDocument = require('pdfkit');
const crypto = require('crypto');
const axios = require('axios');


const Albums = db.albums;
const Songs = db.songs;
const Artists = db.artist;
const Genres = db.genre;

const Op = db.sequelize.Op;

exports.getSongs = async(req, res) => {
  try {
    let songs = await Songs.findAll({
      include: ['artists']
    });

    songs = songs.map(record => {
      record = record.dataValues;
      record.album = record.album_id;
      delete record.album_id;
      return record;
    })

    return res.send({ songs });
     
  }
  catch(err) {
    return res.status(500).send({ message: err.message});
  }
}

exports.getGenres = async(req, res) => {
  try {
    let genres = await Genres.findAll({
      include: ['songs']
    });

    return res.send({ genres });
     
  }
  catch(err) {
    return res.status(500).send({ message: err.message});
  }
}

exports.getSearchResult = async(req, res) => {
  try {
    const searchText = req.query.text;

    const albums = await Albums.findAll({
      include: ['songs'],
      where: {
        title: {
          [Op.like]: `%${searchText}%`
        }
      }
    });

    const genres = await Genres.findAll({
      include: ['songs'],
      where: {
        title: {
          [Op.like]: `%${searchText}%`
        }
      }
    });

    const songs = await Songs.findAll({
      where: {
        track: {
          [Op.like]: `%${searchText}%`
        }
      }
    });

    const artists = await Artists.findAll({
      where: {
        name: {
          [Op.like]: `%${searchText}%`
        }
      }
    });

    return res.send({ search: { id: Date.now(), albums, genres, songs, artists } });
     
  }
  catch(err) {
    return res.status(500).send({ message: err.message});
  }
}

exports.getArtist = async(req, res) => {
  try {
    let artists = await Artists.findByPk(req.params.id, {
      include: ['songs']
    });

    return res.send({ artists });
     
  }
  catch(err) {
    return res.status(500).send({ message: err.message});
  }
}

exports.getArtists = async(req, res) => {
  try {
    let artists = await Artists.findAll({
      include: ['songs']
    });

    return res.send({ artists });
     
  }
  catch(err) {
    return res.status(500).send({ message: err.message});
  }
}

exports.getSong = async(req, res) => {
  try {
    const songs = await Songs.findByPk(req.params.id, {
      include: ['artists']
    });


    return res.send({ songs });
     
  }
  catch(err) {
    return res.status(500).send({ message: err.message});
  }
}

exports.getAlbum = async(req, res) => {
  try {
    const albums = await Albums.findByPk(req.params.id, {
      include: ['songs']
    });


    return res.send({ albums });
     
  }
  catch(err) {
    return res.status(500).send({ message: err.message});
  }
}

exports.getGenre = async(req, res) => {
  try {
    const genres = await Genres.findByPk(req.params.id, {
      include: ['songs']
    });


    return res.send({ genres });
     
  }
  catch(err) {
    return res.status(500).send({ message: err.message});
  }
}

exports.getAlbums = async(req, res) => {
  try {
    const albums = await Albums.findAll({
      include: ['songs']
    });

    const updatedRecord = albums.map(record => {
      record = record.dataValues;
      return record;
    });

    return res.send({ albums: updatedRecord });
     
  }
  catch(err) {
    return res.status(500).send({ message: err.message});
  }
}

