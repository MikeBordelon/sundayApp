"use strict";

var ResultsView = function ResultsView(props) {
  return React.createElement(
    "div",
    null,
    props.currentSelectedMovie.map(function (movie) {
      return React.createElement(ResultsViewEntry, { movie: movie });
    })
  );
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvUmVzdWx0c1ZpZXcuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSSxjQUFjLFNBQWQsV0FBYyxDQUFDLEtBQUQ7QUFBQSxTQUVoQjtBQUFBO0FBQUE7QUFDRyxVQUFNLG9CQUFOLENBQTJCLEdBQTNCLENBQStCO0FBQUEsYUFDOUIsb0JBQUMsZ0JBQUQsSUFBa0IsT0FBTyxLQUF6QixHQUQ4QjtBQUFBLEtBQS9CO0FBREgsR0FGZ0I7QUFBQSxDQUFsQiIsImZpbGUiOiJSZXN1bHRzVmlldy5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBSZXN1bHRzVmlldyA9IChwcm9wcykgPT4gKFxuXG4gIDxkaXY+XG4gICAge3Byb3BzLmN1cnJlbnRTZWxlY3RlZE1vdmllLm1hcChtb3ZpZSA9PlxuICAgICAgPFJlc3VsdHNWaWV3RW50cnkgbW92aWU9e21vdmllfS8+XG4gICAgKX1cbiAgPC9kaXY+XG4pOyJdfQ==