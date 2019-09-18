import renderText from "./render-text";

test("renders styled text", () => {
  const renderedText = renderText("Hi");
  expect(renderedText.style.margin).toMatchInlineSnapshot(`"2rem 1rem"`);
});
