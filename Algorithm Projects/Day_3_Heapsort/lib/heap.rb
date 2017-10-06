class BinaryMinHeap
  attr_reader :store, :prc

  def initialize(&prc)
    @store = Array.new()
    @prc = prc || Proc.new { |x, y| x <=> y }
  end

  def count
    @store.length
  end

  def extract
  end

  def peek
  end

  def push(val)
  end

  public
  def self.child_indices(len, parent_index)
    result = []
    first_child = parent_index * 2 + 1
    sec_child = parent_index * 2 + 2
    result << first_child if first_child < len 
    result << sec_child if sec_child < len 
    result
  end

  def self.parent_index(child_index)
    raise 'root has no parent' if child_index == 0
    (child_index - 1) / 2
  end

  def self.heapify_down(array, parent_idx, len = array.length, &prc)
    prc ||= Proc.new {|el1, el2| el1 <=> el2 }

    l_child_idx, r_child_idx = child_indices(len, parent_idx)
    parent_val = array[parent_idx]

    children = []
    children << array[l_child_idx] if l_child_idx
    children << array[r_child_idx] if r_child_idx

    if children.all? {|child| prc.call(parent_val, child) <= 0}
      return array 
    end 

    swap_idx = nil 
    if children.length == 1 
      swap_idx = l_child_idx
    else
      swap_idx = prc.call(children[0], children[1]) == -1 ? l_child_idx : r_child_idx
    end 

    array[parent_idx], array[swap_idx] = array[swap_idx], parent_val

    heapify_down(array, swap_idx, len, &prc)
  end

  def self.heapify_up(array, child_idx, len = array.length, &prc)
    prc ||= Proc.new {|el1, el2| el1 <=> el2}
    return array if child_idx == 0

    parent_idx = parent_index(child_idx)
    parent_val = array[parent_idx] if parent_idx
    child_val = array[child_idx]

    if prc.call(child_val, parent_val) == -1 && parent_val
      array[parent_idx], array[child_idx] = array[child_idx], array[parent_idx]
    else 
      return array
    end 

    heapify_up(array, parent_idx, len, &prc)
  end
end
