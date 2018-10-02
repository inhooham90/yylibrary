# == Schema Information
#
# Table name: rentals
#
#  id         :bigint(8)        not null, primary key
#  book_id    :integer          not null
#  renter_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Rental < ApplicationRecord
end
