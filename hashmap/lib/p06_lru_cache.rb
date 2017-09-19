require_relative 'p05_hash_map'
require_relative 'p04_linked_list'

class LRUCache
  def initialize(max, prc)
    @map = HashMap.new
    @store = LinkedList.new
    @max = max
    @prc = prc
  end

  def count
    map.count
  end

  def get(key)
    if map[key]
      node = map[key]
      update_node!(node)
      node.val
    else
      calc!(key)
    end
  end

  def to_s
    'Map: ' + map.to_s + '\n' + 'Store: ' + store.to_s
  end

  private
  attr_reader :store, :map

  def calc!(key)
    val = @prc.call(key)
    new_node = store.append(key, val)
    map[key] = new_node

    eject! if count > @max
    val
  end

  def update_node!(node)
    node.remove
    map[node.key] = store.append(node.key, node.val)
  end

  def eject!
    rm_node = store.first
    rm_node.remove
    map.delete(rm_node.key)
    nil
  end
end

Hello Esteban!

My name is Jonathan and I'm a Full-stack Software Engineer based out of San Francisco. I pride myself on being a quick learner, look at the three of my most recent projects on my profile, I made all of them in a month and each one is using a different technology. If you have some time check out one my full stack projects 'Drift' (driftmusic.us) which is a single page music app that utilizes the following technologies: React, Redux, Ruby on Rails, and PostgreSQL. 

I have experience in the technologies that Stackline utilizes, which is great because I love working with those technologies as well. I also have an affinity for the Frontend and UI / UX, I can get obsessed with the details of making a website beautiful and intuitive. I'm excited to see what Stackline has in store for the future. 

If you have some more time please checkout my portfolio page (jonathanlofton.com) and get a better idea of who I'am and what I have created!

Thank you for your time.

- Jonathan