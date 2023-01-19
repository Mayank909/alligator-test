import { mount } from "@vue/test-utils";
import Vue from "vue";
import App from "../src/App";

describe("App", () => {
  let cmp, vm;

  beforeEach(() => {
    cmp = Vue.extend(App);
    // Create a copy of the original component
    vm = new cmp({
      data: {
        // Replace data value with this fake data
        messages: ["Cat"],
      },
    }).$mount(); // Instances and mounts the component
  });

  it('equals messages to ["Cat"]', () => {
    expect(vm.messages).toEqual(["Cat"]);
  });
  //   it("has the expected html structure", () => {
  //     expect(cmp.element).toMatchSnapshot();
  //   });
  it("renders correctly with different data", async () => {
    cmp.setData({ x1: 5, x2: 10 });
    await cmp.vm.$nextTick();
    expect(cmp.text()).toContain("10");
  });
  it("renders the correct markup", () => {
    expect(cmp.element).toContain("What is the sum of the two numbers?");
  });
});
