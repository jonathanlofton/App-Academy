class User < ApplicationRecord
  validates :username, presence: true, uniqueness: true
  validates :password_digest, presence: { message: "Password can't be blank"}
  validates :session_token, presence: true, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }
  before_validation :ensure_session_token

  def self.find_by_credentials(username, password)
    # find the user by User.find_by(username: username)
    user = User.find_by(username: username)
    # return user if user is found AND that user has a password_digest that is found
    return user if user && BCrypt::Password.new(user.password_digest).is_password?(password)
    nil
  end

  def self.generate_session_token
    # returns a 16 character length password string
    SecureRandom::urlsafe_base64(16)
  end

  def reset_session_token!
    # generates a new session_token and saves it to the
    # current users session_token variable
    self.session_token = User.generate_session_token
    # saves the Users current variables
    self.save!
    # returns the newly created session_token
    self.session_token
  end

  def ensure_session_token
    # if users token is nil give it a new session token
    self.session_token ||= User.generate_session_token
  end

  def password(password)
    # sets the password given
    @password = password
    # creates a password_digest from the password given
    self.password_digest = BCrypt::Password.create(password)
  end
end
