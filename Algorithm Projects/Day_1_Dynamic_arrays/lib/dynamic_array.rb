require_relative "static_array"

class DynamicArray
  attr_reader :length

  def initialize
    @length = 0
    @capacity = 8
    @store = StaticArray.new(@capacity)
  end

  # O(1)
  def [](index)
    raise "index out of bounds" unless index < @length && @length >= 0
    @store[index]
  end

  # O(1)
  def []=(index, value)
    raise "index out of bounds" unless index < @length && @length >= 0
    @store[index] = value
  end

  # O(1)
  def pop
    raise 'index out of bounds' if self.length == 0
    pop = @store[@length - 1]
    @length -= 1
    pop
  end

  # O(1) ammortized; O(n) worst case. Variable because of the possible
  # resize.
  def push(val)
    self.resize! if self.length == self.capacity
    @length += 1
    @store[@length - 1] = val
  end

  # O(n): has to shift over all the elements.
  def shift
    raise "index out of bounds" if length == 0

    val = self[0]
    (1...length).each do |idx|
      self[idx - 1] = self[idx]
    end
    @length -= 1
    val
  end

  # O(n): has to shift over all the elements.
  def unshift(val)
    resize! if self.length == self.capacity

    @length += 1
    i = @length - 2
    while i >= 0 do
      self[i + 1] = self[i]
      i -= 1
    end
    self[0] = val
  end

  protected
  attr_accessor :capacity, :store
  attr_writer :length

  def check_index(index)
  end

  # O(n): has to copy over all the elements to the new store.
  def resize!
    @capacity *= 2
    @store = StaticArray.new(@capacity)
  end
end
