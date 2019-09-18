import renderText from "./render-text";

test("renders styled text", () => {
  const renderedText = renderText("Hi");
  expect(renderedText.style.margin).toBe(
    "umm ... idk, something reasonable, I guess?"
  );
});
