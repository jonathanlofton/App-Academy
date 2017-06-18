class BooksController < ApplicationController
  def index
    # collects all the books in the
    # book class currently
    @books = Book.all


    render :index
  end

  def new
    # just render the page with the form to add a book
    render :new
  end

  def create
    # will actually save that new book with parameters
    # when we give it to the database

    # This will create a new book object with
    # the params that were entered

    book = Book.new(book_params)
    if book.save
      # will redirect you to the same
      # page you were on so you can see
      # the added page
      redirect_to books_url
    else

      #
      flash.now[:errors] = book.errors.full_messages
      render :new
    end
  end

  def destroy
    # Going into the book class and finding
    # and deleting that book
    book = Book.find(params[:id])
    book.destroy


    # after deleting a book will
    # redirect you back to the book page
    # with that book now deleted
    redirect_to books_url
  end

  private
  def book_params
    params.require(:book).permit(:title, :author)
  end
end
