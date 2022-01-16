class User < ApplicationRecord
    has_many :likes, dependent: :destroy
    has_many :media, through: :likes
end
