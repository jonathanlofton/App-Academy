
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
