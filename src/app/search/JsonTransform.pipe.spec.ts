import { JsonTransform } from './JsonTransform.pipe';

describe('JsonTransformPipe', () => {
  // This pipe is a pure, stateless function so no need for BeforeEach
  let pipe = new JsonTransform();

  it('transforms "{\"title\":\"text_two\"}"', () => {
    let str = '{\"title\":\"text two\"}';
    expect(pipe.transform(str)).toBe('<b>Title:</b> text two<br/>');
  });
  
  it('transforms "{\"title\":\"text two\", \"title_two\":\"some more text\"}"', () => {
    let str = '{\"title\":\"text two\", \"title_two\":\"some more text\"}';
    expect(pipe.transform(str)).toBe('<b>Title:</b> text two<br/><b>Title Two:</b> some more text<br/>');
  });

});