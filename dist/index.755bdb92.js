window.dom = {
    // 增
    // create:function(){}
    // create(tagName){
    //     return document.createElement(tagName);
    // }
    create (string) {
        //template
        const container = document.createElement("template");
        container.innerHTML = string.trim();
        //为什么要这样写
        return container.content.firstChild;
    },
    after (node, node2) {
        node.parentNode.insertBefore(node2, node.nextSibling);
    },
    before (node, node2) {
        node.parentNode.insertBefore(node2, node);
    },
    append (parent, node) {
        parent.appendChild(node);
    },
    wrap (node, parent) {
        //将新的父节点parent插入到node节点的前面
        dom.before(node, parent);
        //将node节点作为儿子新增到parent节点的里面
        dom.append(parent, node);
    },
    // 删
    remove (node) {
        node.parentNode.removeChild(node);
        return node;
    },
    empty (node) {
        // const childNodes = node.childNodes; 
        // 更高级的写法
        const { childNodes  } = node;
        const array = [];
        let x = node.firstChild;
        while(x){
            array.push(dom.remove(node.firstChild));
            // x等于删除node第一个儿子后的新的第一个儿子
            x = node.firstChild;
        }
        return array;
    },
    // 改
    attr (node, name, value) {
        if (arguments.length === 3) node.setAttribute(name, value);
        else if (arguments.length === 2) return node.getAttribute(name);
    },
    text (node, string) {
        if (arguments.length === 2) {
            // 适配
            if ("innerText" in node) node.innerText = string;
            else node.textContent = string;
        } else if (arguments.length === 1) {
            if ("innerText" in node) return node.innerText;
            else return node.textContent;
        }
    },
    html (node, string) {
        if (arguments.length === 2) node.innerHTML = string;
        else if (arguments.length === 1) return node.innerHTML;
    },
    style (node, name, value) {
        if (arguments.length === 3) // dom.style(div,'color','red)
        node.style[name] = value;
        else if (arguments.length === 2) {
            if (typeof name === "string") // dom.style(div,'color')
            return node.style[name];
            else if (name instanceof Object) {
                // dom.style(div,{color:'red'})
                const object = name;
                for(let key in object)// key:border/color
                // node.style.border=... node.style.color=...
                // 这里的key是个变量
                node.style[key] = object[key];
            }
        }
    },
    class: {
        add (node, className) {
            node.classList.add(className);
        },
        remove (node, className) {
            node.classList.remove(className);
        },
        contains (node, className) {
            return node.classList.contains(className);
        }
    },
    on (node, eventName, fn) {
        node.addEventListener(eventName, fn);
    },
    off (node, eventName, fn) {
        node.removeEventListener(eventName, fn);
    },
    // 查
    find (selector, scope) {
        // 如果存在scope参数，在scope中寻找选择器
        return (scope || document).querySelectorAll(selector);
    },
    parent (node) {
        return node.parentNode;
    },
    children (node) {
        return node.children;
    },
    siblings (node) {
        // node.parentNode.children 是一个伪数组 不能直接用filter()排除自己
        // 转化为数组
        return Array.from(node.parentNode.children).filter((n)=>n !== node);
    },
    next (node) {
        let x = node.nextSibling;
        while(x && x.nodeType === 3)x = x.nextSibling;
        return x;
    },
    previous (node) {
        let x = node.previousSibling;
        while(x && x.nodeType === 3)x = x.previousSibling;
        return x;
    },
    each (nodeList, fn) {
        for(let i = 0; i < nodeList.length; i++)fn.call(null, nodeList[i]);
    },
    index (node) {
        const list = dom.children(node.parentNode);
        let i;
        for(i = 0; i < list.length; i++){
            if (list[i] === node) break;
        }
        return i;
    }
};

//# sourceMappingURL=index.755bdb92.js.map
