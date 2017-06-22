# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
  # the after_initialize callback will perform the block once
  # the User object has been created

  # we want to ensure the session token is present before
  # validation so directly after initialization we will
  # create a session token for the user

  after_initialize :ensure_session_token


  def self.generate_session_token
    # generates a random string of length 16 characters
    SecureRandom.base64(16)
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    self.save!
    self.session_token
  end

  def self.ensure_session_token
    self.session_token ||= User.generate_session_token
  end

  def password=(password)
    # sets the password to an instance variable... why?
    @password = password
    # hashes and salts the password and saves it under the
    # users password_digest
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    #checks the users password if they have logged in.

    # will create a new BCrypt password object and then
    # check if the password that was entered is the same
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def self.find_by_credentials(email, password)
    # you just need to find that user
    # the find_by method followed by *anything
    # will look for that anything in the users table
    # and match it with the argument

    user = find_by_email(email)

    # was a user found?
    # AND
    # does the password match that users password
    user && user.is_password?(password) ? user : nil
  end



end
