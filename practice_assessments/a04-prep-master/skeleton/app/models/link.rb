class Link < ActiveRecord::Base
  validates :title, presence: {message: "can't be blank"}
  validates :url, presence: {message: "can't be blank"}
  validates :user, presence: true

  attr_accessor :user

  belongs_to :user

  has_many :comments

end
