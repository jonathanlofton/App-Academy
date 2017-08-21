class Array

  def self.partition(array, start, length, &prc)
    prc ||= Proc.new { |el1, el2| el1 <=> el2 }

    # To reduce probability of pathalogically bad data set, shuffle pivot.
    # new_pivot = start + rand(length)
    # array[start], array[new_pivot] = array[new_pivot], array[start]

    pivot_idx = start
    pivot = array[start]

    ((start + 1)...(start + length)).each do |idx|
      if prc.call(pivot, array[idx]) > 0
        array[idx], array[pivot_idx + 1] = array[pivot_idx + 1], array[idx]
        pivot_idx += 1
      end
    end
    array[start], array[pivot_idx] = array[pivot_idx], array[start]


    ## Alternative partioning procedure
    # pivot_idx, pivot = start, array[start]
    # ((start + 1)...(start + length)).each do |idx|
    #   val = array[idx]
    #   if prc.call(pivot, val) < 1
    #     # if the element is greater than or equal to the pivot, leave
    #     # where it is.
    #   else
    #     # Three-way shuffle: pivot_idx + 1 => idx, pivot_idx =>
    #     # pivot_idx + 1, idx => pivot_idx.
    #
    #     # move self[pivot_idx + 1] to idx, which keeps this bigger item
    #     # to the right of the pivot.
    #     array[idx] = array[pivot_idx + 1]
    #     # move the pivot forward one, to where the larger item used to live.
    #     array[pivot_idx + 1] = pivot
    #     # move the smaller item to one to the left of the pivot.
    #     array[pivot_idx] = val
    #
    #     pivot_idx += 1
    #   end
    # end

    pivot_idx
  end

  def select_kth_smallest(k)

  end
end

arr = [1,4,2,5,3,5]
p arr.select_kth_smallest(1)
p arr.select_kth_smallest(2)
p arr.select_kth_smallest(3)
p arr.select_kth_smallest(4)
p arr.select_kth_smallest(5)
p arr.select_kth_smallest(6)
