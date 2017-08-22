require_relative 'graph'

# Implementing topological sort using both Khan's and Tarian's algorithms

def topological_sort(vertices)
  num_edges = {}
  queue = []

  vertices.each do |vertex|
    num_edges[vertex] = vertex.in_edges.count
    queue << vertex if vertex.in_edges.empty?
  end

  sorted = []

  while queue.length > 0
    vertex = queue.shift
    sorted.push(vertex)

    vertex.out_edges.each do |edge|
      to_vertex = edge.to_vertex

      num_edges[to_vertex] -= 1
      if num_edges[to_vertex] == 0
        queue.push(to_vertex)
      end
    end
  end

  if sorted.length == vertices.length
    sorted
  else
    []
  end
end
