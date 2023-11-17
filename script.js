var listaDeFilmes = [
  "https://br.web.img2.acsta.net/pictures/14/08/01/19/10/403236.jpg ",
  "https://upload.wikimedia.org/wikipedia/pt/thumb/c/c0/ForrestGumpPoster.jpg/240px-ForrestGumpPoster.jpg",
  "https://upload.wikimedia.org/wikipedia/pt/4/46/Moana_movie_poster_p_2016.jpg",
  "https://media.fstatic.com/Ayike4FdlVAs3BR03tnx5l_h7CA=/322x478/smart/filters:format(webp)/media/movies/covers/2021/09/8741.jpg",
  "https://musicart.xboxlive.com/7/4d4d6500-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080",
  "https://upload.wikimedia.org/wikipedia/pt/thumb/3/3b/Deadpool_2016.jpg/230px-Deadpool_2016.jpg",
]

  
//cod de loop
for ( var i= 0; i < listaDeFilmes.length ; i ++ ) {
//codigo para aparecer as imagens
    document.write("<img src =" + listaDeFilmes[i] + ">" );
  }
    