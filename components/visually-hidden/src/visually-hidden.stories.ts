import { storiesOf, html } from '@open-wc/demoing-storybook';

import './visually-hidden';
import readme from '../README.md';

const stories = storiesOf('visually-hidden', module);

stories.addParameters({ notes: { markdown: readme } });

stories.add(
  'Basic Usage',
  () => html`
    <div>
      Now you see me...
      <visually-hidden>now you don't!</visually-hidden>
    </div>
  `
);
