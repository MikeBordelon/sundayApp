"use strict";

var SearchView = function SearchView(props) {
  return React.createElement(
    "select",
    { onChange: props.changeFunc },
    props.genres.map(function (genre) {
      return React.createElement(
        "option",
        { value: genre },
        genre
      );
    }),
    "}"
  );
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvU2VhcmNoVmlldy5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJLGFBQWEsU0FBYixVQUFhLENBQUMsS0FBRDtBQUFBLFNBQ2Y7QUFBQTtBQUFBLE1BQVEsVUFBVSxNQUFNLFVBQXhCO0FBQ0csVUFBTSxNQUFOLENBQWEsR0FBYixDQUFpQjtBQUFBLGFBQ2hCO0FBQUE7QUFBQSxVQUFRLE9BQU8sS0FBZjtBQUF1QjtBQUF2QixPQURnQjtBQUFBLEtBQWpCLENBREg7QUFBQTtBQUFBLEdBRGU7QUFBQSxDQUFqQiIsImZpbGUiOiJTZWFyY2hWaWV3LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIFNlYXJjaFZpZXcgPSAocHJvcHMpID0+IChcbiAgPHNlbGVjdCBvbkNoYW5nZT17cHJvcHMuY2hhbmdlRnVuY30+XG4gICAge3Byb3BzLmdlbnJlcy5tYXAoZ2VucmUgPT5cbiAgICAgIDxvcHRpb24gdmFsdWU9e2dlbnJlfT57Z2VucmV9PC9vcHRpb24+XG4gICAgKX1cbiAgICB9XG4gIDwvc2VsZWN0PlxuKTsiXX0=