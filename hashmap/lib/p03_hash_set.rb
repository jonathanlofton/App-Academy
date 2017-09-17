require_relative 'p02_hashing'

class HashSet
  attr_reader :count

  def initialize(num_buckets = 8)
    @store = Array.new(num_buckets) { Array.new }
    @count = 0
  end

  def insert(key)
    @count += 1
    resize! if @count > num_buckets
    @store[key.hash % num_buckets] << key
  end

  def include?(key)
    @store[key.hash % num_buckets].include?(key)
  end

  def remove(key)
    @store[key.hash % num_buckets].delete(key)
    @count -= 1
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
    @store.each do |bucket|
      bucket.each do |el|
        new_store[el.hash % num_buckets] << el 
      end 
    end 
    @store = new_store
  end
end
