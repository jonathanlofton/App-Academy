require_relative 'p02_hashing'

class HashSet
  attr_reader :count

  def initialize(num_buckets = 8)
    @num_buckets = num_buckets
    @store = Array.new(num_buckets) { Array.new }
    @count = 0
  end

  def insert(key)
    resize! if @count == @num_buckets
    @count += 1
    hash_key = key.hash
    @store[hash_key % @num_buckets] << key
  end

  def include?(key)
    hash_key = key.hash
    @store[hash_key % @num_buckets].include?(key)
  end

  def remove(key)
    hash_key = key.hash
    @store[hash_key % @num_buckets].delete(key)
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
        hash_el = el.hash
        new_store[hash_el % @num_buckets] << el
      end
    end
    @store = new_store
  end
end
