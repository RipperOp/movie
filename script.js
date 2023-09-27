let moviesobj = [
    {
        Name: 'Supnigga',
        desc: 'Arjun, prarthana',
        genre: 'assets/supnigga.jpg',
        director: 'next1.html',
        movievid: 'xyz.mkv'        
    },
    {
        Name: 'Harsh',
        desc: 'Arjun, prarthana',
        genre: 'assets/supnigga.jpg',
        director: 'next1.html',
        movievid: 'xyz.mkv'        
    }
];


const moviecontainer = document.getElementById('mybox');

function LoadHomePage()
{
    var temp = '';
    for(i in moviesobj)
    {
        var movie = `<div class="movie">
        
        <div class="movie-image"> <span class="play"><span class="name">${moviesobj[i].Name}</span></span> <a href="pg3.html?id=${i}"><img src="MV5BNDA5YzlhNjItMDgxNC00MjQ4LWIzMDMtYTUyMzBhNjViNDk3XkEyXkFqcGdeQXVyMTY3ODkyNDkz._V1_.jpg" alt="" /></a> </div>
        
        <div class="rating">
          <p>${moviesobj[i].Name}</p>
          <div class="stars">
            <div class="stars-in"> </div>
          </div>
           </div>
        
      </div>`; 
      temp = temp + movie;
    }   
    
    moviecontainer.innerHTML = `<div class="head">
    <h2>LATEST TRAILERS</h2>
    <p class="text-right"><a >See all</a></p>
  </div>` + temp + '<div class="cl">&nbsp;</div>';
}

LoadHomePage();