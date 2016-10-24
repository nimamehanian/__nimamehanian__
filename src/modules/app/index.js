import { connect } from 'react-redux';
import App from './app';

const mapStateToProps = (state) => {
  return {
    isSidebarOpen: state.sidebar.isOpen
  };
};

const AppContainer = connect(
  mapStateToProps,
  null
)(App);

export default AppContainer;
