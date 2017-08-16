class MaxIntSet
  def initialize(max)
    @max = max
    @store = Array.new(@max, false)

  end

  def insert(num)
    raise 'Out of bounds' if num > @max || num < 0
    @store[num] = true
  end

  def remove(num)
    @store[num] = false
  end

  def include?(num)
    return true if @store[num]
    false
  end

  private

  def is_valid?(num)
  end

  def validate!(num)
  end
end


class IntSet
  def initialize(num_buckets = 20)
    @store = Array.new(num_buckets) { Array.new }
  end

  def insert(num)
    bucket = num % 20
    @store[bucket] << num
  end

  def remove(num)
    @store[num % 20].delete(num)
  end

  def include?(num)
    bucket = @store[num % 20]
    bucket.include?(num)
  end

  private

  def [](num)
    # optional but useful; return the bucket corresponding to `num`
    @store[num % 20]
  end

  def num_buckets
    @store.length
  end
end

class ResizingIntSet
  attr_reader :count

  def initialize(num_buckets = 20)
    @num_buckets = num_buckets
    @store = Array.new(@num_buckets) { Array.new }
    @count = 0
  end

  def insert(num)
    @count += 1
    resize! if @count == @num_buckets
    @store[num % @num_buckets] << num
  end

  def remove(num)
    @store[num % @num_buckets].delete(num)
    @count -= 1
  end

  def include?(num)
    @store[num % @num_buckets].include?(num)
  end

  def count
    @count
  end

  private

  def [](num)
    # optional but useful; return the bucket corresponding to `num`
  end

  def num_buckets
    @store.length
  end

  def resize!
    @num_buckets *= 2
    new_store = Array.new(@num_buckets) {Array.new}
    @store.each do |bucket|
      bucket.each do |el|
        new_store[el % @num_buckets] << el
      end
    end
    @store = new_store
  end
end
