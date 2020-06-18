class VNode {
    constructor(
        tag,
        data,
        child,
        text,
        elm,
        context,
        componentOptions,
        asyncFactory
    ) {
        this.tag = tag;
        this.data = data;
        this.child = child;
        this.elm = elm;
        this.context = context;
        this.componentOptions = componentOptions;
        this.asyncFactory = asyncFactory;

    }
}