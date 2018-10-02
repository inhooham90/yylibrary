# == Schema Information
#
# Table name: reviews
#
#  id         :bigint(8)        not null, primary key
#  author_id  :integer          not null
#  book_id    :integer          not null
#  score      :integer          not null
#  title      :string           not null
#  body       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Review < ApplicationRecord
end
