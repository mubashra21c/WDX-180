var singers = [
    {
      artist: 'Elvis',
      albums: {
        album1: 'this first title for Elvis',
        album2: 'another second title for Elvis',
        album3: 'third title for Elvis'
      }
    },
    {
      artist: 'Cher',
      albums: {
        album1: 'this first title for Cher',
        album2: 'another second title for Cher',
        album3: 'third title for Cher'
      }
    }
  ]
  
const[{artist:artist1,albums:{album3:album1}},{artist:artist2,albums:{album3:album2}}]=singers;
console.log("Artist:",artist1,"Third Album:",album1);

console.log("Artist:",artist2,"Third Album:",album2);
  // 'Artist: Elvis, Third Album: third title for Elvis'
  // 'Artist: Cher, Third Album: third title for Cher'