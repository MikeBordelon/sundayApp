"use strict";

var ResultsView = function ResultsView(props) {
  return React.createElement(
    "div",
    null,
    props.books.items.map(function (book) {
      return React.createElement(ResultsViewEntry, { book: book });
    })
  );
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvUmVzdWx0c1ZpZXcuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSSxjQUFjLFNBQWQsV0FBYyxDQUFDLEtBQUQ7QUFBQSxTQUNkO0FBQUE7QUFBQTtBQUNHLFVBQU0sS0FBTixDQUFZLEtBQVosQ0FBa0IsR0FBbEIsQ0FBc0I7QUFBQSxhQUNyQixvQkFBQyxnQkFBRCxJQUFrQixNQUFNLElBQXhCLEdBRHFCO0FBQUEsS0FBdEI7QUFESCxHQURjO0FBQUEsQ0FBbEIiLCJmaWxlIjoiUmVzdWx0c1ZpZXcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgUmVzdWx0c1ZpZXcgPSAocHJvcHMpID0+IChcbiAgICA8ZGl2PlxuICAgICAge3Byb3BzLmJvb2tzLml0ZW1zLm1hcChib29rID0+XG4gICAgICAgIDxSZXN1bHRzVmlld0VudHJ5IGJvb2s9e2Jvb2t9Lz5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4pOyJdfQ==