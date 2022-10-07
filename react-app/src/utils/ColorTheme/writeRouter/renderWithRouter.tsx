import { render } from '@testing-library/react';
import { ReactElement } from 'react';
import { BrowserRouter } from 'react-router-dom';

export const renderWithRouter = (element: ReactElement, url: string) => {
  window.history.pushState({}, 'sample hash', url);

  return render(element, { wrapper: BrowserRouter });
};
