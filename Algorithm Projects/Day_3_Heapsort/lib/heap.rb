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
  end

  def self.heapify_up(array, child_idx, len = array.length, &prc)
  end
end
