import React from 'react';
import { createRoot } from 'react-dom/client';

import WeatherWidger from './components/WeatherWidget/WeatherWidget';

import './styles/index.scss';

const root = createRoot(document.getElementById('root'));

root.render(<WeatherWidger />);
