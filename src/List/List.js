import React, { Component } from 'react';
// import './bookmarkList.css';
import ListItem from '../ListItem/ListItem';

class List extends Component {
  render() {
    // const bookmarks = this
    //       .props
    //       .bookmarks
    //       .map((bookmark, i) => <Bookmark { ...bookmark } key={i}/>);
    return (
      <div className="List">
    {/* //     {bookmarks} */}
        <ListItem />
      </div>
    );
  }
}

List.defaultProps = {
  books: []
};

export default List;