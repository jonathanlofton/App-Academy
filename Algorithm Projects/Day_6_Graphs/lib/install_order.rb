# Given an Array of tuples, where tuple[0] represents a package vertex,
# and tuple[1] represents its dependency, determine the order in which
# the packages should be installed. Only packages that have dependencies
# will be listed, but all packages from 1..max_id exist.

# N.B. this is how `npm` works.

# Import any files you need to

require_relative 'graph'
require_relative 'topological_sort'

def install_order(arr)
  tuple_nums = (1..arr.flatten.max).to_a
  hash = Hash.new {[]}

  arr.each { |tuple| hash[tuple[0]] += [tuple[1]] }

  sorted = []

  until queue.empty?
    vertex = queue.shift
    sorted << vertex

    hash.keys.each do |vertex_depend|
      hash[vertex_depend] -= [vertex]

      if hash[vertex_depend].empty?
        queue << vertex_depend
        hash.delete(vertex_depend)
      end

    end

  end

  sorted
end
