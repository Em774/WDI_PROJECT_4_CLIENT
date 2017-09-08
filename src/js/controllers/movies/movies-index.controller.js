angular
.module('movieApp')
.controller('moviesIndexCtrl', moviesIndexCtrl);

moviesIndexCtrl.$inject = ['Movie', '$http'];
function moviesIndexCtrl(Movie, $http) {
  const vm = this;

  vm.showLoadingGif = false;

  $http
    .get('https://api.themoviedb.org/3/movie/popular?api_key=8d027704c57524153a0af2b38415ac45&language=en-US&page=1')
    .then(res => {
      console.log(res);
      vm.all = res.data.results;
    });


  vm.searchFilms = searchFilms;

  function searchFilms() {
    vm.showLoadingGif = true;


    $http
      .get(`http://localhost:3000/api/getmovies/${vm.searchQuery}`)
      .then(res => {
        vm.showLoadingGif = false;
        vm.all = res.data;
      });
      // .catch(err => {
      //   $state.go('404');
      // })
  }
}


//jQuery version
// $(document).ready(function() {
//
//   var url = 'http://api.themoviedb.org/3/',
//     mode = 'search/movie',
//     input,
//     // movieName,
//     key = '?api_key=8d027704c57524153a0af2b38415ac45';
//
//   $('button').click(function() {
//     const vm = this;
//     var input = $('#movie').val();
//       // movieName = encodeURI(input);
//     $.ajax({
//       url: url + mode + key + '&query='+ input ,
//       dataType: 'jsonp',
//       success: function(response) {
//         console.log(response);
//         // $('#newInput').html(data);
//         // return newInput;
//         vm.request = response.data;
//       },
//       error: function (request, status, error) {
//         alert(status + ', ' + error);
//       }
//     });
//   });
// });








// function autocomplete({
//   $('#searchbar').autocomplete({
//     serviceUrl: $http.get("https://api.themoviedb.org/3/search/movie?api_key=8d027704c57524153a0af2b38415ac45&language=en-US&query=${$searchbar}&page=1&include_adult=false"),
//     onSelect: function (suggestion) {
//       alert('You selected: ' + suggestion.value + ', ' + suggestion.data);
//     }
//   });
//
//   $(function() {
//       alert("Hi");
//       $.ajax({
//         url: "https://api.themoviedb.org/3/search/movie?api_key=8d027704c57524153a0af2b38415ac45&language=en-US&query=f&page=1&include_adult=false",
//           contentType: "application/json",
//           type: "GET",
//           crossDomain: true,
//           success: function(data) {
//               alert("It worked");
//           },
//           error: function(err) {
//               alert(JSON.stringify(err));
//           }
//       });
//   });
//
// )}
