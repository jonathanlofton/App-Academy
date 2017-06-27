class Sub < ApplicationRecord
  validates :title, :description , :moderator_id, presence: true


  #belongs_to :moderator

  has_many :post_subs, dependent: :destroy, inverse_of: :sub
  has_many :posts, through: :post_subs, source: :post, inverse_of: :subs
end
