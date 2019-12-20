class CreateWords < ActiveRecord::Migration[6.0]
  def change
    create_table :words do |t|
      t.string :word
      t.string :correct_letter
      t.string :partial_word

      t.timestamps
    end
  end
end
