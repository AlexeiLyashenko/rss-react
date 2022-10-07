import React from 'react';
import renderWithRouter from 'utils/ColorTheme/writeRouter';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { IMainProduct } from 'types/product';

import CardProduct from './components/CardProduct';
import CardList from './components/CardsList';
import About from 'pages/AboutPage/AboutPage';
import HomePage from 'pages/HomePage';
import AboutPage from 'pages/AboutPage';
import NotFoundPage from 'pages/NotFoundPage';
import Header from './components/Header';

const fakeCardApi: IMainProduct = {
  id: 1,
  title: 'title',
  description: 'description',
  price: 100,
  rating: 3,
  image: 'someurl',
};

interface IFakeLocalStorage {
  getItem: (key: string) => string | undefined;
  setItem: (key: string, value: string) => void;
  removeItem: (key: string) => void;
  clear: () => void;
}

type TFakeStore = {
  value?: string;
};

type TypeInStore = keyof TFakeStore;

const fakeLocalStorage = (function () {
  let storage: TFakeStore = {};
  return {
    getItem(key: string) {
      return storage[key as TypeInStore];
    },
    setItem(key, value) {
      storage[key as TypeInStore] = value;
    },
    removeItem(key) {
      delete storage[key as TypeInStore];
    },
    clear() {
      storage = {};
    },
  };
})() as IFakeLocalStorage;

describe('Pages render', () => {
  it('-home page', () => {
    const homePage = renderWithRouter(<HomePage />, '/');
    expect(homePage.getByText(/home page/i)).toBeInTheDocument();
  });
  it('-about page', () => {
    const aboutPage = renderWithRouter(<About />, '/about');
    expect(aboutPage.getByText(/about page/i)).toBeInTheDocument();
  });
  it('-404 page', () => {
    const notFoundPage = renderWithRouter(<NotFoundPage />, '/notfoundhash');
    expect(notFoundPage.getByText(/Page not found/i)).toBeInTheDocument();
  });
});

describe('Render component with props', () => {
  it('-card list with render correctly', () => {
    render(<CardList />);
    expect(screen.getByRole('list')).toBeInTheDocument();
  });

  const { id, title, description, price, rating, image } = fakeCardApi;
  beforeEach(() => {
    render(
      <CardProduct
        id={id}
        title={title}
        description={description}
        price={price}
        rating={rating}
        image={image}
      />
    );
  });
  it('-title render with props', () => {
    expect(screen.getByText(title)).toBeInTheDocument();
  });
  it('-description render with props', () => {
    expect(screen.getByText(description)).toBeInTheDocument();
  });
  it('-price render with props', () => {
    expect(screen.getByText(price)).toBeInTheDocument();
  });
  it('-rating render with props', () => {
    expect(screen.getByText(rating)).toBeInTheDocument();
  });
  it('-image render with props', () => {
    expect(screen.getByRole('img')).toHaveAttribute('src', image);
  });
});

describe('Navigate for links works correctly and opens the required page', () => {
  it('-home page link', () => {
    const header = renderWithRouter(<Header />, '/');
    userEvent.click(header.getAllByText(/home/i)[0]);
    expect(window.location.pathname).toBe('/');
    renderWithRouter(<HomePage />, '/');
    expect(screen.queryAllByText(/home page/i).length).toBeGreaterThanOrEqual(1);
  });
  it('-about page link', () => {
    const header = renderWithRouter(<Header />, '/');
    userEvent.click(header.getAllByText(/about/i)[0]);
    expect(window.location.pathname).toBe('/about');
    renderWithRouter(<AboutPage />, '/');
    expect(screen.queryAllByText(/about page/i).length).toBeGreaterThanOrEqual(1);
  });
});

describe('Input with local storage works rightly', () => {
  beforeEach(() => {
    fakeLocalStorage.setItem('samplekey', 'samplevalue');
  });

  it('-get value from local storage and set into input', () => {
    const homePage = renderWithRouter(<HomePage />, '/');
    const input = homePage.getByPlaceholderText(/search/i) as HTMLInputElement;
    input.value = fakeLocalStorage.getItem('samplekey') || '';
    expect(screen.getByPlaceholderText(/search/i)).toHaveValue('samplevalue');
  });
  it('-set input value to local storage', () => {
    const homePage = renderWithRouter(<HomePage />, '/');
    const input = homePage.getByPlaceholderText(/search/i) as HTMLInputElement;
    input.value = 'new sample value';
    fakeLocalStorage.setItem('newkey', input.value);
    expect(fakeLocalStorage.getItem('newkey')).toBe(input.value);
  });
});
