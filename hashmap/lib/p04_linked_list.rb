class Node
  attr_accessor :key, :val, :next, :prev

  def initialize(key = nil, val = nil)
    @key = key
    @val = val
    @next = nil
    @prev = nil
  end

  def to_s
    "#{@key}: #{@val}"
  end

  def remove
    # optional but useful, connects previous link to next link
    # and removes self from list.
  end
end

class LinkedList

  include Enumerable

  def initialize
    @head = Node.new
    @tail = Node.new 
    @head.next = @tail 
    @tail.prev = @head 
  end

  def [](i)
    each_with_index { |link, j| return link if i == j }
    nil
  end

  def first
    @head.next
  end

  def last
    @tail.prev
  end

  def empty?
    first == @tail
  end

  def get(key)
    current_node = @head 
    while current_node 
      if current_node.key == key 
        return current_node.val
      end
      current_node = current_node.next 
    end 
  end

  def include?(key)
    current_node = @head 
    while current_node 
      if current_node.key == key 
        return true 
      end 
      current_node = current_node.next
    end 
    false
  end

  def append(key, val)
    new_node = Node.new(key, val)
    tail_prev = @tail.prev 
    tail_prev.next = new_node
    @tail.prev = new_node 
    new_node.prev = tail_prev 
    new_node.next = @tail
  end

  def update(key, val)
    current_node = @head 
    while current_node
      if current_node.key == key 
        current_node.val = val 
      end 
      current_node = current_node.next
    end 
  end

  def remove(key)
    current_node = @head 
    prev_node = nil 
    while current_node 
      next_node = current_node.next
      if current_node.key == key 
        prev_node.next = current_node.next 
        next_node.prev = prev_node
      end
      prev_node = current_node 
      current_node = current_node.next 
    end 
  end

  def each
    current_node = @head.next 
    array = []
    while current_node != @tail
      yield current_node
      current_node = current_node.next
    end
  end

  # uncomment when you have `each` working and `Enumerable` included
  def to_s
    inject([]) { |acc, link| acc << "[#{link.key}, #{link.val}]" }.join(", ")
  end
end
