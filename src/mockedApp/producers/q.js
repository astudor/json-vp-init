import { producer, Get, Set, Merge, Ref } from "@c11/engine.macro";

export const q = producer((isBar = Get.bar, setFoo = Set.foo) => {
  if (!isBar) return;
  setFoo(true);
});
