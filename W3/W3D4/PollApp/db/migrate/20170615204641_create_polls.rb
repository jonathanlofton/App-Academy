class CreatePolls < ActiveRecord::Migration[5.0]
  def change
    create_table :polls do |t|
      t.integer :author_id
      t.string :title

      t.timestamps
    end

    add_index :polls, :title
    add_index :polls, :author_id
  end
end
