import { connect } from 'react-redux';

import {
  SIDEBAR_OPEN,
  SIDEBAR_SHUT,
  SIDEBAR_PEEK,
  SIDEBAR_HIDE,
  SIDEBAR_LINK_SELECT
} from './actionTypes';

import Sidebar from './sidebar';

const mapStateToProps = (state) => {
  let currentPath = state
    .routing
    .locationBeforeTransitions
    .pathname
    .replace(/\//g, '');

  let activeIndex = 0;
  let links = state.sidebar.links.map((link, index) => {
    if (link.name === currentPath) {
      activeIndex = index;
    }

    return {
      name: link.name,
      isActive: (link.name === currentPath ? true : false)
    };
  });

  return {
    isOpen: state.sidebar.isOpen,
    isPeeking: state.sidebar.isPeeking,
    links: state.sidebar.links,
    activeIndex,
    currentPath
  };
};

const mapDispatchToProps = (dispatch) => ({
  open() {
    dispatch({ type: SIDEBAR_OPEN });
  },

  shut() {
    dispatch({ type: SIDEBAR_SHUT });
  },

  peek() {
    dispatch({ type: SIDEBAR_PEEK });
  },

  hide() {
    dispatch({ type: SIDEBAR_HIDE });
  },

  selectLink(index) {
    dispatch({ type: SIDEBAR_LINK_SELECT, index });
  }
});

const SidebarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);

export default SidebarContainer;
