"use strict";

var SavedBooksView = function SavedBooksView(props) {
  return React.createElement(
    "div",
    null,
    props.savedBooks.map(function (book) {
      return React.createElement(SavedBooksViewEntry, { book: book });
    })
  );
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvU2F2ZWRCb29rc1ZpZXcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJLGlCQUFpQixTQUFqQixjQUFpQixDQUFDLEtBQUQ7QUFBQSxTQUNqQjtBQUFBO0FBQUE7QUFDRyxVQUFNLFVBQU4sQ0FBaUIsR0FBakIsQ0FBcUI7QUFBQSxhQUNwQixvQkFBQyxtQkFBRCxJQUFxQixNQUFNLElBQTNCLEdBRG9CO0FBQUEsS0FBckI7QUFESCxHQURpQjtBQUFBLENBQXJCIiwiZmlsZSI6IlNhdmVkQm9va3NWaWV3LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIFNhdmVkQm9va3NWaWV3ID0gKHByb3BzKSA9PiAoXG4gICAgPGRpdj5cbiAgICAgIHtwcm9wcy5zYXZlZEJvb2tzLm1hcChib29rID0+XG4gICAgICAgIDxTYXZlZEJvb2tzVmlld0VudHJ5IGJvb2s9e2Jvb2t9Lz5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4pOyJdfQ==