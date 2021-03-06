import React from 'react';
import {configure, setAddon, linkTo} from '@kadira/storybook';
import infoAddon from '@kadira/react-storybook-addon-info';
import { setOptions } from '@kadira/storybook-addon-options';

setOptions({
    name: 'react storybook',
    url: 'https://github.com/kadirahq/storybook-addon-options',
    goFullScreen: false,
    showLeftPanel: true,
    showDownPanel: false,
    showSearchBox: false,
    downPanelInRight: false,
    sortStoriesByKind: false,
});

setAddon(infoAddon);

function loadStories() {
    require('../src/stories');
}

configure(loadStories, module);
