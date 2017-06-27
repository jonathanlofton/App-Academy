class Post < ApplicationRecord
  validates :title, :url, :content, :user_id, :subs, presence: true

  has_many :post_subs, dependent: :destroy, inverse_of: :post
  has_many :subs, through: :post_subs, source: :sub, inverse_of: :posts


  belongs_to :user
end
