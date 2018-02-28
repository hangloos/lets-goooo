class CreateQuantities < ActiveRecord::Migration[5.1]
  def change
    create_table :quantities do |t|
      t.references :route, foreign_key: true
      t.references :unit, foreign_key: true

      t.timestamps
    end
  end
end
