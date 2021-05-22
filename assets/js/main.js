const apikey = "";

function searchMovie(){
    $( "#moviesarea" ).html('<div class="col-12 col-md-12 d-flex justify-content-center"><div class="spinner-border" role="status"><span class="sr-only">Loading...</span></div></div>');
    setTimeout(function(){  
        $( "#moviesarea" ).html('');
        
        let idormoviename = $( "#idormoviename" ).val();
        var isimdb = idormoviename.includes("tt");
        if(isimdb){
            
            $.ajax({
                url: "http://www.omdbapi.com/?i="+idormoviename+"&apikey="+apikey,
                
            })
            .done(function( data ) {
                movies='';
                
                moviehtml='<div class="row"><div class="col-md-4 order-md-2 mb-4"> <img src="'+data.Poster+'" class="img-fluid movieimg lazy " alt="moviename"></div><div class="col-md-8 order-md-1"><h1 class="font-weight-bold">'+data.Title+'</h1><p> <span>'+data.Plot+'</span></p><p> <span class="font-weight-bold">Year:</span><span class="yearvalue"> '+data.Year+'</span></p><p> <span class="font-weight-bold">Actor:</span> <span class="typevalue"> '+data.Actors+'</span></p><p> <span class="font-weight-bold">Review:</span> <span class="stars"> <i class="far fa-star fa-lg"></i><i class="far fa-star fa-lg"></i><i class="far fa-star fa-lg"></i><i class="far fa-star fa-lg"></i><i class="far fa-star fa-lg"></i></p><p> <button type="button" class="btn btn-warning"> Favorite <i class="far fa-heart fa-lg"></i> </button></p></div></div>';
                $('#moviesarea').html(moviehtml);
            });
            
        }else{
            $.ajax({
                url: "http://www.omdbapi.com/?t="+idormoviename+"&apikey="+apikey,
                
            })
            .done(function( data ) {
                movies='';
                
                moviehtml='<div class="row"><div class="col-md-4 order-md-2 mb-4"> <img src="'+data.Poster+'" class="img-fluid movieimg lazy " alt="moviename"></div><div class="col-md-8 order-md-1"><h1 class="font-weight-bold">'+data.Title+'</h1><p> <span>'+data.Plot+'</span></p><p> <span class="font-weight-bold">Year:</span><span class="yearvalue"> '+data.Year+'</span></p><p> <span class="font-weight-bold">Actor:</span> <span class="typevalue"> '+data.Actors+'</span></p><p> <span class="font-weight-bold">Review:</span> <span class="stars"> <i class="far fa-star fa-lg"></i><i class="far fa-star fa-lg"></i><i class="far fa-star fa-lg"></i><i class="far fa-star fa-lg"></i><i class="far fa-star fa-lg"></i></p><p> <button type="button" class="btn btn-warning"> Favorite <i class="far fa-heart fa-lg"></i> </button></p></div></div>';
                $('#moviesarea').html(moviehtml);
                
            });
        }
    }, 1000);
}

$( "#resetmovies" ).click(function() {
    $( "#moviesarea" ).html('<div class="col-12 col-md-12 d-flex justify-content-center"><div class="spinner-border" role="status"><span class="sr-only">Loading...</span></div></div>');
    setTimeout(function(){ $( "#moviesarea" ).html('<div class="col-md-12 order-md-2 mb-12 d-flex justify-content-center"><i class="fas fa-film fa-4x blink_me"></i></div>'); }, 1000);
    
});

$('#idormoviename').on('keypress',function(e) {
    if(e.which == 13) {
        searchMovie();
    }
});

$( "#searchmovies" ).click(function() {
    searchMovie();
});

if ( $( "#suggested" ).length ) {
 
    let suggestedmovies = ['titanic', 'it', 'insidious', 'lord', 'matrix reloaded', 'mummy', 'maze runner', 'Breaking Bad', 'octopus teacher' ]
    let random = Math.floor(Math.random() * suggestedmovies.length);
    let randommovie = suggestedmovies[random]

    $.ajax({
        url: "http://www.omdbapi.com/?t="+randommovie+"&apikey="+apikey,
        
    })
    .done(function( data ) {
        movies='';
        
        moviehtml='<div class="row"><div class="col-md-4 order-md-2 mb-4"> <img src="'+data.Poster+'" class="img-fluid movieimg lazy " alt="moviename"></div><div class="col-md-8 order-md-1"><h1 class="font-weight-bold">'+data.Title+'</h1><p> <span>'+data.Plot+'</span></p><p> <span class="font-weight-bold">Year:</span><span class="yearvalue"> '+data.Year+'</span></p><p> <span class="font-weight-bold">Actor:</span> <span class="typevalue"> '+data.Actors+'</span></p><p> <span class="font-weight-bold">Review:</span> <span class="stars"> <i class="far fa-star fa-lg"></i><i class="far fa-star fa-lg"></i><i class="far fa-star fa-lg"></i><i class="far fa-star fa-lg"></i><i class="far fa-star fa-lg"></i></p><p> <button type="button" class="btn btn-warning"> Favorite <i class="far fa-heart fa-lg"></i> </button></p></div></div>';
        $('#suggested').html(moviehtml);
        
    });
}