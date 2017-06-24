class User < ActiveRecord::Base
  after_initialize :ensure_session_token

  validates :username, :password_digest, :session_token, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }

  attr_accessor :password

  def self.find_by_user_credentials(username, password)
    user = User.find_by_username(username)
    user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def generate_session_token
    SecureRandom.urlsafe_base64
  end

  def reset_token!
    self.session_token = generate_session_token
    self.save!
    self.session_token
  end


  def ensure_session_token
    self.session_token ||= generate_session_token
  end

  has_many :links

  has_many :comments

end
