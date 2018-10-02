class Api::BooksController < ApplicationController
  def index
    @books = Book.all
    @users = User.all
    render :index
  end

  def create
    book = Book.new(book_params)

    if book.save
      render json: book
    else
      render json: book.errors.full_messages, status: 422
    end
  end

  def show
    @book = Book.find(params[:id])
  end

  def destroy
    @books = Book.all
    @book = Book.find(params[:id])
    @book.destroy if @book
    render json:@books
  end

  def update
    @book = Book.find_by(code: params[:book][:code])
    if @book.update_attributes(book_params)
      render :show
    else
      render json: book.errors.full_messages, status: 422
    end
  end

  def book_params
    params.require(:book).permit(:title, :code, :description, :author, :year, :cover_url)
  end
end
