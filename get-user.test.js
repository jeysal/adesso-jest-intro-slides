import getUser from "./get-user";
import fetch from "./fetch";

jest.mock("./fetch");

test("fetches the user", () => {
  fetch.mockReturnValue({ name: "Alex" });
  expect(getUser("42")).toEqual({ name: "Alex" });
  expect(fetch).toHaveBeenCalledWith("/users/42");
});
