import * as storybook from '@storybook/react';
import infoAddon from '@storybook/addon-info';
storybook.setAddon(infoAddon);
storybook.configure(
    () => {
      require('../src/stories/index.story');
    },
    module
);