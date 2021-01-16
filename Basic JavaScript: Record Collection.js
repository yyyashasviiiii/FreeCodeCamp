// Setup

var collection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Only change code below this line
function updateRecords(object, id, prop, value) {
  if (prop != "tracks" && value != "") {   // checks if the prop is not equal to "tracks" and value is not an empty string.
    object[id][prop] = value;
  }
  else if (prop == "tracks" && !object[id].hasOwnProperty("tracks")) {  // checks if the prop is equal to "tracks" and album does not have "tracks" property.
    object[id][prop] = [value];
  }
  else if (prop == "tracks" && value != "") {   // checks if the prop is equal to "tracks" and value is not an empty string.
    object[id][prop].push(value);
  }
  else if (value == "") {   // checks if the value is an empty string.
    delete object[id][prop]
  }

  return object;
}

updateRecords(collection, 5439, 'artist', 'ABBA');


//        END
