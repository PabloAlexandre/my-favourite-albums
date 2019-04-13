import { useEffect } from 'react';
import { withRouter } from 'react-router';

const ScrollTop = ({ children, history: { pathname, search } }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname, search]);
  
  return children;
}

export default withRouter(ScrollTop);