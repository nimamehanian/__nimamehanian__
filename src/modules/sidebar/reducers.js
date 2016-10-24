import initialState from '../../initialState';
import {
  SIDEBAR_OPEN,
  SIDEBAR_SHUT,
  SIDEBAR_PEEK,
  SIDEBAR_HIDE,
  SIDEBAR_LINK_SELECT
} from './actionTypes';

const links = (links = [], index) => {
  let reset = links.map(link => (
    { name: link.name, isActive: false }
  ));

  return [
    ...reset.slice(0, index),
    { name: reset[index].name, isActive: true },
    ...reset.slice(index + 1)
  ];
};

const sidebar = (state = initialState, action) => {
  switch (action.type) {
    case SIDEBAR_OPEN:
      return { ...state, isOpen: true };
    case SIDEBAR_SHUT:
      return { ...state, isOpen: false };
    case SIDEBAR_PEEK:
      return { ...state, isPeeking: true };
    case SIDEBAR_HIDE:
      return { ...state, isPeeking: false };
    case SIDEBAR_LINK_SELECT:
      return {
        ...state,
        activeIndex: action.index,
        links: links(state.links, action.index)
      };
    default:
      return state;
  }
};

export default sidebar;
