class Fixnum
  # Fixnum#hash already implemented for you
end

class Array
  def hash
    sum = 0
    self.each_with_index do |num, idx|
      sum += num.hash ^ idx
    end 
    sum
  end
end

class String
  def hash
    sum = 0
    self.chars.each_with_index do |ch, idx| 
      sum += ch.ord.hash ^ idx 
    end 
    sum
  end
end

class Hash
  # This returns 0 because rspec will break if it returns nil
  # Make sure to implement an actual Hash#hash method
  def hash
    sum = 0 
    self.each do |key, value|
      sum += key.hash + value.hash
    end 
    sum 
  end
end
