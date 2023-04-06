import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";

import App from "../../App.vue";

describe("Loads App", () => {
  it("renders properly", () => {
    const wrapper = mount(App);

    expect(wrapper.attributes("id")).toBe("app");
  });
});
