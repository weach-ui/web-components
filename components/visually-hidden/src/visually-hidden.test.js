import { fixture, expect } from '@open-wc/testing';

import '../dist/visually-hidden';

describe('<visually-hidden>', () => {
  it("hides it's content", async () => {
    const element = await fixture(`
      <visually-hidden>This content is hidden</visually-hidden>
    `);

    expect(element).shadowDom.to.equalSnapshot();
  });
});
