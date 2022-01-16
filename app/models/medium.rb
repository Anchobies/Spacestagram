class Medium < ApplicationRecord
    has_many :likes, dependent: :destroy
    has_many :users, through: :likes
end
