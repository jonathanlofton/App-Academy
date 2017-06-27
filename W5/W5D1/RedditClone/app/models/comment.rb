class Comment < ApplicationRecord

  validates :content, :author_id, :post_id

  belongs_to :author

end
