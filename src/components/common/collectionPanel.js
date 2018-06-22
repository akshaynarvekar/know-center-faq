import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import ArticlePanel from './articlePanel';

class CollectionPanel extends Component {

  render(){
    const articlePanelList = this.props.collect.articles.map(article =>
      <ArticlePanel article={article} />
    );

    return (
      <div>
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>{this.props.collect.collectionName}</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            {articlePanelList}
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    );
  }
}

export default CollectionPanel;
