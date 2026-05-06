function slicesIndex<T>(s: T[], v: T): number {
    for (let i = 0; i < s.length; i++) {
        if (s[i] === v) return i;
    }
    return -1;
}

interface Element<T> {
    val: T;
    next: Element<T> | null;
}

class List<T> {
    private head: Element<T> | null = null;
    private tail: Element<T> | null = null;

    push(v: T): void {
        const el: Element<T> = { val: v, next: null };
        if (this.tail === null) {
            this.head = el;
            this.tail = el;
        } else {
            this.tail.next = el;
            this.tail = el;
        }
    }

    allElements(): T[] {
        const elems: T[] = [];
        for (let e = this.head; e !== null; e = e.next) {
            elems.push(e.val);
        }
        return elems;
    }
}

const s: string[] = ["foo", "bar", "zoo"];
console.log("index of zoo:", slicesIndex(s, "zoo"));

const lst = new List<number>();
lst.push(10);
lst.push(13);
lst.push(23);
console.log("list:", lst.allElements());
