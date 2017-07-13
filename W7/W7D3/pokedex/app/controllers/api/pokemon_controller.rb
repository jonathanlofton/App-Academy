class Api::PokemonController < ApplicationController
  def index
    @pokemons = Pokemon.all
    render :index
  end

  def show
    @pokemon = Pokemon.find(params[:id])
    render :show
  end

  private

  def pokemon_params
    params.require(:pokemon).permit(:name, :attack, :defense, :poke_type, :moves, :image_url)
  end

end


  #
  # create_table "pokemons", force: :cascade do |t|
  #   t.string   "name",                    null: false
  #   t.integer  "attack",                  null: false
  #   t.integer  "defense",                 null: false
  #   t.string   "poke_type",               null: false
  #   t.string   "moves",      default: [], null: false, array: true
  #   t.string   "image_url",               null: false
  #   t.datetime "created_at"
  #   t.datetime "updated_at"
  # end
