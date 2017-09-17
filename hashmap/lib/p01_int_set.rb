class MaxIntSet
  def initialize(max)
    @max = max
    @store = Array.new(@max) { false }
  end

  def insert(num)
    raise 'Out of bounds' if num >= @max || num < 0
    @store[num - 1] = true 
  end

  def remove(num)
    @store[num - 1] = false 
  end

  def include?(num)
    @store[num - 1]
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
    @store[num % num_buckets] << num
  end

  def remove(num)
    @store[num % num_buckets].delete(num)
  end

  def include?(num)
    @store[num % num_buckets].include?(num)
  end

  private

  def [](num)
    # optional but useful; return the bucket corresponding to `num`
  end

  def num_buckets
    @store.length
  end
end

class ResizingIntSet
  attr_reader :count

  def initialize(num_buckets = 20)
    @store = Array.new(num_buckets) { Array.new }
    @count = 0
  end

  def insert(num)
    return if include?(num)
    @count += 1
    resize! if @count > num_buckets
    @store[num % num_buckets] << num
  end

  def remove(num)
    return unless include?(num)
    @store[num % num_buckets].delete(num)
    @count -= 1
  end

  def include?(num)
    @store[num % num_buckets].include?(num)
  end

  private

  def [](num)
    # optional but useful; return the bucket corresponding to `num`
  end

  def num_buckets
    @store.length
  end

  def resize!
    num_buckets = @store.length * 2 
    new_store = Array.new(num_buckets) { Array.new }
    @store.each_with_index do |bucket, idx| 
      bucket.each do |el|
        new_store[el % num_buckets] << el 
      end 
    end 
    @store = new_store
  end
end
