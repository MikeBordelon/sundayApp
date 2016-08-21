"use strict";

var SearchView = function SearchView(_ref) {
  var changeFunc = _ref.changeFunc;
  var genres = _ref.genres;
  return React.createElement(
    "select",
    { onChange: changeFunc },
    genres.map(function (genre) {
      return React.createElement(
        "option",
        { value: genre },
        genre
      );
    }),
    "}"
  );
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvU2VhcmNoVmlldy5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJLGFBQWEsU0FBYixVQUFhO0FBQUEsTUFBRSxVQUFGLFFBQUUsVUFBRjtBQUFBLE1BQWMsTUFBZCxRQUFjLE1BQWQ7QUFBQSxTQUNmO0FBQUE7QUFBQSxNQUFRLFVBQVUsVUFBbEI7QUFDRyxXQUFPLEdBQVAsQ0FBVztBQUFBLGFBQ1Y7QUFBQTtBQUFBLFVBQVEsT0FBTyxLQUFmO0FBQXVCO0FBQXZCLE9BRFU7QUFBQSxLQUFYLENBREg7QUFBQTtBQUFBLEdBRGU7QUFBQSxDQUFqQiIsImZpbGUiOiJTZWFyY2hWaWV3LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIFNlYXJjaFZpZXcgPSAoe2NoYW5nZUZ1bmMsIGdlbnJlc30pID0+IChcbiAgPHNlbGVjdCBvbkNoYW5nZT17Y2hhbmdlRnVuY30+XG4gICAge2dlbnJlcy5tYXAoZ2VucmUgPT5cbiAgICAgIDxvcHRpb24gdmFsdWU9e2dlbnJlfT57Z2VucmV9PC9vcHRpb24+XG4gICAgKX1cbiAgICB9XG4gIDwvc2VsZWN0PlxuKTsiXX0=