function LinkedList() {
    this.head = null;
    this.tail = null;
    this.add = function (value) {
        let node = {
            value: value,
            next: null
        };
        if (this.head === null) {
            this.head = node;
        } else {
            this.tail.next = node;
        }
        this.tail = node;
    };

    this.print = function () {
        let current = this.head;
        let str = 'LinkedList{';
        while (current) {
            str += current.value;
            if (current.next) {
                str += ',';
            }
            current = current.next;
        }
        str += '}';
        console.log(str);
    };

    this.remove = function (value) {
        if (this.head.value === value) {
            this.head = this.head.next;
            return;
        }
        let current = this.head;
        while (current.next) {
            if (current.next.value === value) {
                current.next = current.next.next;
                return;
            }
            current = current.next;
        }
    }
}


let linkedlist = new LinkedList();

linkedlist.add(1);

linkedlist.add(2);

linkedlist.add(3);

linkedlist.print(); //Expected Result: LinkedList{1,2,3};

linkedlist.remove(2);

linkedlist.print(); //Expected Result: LinkedList{1,3};