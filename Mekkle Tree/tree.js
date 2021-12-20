const crypto = require ("crypto")
const generateHash = (content) => crypto.createHash("sha256")
        .update(content)
        .digest("hex")


class MekkleTree {
    constructor(name, content, level, parent){
        this.name = name;
        this.content = content;
        this.level = level
        this.parent =parent

        this.children = []
        this.hash = generateHash(JSON.stringify({
            name, level, content
        }))
    }

    setContent(content) {
        
        this.content = content;
    }
    addChild(node){
        this.children.push(node);
    }
}

const root = new MekkleTree("rootnode", "root", 0)
const child1 = new MekkleTree("child1", "child 1 content", root.level+1)
const child2 = new MekkleTree("child2", "child 2 content", root.level+1)

root.addChild(child1)
root.addChild(child2)
