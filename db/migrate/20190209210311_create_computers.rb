class CreateComputers < ActiveRecord::Migration[5.2]
  def change
    create_table :computers do |t|
      t.string :name
      t.integer :cpu
      t.integer :gpu
      t.integer :ram
      t.integer :disk
      t.text :image_data

      t.timestamps
    end
  end
end
