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
    node = @store[0]
    if count == 1
      @store.pop
    else
      @store[0] = @store.pop
      BinaryMinHeap.heapify_down(store, 0, &prc)
    end
    node
  end

  def peek
  end

  def push(val)
    @store.push(val)
    BinaryMinHeap.heapify_up(store, self.count, @prc)
  end

  public
  def self.child_indices(len, parent_index)
    first = (parent_index * 2) + 1
    second = (parent_index * 2) + 2
    if len > parent_index * 2 + 2
      return [first, second]
    elsif len > parent_index * 2 + 1
      return [first]
    end
  end

  def self.parent_index(child_index)
    raise 'root has no parent' if child_index <= 0
    (child_index - 1) / 2
  end

  def self.heapify_down(array, parent_idx, len = array.length, &prc)
    prc ||= Proc.new { |x, y| x <=> y }
    parent = array[parent_idx]
    children = child_indices(len, parent_idx)
    return array if children.nil?

    if  children.length == 2
      children = [array[children[0]], array[children[1]]]
    elsif children.length == 1
      children = [array[children[0]]]
    end

    if prc.call(parent, children.min) <= 1
      if children.length == 1
        child_one = children[0]
      else
        child_one = prc.call(children[0], children[1]) == -1 ? children[0] : children[1]
      end

      child_two = array.index(child_one)
      array[parent_idx] = child_one
      array[child_two] = parent
      parent_idx = child_two
      BinaryMinHeap.heapify_down(array, parent_idx, len, &prc)
    else
      array
    end

  end

  def self.heapify_up(array, child_idx, len = array.length, &prc)
    prc ||= Proc.new { |x, y| x <=> y }
    parent_idx = parent_index(child_idx)
    return array unless child_idx >= 0
    return array if prc.call(array[child_idx], array[parent_idx]) >= 0

    child = array[child_idx]
    parent = array[parent_idx]
    array[child_idx] = parent
    array[parent_idx] = child
    BinaryMinHeap.heapify_up(array, parent_idx, len, &prc)
  end
end
