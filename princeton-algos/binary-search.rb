class Node

  attr_accessor :left, :right
  attr_reader :value

  def initialize(value)
    @value = value
    @left = nil
    @right = nil
  end

end

class BinarySearchTree

  attr_reader :root

  def initialize(root)
    @root = root
  end

end
