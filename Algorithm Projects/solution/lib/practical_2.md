## Problem
This is a two part problem:
1. First, write a series of instructions on how to build out an LRU Cache (pretend
the person you're writing to has no idea how to build one. Don't forget to address
the reasoning behind using particular data structures).
2. Implement an LRU Cache from scratch with no outside references. **Don't look
at the code or instructions from your homework!**

## Solution

### Part 1
Write first part here:
1. An LRU cache will have a hashmap to store all data and a linkedlist to hold
the most recently looked at data.
2. The LRU will have a list of a predetermined amount of items, the most recently used item
will be moved to the end of the list while the item in the first position is the least used in the list
3. If the list is full and another item is appended onto the list the first item is then popped off
and the most recently added on one is sent to the back.
4. Using a linkedlist for this is fine

### Part 2
```ruby
class LRUCache
end
```
