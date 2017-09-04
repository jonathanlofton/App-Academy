# There are many ways to implement these methods, feel free to add arguments
# to methods as you see fit, or to create helper methods.
require_relative 'bst_node'

class BinarySearchTree
  attr_accessor :root

  def initialize
    @root = nil
  end

  def insert(value)
    if !@root
      @root = BSTNode.new(value)
      return
    end

    BinarySearchTree.insert!(@root, value)
  end

  def find(value, tree_node = @root)
    BinarySearchTree.find!(tree_node, value)
  end

  def delete(value)
    BinarySearchTree.find!(value)
  end

  # helper method for #delete:
  def maximum(tree_node = @root)
  end

  def depth(tree_node = @root)
  end

  def is_balanced?(tree_node = @root)
  end

  def in_order_traversal(tree_node = @root, arr = [])
  end


  private
  # optional helper methods go here:
  def self.insert!(node, value)
    # If there is no node, return a fresh one
    if !node
      return BSTNode.new(value)
    end

    # if there is a node then check the value of the node
    # If the value of the node is larger than the new
    # node to be inserted then put the new node to the left
    # keep doing this until there isn't a node and place it there
    if value >= node.value
      node.right = BinarySearchTree.insert!(node.right, value)
    else
      node.left = BinarySearchTree.insert!(node.left, value)
    end
    node
  end

  def self.find!(node, value)
    return nil unless node
    return node if node.value == value

    if value <= node.value
      BinarySearchTree.find!(node.left, value)
    else
      BinarySearchTree.find!(node.right, value)
    end
  end

  def self.max(node)
  end

  def self.delete_max!(node)
  end

  def self.delete!(node, value)
  end
end
