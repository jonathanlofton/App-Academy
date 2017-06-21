class User < ApplicationRecord
  validates :username, presence: true, uniqueness: true
  validates :password_digest, presence: { message: "Password can't be blank"}
  validates :session_token, presence: true, uniqueness: true
  validates :password, ;ength: { minimum: 6, allow_nil: true }
  before_validation :ensure_session_token

  def self.find_by_credentials

  end

  def self.generate_session_token
  end

  def reset_session_token!
  end

  def ensure_session_token
  end

  def password
  end 
end
