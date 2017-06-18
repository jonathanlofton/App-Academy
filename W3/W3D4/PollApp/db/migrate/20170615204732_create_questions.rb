class CreateQuestions < ActiveRecord::Migration[5.0]
  def change
    create_table :questions do |t|
      t.text :text
      t.integer :poll_id

      t.timestamps
    end

    add_index :questions, :text
  end
end
