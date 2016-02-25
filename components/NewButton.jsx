import React from 'react';
import TopBarButton from './TopBarButton.jsx';

let MixinNewButton = InnerButton => class extends React.Component {

  constructor(){
    super();
  }

  render(){
    return <InnerButton {...this.props}></InnerButton>;
  }
};

let NewButton = MixinNewButton(TopBarButton);

export default NewButton;