import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import TitleBar from './common/titleBar';
import CollectionPanel from './common/collectionPanel';
import { COLLECTION_DATA } from '../data/collections';

class KnowCenter extends Component {

  render() {
    const title = "Knowledge Center",
          expItems = COLLECTION_DATA['collections'].map(coll =>
            <CollectionPanel collect={coll} />
          );
    return (
      <div className="know-center-container">
        <TitleBar title={title} />
        <div className="collection-container">
          {expItems}
        </div>
      </div>
    );
  }
}

export default KnowCenter;
