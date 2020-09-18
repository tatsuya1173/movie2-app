class Movie < ApplicationRecord

  validates :title, presence: true
  validates :category, presence: true
  validates :image, presence: true

  belongs_to :user, optional: true
  has_many :comments, dependent: :destroy
  mount_uploader :image, ImageUploader

end
