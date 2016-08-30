'use strict';

var searchOmdb = function searchOmdb(_ref, callback) {
  var query = _ref.query;

  $.get('https://www.omdbapi.com?', {
    part: 'snippet',
    q: query,
    maxResults: 5

  }).done(function (_ref2) {
    var items = _ref2.items;

    if (callback) {
      callback(items);
    }
  }).fail(function (_ref3) {
    var responseJSON = _ref3.responseJSON;

    responseJSON.error.errors.forEach(function (err) {
      return console.error(err);
    });
  });
};

// $.get('https://www.googleapis.com/youtube/v3/search', {
//    part: 'snippet',
//    key: key,
//    q: query,
//    maxResults: max,
//    type: 'video',
//    videoEmbeddable: 'true'
//   // $.ajax({
//   //    url: 'http://www.omdbapi.com?',
//   //    type: 'GET',
//   //    data: {s: 'Rock'},
//   //    success: function(data) {
//   //      this.setState({
//   //        movieResults: data.Search
//   //      });
//   //    }.bind(this),
//   //    error: function() {}
//   //  });

// //
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvc2VhcmNoT21kYi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLElBQUksYUFBYSxTQUFiLFVBQWEsT0FBVSxRQUFWLEVBQXVCO0FBQUEsTUFBckIsS0FBcUIsUUFBckIsS0FBcUI7O0FBQ3RDLElBQUUsR0FBRixDQUFNLDBCQUFOLEVBQWtDO0FBQ2hDLFVBQU0sU0FEMEI7QUFFaEMsT0FBRyxLQUY2QjtBQUdoQyxnQkFBWTs7QUFIb0IsR0FBbEMsRUFNQyxJQU5ELENBTU0saUJBQWE7QUFBQSxRQUFYLEtBQVcsU0FBWCxLQUFXOztBQUNqQixRQUFJLFFBQUosRUFBYztBQUNaLGVBQVMsS0FBVDtBQUNEO0FBQ0YsR0FWRCxFQVdDLElBWEQsQ0FXTSxpQkFBb0I7QUFBQSxRQUFsQixZQUFrQixTQUFsQixZQUFrQjs7QUFDeEIsaUJBQWEsS0FBYixDQUFtQixNQUFuQixDQUEwQixPQUExQixDQUFrQyxVQUFDLEdBQUQ7QUFBQSxhQUNoQyxRQUFRLEtBQVIsQ0FBYyxHQUFkLENBRGdDO0FBQUEsS0FBbEM7QUFHRCxHQWZEO0FBZ0JELENBakJEOztBQW1CQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoic2VhcmNoT21kYi5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBzZWFyY2hPbWRiID0gKHtxdWVyeX0sIGNhbGxiYWNrKSA9PiB7XG4gICQuZ2V0KCdodHRwczovL3d3dy5vbWRiYXBpLmNvbT8nLCB7XG4gICAgcGFydDogJ3NuaXBwZXQnLFxuICAgIHE6IHF1ZXJ5LFxuICAgIG1heFJlc3VsdHM6IDVcblxuICB9KVxuICAuZG9uZSgoe2l0ZW1zfSkgPT4ge1xuICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgY2FsbGJhY2soaXRlbXMpO1xuICAgIH1cbiAgfSlcbiAgLmZhaWwoKHtyZXNwb25zZUpTT059KSA9PiB7XG4gICAgcmVzcG9uc2VKU09OLmVycm9yLmVycm9ycy5mb3JFYWNoKChlcnIpID0+XG4gICAgICBjb25zb2xlLmVycm9yKGVycilcbiAgICApO1xuICB9KTtcbn07XG5cbiAvLyAkLmdldCgnaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20veW91dHViZS92My9zZWFyY2gnLCB7XG4gLy8gICAgcGFydDogJ3NuaXBwZXQnLFxuIC8vICAgIGtleToga2V5LFxuIC8vICAgIHE6IHF1ZXJ5LFxuIC8vICAgIG1heFJlc3VsdHM6IG1heCxcbiAvLyAgICB0eXBlOiAndmlkZW8nLFxuIC8vICAgIHZpZGVvRW1iZWRkYWJsZTogJ3RydWUnXG4gLy8gICAvLyAkLmFqYXgoe1xuIC8vICAgLy8gICAgdXJsOiAnaHR0cDovL3d3dy5vbWRiYXBpLmNvbT8nLFxuIC8vICAgLy8gICAgdHlwZTogJ0dFVCcsXG4gLy8gICAvLyAgICBkYXRhOiB7czogJ1JvY2snfSxcbiAvLyAgIC8vICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEpIHtcbiAvLyAgIC8vICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gLy8gICAvLyAgICAgICAgbW92aWVSZXN1bHRzOiBkYXRhLlNlYXJjaFxuIC8vICAgLy8gICAgICB9KTtcbiAvLyAgIC8vICAgIH0uYmluZCh0aGlzKSxcbiAvLyAgIC8vICAgIGVycm9yOiBmdW5jdGlvbigpIHt9XG4gLy8gICAvLyAgfSk7XG5cbiAvLyAvLyJdfQ==