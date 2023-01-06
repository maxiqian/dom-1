// dom.create
const div = dom.create("<div>newDiv<div>");
console.log(div);
// dom.after
dom.after(test, div);
// dom.wrap
const div3 = dom.create('<div id="parent"></div>');
dom.wrap(test, div3);
// dom.empty
const nodes = dom.empty(window.empty);
console.log(nodes);
// dom.attr
// 写
dom.attr(test, "title", "Hi, I am mxq");
// 读
const title = dom.attr(test, "title");
console.log(`title:${title}`);
// dom.text
// 写
dom.text(test, "这是新的内容");
// 读
const text = dom.text(test);
console.log(`text:${text}`);
// dom.style
// 写
dom.style(test, {
    border: "1px solid red",
    color: "blue"
});
// 读
console.log(dom.style(test, "border"));
// 也可以这样写
dom.style(test, "border", "1px solid black");
// dom.class
dom.class.add(test, "red");
dom.class.add(test, "blue");
dom.class.remove(test, "blue");
console.log(dom.class.contains(test, "blue"));
// dom.on
const fn = ()=>{
    console.log("点击了");
};
dom.on(test, "click", fn);
dom.off(test, "click", fn);
// dom.find
const testDiv = dom.find("#test")[0];
console.log(testDiv);
const test2 = dom.find("#test2")[0];
console.log(dom.find(".red", test2)[0]);
//dom.parent
console.log(dom.parent(test));
// dom.siblings
// find的是一个数组
const s2 = dom.find("#s2")[0];
console.log(dom.siblings(s2));
//dom.next
console.log(dom.next(s2));
//dom.previous
console.log(dom.previous(s2));
//dom.each
const t = dom.find("#travel")[0];
dom.each(dom.children(t), (n)=>dom.style(n, "color", "red"));
//dom.index
console.log(dom.index(s2));
//测试
const test3 = dom.find("#test3>.red")[0] // 获取对应的元素
;
dom.style(test3, "color", "yellow") // 设置 div.style.color
;
const divList = dom.find(".red") // 获取多个 div.red 元素
;
dom.each(divList, (n)=>console.log(n)) // 遍历 divList 里的所有元素
;

//# sourceMappingURL=index.de158e3a.js.map
