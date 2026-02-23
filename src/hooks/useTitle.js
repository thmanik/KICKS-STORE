import { useEffect } from 'react';

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} |  Kicks - Online Store`;
    return () => {
      document.title = 'Kicks - Online Store';
    };
  }, [title]);
};

export default useTitle;