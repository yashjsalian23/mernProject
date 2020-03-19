const HttpError = require('../models/http-error');
const uuid = require('uuid/v4');

const DUMMY_PLACES = [
  {
    id: 'p1',
    title: 'Empire State Building',
    description: 'One of the most famous sky scrapers in the world!',
    address: '20 W 34th St, New York, NY 10001',
    creator: 'u1'
  }
];

const getPlaceById = (req, res, next) => {
  const placeId = req.params.pid; // { pid: 'p1' }

  const place = DUMMY_PLACES.find(p => {
    return p.id === placeId;
  });

  if (!place) {
    throw new HttpError('Could not find a place for the provided id.', 404);
  }

  res.json({ place }); // => { place } => { place: place }
};

// function getPlaceById() { ... }
// const getPlaceById = function() { ... }

const getPlaceByUserId = (req, res, next) => {
  const userId = req.params.uid;

  const place = DUMMY_PLACES.find(p => {
    return p.creator === userId;
  });

  if (!place) {
    return next(
      new HttpError('Could not find a place for the provided user id.', 404)
    );
  }

  res.json({ place });
};

const createPlace = (req, res, next) => {
    const { title, description, address, creator } = req.body;
    const createdPlace = {
      id: uuid(),
      title,
      description,
      address,
      creator
    };

    DUMMY_PLACES.push(createdPlace);
    res.status(201).json(createdPlace); //201 if anything new is created
}

const updatePlace = (req, res ,next) => {
  const placeId = req.params.pid;
   const {  title, description } = req.body;
   const foundPlace ={ ...DUMMY_PLACES.find(p => p.id === placeId)}
   const updateIndex = DUMMY_PLACES.indexOf(p => p.id === placeId);
   foundPlace.title = title;
   foundPlace.description = description;
   DUMMY_PLACES[updateIndex] = foundPlace;
   res.status(200).json(foundPlace, 200);
}

const deletePlace = (req, res , next) => {
  const placeId = req.params.pid;
  DUMMY_PLACES = DUMMY_PLACES.filter(p => p.id != placeId);

  res.statu(200).json("deleted");
};

exports.getPlaceById = getPlaceById;
exports.getPlaceByUserId = getPlaceByUserId;
exports.createPlace = createPlace;
exports.updatePlace = updatePlace;
exports.deletePlace = deletePlace;