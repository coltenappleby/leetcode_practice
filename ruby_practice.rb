str = "string"

# str.each_char do |x|
#     puts x
# end

# arr = str.split('')

# for i in 0..arr.length
#     puts i
# end

class ListNode
    attr_accessor :val, :next
    def initialize(val = 0, _next = nil)
        @val = val
        @next = _next
    end
end

node1 = ListNode.new(1)
node2 = ListNode.new(0, node1)
node3 = ListNode.new(2, node2)

puts node3.next.val