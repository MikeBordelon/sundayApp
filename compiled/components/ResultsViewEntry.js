"use strict";

var ResultsViewEntry = function ResultsViewEntry(props) {
  return React.createElement(
    "div",
    { className: "book-list-entry" },
    console.log(props.book.volumeInfo),
    React.createElement(
      "div",
      { className: "media-left media-middle" },
      React.createElement("img", { className: "media-object", src: props.book.volumeInfo.imageLinks.thumbnail, alt: "" })
    ),
    React.createElement(
      "div",
      { className: "media-body" },
      React.createElement(
        "div",
        { className: "book-list-entry-detail" },
        props.book.volumeInfo.title
      )
    ),
    React.createElement(
      "div",
      { className: "media-body" },
      React.createElement(
        "div",
        { className: "book-list-entry-detail" },
        props.book.volumeInfo.authors[0]
      )
    )
  );
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvUmVzdWx0c1ZpZXdFbnRyeS5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJLG1CQUFtQixTQUFuQixnQkFBbUIsQ0FBQyxLQUFEO0FBQUEsU0FDckI7QUFBQTtBQUFBLE1BQUssV0FBVSxpQkFBZjtBQUNDLFlBQVEsR0FBUixDQUFZLE1BQU0sSUFBTixDQUFXLFVBQXZCLENBREQ7QUFFRTtBQUFBO0FBQUEsUUFBSyxXQUFVLHlCQUFmO0FBQ0UsbUNBQUssV0FBVSxjQUFmLEVBQThCLEtBQUssTUFBTSxJQUFOLENBQVcsVUFBWCxDQUFzQixVQUF0QixDQUFpQyxTQUFwRSxFQUErRSxLQUFJLEVBQW5GO0FBREYsS0FGRjtBQUtFO0FBQUE7QUFBQSxRQUFLLFdBQVUsWUFBZjtBQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVUsd0JBQWY7QUFBeUMsY0FBTSxJQUFOLENBQVcsVUFBWCxDQUFzQjtBQUEvRDtBQURGLEtBTEY7QUFRRztBQUFBO0FBQUEsUUFBSyxXQUFVLFlBQWY7QUFDQztBQUFBO0FBQUEsVUFBSyxXQUFVLHdCQUFmO0FBQXlDLGNBQU0sSUFBTixDQUFXLFVBQVgsQ0FBc0IsT0FBdEIsQ0FBOEIsQ0FBOUI7QUFBekM7QUFERDtBQVJILEdBRHFCO0FBQUEsQ0FBdkIiLCJmaWxlIjoiUmVzdWx0c1ZpZXdFbnRyeS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBSZXN1bHRzVmlld0VudHJ5ID0gKHByb3BzKSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwiYm9vay1saXN0LWVudHJ5XCI+XG4gIHtjb25zb2xlLmxvZyhwcm9wcy5ib29rLnZvbHVtZUluZm8pfVxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaWEtbGVmdCBtZWRpYS1taWRkbGVcIj5cbiAgICAgIDxpbWcgY2xhc3NOYW1lPVwibWVkaWEtb2JqZWN0XCIgc3JjPXtwcm9wcy5ib29rLnZvbHVtZUluZm8uaW1hZ2VMaW5rcy50aHVtYm5haWx9IGFsdD1cIlwiIC8+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpYS1ib2R5XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvb2stbGlzdC1lbnRyeS1kZXRhaWxcIj57cHJvcHMuYm9vay52b2x1bWVJbmZvLnRpdGxlfTwvZGl2PlxuICAgIDwvZGl2PlxuICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhLWJvZHlcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9vay1saXN0LWVudHJ5LWRldGFpbFwiPntwcm9wcy5ib29rLnZvbHVtZUluZm8uYXV0aG9yc1swXX08L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4pO1xuXG4iXX0=