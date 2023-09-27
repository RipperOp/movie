let moviesobj = [
    {
        Name: 'JAILER',
        desc: '<span></span>Jailer is a 2023 Indian Tamil-language action comedy film directed by Nelson Dilipkumar and produced by Kalanithi Maran of Sun Pictures. The film stars Rajinikanth in the lead role, alongside Vinayakan, Ramya Krishnan, Vasanth Ravi, Tamannaah, Sunil, Mirnaa Menon and Yogi Babu in supporting roles. Mohanlal, Shiva Rajkumar and Jackie Shroff play guest roles.',
        genre: `<span>Genre </span> action`,
        actors: '<span>Actor</span> :Rajinikanth ',
        director: '<span>Director</span>: Nelson Dilipkumar',
        duration: '<span>Duration:</span> 145min',
        quality: '<span>Quality:</span> HD',
        release: '<span>Release:</span>2023',
        imdb: '<span>IMDB: 7.7</span>',
        moviefile: 'Jailer.mkv',
        image: 'jailer.jpg'    

    },
    
  ];

const moviecontainer = document.getElementById('mybox');

function LoadHomePage()
{
    var temp = '';
    for(i in moviesobj)
    {
        var movie = `<div class="movie">
        
        <div class="movie-image"> <span class="play"><span class="name">${moviesobj[i].Name}</span></span> <a href="pg3.html?id=${i}"><img src="${moviesobj[i].image}" alt="" /></a> </div>
        
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