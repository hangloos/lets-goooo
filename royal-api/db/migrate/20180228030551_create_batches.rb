class CreateBatches < ActiveRecord::Migration[5.1]
  def change
    create_table :batches do |t|
      t.references :calculation, foreign_key: true
      t.references :route, foreign_key: true

      t.timestamps
    end
  end
end
