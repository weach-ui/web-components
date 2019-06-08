import { html, render } from 'lit-html';
import '../src/visually-hidden.ts';

const title = 'test';

const app = html`
  <visually-hidden .heading=${title}>
    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry's standard dummy text ever since the
    1500s, when an unknown printer took a galley of type and scrambled it to
    make a type specimen book.
  </visually-hidden>
`;

render(app, document.querySelector('#demo'));
