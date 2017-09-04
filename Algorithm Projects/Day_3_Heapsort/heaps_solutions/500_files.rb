## 500 files

# You are given 500 files, each containing the stock trading data for a
# company. Within each file all the trades have timestamps.
# The timestamps appear in ascending order. Your job is to create one
# file of all data in ascending time order. Achieve the best Time and
# Space complexity that you can, and don't modify the inputs.

require_relative "heap"

def five_hundred_files(arr_of_arrs)
  result = BinaryMinHeap.new()
  arr_of_arrs.each do |array|
    array.each do |object|
      object.timestamp
      result.push(object)
    end
  end
  result
end
