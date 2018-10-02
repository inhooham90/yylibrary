# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2018_09_23_040114) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "books", force: :cascade do |t|
    t.string "title", null: false
    t.string "code", null: false
    t.string "author", null: false
    t.string "year", null: false
    t.string "description", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "cover_url"
    t.index ["code"], name: "index_books_on_code", unique: true
  end

  create_table "rentals", force: :cascade do |t|
    t.integer "book_id", null: false
    t.integer "renter_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["book_id", "renter_id"], name: "index_rentals_on_book_id_and_renter_id", unique: true
  end

  create_table "reviews", force: :cascade do |t|
    t.integer "author_id", null: false
    t.integer "book_id", null: false
    t.integer "score", null: false
    t.string "title", null: false
    t.string "body", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["book_id", "author_id"], name: "index_reviews_on_book_id_and_author_id", unique: true
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "fname", null: false
    t.string "lname", null: false
    t.string "number", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
    t.index ["username"], name: "index_users_on_username", unique: true
  end

end
