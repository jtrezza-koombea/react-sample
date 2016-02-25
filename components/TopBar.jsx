import React from 'react';
import {connect} from 'react-redux';

import TopBarButton from './TopBarButton.jsx';
import SearchBox from './SearchBox.jsx';
import NewMenu from './NewMenu.jsx'
import NewButton from './NewButton.jsx';

const TopBar = ({newMenuState, click}) => (
      <div className="main-top-bar">
        <div className="top-bar--left top-bar__part">

          <NewButton click={click}
                     icon={`fa fa-plus${newMenuState ? ' rotate' : ''}`}
                     label={newMenuState ? 'Cerrar' : 'Nuevo'}
                     open={newMenuState}
                     parentClass="btn-middle" />
          <NewMenu hidden={!newMenuState} ></NewMenu>
        </div><div className="top-bar--middle top-bar__part">
          <SearchBox></SearchBox>
        </div><div className="top-bar--right top-bar__part">
          <TopBarButton icon="fa fa-user" label="Droguería Luzma"></TopBarButton>
        </div>
      </div>
    );

const mapStateToprops = (state) => {
  return {
    newMenuState: state.newMenuState,
    userMenuState: state.userMenuState
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    click: () =>
      dispatch({
        type: 'TOGGLE_NEW_MENU'
      })
  };
};

const connectedTopBar = connect(mapStateToprops, mapDispatchToProps)(TopBar);

export default connectedTopBar;