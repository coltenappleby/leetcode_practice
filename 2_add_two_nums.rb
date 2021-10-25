# Definition for singly-linked list.
class ListNode
    attr_accessor :val, :next
    def initialize(val = 0, _next = nil)
        @val = val
        @next = _next
    end
end
# @param {ListNode} l1
# @param {ListNode} l2
# @return {ListNode}
def add_two_numbers(l1, l2)
    num1 = 0
    num2 = 0 
    count1 = 0
    count2 = 0
    while(l1 != nil)
        num1 += (l1.val*10**count1)
        l1 = l1.next
        count1 += 1
    end

    while(l2 != nil)
        num2 += (l2.val*10**count2)
        l2 = l2.next
        count2 += 1
    end
    # puts "num1: ", num1
    # puts "num2: ", num2


    sum = num1 + num2

    sumArr = sum.to_s.reverse.split('')
    # sumArr = 708

    node = ListNode.new(sumArr[0])
    result = node
    for i in 1..sumArr.length-1 do 
        # print i, ":" , node.val, " - "
        node.next = ListNode.new(sumArr[i])
        node = node.next
    end

    return result
end

list1node1 = ListNode.new(3)
list1node2 = ListNode.new(4, list1node1)
list1node3 = ListNode.new(2, list1node2)

list2node1 = ListNode.new(4)
list2node2 = ListNode.new(6, list2node1)
list2node3 = ListNode.new(5, list2node2)


puts add_two_numbers(list1node3, list2node3)
