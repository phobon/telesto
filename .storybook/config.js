import { configure } from '@storybook/react';

configure(require.context('../components/', true, /\.stories\.js$/), module);