# == Schema Information
#
# Table name: books
#
#  id          :bigint(8)        not null, primary key
#  title       :string           not null
#  code        :string           not null
#  author      :string           not null
#  year        :string           not null
#  description :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Book < ApplicationRecord
  validates :title, :code, :author, :year, :description, :cover_url, presence: true
end
