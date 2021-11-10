export default function() {
  this.namespace = '/api';

  const rentals = [
    {
      id: 1,
      type: 'albums',
      attributes: {
        title: 'Rajini Songs',
        imgPath: 'https://a10.gaanacdn.com/images/albums/92/68992/crop_480x480_68992.jpg'
      },
      relationships: {
        songs: {
          data: [
            {
              id: 1,
              type: 'songs'
            },
            {
              id: 2,
              type: 'songs'
            }
          ]
        }
      }
    },
    {
      id: 2,
      type: 'albums',
      attributes: {
        title: 'Unakkaaga Mattum',
        imgPath: 'https://a10.gaanacdn.com/images/albums/2/146602/crop_480x480_146602.jpg'
      }
    }
  ];

  const songs = [
    {
      id: 1,
      type: 'songs',
      attributes: {
        //album_id: 1,
        track: 'Rajini Songs',
        //imgPath: 'https://a10.gaanacdn.com/images/albums/92/68992/crop_480x480_68992.jpg'
      }
    },
    {
      id: 2,
      type: 'songs',
      attributes: {
        //album_id: 1,
        track: 'Unakkaaga Mattum',
        //imgPath: 'https://a10.gaanacdn.com/images/albums/2/146602/crop_480x480_146602.jpg'
      }
    }
  ];



  this.get('/albums', function() {
    return {
      data: rentals
    }
  });

  this.get('/songs', function() {
    return {
      data: songs
    }
  })

  this.get('/songs/:id', function(db, request) {
    const id = request.params.id;
    const data = songs.find(record => record.id === +id);
    console.log(data)
    return {
      data
    };
  })

}

