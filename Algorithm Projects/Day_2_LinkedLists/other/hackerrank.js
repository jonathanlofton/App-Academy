
// Function for mergining two linked lists
function mergeLinkedLists( headA, headB) {
    headC = new Node();
    new_node = new Node();
    headC.next = new_node;

    while (headA || headB) {
        if (headA && headB) {
            if (headA.data < headB.data) {
                new_node.next = headA;
                headA = headA.next;
                new_node = new_node.next;
            } else {
                new_node.next = headB;
                headB = headB.next;
                new_node = new_node.next;
            }
        } else {
            if (headA) {
                new_node.next = headA;
                headA = headA.next;
                new_node = new_node.next;
            } else {
                new_node.next = headB;
                headB = headB.next;
                new_node = new_node.next;
            }
        }



    }
    return headC.next.next;
}

// get node value from with the position being the index from the tail
function getNodeValue( head, position) {
    let current_node = head;

    let arrayOfData = [];
    while (current_node) {
        arrayOfData.push(current_node.data)
        current_node = current_node.next;
    }

    let count = 0;
    for (let i = arrayOfData.length - 1; i >= 0; i--) {
        if (count == position) {
            return arrayOfData[i];
        }
        count += 1;
    }
}

// remove duplicates from a linked list
function removeDuplicates(head) {
    let repeats = [];
    let currentNode = head;
    let previousNode = null;
    while (currentNode) {
        if (repeats.includes(currentNode.data)) {
            if (currentNode.next && repeats.includes(currentNode.next.data) === false) {
                previousNode.next = currentNode.next;
            } else {
                previousNode.next = null;
            }
        }
        repeats.push(currentNode.data)
        previousNode = currentNode;
        currentNode = currentNode.next;
    }
    return head;
}
