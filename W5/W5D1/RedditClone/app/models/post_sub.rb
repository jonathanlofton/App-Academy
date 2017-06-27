class PostSub < ApplicationRecord
  validates :post, :sub, presence: true
  validates :sub, uniqueness: {scope: :post}

  belongs_to :post, inverse_of: :post_subs
  belongs_to :sub, inverse_of: :post_subs
end
