def find_second_minimum_value(root, array = [])
    return [] if root == nil

    find_second_minimum_value(root.left, array)
    array.push(root.val)
    find_second_minimum_value(root.right, array)

    array[1]
end
